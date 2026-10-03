---
title: "What Agent Memory Is Missing"
tags: ["AI", "Agents", "Memory", "Bayesian Networks", "LLMs"]
date: 2026-10-03
draft: false
series: "Building Agents"
series_order: 1
summary: "Agents remember plenty. They have no idea how much to believe it. What memory is, what cognitive psychology says about it, and why an assistant that remembers everything still gets your sister's birthday wrong."
---

In *Ted Lasso*, a hand-made yellow sign is taped above the coach's office door. It has one word on it: BELIEVE. Ted is asking his team for faith, before there's any evidence they can win.

AI agents have the reverse problem. They treat everything in their memory as true, with no sign anywhere asking whether they should. An old address, a marketing email and something you told them yesterday all carry the same weight.

This post is about giving agents belief of a different kind from Ted's: belief that comes from evidence, that changes when the evidence does, and that knows how sure it is.

---

## What Is Memory?

For an agent, memory is anything that outlasts the current conversation and changes what the agent does later. If the agent behaves the same whether or not something was stored, it isn't memory in any useful sense.

Psychologists describe memory as three operations, and the same three apply to agents:

- **Encoding**: deciding what to keep, and in what form
- **Storage**: keeping it, and deciding what fades
- **Retrieval**: bringing the right thing back at the right moment

Most work on agent memory goes into the third. Vector databases, rerankers and longer context windows are all retrieval. This post is mostly about the first two, and about a question none of the three covers: once something is retrieved, how much should the agent believe it?

---

## Kinds of Memory: What Cognitive Psychology Already Worked Out

Psychology spent a century splitting "memory" into parts, and agent builders have been rediscovering the same parts.

