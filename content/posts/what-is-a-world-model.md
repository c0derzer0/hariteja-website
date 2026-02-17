---
title: "What is a World Model? Clearing the Confusion"
tags: ["AI", "World Models", "Reinforcement Learning", "Robotics"]
date: 2026-02-17
draft: false
series: "World Models"
series_order: 1
summary: "World models have become a buzzword in AI, but the concept is often misunderstood. Let me trace their history and give you a precise definition."
---

World models have become a hot topic in AI. Every few months, a new paper or product claims to have built one. Sora generates videos. GAIA-1 simulates driving. V-JEPA predicts representations. Genie creates interactive worlds. World Labs' MARBLE generates 3D environments. Are these all world models? What actually *is* a world model?

I've been researching world models for my multimodal ML project at CMU, and I realized the confusion stems from conflating several related but distinct ideas. This isn't a new area for me either - during my graduate research, I invented [Recurrent Sum-Product-Max Networks (RSPMNs)](https://ojs.aaai.org/index.php/ICAPS/article/view/16009), a probabilistic graphical model that learns environment dynamics and rewards for sequential decision-making. That work gave me a deep appreciation for what it means to model the world.

Let me try to clear up the confusion.

---

## The Simplest Definition

A world model is a function:

```
f(current_state, action) → future_state
```

That's it. Given where you are and what you do, predict where you'll end up.

This is the **forward dynamics model**. It answers the question: *"If I do this, what happens?"*

In the language of Markov Decision Processes (MDPs), this is the transition probability:

```
p(s_{t+1} | s_t, a_t)
```

The probability of reaching state s_{t+1} given you're in state s_t and take action a_t.

---

## What a World Model is NOT

Before going further, let me be clear about what doesn't qualify:

**Not just video prediction**: Generating the next frame of a video isn't a world model unless you can condition on actions. Sora predicts video, but you can't ask it "what happens if I push this block left?" No action input = not a world model.

**Not just 3D generation**: Tools like MARBLE generate photorealistic 3D environments, which is useful for training robots in simulation. But generating a static scene isn't the same as predicting how that scene evolves with actions.

**Not just state estimation**: Estimating the current state from noisy observations is perception, not world modeling.

**Not a policy**: A policy tells you what action to take. A world model tells you what happens if you take an action. They're complementary.

---

## Key Milestones

The idea that intelligent agents need an internal model of the world has evolved across multiple fields. Here are the key milestones:

### Bellman and MDPs (1957)

Richard Bellman formalized Markov Decision Processes, which include transition probabilities p(s'|s,a) as a core component. The Bellman equation assumes access to these dynamics:

```
V(s) = max_a [R(s,a) + γ Σ p(s'|s,a) V(s')]
```

MDPs gave us the mathematical framework for sequential decision-making with known dynamics.

### Kalman and Linear Control (1960s)

Rudolf Kalman's work on linear control theory introduced the state-space formulation:

```
x_{t+1} = Ax_t + Bu_t + w_t
```

This IS a world model: the next state is a linear function of the current state and control input, plus noise. Much of classical robotics builds on this.

### Sutton's Dyna (1990s)

Rich Sutton's Dyna architecture made the connection to learning explicit: **learn a model, plan with it, improve your policy**:

1. **Learn** the world model from experience
2. **Plan** using the learned model
3. **Learn** a policy from both real and simulated experience

This became the blueprint for model-based reinforcement learning.

### Ha & Schmidhuber's "World Models" (2018)

The [World Models paper](https://arxiv.org/abs/1803.10122) popularized the term in deep learning. They trained a VAE to compress observations, an RNN to predict latent dynamics, and a controller on top.

The key insight: you can train a controller *entirely inside the dream*.

### The Scaling Era (2020s)

Now we have world models at scale:
- **Dreamer** (v1, v2, v3): Latent world models for RL
- **IRIS**: Transformer-based world models for Atari
- **Genie**: Interactive world generation from text, action-conditioned at 20+ fps
- **GAIA-1**: 9B parameter model for autonomous driving
- **V-JEPA**: Non-generative prediction in representation space
- **DreamZero**: Joint video-action generation for robotics

---

## Types of World Models

Here's a cleaner way to categorize modern approaches:

### 1. Latent-Space World Models

Predict future states in a learned compressed representation, not pixels.

```
z_t = encode(observation_t)
z_{t+1} = predict(z_t, action_t)
```

**Examples**: Dreamer, PlaNet, V-JEPA, IRIS

**Why this approach?** Predicting pixels wastes capacity on irrelevant details (exact lighting, textures). Latent models focus on task-relevant dynamics.

**Trade-off**: You can't visualize what the model "imagines" without a decoder.

### 2. Generative World Models

Use large generative models (diffusion, autoregressive) to simulate futures in pixel space, conditioned on actions.

```
future_frames = generate(current_frame, action_sequence)
```

**Examples**: Genie, DreamZero, UniSim, GAIA-1

**Why this approach?** Leverage internet-scale video pretraining. The model learns physics from watching millions of hours of video, then fine-tunes on action-conditioned data.

**Trade-off**: Computationally expensive. Can hallucinate (generate plausible but incorrect futures).

### 3. Probabilistic Graphical Models

Represent transition dynamics and rewards as structured probabilistic models with tractable inference.

```
p(s_{t+1}, r_t | s_t, a_t) represented as a graphical model
```

**Examples**: [RSPMNs](https://ojs.aaai.org/index.php/ICAPS/article/view/16009), Sum-Product Networks for RL

**Why this approach?** Exact inference, interpretability, and theoretical guarantees. You can compute exact Bellman updates over the learned structure.

**Trade-off**: Scaling to high-dimensional observations (images) is challenging without neural encoders.

### 4. Video Prediction (Not True World Models)

Generate future video frames WITHOUT action conditioning.

```
future_frames = generate(current_frames)
```

**Examples**: Sora, video diffusion models

**Why this isn't a world model**: You can't ask "what if I do X?" There's no action input. It predicts what's likely to happen, not what happens given a specific intervention.

**Still useful for**: Learning visual representations, pretraining backbones that can later be action-conditioned.

---

## Why World Models Matter

Why learn a dynamics model when you could just learn a policy directly?

### Data Efficiency
Real-world interaction is expensive. Once you have a world model, you can simulate millions of experiences for free.

### Generalization
A policy for "pick up red blocks" won't handle blue blocks. A world model that understands physics can plan to pick up anything.

### Planning and Reasoning
Model-free policies are reactive. World models enable deliberation: imagine futures, evaluate them, choose.

### Transfer
Learn the world model once, reuse for many tasks. Physics doesn't change between tasks.

---

## The Open Questions

**What should world models predict?** Pixels? Latent states? Abstract concepts? Probabilistic structures? No consensus yet.

**How do you plan efficiently?** Model Predictive Control requires many forward passes. Can we do better?

**Do we need action conditioning for pretraining?** Or can we pretrain on video, then add actions later?

---

## What's Next in This Series

- **Part 2: World Models for Robot Learning** - How V-JEPA2 enables zero-shot manipulation using goal images
- **Part 3: World Models vs VLAs** - Comparing V-JEPA, DreamZero with Pi-Zero, OpenVLA

---

*Part of my research for CMU's 11-977 Multi-Modal ML course. [Reach out](mailto:contactme.teja@gmail.com) with questions.*
