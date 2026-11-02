---
title: "An Agent That Learns the Job"
tags: ["AI", "Agents", "Continuous Learning", "Evals", "LLMs"]
date: 2026-11-02
draft: false
series: "Building Agents"
series_order: 3
summary: "Real work is more detailed than anyone can describe upfront. How we treat an agent as a learning system: keep the traces, turn accepted work into evals, cluster rejected work into rules, and earn trust one reviewed change at a time."
---

## The workflow you write down is not the workflow people run

Enterprise agents keep stalling for a simple reason: real work is far more detailed than anyone can describe upfront.

I work on procurement agents at Didero. One person we work with manages purchase orders across many suppliers. Their shipments move through many different carriers. Updates arrive by email, in different shapes, from different people. Shipping documents and invoices come in whatever format each supplier uses, because everyone sends their own.

They handle all of this well, and most of how they do it has never been written down. Ask them to describe their workflow and you get the main path plus the exceptions they happen to remember that day. Customers don't know what they don't know.

We started the way most teams do. Customer success delivered a workflow document. Engineers turned it into eval cases and iterated on a system prompt until every eval passed. Then we deployed and waited.

Those prompts could pass every eval and still fail on live tasks, because they had been fit to an incomplete picture of the job. When a customer rejected a task, an engineer had to work out what should have happened and restart the cycle. More interviews would not have fixed this. Some of what the agent needed to know only shows up when the work does.

## An agent is a learning system

We build agents like software, but they behave like machine learning systems.

Software has a spec, and it passes or fails against that spec. A machine learning system has parameters, a signal and an update step. You expect it to start out mediocre and improve on data it hasn't seen yet. A deployed agent has all of those parts. Most teams leave them disconnected: traces sit in a log viewer, rejections sit in a task table, and someone edits the prompt by hand.

Here is the mapping I use:

| Training a model | Running an agent |
| --- | --- |
| Initialization | The workflow the customer described |
| Parameters | Rules, prompt, context, tools, autonomy |
| Training data | Traces of real runs |
| Labels | What people did with the agent's work |
| Update step | A proposed change to a rule or a tool |
| Validation set | Eval cases built from accepted work |
| Learning rate | How much can change before a person looks |

This framing makes the first design question concrete: which parameters do you let it learn? I think of them as knobs, roughly ordered from cheap to undo to expensive.

| Knob | What it controls | What learning looks like |
| --- | --- | --- |
| Rules | How this customer wants things done | Turn repeated corrections into an explicit rule |
| Prompt | The instructions the model reads | Rewrite the instructions where behavior keeps failing |
| Evals | What counts as correct | Turn real accepted work into test cases |
| Context | What the agent sees when it decides | Add what it kept lacking, remove what misled it |
| Tools | What the agent can do | Spot actions people keep doing by hand, and tools that keep failing |
| Harness | Loops, retries, stop conditions, compaction, routing | Tune the limits where runs stall, repeat or stop early |
| Autonomy | Which actions need a person's approval | Loosen where acceptance stays high, tighten where it drops |
| Scope | Which work the agent takes on | Offer work it keeps seeing that nobody asked it to do |
| Weights | The model itself | Fine-tune on accumulated corrections |

Any agent system has these knobs, and it can start wherever its failures are cheapest to fix. Ours works mostly at the top of the list. It learns rules and evals from production, and it points people at context and tool problems. The harness, autonomy and scope still change through people's decisions.

We could learn weights later, but they're the most expensive knob to turn, for reasons I went through in [part 2](/posts/memory-and-learning-for-agents-part-2/). We build on hosted models, so we can't retrain the weights ourselves. Instructions can be reviewed as a diff and rolled back by restoring text. They need far less data, and they survive a model upgrade.

Customer rules are the prior, and behavior is the evidence. The agent starts from what the customer told us and moves as it sees what they actually do.

## It started with keeping the traces

In the autumn of 2025 we were moving from fixed pipelines to a reasoning agent, and the first customer went live on it around the start of October. I had already been arguing that general agent skills would become a commodity. The models would get good at calling tools. What they wouldn't get on their own was domain-specific operations, and for those we could capture how people interact with the agent and build a training loop from it.

So while we were building the agent in September and October, I wanted us to store the traces: the input, each tool call and result, the final action, and what a person did about it afterward. The plan was to analyze them later and see what the agent kept getting wrong.

