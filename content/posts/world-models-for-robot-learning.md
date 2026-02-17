---
title: "World Models for Robot Learning: Why Video Might Be All You Need"
tags: ["Robotics", "AI", "World Models", "V-JEPA", "VLA"]
date: 2026-02-17
draft: false
series: "World Models"
series_order: 2
summary: "What if robots could learn just by watching? V-JEPA2 suggests that video understanding alone, combined with goal images, might be sufficient for robot manipulation."
---

*This is Part 2 of my [World Models series](/posts/what-is-a-world-model). Part 1 covers the foundations: what world models are, their history, and the different types.*

---

Modern robot learning pipelines typically look like this: show the robot an image, give it a language instruction like "pick up the red block", and train it to output the right action. These are called **Vision-Language-Action (VLA)** models, and they've become the dominant paradigm.

But there's a fascinating alternative that builds on the [world model foundations](/posts/what-is-a-world-model) I discussed in Part 1. Instead of learning a direct mapping from observation to action, world models learn to *simulate the future*. Given the current state and a proposed action, they predict what happens next. Then, to act, you simply search for actions that lead to good outcomes.

I've been exploring this with **V-JEPA2-AC** (Video Joint Embedding Predictive Architecture with Action Conditioning) from Meta AI, and the results challenge some assumptions about what robots actually need to learn.

---

## The Two Approaches

### VLA Models: "Tell me what to do"

```
Input: Image + "pick up the red block"
Output: Action (move arm right, close gripper, etc.)
```

VLA models are essentially sophisticated behavioral cloning. You show them expert demonstrations paired with language instructions, and they learn to imitate. Models like OpenVLA and Pi-Zero follow this paradigm.

**The assumption**: Language is essential for specifying goals.

### World Models: "Show me where to go"

```
Input: Current video + Goal image
Process: Imagine many possible action sequences
         Simulate each one in your "mental model"
         Pick the sequence that gets closest to the goal
Output: First action of the best sequence
```

World models don't need language at all. They need two things:
1. A way to encode observations into a latent space
2. A predictor that simulates how actions change that latent space

**The insight**: A goal *image* (showing the desired end state) might be sufficient.

---

## V-JEPA2: A Latent-Space World Model

As I discussed in [Part 1](/posts/what-is-a-world-model), latent-space world models predict in a compressed representation rather than pixel space. V-JEPA2 is a prime example.

V-JEPA2 is a self-supervised video model trained to predict future video frames in latent space. The "-AC" variant adds **action conditioning** - it was trained on the DROID dataset of robot manipulation to understand how actions affect the world.

Here's the architecture:

```
Current observation (8 frames) → [Encoder] → z_current
Goal image → [Encoder] → z_goal
(z_current, state, action) → [AC Predictor] → z_next
```

The predictor learns: "If I'm in state z and take action a, I'll end up in state z'."

This fits our world model definition exactly:
```
f(current_state, action) → future_state
```

But instead of predicting pixels, it predicts latent representations. More efficient, focuses on what matters.

---

## Planning with CEM

Since V-JEPA2-AC is a world model (not a policy), it doesn't directly output actions. Instead, we use **Model Predictive Control (MPC)** with the **Cross-Entropy Method (CEM)**:

1. **Sample** 800 random action sequences (16 steps each)
2. **Simulate** each sequence in the world model
3. **Score** by distance to goal: ||z_final - z_goal||
4. **Refine** using CEM:
   - Keep top 80 sequences (the "elites")
   - Fit a new distribution to these elites
   - Resample and repeat
5. **Execute** the first action of the best sequence
6. **Replan** from the new state

This is computationally expensive (800 forward passes per action!) but has a beautiful property: **it's zero-shot**. No fine-tuning on the target task is needed.

---

## The Hypothesis: Video > Language?

This leads to an intriguing hypothesis: **maybe language isn't necessary for robot manipulation**.

Consider what language actually provides:
- A way to specify the goal ("pick up the red block")
- Disambiguation when multiple goals are possible

But a goal *image* provides the same information, arguably more precisely. "Pick up the red block" is ambiguous - where should I place it? A goal image showing the block in your hand removes all ambiguity.

| Aspect | VLA (Language) | World Model (Goal Image) |
|--------|---------------|-------------------------|
| Goal specification | Text instruction | Final frame of demo |
| Training | Fine-tuned per task | Zero-shot |
| Inference | Single forward pass | 800+ forward passes |
| Ambiguity | Can be vague | Pixel-precise |

---

## Early Results

We're evaluating V-JEPA2-AC on the VLA-Arena benchmark, comparing against fine-tuned VLA models like Pi-Zero. The metrics are:

- **Success Rate (SR)**: Does the robot complete the task?
- **Cumulative Cost (CC)**: How many safety violations occurred?

The interesting question isn't just "which is better" but "how close can zero-shot world models get to fine-tuned policies?" If V-JEPA2-AC achieves even 50% of Pi-Zero's performance without any task-specific training, that's remarkable.

---

## Why This Matters

If world models can approach VLA performance using only goal images:

1. **Data efficiency**: You don't need language annotations for every demonstration
2. **Generalization**: The same model works for any task you can show a goal for
3. **Interpretability**: You can visualize what the model "imagines" will happen
4. **Compositionality**: Chain multiple goal images for multi-step tasks

The trade-off is compute. MPC with 800 samples is slow. But compute gets cheaper; labeled data doesn't.

---

## What's Next

We're running full evaluations on VLA-Arena's safety and manipulation tasks.

Key questions we're investigating:
- How does zero-shot V-JEPA2-AC compare to fine-tuned Pi-Zero?
- Does the gap close on harder tasks (L1, L2 difficulty)?
- Can we reduce the MPC compute cost while maintaining performance?

In [Part 3](/posts/world-models-vs-vla), I'll do a detailed comparison of world model approaches (V-JEPA, DreamZero) against VLA models (Pi-Zero, OpenVLA), breaking down when you'd choose each.

---

*This work is part of CMU's 11-977 course on Multi-Modal Machine Learning. [Reach out](mailto:contactme.teja@gmail.com) with questions.*
