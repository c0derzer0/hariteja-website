---
title: "BELIEVE, Part 2: A Memory That Knows How Sure It Is"
tags: ["AI", "Agents", "Memory", "Bayesian Networks", "LLMs"]
date: 2026-10-03
draft: false
series: "Building Agents"
series_order: 2
summary: "How beliefs work in agent memory: belief networks, calibrated decision models and self-organizing context, a design that learns which sources to trust, and the experiments I'd run to test it."
---

In [part 1](/posts/memory-and-learning-for-agents/), a personal assistant remembered everything about your sister Maya and still got her birthday wrong: the wrong restaurant, the wrong date, flowers she doesn't like, sent to an address she left two years ago. It was missing three things human memory has: knowing where a memory came from (source monitoring), letting old memories weaken (forgetting), and knowing how sure to be (metamemory).

I also looked at who else is working on memory with probabilities, and three questions looked open:

1. Where does the trust in each source come from?
2. Is the confidence honest?
3. Who decides what to track, and keeps it organized?

This post covers how beliefs work, my design, and how I'd test it.

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

This is a design, not a system I've built. The last section covers how I'd test it.

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

The first version would take its questions from a single extraction pass, as Nous does, to isolate the belief and learning parts. Letting the model discover and reorganize questions is a second experiment. Comparing instruction search with reinforcement learning for that organizer is a third.

---

Ted's sign asks for belief without proof. For agents I'd write a longer sign: believe in proportion to the evidence, and say how sure you are. It wouldn't fit above a door, but it's what I'd like agent memory to do.

If you're working on something similar, or you've read these papers more closely than I have, I'd like to hear from you.