You can't learn from data you didn't keep, and traces are hard to backfill. Everything else in this post came later and depends on them. The tracing tables shipped in early 2026, and the evals, clustering and rule suggestions were built on top of them over the rest of the year.

## The design: two branches from one trace

Most of what our agent does starts as a task a person can accept, edit or dismiss, so every run ends up in one of two places. Work people accepted becomes a test that protects the behavior. Work people rejected becomes evidence of something to change.

```
                     accepted or corrected
                 +-> sample, replay tool responses,  --> eval suite
                 |   a model picks what to test              |
                 |                                           | guards the change
agent run -------+                                           v
(trace + verdict)|   rejected or dismissed
    ^            +-> summarize, embed, cluster per team, --> reviewed change
    |                analyzer proposes a typed fix           (a rule, or a tool ticket)
    |                                                        |
    +------- the next run starts from the updated agent -----+
```

### Accepted work becomes evals

When someone executes a task the agent proposed, they have signed off on that behavior. I treat the eval suite as a behavior contract, written by those signatures.

A daily pipeline builds it in four steps:

1. **Sample** accepted runs. Corrections are always kept, because a person edited the agent's work and the edit is ground truth. The same goes for cases where someone took over and did something else. Plain approvals are sampled up to a cap.
2. **Rebuild the world** from the trace. Tool responses recorded in production become the mocks, so the case replays what the agent actually saw.
3. **Decide what to test.** A model reads the trace and picks the actions that matter and what a judge should check. An earlier version copied the exact tool calls, which tested the path rather than the outcome.
4. **Admit carefully.** Cases start as drafts. A smaller approved golden set is what a team's regression gate actually runs.

Cases check the terminal actions (the email sent, the timer set, the status changed), and an LLM judge allows different wording or a different order of reads. The agent can take any path as long as it arrives at the right outcome.

This has a known weakness. An accepted task shows the behavior was good enough, which isn't the same as optimal, so the suite locks in the current bar.

### Rejected work becomes patterns

The other branch has to solve a harder problem: a single rejection tells you very little. It could be a mistake, a mood, or a one-off. So we look for repetition.

```
run finishes              store the full trace, outcome pending
     |
verdict arrives           often days later, when the task is resolved
     |                    or dismissed, so the outcome is updated late
if negative               one line: "agent did X, human did Y because Z"
     |                    then embed that line
nightly, per team         HDBSCAN over about two weeks of embeddings
     |
per cluster               an analyzer agent reads the member traces
     |                    and writes a fix with a type and a confidence
fix                       goes to a person for review
```

A few of these choices did most of the work:

**Summarize before embedding.** Raw traces are full of timestamps, IDs and supplier names, and those would dominate the embedding. The one-line summary keeps the shape of the failure, which is what should group together.

**Density clustering, not k-means.** There's no way to know how many failure modes exist, and they aren't evenly sized. One might have 47 runs and another 3. HDBSCAN finds whatever is there and leaves outliers as noise, which is correct here, because a one-off shouldn't produce a rule.

**Keep different kinds of rejection apart.** A dismissed task, a dismissed escalation and a corrected email call for different fixes. Clustering them together gives the analyzer an averaged signal and vague suggestions.

**Only count human verdicts.** The agent also dismisses its own stale tasks, far more often than people do. Mixing these would teach the loop from its own housekeeping.

**Let the analyzer read, not just label.** It gets tools to search the cluster's full transcripts, so it can check a hypothesis against what happened.

### A fix is more than a rule

The analyzer's most useful output is its decision about what kind of problem this is:

| Finding | Meaning | Who acts |
| --- | --- | --- |
| Customer rule | This team wants different behavior | The team reviews a rule edit |
| Agent behavior | The shared agent should behave differently | Engineering |
| Missing tool | The agent has no tool for this | Engineering gets a ticket |
| Broken tool | A tool exists and keeps failing | Engineering gets a ticket |
| Unclear | Not enough to say | A person triages |

This is how the same loop reaches several knobs. A rule fix changes one customer's policy. A gap tells us which tool to build next, with real runs as evidence. The loop doesn't build the tool, but it does replace guessing about what's missing.

