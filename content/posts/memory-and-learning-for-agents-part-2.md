---
title: "A Memory That Knows How Sure It Is"
tags: ["AI", "Agents", "Memory", "Bayesian Networks", "LLMs"]
date: 2026-10-03
draft: false
series: "Building Agents"
series_order: 2
summary: "How beliefs work in agent memory: belief networks, calibrated decision models and self-organizing context, a design that learns which sources to trust, and what happened when I built and tested it."
lastmod: 2026-11-04
---

In [part 1](/posts/memory-and-learning-for-agents/), a personal assistant remembered everything about your sister Maya and still got her birthday wrong: the wrong restaurant, the wrong date, flowers she doesn't like, sent to an address she left two years ago. It was missing three things human memory has: knowing where a memory came from (source monitoring), letting old memories weaken (forgetting), and knowing how sure to be (metamemory).

I also looked at who else is working on memory with probabilities, and three questions looked open:

1. Where does the trust in each source come from?
2. Is the confidence honest?
3. Who decides what to track, and keeps it organized?

This post covers how beliefs work, my design, how an agent should act on its beliefs, and how I'd test it.

**Update, November 2026:** I've since built this and tested it on invented data. The central formula lost to a simpler idea. The design below is as I wrote it in October, and [What Happened When I Built It](#what-happened-when-i-built-it) has the results.

---

## How Beliefs Work

The three open questions each have a tool that fits. Belief networks say how to combine evidence. Calibrated decision models supply evidence worth combining. And a recent idea about self-organizing context answers who decides what to track.

### Belief networks: combining evidence

