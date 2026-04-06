---
title: "LeWorldModel vs V-JEPA: What Actually Changed"
tags: ["Robotics", "AI", "World Models", "V-JEPA", "LeWorldModel", "Self-Supervised Learning"]
date: 2026-04-05
draft: false
series: "World Models"
series_order: 6
summary: "LeWorldModel removes masking, EMA, and stop-gradient from V-JEPA, trains end-to-end from pixels in hours on one GPU, and plans 48x faster. Here's the full architecture and what it learns differently."
---

*This is Part 6 of my [World Models series](/posts/what-is-a-world-model). [Part 4](/posts/vjepa-internals-building-my-understanding) covers V-JEPA's internals, [Part 5](/posts/sigreg-the-anti-collapse-trick) explains SIGReg — read those first.*

---

Now that we understand the collapse problem ([Part 4](/posts/vjepa-internals-building-my-understanding)) and how SIGReg solves it ([Part 5](/posts/sigreg-the-anti-collapse-trick)), we can look at the full [LeWorldModel](https://arxiv.org/abs/2603.19312) architecture and see what it means.

---

## A completely different setup

LeWorldModel doesn't do masking at all. It doesn't take video clips as input. The task is fundamentally different:

```
frame at time t   → encoder → z_t   ─┐
action a_t                            ├→ predictor → predicts ẑ_{t+1}

frame at time t+1 → same encoder → z_{t+1}  ← target
```

One encoder. Two consecutive frames. One action. Predict the next state embedding.

No EMA copy, no stop-gradient. Both sides of the loss use the same encoder, and gradients flow through both. This should collapse immediately. The network can just map every frame to zero, both sides of the loss go to zero, done.

Except — SIGReg prevents this. (See [Part 5](/posts/sigreg-the-anti-collapse-trick) for how.)

The full training objective:

```
L = L_pred + λ · SIGReg(Z)

L_pred = ||ẑ_{t+1} - z_{t+1}||²

where λ = 0.1
```

That's it. Two terms, one hyperparameter.

---

## What does LeWorldModel actually learn?

This is where it gets interesting. V-JEPA's masking task forces the encoder to learn general visual features — object identity, spatial layout, motion patterns — because you need all of that to predict hidden patches across space and time.

LeWorldModel's task is simpler: predict what the scene looks like after you take one action. The encoder only needs to learn what's relevant for predicting state transitions.

These are different things. LeWorldModel learns **dynamics-relevant features** rather than general visual representations. For a world model you're going to use for planning and control, that's actually what you want. The encoder doesn't need to understand every pixel perfectly — it needs to understand what changes when you act and what stays the same.

The tradeoff: LeWorldModel's encoder won't be as useful as a general-purpose visual backbone. But as a component inside a planning system, it may be better — it learned to compress exactly the information that predicts consequences of actions.

---

## Why it fits on a single GPU

The compute gap comes down to the predictor's input size.

| | Predictor input | Sequence length |
|---|---|---|
| V-JEPA | All patch tokens (masked + visible) | 1000–1400 tokens |
| LeWM | Single vector z_t + action | 1 token |

V-JEPA's predictor is a transformer operating on hundreds of tokens. LeWorldModel's predictor is tiny — 10M parameters — operating on a single vector. The encoder (ViT-Tiny, 5M params) also outputs a single CLS token rather than all 196 patch embeddings.

For CEM planning — which needs hundreds of forward passes to search over action sequences — this difference is the entire ballgame. V-JEPA2-AC is too slow to run CEM at inference time on most hardware. LeWorldModel runs it **48× faster**.

---

## What I'm still thinking about

LeWorldModel was only tested at **48×48 pixel resolution** on relatively simple tasks (Push-T, Reacher, OGBench-Cube). My project uses VLA-Arena — 7-DoF pick and place with real visual complexity.

The open question is whether a single CLS vector is enough to capture fine-grained manipulation details: exact gripper position, object orientation, contact state. In V-JEPA, spatial structure is preserved across 500+ patch tokens. In LeWorldModel it's compressed into one vector.

If the training data has enough diversity that you can't predict the next state without tracking these details precisely, the encoder will learn them. If coarse features are sufficient — it might miss them.

That's the experiment I want to run.

---

*Next: adapting LeWorldModel to VLA-Arena — what needs to change and what the paper doesn't tell you.*

*Part of my [World Models series](/posts/what-is-a-world-model). Previous: [Part 1: What is a World Model?](/posts/what-is-a-world-model), [Part 2: World Models for Robot Learning](/posts/world-models-for-robot-learning), [Part 3: World Models vs VLAs](/posts/world-models-vs-vla), [Part 4: V-JEPA Internals](/posts/vjepa-internals-building-my-understanding), [Part 5: SIGReg](/posts/sigreg-the-anti-collapse-trick).*