Rules are the source of truth, and the prompt is compiled from them. When a rule changes, the prompt is updated through a targeted edit, so the change lands as a small, readable diff.

## How much evidence is enough?

The useful question for any signal is how much of it you need before acting. We ended up with three answers.

| Kind of learning | Use it when | Example | Risk |
| --- | --- | --- | --- |
| Greedy | A person stated the answer | A correction becomes an eval case. Someone asks for a rule in chat | Treating a one-off as policy |
| Aggregate | You have to infer the answer | Dismissals cluster into a pattern | Low-volume teams never reach the threshold |
| Find in aggregate, trust from words | A pattern exists and someone explained it | A cluster where people wrote why they dismissed | Few people write reasons |

The third is the one I'd recommend first. Aggregation tells you a problem is real, and a person's own words tell you what they want. We label every proposed fix as explicit (someone stated the behavior they wanted) or implicit (inferred from the shape of the failure). That label is separate from the analyzer's confidence, because a model can be very confident about an inference.

The distinction matters because a dismissal is an ambiguous signal. In one case people kept dismissing emails that flagged discrepancies, and the analyzer proposed that the agent stop drafting them and only escalate. That would have left the agent doing almost nothing. Our read was that they might have wanted the ERP updated instead, and a click can't tell you that. Another buyer called a draft too pushy and was objecting to the email existing at all, not its tone.

### Setting the scope

Aggregation only works if you choose what to aggregate over. There are three dials:

**Who.** We cluster per team, because a behavior that's wrong for one customer is often exactly right for another. Pooling would average away the differences the system exists to find. A failure repeating across teams is a different finding, a sign of a problem in the shared agent, and that should go through a shared gate.

**What kind of failure.** This is the separation of dismissed tasks, dismissed escalations and corrections described above.

**How long.** We look back about two weeks, and a cluster needs only a few similar runs. A short window keeps the signal current, but it has a cost that I'll come back to: the same cause can show up as a new cluster in each window.

The principle I've settled on is that the scope of the evidence should match the blast radius of the fix. One team's rule can come from one team's data. A change to every customer's agent should need a pattern across teams and has to pass every team's evals. That second path is still ahead of us.

## Trust is the rate limit

A loop like this can only move as fast as people are willing to let it. Our approach is to earn each step: the system surfaces something small, a person sees it was right, and it gets a little more room.

The gates are sized to what each change can break:

| Change | What it can break | Gate |
| --- | --- | --- |
| New eval case | Nothing live | Starts as a draft, and only approved golden cases gate changes |
| Rule suggestion shown to our team | Nothing until applied | Our team reviews it |
| Rule suggestion shown to a customer | Their trust, if it's wrong | Explicit signal, high or medium confidence, checked wording |
| Rule applied to the agent | One customer's behavior | A person accepts it, and the team's golden set runs against the updated prompt |
| Tool or shared behavior | Every customer | Normal engineering review |
| Sending without review | Real supplier relationships | A separate switch, per customer |

A gate is only as good as its cases, so human review carries more of the weight while a new customer's suite is still small.

Four principles came out of building these.

**The model proposes, and it doesn't supply the evidence.** When a suggestion reaches a customer, the evidence comes from data: real comments from named colleagues and a real count of dismissed runs. A small model rewrites the rule into plain language, but only for display. Accepting commits the analyzer's original text. Deterministic checks reject a rewrite that drops a number, leaks internal vocabulary, or cites a count the evidence doesn't have. This is the same rule as in [part 2](/posts/memory-and-learning-for-agents-part-2/): no model judges its own work, and the labels come only from people and outcomes.

**A rule can't grant itself autonomy.** What the agent knows and what it may do alone are separate settings. This one was useful in practice. A suggested rule, otherwise sensible, slipped in a clause telling the agent to reply directly to suppliers in a case the customer hadn't put in scope. Review caught it, and email automation was off for that customer anyway.

**Attention is a budget.** We cap how many suggestions a team can have open and send one fix per cluster. The rest wait and compete again the next night, because nobody can review a long list well.

**Start with people who can say no cheaply.** Suggestions went to our deployment team first. Customer delivery only covers fixes that restate something the customer's own people already wrote, so the first thing they see from the system is their own words given back to them as a rule. That delivery is still early.