My graduate research was on probabilistic graphical models (I worked on [Recurrent Sum-Product-Max Networks](https://ojs.aaai.org/index.php/ICAPS/article/view/16009)), so this is where I started.

A **Bayesian belief network** is a graph of things you're uncertain about. Each node is a variable, each edge says one thing influences another, and when you observe something, the rest of the graph updates by Bayes' rule:

```
P(hypothesis | evidence) ∝ P(evidence | hypothesis) × P(hypothesis)
```

Take what Maya eats. The truth is hidden, and each message is an observation that depends on it:

```
                  [ What does Maya eat? ]            ← hidden
              /              |                \
   you, two years ago:   Maya, April:        Maya, June:      ← observed
   "she's vegetarian"    "no meat this week"  "eating fish again"
```

This is the simplest belief network there is: one hidden cause with independent observations beneath it. If you work in log-odds, each independent observation adds to a running total:

```
log-odds(eats fish) =  prior
                     + evidence from you, two years ago   (against: says vegetarian)
                     + evidence from Maya, April          (near zero: a one-week cleanse)
                     + evidence from Maya, June           (strongly for: first-hand and recent)
```

How far each observation moves the total depends on two things: how reliable that kind of source is, and how old the observation is. Your old note pulls toward vegetarian. Maya's recent message pulls harder the other way. The total comes out around 0.81 for fish.

That one sum does the work of the three abilities from part 1. The weight on each source is source monitoring. The discount for age is forgetting. The total is metamemory.

Full belief networks, with links between many facts, are a poor fit for agent memory. Nobody knows in advance which facts will matter, and nobody can fill in tables like "how likely is a diet change after moving cities". So I use one small network per fact and no links between them.

That leaves the inputs. The sum needs a number for how strongly each message supports each answer. If that number comes from an LLM saying "I'm 90% sure", the arithmetic is sound and the input is a guess.

### Jev: evidence you can check

[Jev](https://docs.typesafe.ai/) is a model from TypeSafe AI, in early access since September 2026, that doesn't generate text. You give it a piece of text and a set of typed questions: pick one of several options, score something on a scale, or answer yes or no. For a multiple-choice question it returns a probability for every option.

The vendor describes it as calibrated, meaning higher confidence should go with higher accuracy. Ideally, when it says 0.8 it would be right about 80% of the time. It's also fast and cheap enough, by their numbers, to ask several questions about every message.

Here is the kind of answer it would give for Maya's June message, "Started eating fish again!" (illustrative numbers):

```
What does this say about what Maya eats?
   says she eats fish 0.93 · says she's vegetarian 0.01 · unclear 0.04 · unrelated 0.02

Is this a lasting change or a one-off?
   lasting 0.86 · one-off 0.09 · unclear 0.05
```

For April's "No meat for me this week, I'm doing a cleanse", the second question comes back as a one-off, which is why the cleanse barely moves the belief.

Jev reads the message. It doesn't know the world. It can tell you a florist's email says Maya loves lilies, and it has no idea whether to trust the florist. So its answer is one input to the sum, and the weight on the source comes from somewhere else.

I also wouldn't take its calibration on faith. I couldn't find calibration numbers from the vendor, and [one outside test](https://github.com/anisselbd/jev-phishing-bench) on phishing emails found a noticeable gap. The safer approach is to check its probabilities against your own outcomes and correct them, which I'll come to.

OpenAI announced a similar product, the [Decisions API](https://community.openai.com/t/devday-2026-announcements-and-developer-resources/1402006), about two weeks later. It's in limited preview and I couldn't find public documentation, so I can't confirm whether it returns a probability for every choice, which is what this needs.

### Context Language Models: letting the model decide what to track

The last question is who decides that "what does Maya eat" is worth tracking at all. In Nous, as I understand it, a model extracts facts from each conversation, and the organizing stops there. Nothing decides later that two questions are the same, or that one should be split.

A paper from September 2026, [Context Language Models](https://arxiv.org/abs/2609.37725), points to a different answer. Normally a model's context only grows, and outside code decides what to trim. In CLM, the context is a file the model edits itself. It rewrites sections, deletes what it no longer needs and keeps its own notes. The authors improve this skill in two ways: by searching for better instructions, and by training the model with reinforcement learning. They report gains in accuracy along with lower compute.

What I take from it is that models are good at deciding how to organize what they know, when that skill is tuned against results. Nobody has to design a "diet" field. A model reading the family chat can work out that Maya's diet is worth a question.

CLM has the gap these posts are about: nothing in the file carries a confidence. The paper itself notes a related risk, that injected or self-written instructions can persist in an editable context. If the model writes "Maya loves lilies" into its own notes, the line stays there and keeps shaping its choices. So I borrow the organizing and leave out the part where the model's notes are the memory.

Put together: the model decides which questions exist, Jev reads each message, and plain arithmetic turns the readings into a belief.

---

## The Design

This is the design as I wrote it before building any of it. [What Happened When I Built It](#what-happened-when-i-built-it) covers which parts held up.

### What the design combines

The design joins two ideas, with two supporting pieces:

| Piece | Where it comes from | What it does here |
|---|---|---|
| **A probabilistic network per question** | Bayesian belief networks | Turns many pieces of evidence into one probability |
| **A model that organizes its own memory** | Context Language Models | Decides which questions exist, and merges, splits and retires them |
| A calibrated reading of each message | Decision models such as Jev | Says how strongly a message supports each answer |
| Learning from outcomes | Your corrections, and what happens in the world | Sets how much each kind of source is trusted, and checks the probabilities |

The first two are the core, and joining them is the part I haven't seen elsewhere. A belief network on its own needs someone to design its variables. A self-organizing memory on its own has no idea how sure it is. Joined, the model supplies the structure and the network supplies the confidence.

In one sentence: **the model decides what is worth knowing, the system computes how much to believe it, and corrections from people and the world keep those beliefs honest.** One rule holds it together: the model can reorganize memory freely, but it never writes a probability.

### A question, and the shape of its answer

The unit of memory is a question written by the model in plain language, with its possible answers. The shape of the answer decides how evidence combines:

| Shape | Example | How it behaves |
|---|---|---|
| One of several | Where does Maya live? | Evidence for one answer counts against the others |
| Any of several | What is Maya allergic to? | Each item is its own yes or no. A peanut allergy says nothing about shellfish. |
| A number | How many guests are coming? | An estimate with a range, such as 6 ± 1 |
| True for a while | Is Maya travelling this week? | Expires on a date, with no slow fade |

### What isn't a belief

Three things sit next to beliefs and need to stay separate:

- **Evidence** is certain. Maya did write "Started eating fish again!" What's uncertain is what it means.
- **Instructions** come from you. "Avoid loud restaurants for Maya" holds until you change it.
- **Records** belong to another system, like your calendar. The assistant reads them there and keeps no copy.

The line between beliefs and instructions matters most. Say Maya posts that she loved a noisy taco place. The belief "Maya dislikes loud places" should drop, because that's evidence. Your instruction should stand, because evidence doesn't outrank you. So the assistant books somewhere quiet and asks: "Maya seemed to enjoy a loud place recently. Should I keep avoiding them?" If the two were stored as one memory, either her post would silently cancel your instruction, or your instruction would stop the assistant noticing she'd changed.

### Storing

Every message or document is kept exactly as it arrived, with its source and date. The model links it to the questions it bears on, Jev scores it against each answer, and the belief is computed:

```
log-odds(answer) = prior + Σ over independent sources:
                     trust in that kind of source × how strongly it supports the answer × discount for age
```

Three rules apply. Each independent source counts once, so two copies of an email are one source. The assistant's own notes never count as evidence. And when you reject an answer, it's out, whatever its probability.

### Forgetting

| Event | What happens |
|---|---|
| Fade | Old evidence counts for less over time. When a belief the assistant needs has dropped too low, it checks the source again or asks you. |
| Replace | A new answer gains evidence and the old one loses it. The old one stays in the history. |
| Revoke | You say "forget that". It's never used again, and stays on record. |

Being looked up never strengthens a memory. Only evidence does.

### Retrieving

Beliefs form a graph. Maya connects to her address, her diet, and her partner Sam, who has beliefs of his own. For "book Maya's birthday dinner", the search starts at Maya, collects her questions, and steps one hop out to the people likely to be there. That's how it finds that Sam is vegetarian, which no search on "Maya" would turn up.

Results are ranked by relevance to the task, and each answer carries its probability. An uncertain answer is shown as uncertain, so the assistant knows to ask. Hiding it would leave the assistant thinking it knew nothing.

Because the evidence is kept, the assistant can also answer questions nobody prepared for. Asked whether Maya has allergies, it searches the old messages, finds one about peanuts, creates the question and computes a belief then and there.

### Learning who to trust

This is the part I didn't find in the memory papers, and the part I most want to test.

It runs on **settled facts**: cases where the truth eventually became known. You corrected the assistant. You approved what it proposed. A package arrived at the new address. An email bounced.

Each settled fact scores every source that had weighed in on it. Over time that gives each kind of source a track record (illustrative numbers):

| Kind of source | Right when it mattered |
|---|---|
| You, directly | 96% |
| A person, about themselves | 93% |
| Order and shipping confirmations | 95% |
| Contact cards | 63% |
| Marketing emails | 18% |

Those records become the weights in the sum. Nobody declared florists unreliable. Their emails earned an 18.

No assistant will see enough emails from one florist to judge it. It doesn't need to. A source is described in layers (a business, writing about someone else, by email, marketing), and each layer is shared with thousands of other messages. A new florist starts with the record of marketing emails in general and moves from there only if its own record justifies it.

The same settled facts give starting points (how common is each answer before any evidence) and rates of change (addresses last years, travel plans last days). And they give the check that makes the probabilities mean something: take every time the system said 0.9, and count how often it was right. If the answer is 75%, the numbers get corrected until they match.

All of this is counting and curve fitting, run nightly. No model judges its own work, and the labels come only from people and outcomes.

### Organizing

The model creates questions, merges duplicates, and splits a question when two answers keep being true together. When Maya says "send things to my office, I'm never home", "where does Maya live" and "where should packages go" become two questions.

CLM improves this skill in two ways: by searching for better instructions, and with reinforcement learning. RL would be worth trying in an experiment, and the paper's results suggest it helps. In an enterprise setting today, though, I'd start with instructions:

- **Most teams use hosted models** and can't retrain the weights.
- **Instructions can be read and reviewed.** A change to how memory is organized is a diff someone can approve.
- **Rolling back is trivial.** You restore the previous text.
- **It needs far less data.** A few dozen mistakes are enough to propose a better instruction. RL needs thousands of scored runs.
- **It survives a model upgrade.** Instructions carry over to the next model. Trained weights don't.

So the loop is: collect the organizer's mistakes, have a model propose revised instructions, replay past evidence through each version, and keep the one that scores best. Replay is possible because the evidence was kept.

### Who does what

| Job | Done by |
|---|---|
| Decide which questions exist | The model |
| Read what a message says | Jev |
| Compute the belief | Arithmetic |
| Decide how much to trust each source | Statistics over settled facts |
| Supply the truth | People and outcomes |

---

## Acting on a Belief

A belief says how sure the assistant is. It doesn't say what to do about it: send the gift, check another source, or ask you.

Decision theory has a model for this, the [POMDP](https://en.wikipedia.org/wiki/Partially_observable_Markov_decision_process). The truth is hidden, you hold a belief about it, you choose actions, and what you see next updates the belief. Solving one means computing a policy: the best action for every possible belief, across every future step.

That can't be computed here. Questions appear as evidence arrives, nobody can write down how likely a particular message is, and costs differ by person. It also isn't needed. The agent only has to choose its next step from the belief it holds now, and when something new arrives, it can update the belief and choose again.

### Deciding one step at a time

At each decision, the agent asks whether anything it could do next is worth its cost. If something is, it does that, updates the belief with what comes back, and asks again. If nothing is, it acts.

The score for each next step is its [value of information](https://en.wikipedia.org/wiki/Value_of_information): how good would the final decision be after this step, minus what the step costs?

Say Maya's gift has to go out this week and the assistant holds 0.7 on her new address. The right address is worth +10 and the wrong one costs 30. Using the track records from earlier (all illustrative numbers):

| Next step | Cost | Expected value |
|---|---|---|
| Check order confirmations | 0 | 8.0 |
| Ask you | 1 | 7.4 |
| Ask Maya | 6, it spoils the surprise | 1.2 |
| Read the contact card | 0 | -2.0 |
| Send it now | 0 | -2.0 |

The confirmations are free and nearly as reliable as you, so the assistant checks them first. The contact card is free too and worth nothing: right only 63% of the time, it can't overturn a 0.7, so the assistant would send to the new address whatever the card said.

What happens next depends on the answer. If the confirmations say the new address, the belief rises to about 0.98 and the assistant sends the gift, because asking you can no longer repay the interruption. If they say the old address, it holds 0.89 on the old one, and asking you is worth 7.4 against 5.6 for sending.

A reply can take days, and the truth can change during the wait. Most of the time that takes care of itself: the reply says what changed, the belief updates, and the assistant decides again. It can also run several steps at once and drop any that are no longer needed. Three cases need more. Waiting has a price, so deadlines go into the costs. Silence sends no message, so a wait needs a timer. And a fact can change without anyone mentioning it, which is why beliefs fade and get rechecked before the assistant relies on them.

### What this changes

I'd expect this to improve an agent's decisions in five ways:

- **It asks fewer questions.** Your time is one of the costs, so it looks in its own records first and comes to you when they can't settle the matter.
- **The stakes set the bar.** If holding the gift back were an option worth 0, sending would only beat it above 0.75. A cheaper mistake lowers that line and a costlier one raises it. A single rule like "act above 0.9" treats a wrong lunch booking and a lost wedding gift the same way.
- **It skips work that can't change the outcome.** There's no reason to read the contact card, however cheap it is.
- **It knows when to stop.** It keeps looking while another check is worth its cost, and stops when none is.
- **Its decisions can be explained.** "I checked your order confirmations because I was only 0.7 sure of the address and a wrong one would lose the gift." You can see the belief and the cost, and disagree with either.

### Using the agent's own reasoning

The agent is a language model, and it can already reason about all of this. It should use that reasoning alongside the numbers, because each covers what the other can't.

A table only ranks the options someone thought of. The model is what notices that Sam would know the new address, that asking Maya spoils the surprise, or that the confirmations are for an order from last year. It can also plan several steps ahead and see that two checks are only useful together, which a one-step score misses.

The numbers cover where reasoning is weak. A model can talk itself into an answer, and a persuasive email can talk it into one too. It also has no reliable way to tell how much three weak messages add up to. The arithmetic does that the same way every time, and it shows when a check can't change the decision.

So the ranking is advice the model reasons with. It can go against the ranking when it knows something the table doesn't, and it says why. Two limits hold. It can't change a probability: if it thinks a belief is wrong, it has to go and find evidence. And your instructions aren't up for reasoning, so anything you've ruled out never reaches the ranking.

| Job | Done by |
|---|---|
| Think of what could be done next | The model |
| Judge what each step would cost here | The model, within your instructions |
| Say how sure to be | Arithmetic over the evidence |
| Score what each step is worth | Arithmetic |
| Make the call and explain it | The model |
| Set the limits | You |

The costs are rough, so I'd trust the order of the options more than their exact scores.

---

## A Paper I'd Like to Write

Everything above is a design. Here's how I'd test it, written down before running anything so the results can't shape the questions.

### Four claims

1. **Beliefs don't hurt ordinary recall.** On benchmarks with few contradictions, a belief memory should do about as well as simpler ones.
2. **Beliefs help when evidence conflicts or goes stale.** The gap should grow with how often sources disagree.
3. **Learned source weights beat equal weights and weights taken from wording.** When sources differ in reliability, learning from settled facts should win, and should resist planted claims better.
4. **The probabilities are honest.** After correction against outcomes, answers held at 0.9 should be right about 90% of the time, and that should make "act or ask" decisions better.

### What I'd compare

| System | What it tests |
|---|---|
| Most recent value wins | The simplest baseline |
| An LLM reads the retrieved notes and decides | What most agents do today |
| Beliefs with every source weighted equally | Whether combining evidence helps on its own |
| Beliefs with reliability taken from wording | The approach in Nous, as I understand it |
| Beliefs with learned source weights | Claim 3 |
| The same, with a general LLM's probabilities in place of Jev's | Whether a calibrated model is needed at all |

### Benchmarks

**Existing ones**, for claims 1 and 2:

- **[LoCoMo](https://arxiv.org/abs/2402.17753)**, the standard for conversational memory. I expect a tie here, since it has few contradictions.
- **[LongMemEval](https://arxiv.org/abs/2410.10813)**, which has a category for knowledge updates.
- **The contradiction benchmark from the Nous paper**, which the author says is public.
- **[STALE](https://arxiv.org/abs/2605.06527)**, which tests whether an agent notices that a memory has been overtaken by later, indirect evidence. I still need to read it closely.
- Two more that I found late and haven't read: [TANGLE](https://arxiv.org/abs/2608.13921), and [a testbed for conflicting personal memory from several sources](https://arxiv.org/abs/2605.30087). Both look close to what I describe next, so I'd study them before building anything.

**Possibly a new one**, for claims 3 and 4. The first four benchmarks, as far as I can tell, don't have sources of different reliability or a way to learn from corrections. If the last two don't cover that either, I'd build a synthetic one, roughly the Maya example at scale:

- a few hundred people, each with facts that change over time
- messages about them from several kinds of source, each with a known error rate
- one-off statements mixed in with lasting ones
- planted false claims from untrustworthy sources
- a stream of corrections arriving over time, so learning can be measured

Because it's generated, the true answers and the true reliability of every source are known. That allows measurements the public benchmarks can't support. It also means the benchmark reflects my own assumptions, so I'd release it and report it next to the public results.

### What I'd measure

- **Accuracy** on the current true answer
- **Calibration**: how far stated confidence is from the observed rate of being right
- **Accuracy when allowed to ask**: if the system may hand its least certain answers to a person, how accurate is the rest? This is the number that matters for an agent acting alone.
- **Resistance to planted claims**: how many false messages it takes to flip a belief
- **Learning speed**: how many corrections before source weights settle
- **Cost** per question

### What would change my mind

- If learned weights don't beat equal weights on the synthetic benchmark, the central idea fails.
- If a general LLM's probabilities, corrected the same way, do as well as Jev's, then a special decision model isn't needed, and the design gets simpler.
- If beliefs do clearly worse than the baselines on LoCoMo, the cost isn't justified for agents that mostly recall.
- If calibration can't be brought close with a realistic number of corrections, the "act or ask" threshold can't be trusted, and that part is unusable.

### What I'd leave for later

The first version would take its questions from a single extraction pass, as Nous does, to isolate the belief and learning parts. Letting the model discover and reorganize questions is a second experiment. Comparing instruction search with reinforcement learning for that organizer is a third. Comparing a fixed threshold, the model's reasoning alone, and the model reasoning with these scores, on the cost of mistakes and questions asked, is a fourth.

I haven't run this plan yet. The tests in the next section are much smaller, and they were enough to change the design.

---

## What Happened When I Built It

*Added November 2026.*

I built the design, and its central piece lost. Adding up evidence message by message got 8 of 18 disputed facts right. Asking Jev for the belief directly, with every message in front of it, got 15 or 16. All of this is on invented data. Nothing here has run on real messages, and I'm only now building the direct version into the system.

### What works better

{{< chart caption="18 facts where the messages disagree, across a software team, a dental clinic, a lettings agency and a university. Jev with trust levels scored 15, 15 and 16 on three identical runs; the bar shows 15." >}}
<div class="chart-key"><span><i class="is-right"></i>Right</span><span><i class="is-wrong"></i>Wrong</span><span><i class="is-open"></i>No clear answer</span></div>
<div class="bar-row"><div class="bar-name">The log-odds sum from this post</div><div class="bar-stack"><span class="is-right" style="flex:8">8</span><span class="is-wrong" style="flex:5">5</span><span class="is-open" style="flex:5">5</span></div></div>
<div class="bar-row"><div class="bar-name">The sum, plus readings for "warns" and "replaces"</div><div class="bar-stack"><span class="is-right" style="flex:8">8</span><span class="is-wrong" style="flex:1">1</span><span class="is-open" style="flex:9">9</span></div></div>
<div class="bar-row"><div class="bar-name">Newest message wins</div><div class="bar-stack"><span class="is-right" style="flex:10">10</span><span class="is-wrong" style="flex:8">8</span></div></div>
<div class="bar-row"><div class="bar-name">Newest trusted message wins</div><div class="bar-stack"><span class="is-right" style="flex:12">12</span><span class="is-wrong" style="flex:6">6</span></div></div>
<div class="bar-row"><div class="bar-name">Jev reads all the messages, no trust levels</div><div class="bar-stack"><span class="is-right" style="flex:14">14</span><span class="is-wrong" style="flex:3">3</span><span class="is-open" style="flex:1">1</span></div></div>
<div class="bar-row best"><div class="bar-name">Jev reads all the messages, with trust levels</div><div class="bar-stack"><span class="is-right" style="flex:15">15</span><span class="is-wrong" style="flex:3">3</span></div></div>
{{< /chart >}}

Getting more right only helps if the wrong answers don't get acted on. So I also counted what each approach would act on at the 0.85 threshold, which I'd set before any of this:

| Approach | Facts it would act on | Of those, wrong |
|---|---|---|
| The log-odds sum | 6 | 0 |
| The sum, plus "warns" and "replaces" | 4 | 0 |
| Jev, no trust levels | 12 | 0 |
| **Jev, with trust levels** | **14 to 15** | **0** |

The newest-message rules aren't in this table because they have no confidence to compare against a threshold. They act on all 18, and 6 to 8 of those are wrong.

The sum wasn't reckless. It was never wrong above the threshold either. It just couldn't get there on two thirds of the facts.

### One belief, message by message

Here's why. A clinic moved a patient's crown fitting from November 12 to November 19. The reminder system never heard about the change, so the newest and most official-looking message has the wrong date.

{{< chart caption="Each row is the belief right after that message arrived. Numbers are from one run. On the last message the sum's largest share, 72%, goes to an answer nobody has named." >}}
<div class="step"><div class="step-source">Oct 20. Reception, medium trust</div><div class="step-text">"Crown fit and hygiene both Thu 12 Nov, 10:00 with Dr Sethi"</div><div class="step-read"><span>Adding up scores</span><div class="step-track"><div class="step-fill is-right" style="width:74%">Nov 12, 74%</div></div><span>Reading them together</span><div class="step-track"><div class="step-fill is-right" style="width:94%">Nov 12, 94%</div></div></div></div>
<div class="step"><div class="step-source">Oct 29. Dr Sethi, high trust</div><div class="step-text">"I'm off on the 12th... Halloran crown can go to Thu 19th 9:20, rung her myself."</div><div class="step-read"><span>Adding up scores</span><div class="step-track"><div class="step-fill is-right" style="width:62%">Nov 19, 62%</div></div><span>Reading them together</span><div class="step-track"><div class="step-fill is-right" style="width:100%">Nov 19, 100%</div></div></div></div>
<div class="step"><div class="step-source">Nov 3. Reminder system, medium trust</div><div class="step-text">"Crown fit, Thu 12 Nov 10:00, Dr Sethi. Status: CONFIRMED."</div><div class="step-read"><span>Adding up scores</span><div class="step-track"><div class="step-fill is-open">No clear answer (Nov 12, 16%; Nov 19, 12%)</div></div><span>Reading them together</span><div class="step-track"><div class="step-fill is-right" style="width:88%">Nov 19, 88%</div></div></div></div>
{{< /chart >}}

The sum scores each message alone. It can see that Dr Sethi and the reminder disagree, but not that one moved the appointment and the other hadn't heard. Reading the messages together, Jev can see that.

I tried to fix the sum first, by having Jev read whether a message warns about itself and whether it replaces something. Jev was good at this: 43 of 43 on warnings and 36 of 41 on replacements, on cases I hadn't written. Adding them to the sum cut wrong answers from 5 to 1 and got no more facts right. The other four simply became "no clear answer".

{{< stuck "If the next message is usually right anyway, and time is a high-trust source, why have beliefs at all?" >}}
That was the strongest argument against this whole idea, so I tested it. Newest-wins was right 10 times out of 18, and trust levels took it to 12.

The failures are the expensive ones. Mr Bosch's record says penicillin allergy, anaphylaxis in 2014. The newest message is a phone call from someone saying he's the patient's nephew, asking to have it removed before surgery. Newest-wins says no allergy. Jev with trust levels says yes at 95% to 96%.

Newest-wins also can't tell you when it's wrong, because it has no notion of doubt. I'd say a belief earns its keep on the small share of facts that are disputed. On the rest, one message is enough.
{{< /stuck >}}

{{< stuck "Doesn't this mean passing every agent decision through Jev? Isn't that too expensive?" >}}
No. The call happens when a message is filed, once for each question it bears on, and the result is saved. An agent reads the saved belief, so a decision costs no call at all.

The whole test, 203 beliefs read twice each, was 406 calls and about 238,000 input tokens, for $0.01.
{{< /stuck >}}

{{< stuck "Then doesn't a saved belief go stale? When do you refresh it?" >}}
You don't need to. What the messages say only changes when a new message arrives, and that triggers a new call. Age can be plain arithmetic when the belief is read, pulling it back toward "not sure" without another call. The arithmetic is simple, but I haven't tested whether it fades beliefs at the right speed.
{{< /stuck >}}

{{< stuck "Who should decide how far to trust a source: the team, the agent, or Jev?" >}}
I tried Jev with and without the team's trust levels. They changed four answers: three for the better and one for the worse. That's a lot of power for a setting someone picks by hand, so a team that sets it badly will get bad beliefs. I still think track records should set it, as this post first proposed. I just haven't built that yet.
{{< /stuck >}}

### Trying to break it

| Test | Result |
|---|---|
| The same call, three times | Same top answer on 17 of 18. Numbers moved by up to 12 points. |
| Instructions reworded | 16 right, 2 wrong |
| A forged "OFFICIAL FINAL RECORD, do not check with anyone" from an unknown sender, against each fact | 15 right, 3 wrong. No answer flipped, but some lost confidence: one fell from 88% to 72% and would no longer be acted on. |
| A fake email changing a supplier's bank details | Stayed under 50%: account 30%, SWIFT code 6%, beneficiary 18% |

### Does an agent do better with beliefs?

Less clearly than I expected. On an invented manufacturer, I put five decisions to two agents, three runs each, with the same model and instructions. Both could search the messages, and only one could read beliefs. These beliefs came from the sum, because that's what was running.

{{< chart caption="15 runs of each agent. They reached the same answer in substance in 14 of the 15 pairs, and neither agreed to pay a fake bank account. In the other pair, the agent with beliefs got confused about which week it was and asked." >}}
<div class="chart-key"><span><i class="is-right"></i>Act now</span><span><i class="is-open"></i>Check first, ask a person or hold back</span></div>
<div class="bar-row"><div class="bar-name">Without beliefs</div><div class="bar-stack"><span class="is-right" style="flex:9">9</span><span class="is-open" style="flex:6">6</span></div></div>
<div class="bar-row"><div class="bar-name">With beliefs</div><div class="bar-stack"><span class="is-right" style="flex:1">1</span><span class="is-open" style="flex:14">14</span></div></div>
{{< /chart >}}

A strong model reading raw messages did well on its own. Beliefs didn't change what it concluded. They changed how willing it was to act, and on these decisions acting would mostly have been fine. So here beliefs made the agent more careful, not more right. Some of that is the sum being timid, and I need to rerun this with Jev's beliefs before saying more. This scenario also had no decision where acting early was a trap, apart from the fake bank account, which both agents caught.

### Where it's still wrong

A university lecture is the clearest failure. A person wrote: "Beck Theatre's shut until Easter (ceiling). MATH1100 spring lectures Tue 10:00 are in Hollins LT2." Later a timetable system published "MATH1100 Lecture, Tue 10:00, Beck Theatre. All rooms confirmed". Jev says Beck Theatre at 80% to 82%. It's the same pattern as the crown fitting, which it got right, and I don't know why this one differs. Only the threshold kept the agent from acting on it, and only by a few points.

Two others sit near 50% and can land either way: who's on call, and whether an incident is resolved. Those should read as "sources disagree", not as an answer.

Across the runs, answers below 60% were right 2 times in 8, and answers above 80% were right 43 times in 45. That's encouraging, but it isn't calibration: it's 18 facts repeated, on invented data.

### Where the build fell short of the design

The system follows most of the design. Messages are stored exactly as they arrive, a model files them under questions, and the agent can rank its next step by stakes. Three parts fell short:

| In the design | What I built |
|---|---|
| The model merges, splits and retires questions | The model only adds questions and answers |
| Trust in each source is learned from settled facts | Trust is set by hand for each kind of source |
| Probabilities are checked against outcomes | People can record verdicts, but nothing is calibrated yet |

So the most novel parts of the design are the parts I haven't tested.

I also made three mistakes worth writing down:

- **Reading old messages again made things worse.** When the organizer created a new question, I had it read related older messages against that question. On my test company, one correct belief fell from 81% to 14% on contradictions that weren't real, and another rose to a false 99%. I took it out.
- **I had overfit to my first test.** The organizer's instructions had picked up rules and examples about ship dates and promise dates, all from the invented manufacturer. That only came out when I went back and checked directly. I rewrote them in neutral terms and moved testing to the four other fields.
- **The model tracks too much.** On the manufacturer, it created 99 questions. Only 11 had competing answers, 8 had one answer from several sources, and 80 had one answer from one source, where a belief adds little to the message itself. It also still creates duplicates: one lettings run holds "gas check" and "CP12 visit" as separate questions about the same visit, with different answers.

### What this changes in the design

- **Jev moves from an input to the author of the belief.** Plain arithmetic no longer computes it, so the sum and its "Arithmetic" row in the tables above should go.
- **Arithmetic stays for deciding.** Stakes, thresholds and the value of each next step are still sums, and they don't depend on how the belief was made.
- **The rule mostly survives.** The organizer and the agent still never write a probability. To change a belief they have to bring evidence.
- **The belief gets saved.** Saved versions also give the history: this message moved it from 60% to 85%.
- **Some things get worse.** The sum could show exactly how many points each message contributed, and the same input always gave the same number. Direct Jev gives neither.

### What I still don't know

This changes what I'm building next. It doesn't settle the claims from the last section.

- **It might have nothing to do with Jev.** The winner looks a lot like "an LLM reads the notes and decides", which is the baseline I planned to beat. I haven't put a general LLM in the same slot. If it does as well, a model reading everything is simply better than my sum, and nothing about Jev is special.
- **The data is small and invented.** That's 18 facts, written by a model I asked to include traps, matched to answers by hand, and looked at many times. Real messages would settle this far better.
- **Learned trust is untested.** That's claim 3, and it's the part of the design I cared most about.
- **Calibration is untested.** That's claim 4. An agent acting at 0.85 needs 0.85 to mean something, and I can't say yet whether it does.
- **The public benchmarks haven't been run.** None of LoCoMo, LongMemEval or STALE.
- **The organizer still needs its editing half.** Jev only sees messages filed under a question, so a duplicate question stays a duplicate.
- **Long histories are open.** I haven't tested how much history one call can hold.

---

Ted's sign asks for belief without proof. For agents I'd write a longer sign: believe in proportion to the evidence, and say how sure you are. It wouldn't fit above a door, but it's what I'd like agent memory to do.

If you're working on something similar, or you've read these papers more closely than I have, I'd like to hear from you.