| Human memory | What it holds | Key reference | In an agent |
|---|---|---|---|
| **Working memory** | What you're holding in mind right now, a handful of items | [Baddeley and Hitch, 1974](https://doi.org/10.1016/S0079-7421%2808%2960452-1) | The context window |
| **Episodic memory** | Events you lived through: what happened, when, where | Tulving, 1972 | Conversation history and logs of what the agent did |
| **Semantic memory** | Facts about the world, detached from when you learned them | Tulving, 1972 | Stored facts: "the user's sister is vegetarian" |
| **Procedural memory** | How to do things, without recalling the steps | [Cohen and Squire, 1980](https://doi.org/10.1126/science.7414331) | Skills, prompts and tools |
| **Prospective memory** | Remembering to do something later | [Einstein and McDaniel, 1990](https://doi.org/10.1037/0278-7393.16.4.717) | Reminders and scheduled tasks |

Every agent framework has some version of the first three, and many have all five. On this map, agent memory looks fairly complete.

Psychology also found three things about human memory that the table leaves out, and these are where agents fall short.

**Memory is reconstructed.** Frederic Bartlett showed in 1932 that people don't replay a memory like a recording. They rebuild it each time from fragments, and fill gaps with what seems plausible. Retrieval-augmented agents work the same way: pull a few fragments, then let the model compose an answer. People have two abilities that keep reconstruction in check. Agents have neither.

**Source monitoring.** People keep track of where a memory came from: whether you saw it, heard it from a friend, read it in an advert, or imagined it. Marcia Johnson and colleagues [laid this out in 1993](https://doi.org/10.1037/0033-2909.114.1.3), and argued that many memory errors are source errors. The fact is remembered correctly and attributed to the wrong origin. An agent that stores "your sister loves lilies" has dropped the most important part, which is that a florist's advert said so.

**Metamemory.** People have a sense of how well they know something. The "feeling of knowing" has been studied since the 1960s ([Hart, 1965](https://doi.org/10.1037/h0022263); [Nelson and Narens, 1990](https://doi.org/10.1016/S0079-7421%2808%2960053-5)). It's what lets you say "I think the meeting is on the 14th, but check." Human confidence is far from perfect. Eyewitness research shows how wrong it can be, especially once a memory has been retold or questioned. But it exists, and people use it constantly to decide whether to act or to check. Agent memory has nothing like it. Every retrieved memory arrives with the same implied certainty.

A fourth finding is about forgetting. Ebbinghaus measured in 1885 how memories fade with time. Later work, first in rats, showed that recalling a memory can make it changeable again (reconsolidation; [Nader, Schafe and LeDoux, 2000](https://doi.org/10.1038/35021052)). Forgetting and updating are part of how human memory stays useful. Most agent memories neither fade nor update. They accumulate.

So agent memory already has the kinds of memory psychology describes. What it lacks is the machinery around them: knowing where a memory came from, knowing how sure to be, and letting old memories weaken. These two posts are about building those three, and I'll use one word for the result: **belief**. To see why it matters, take one ordinary request to a personal assistant.

---

## Why Belief: One Birthday

Imagine a personal assistant that has been helping you for two years. It reads your messages, email and calendar. Your sister Maya's birthday is next week, and you say:

> "Book a dinner for Maya's birthday and send her flowers."

Over two years the assistant has read about 600 messages that mention Maya. These are the ones that matter for this request:

| When | Where it came from | What it says |
|---|---|---|
| Two years ago | A shipping label | Maya lives at 12 Oak Street |
| Two years ago | You: "Maya's vegetarian, keep that in mind" | Maya is vegetarian |
| Last year | An old contact card | Her birthday is March 15 |
| Last year | You: "Maya's birthday is the 14th" | Her birthday is March 14 |
| April | Maya, in the family chat: "No meat for me this week, I'm doing a cleanse" | Maya isn't eating meat |
| June | Maya, in the family chat: "Started eating fish again!" | Maya eats fish |
| July | A florist's marketing email: "Maya loves lilies, as she told us!" | Maya likes lilies |
| August | An order confirmation for a gift you sent | Maya lives at 48 Pine Avenue |

### With plain memory

The assistant stores each of these as a note. When it needs a fact, it searches for the notes most similar to its question and lets the model decide. Here's the result:

- **A vegan restaurant.** The search for Maya's diet returns "vegetarian" and "no meat", which match the wording. "Started eating fish again!" shares no words with the question and isn't retrieved.
- **The wrong date.** The contact card says the 15th and looks official. Your own message says the 14th. The assistant picks the card.
- **Flowers to the old address.** Both addresses are stored, and nothing records that one replaced the other.
- **Lilies.** The only note about flowers came from a florist's advert, and it's phrased as a fact.
- **No questions asked.** Nothing told the assistant that any of this was uncertain.

You correct it: "It's the 14th, she eats fish now, and she moved." Three more notes are stored. The contact card, the old label and the florist's email are all still there, and next year the same search runs again.

Each failure is one of the three missing abilities from the last section:

| Missing ability | What went wrong |
|---|---|
| **Source monitoring** | A florist's advert and a contact card were trusted as much as you and Maya |
| **Forgetting and updating** | A one-week cleanse became permanent, and an old address stayed current |
| **Metamemory** | The assistant couldn't tell a solid fact from a shaky one, so it never asked |

### With beliefs

Now store each fact as a question with competing answers, where each answer has a probability computed from the evidence behind it. The numbers here are illustrative:

```
What does Maya eat?         fish and vegetables 0.81 · strictly vegetarian 0.15
  Maya herself, in June, outweighs your note from two years ago.
  The April cleanse was a one-off and barely counts.

When is Maya's birthday?    March 14  0.88 · March 15  0.12
  You said so directly. An old contact card disagrees.

Where does Maya live?       48 Pine Avenue 0.95 · 12 Oak Street 0.03
  A recent order confirmation replaced a two-year-old label.

Maya's favourite flowers?   lilies 0.18
  One marketing email, a kind of source that is often wrong.
```

The same request now goes like this. The assistant books a restaurant with good fish for the 14th and sends the flowers to Pine Avenue. Then it asks one question: "I'm not sure what flowers Maya likes. What should I send?"

You answer, "Tulips." That reply does more than fix the flowers. It's also a signal that the florist's email was wrong, and the assistant lowers its trust in marketing emails for every future fact, about anyone.

| Missing ability | How beliefs supply it |
|---|---|
| **Source monitoring** | Every piece of evidence keeps its source, and each kind of source is weighted by how often it has been right |
| **Forgetting and updating** | Old evidence counts for less over time, one-offs are recognised as one-offs, and new evidence lowers old answers |
| **Metamemory** | Every answer has a probability, and below a threshold the assistant asks |

Normally each of these would be a separate feature: a rule for stale facts, a filter for bad sources, a confirmation step. Here they share one mechanism. Keep the evidence, weight it by where it came from and how old it is, and act only when the resulting probability is high enough.

After sketching this, I went looking for who else is working on it.

---

## Who Else Is Trying This

I came to this idea from building agents and from my background in probabilistic models, not from reading the literature. Once I had a design, I checked what others have tried. It turns out several groups are working on the same problem, most of them in the last few months.

A caveat: these are recent preprints and I've only read through them quickly. I may have details wrong, so treat this as a map of who is working on what, and read the papers before relying on any specific claim.

### How today's memory systems handle a contradiction

The widely used memory systems each have an answer for what to do when a new fact conflicts with an old one:

| System | What it does |
|---|---|
| [**Mem0**](https://arxiv.org/abs/2504.19413) | Originally retrieved nearby memories and asked an LLM whether to add, update, delete or do nothing. Its 2026 version, as I understand it, only adds: the new fact is stored next to the old one. |
| [**Zep / Graphiti**](https://arxiv.org/abs/2501.13956) | Stores facts as edges in a graph with timestamps. A contradicting fact marks the old edge as no longer valid, and the history is kept. |
| [**Letta (MemGPT)**](https://docs.letta.com/guides/agents/memory-blocks) | The model edits its own memory through tools |

None of the three attaches a probability to a memory. The judge is either the LLM or the order in which things arrived. Graphiti's handling of time is the most careful of the three, and it's worth borrowing.

### People are trying beliefs

Several papers this year replace the stored fact with a probability.

[**Belief Memory**](https://arxiv.org/abs/2605.05583) (Liao and colleagues, May 2026) keeps several candidate conclusions with probabilities, where earlier systems kept one. The probabilities update as more observations arrive. From what I read, it does well on two standard benchmarks.

[**Nous**](https://arxiv.org/abs/2606.22030) (Pranav Singh, June 2026) is the closest to my design. As I understand it, each attribute of each entity is a probability distribution, updated with Bayes' rule, and forgetting is modelled as growing uncertainty. Its most useful result is a negative one. On LoCoMo, the standard benchmark for conversational memory, Bayesian updating did no better than keeping the most recent value, because the benchmark contains few contradictions. On a benchmark built around contradictions and stale facts, the picture changed once each observation carried a reliability signal:

| Approach | Accuracy, averaged over the four realistic settings |
|---|---|
| Most frequent value wins | 46 |
| Most recent value wins | 67 |
| LLM reads everything and decides | 90 |
| Bayesian beliefs with a reliability signal | 100 |

The benchmark also has a fifth, adversarial setting, where confident wording is deliberately wrong. There the Bayesian approach scores 0, which the paper reports openly. The benchmark is small and was built by the paper's author, and I haven't checked the setup closely, so I treat the numbers as an indication. This matched my own hunch: belief updating only pays off when you know how much to trust each observation. The updating itself is the easy part.

[**TOKI**](https://arxiv.org/abs/2606.06240) (Ziming Wang, June 2026) takes a different route, with a formal treatment of contradictions using two clocks: when a fact was recorded and when it was true. As far as I can tell it doesn't update probabilities, though each fact carries a confidence value and one of its rules keeps the more confident fact.

[**The Memory Trust Gap**](https://arxiv.org/abs/2609.01852) (Hu and Ramachandran, September 2026) looks at the other end: how agents use what they retrieve. Its claim, as far as I followed it, is that models over-trust stale stored memories even when a current, authoritative source is available, and that larger models are fooled more easily once the stale note looks recent.

### What's still open

Nous gets its reliability signal from the language of the observation, such as "I think" versus "definitely". The paper is upfront that this can be manipulated, and it adds a cap based on where the observation came from. But that's the florist problem again. "Maya loves lilies, as she told us!" sounds certain. People don't judge a source by how sure it sounds. They judge it by its track record.

Three questions looked open to me in what I read:

1. **Where does reliability come from?** In these papers it comes from the wording, or from values someone assigned. I didn't see a memory system learning it from how often each kind of source turned out to be right. The nearest I found is in multi-agent work, where an agent learns how reliable each of its peers is from whether their advice turned out correct ([Σ-Mem](https://arxiv.org/abs/2607.27958), [BaRe-Mem](https://arxiv.org/abs/2609.35551)). I've only read the abstracts of those two.
2. **Is the confidence honest?** The papers report accuracy. I didn't see any that check whether an answer held at 0.9 is right 90% of the time, and the Belief Memory paper says its own values are confidence scores, not calibrated probabilities. A separate line of work does calibrate agent confidence against real outcomes ([Mammen and colleagues, September 2026](https://arxiv.org/abs/2609.09448)), but for whether a whole task succeeded, not for what's in memory.
3. **Who decides what to track?** In Nous, as I understand it, a model extracts entities and attributes from each conversation. I didn't see anything that later merges, splits or drops them based on what turned out to be useful.

Finding this work was reassuring. Others arrived at beliefs independently, and their results point to the same hard part I'd been stuck on, which is where the trust in each source comes from. The three questions above are where my design differs.

[Part 2](/posts/memory-and-learning-for-agents-part-2/) covers how beliefs work, the design, and the experiments I'd run to test it.