The next step is letting evidence move the autonomy knob: "this rule is accepted almost every time, should it run on its own?" That's still ahead of us, and the thresholds should be conservative, because people also accept bad work when they're tired.

## What happened in production

We started surfacing rules from the loop in mid-2026, and teams have been accepting them since. Each one targets a recurring reason people reject the agent's work.

The rules themselves were really good. These are real suggestions, lightly anonymized, and no workflow interview was going to produce them.

**A supplier's offhand reply was an acknowledgment.** The customer's rule said to chase any PO without an order acknowledgment. One supplier had replied to a single email asking whether the number of orders was right, and referring to the whole batch. A person reads that and knows the supplier has the batch. The agent kept chasing each PO individually, and the team kept pushing back on the follow-ups. The suggestion: treat that reply as a batch-level acknowledgment and hold the follow-ups.

**One ERP field is visible to suppliers.** The agent was recording shipment details such as carrier and packing slip numbers in an ERP comments field. In that customer's setup, the field prints on documents suppliers see, gets overwritten as a whole, and editing it reopens the order for buyer approval. The suggestion: use an internal field instead. Nobody would think to mention this in a workflow interview, because nobody using that system would make the mistake.

**The first ask was too early.** A customer's rule said to request tracking soon after the ship date. The analyzer noticed that the buyer dismissed every first attempt, across several suppliers, and suggested waiting a couple of days longer. The rule was reasonable, and it was simply a little off from how those suppliers behave.

**A customer used only part of the product.** One team kept dismissing escalations from everywhere except receiving. They weren't using us to chase acknowledgments at all, so the escalations about those were noise. The proposed rule limited escalations to the receiving flow. The analyzer had worked out how the customer actually uses the product, which nobody had told it.

**Questions before a PO exists aren't escalations.** Suppliers asked spec questions during the quote stage, and the agent raised them to a buyer as if an order were at risk. The suggestion: record them on the quote and leave them for the normal review.

The tools and context knobs showed up too. One team's cluster noted that the agent was misreading its follow-up history, and the analyzer suggested fixing how that activity log was built. A rule could only have patched over the problem. Some rule suggestions turn out to be bug reports, which is why the fix type matters.

### What needed fixing

The rule finding was the strong part. What needed fixing sat around it, and it was plumbing and context: simple fixes, none of which meant the approach wasn't working.

- **Repeated suggestions.** Each window builds fresh clusters, so one cause can appear more than once. The fix is to merge clusters by cause.
- **Missing context for the analyzer.** With the agent's capabilities in its context, the analyzer only suggests what the agent can actually do.
- **A slow path to live.** Accepted rules used to wait on a second review. We now commit them at accept and open the prompt review straight away.

Clusters see what people notice, including things they don't want even when no rule was broken. A judge that grades runs against the rules catches different problems, so the two work well together.

Building evals from production taught us something similar. In one early session, the large majority of eval failures turned out to be plumbing and operational problems, with prompt quality accounting for very few of them. Reviewing rules one at a time had missed every one of those cross-cutting failures. That was one session, but it's what convinced me to treat production traces as the main signal and keep hand-written cases as a small safety layer.

## Where this could go

If an agent is a learning system, the same is true of the software around it. I think an enterprise operating system should work this way: it starts from the rules a customer gives you and adapts to how they behave, one reviewed change at a time. Rules are the prior, and the traces keep updating it. Each customer ends up with a system fitted to work nobody could have specified upfront.

The learning system should also be a learnable system. Its summaries, clustering settings, analyzer instructions and thresholds are all knobs, and they should be tuned on evidence too. A person's accept or dismiss on a suggestion is a label for the analyzer, so the data to do this is already being collected.

When the harness starts editing itself, some things have to stay outside its reach:

- **The signal.** Labels come from people and real outcomes, never from the system's own judgment.
- **The gates.** The system can propose a change to what it learns. It can't loosen the checks on that change.
- **The rollback.** Every learned change has to be cheap to undo. This is a large part of why rules are a better knob than weights.

Without those, the system ends up agreeing with itself and calling it improvement.

The person I described at the start still knows far more about their suppliers than our agent does, and they may always. I'm not trying to write that knowledge down in advance anymore. The aim is to build a system that notices it as it shows up, asks, and remembers the answer.

If you're building something similar, I'd like to hear from you.
