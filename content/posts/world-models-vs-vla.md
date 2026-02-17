---
title: "World Models vs VLAs: Two Paths to Robot Intelligence"
tags: ["Robotics", "AI", "World Models", "VLA", "V-JEPA", "Pi-Zero"]
date: 2026-02-17
draft: false
series: "World Models"
series_order: 3
summary: "A detailed comparison of world model approaches (V-JEPA, DreamZero) and Vision-Language-Action models (Pi-Zero, OpenVLA) for robot learning."
---

*This is Part 3 of my [World Models series](/posts/what-is-a-world-model). Part 1 covers [foundations and definitions](/posts/what-is-a-world-model), Part 2 explores [V-JEPA2 for robot learning](/posts/world-models-for-robot-learning).*

---

In the previous posts, I laid out what world models are and explored V-JEPA2 as a specific approach. Now let's do a systematic comparison between **world models** and **Vision-Language-Action (VLA)** models - the two dominant paradigms for robot learning.

The core distinction:

- **World Models** ask: *"If I do action X, what will the world look like?"* They simulate the future, then plan.
- **VLAs** ask: *"Given what I see and what I'm told, what action should I take?"* They directly map observations to actions.

Let me break down the leading approaches in each category.

---

## World Models

### V-JEPA 2: Predicting in Representation Space

V-JEPA 2 is a **non-generative** world model. Instead of predicting pixels, it predicts in an abstract latent space.

**Training:**
- Pre-trained on 1M+ hours of internet video using masked modeling
- Action-conditioned variant (V-JEPA 2-AC) trained on ~62 hours of robot data (DROID dataset)
- The encoder is frozen; only a lightweight transformer learns action dynamics

**Inference:**
- Uses Model Predictive Control (MPC) with goal images
- Samples action sequences, simulates them in latent space, picks the one closest to the goal
- Zero-shot: no task-specific fine-tuning needed

**Limitations:**
- Relies on goal images, not language
- Sensitive to camera positioning
- Planning loop adds computational overhead

### DreamZero: Generative World Action Models

DreamZero takes the opposite approach: **generate pixels**, but do it jointly with actions.

**Training:**
- Built on Wan2.1-14B, a massive video diffusion model
- Uses flow matching to jointly denoise video frames AND robot actions
- Co-trained on internet video (physics) + robot data (actions)

**Inference:**
- Generates a "chunk" of future video and actions in parallel
- The video acts as an implicit visual planner
- Runs at ~7Hz despite being 14B parameters

**Limitations:**
- Computationally heavy (14B params)
- If video generation hallucinates, actions will fail

---

## Vision-Language-Action Models

### OpenVLA: The Accessible Generalist

OpenVLA takes the straightforward approach: fine-tune an LLM to output robot actions as tokens.

**Architecture:**
- Prismatic backbone (DINOv2 + SigLIP) → Llama 2 (7B)
- Actions discretized into 256 bins, mapped to vocabulary tokens

**Training:**
- Trained on Open X-Embodiment dataset (970k trajectories)
- Designed for LoRA fine-tuning on consumer GPUs

**Inference:**
- Autoregressive: generates action dimensions one at a time
- ~7Hz inference speed

**Limitations:**
- Discretization causes "jerky" motion
- Single-image input (no video history)
- Autoregressive generation is slow

### Pi-Zero: The Hybrid Approach

Pi-Zero separates high-level reasoning from low-level control.

**Architecture:**
- VLM backbone (PaliGemma, ~2B) for semantic reasoning
- Smaller Action Expert (~300M) for motor control
- Post-training switches to flow matching for smooth, continuous actions

**Inference:**
1. VLM predicts a text sub-task ("open the drawer")
2. Action Expert generates 50 continuous actions via flow matching
3. Up to 50Hz control

**Limitations:**
- Complex hybrid architecture
- Flow matching adds latency vs single-step feedforward

---

## Head-to-Head Comparison

| Feature | World Models | VLAs |
|---------|-------------|------|
| **Core question** | "What happens if I do X?" | "What should I do?" |
| **Mechanism** | Predict future → plan | Direct observation → action mapping |
| **Training data** | Can use video-only data (no actions) | Requires robot data with action labels |
| **Physical generalization** | Stronger: understands action outcomes | Limited by training distribution |
| **Semantic generalization** | Weaker: often goal-image only | Stronger: LLM backbone understands language |
| **Inference speed** | Slower: planning loops | Faster: feedforward |
| **Zero-shot capability** | Yes (for new tasks with goal images) | Needs fine-tuning |

---

## When to Use What

### Choose World Models when:
- You need to handle novel physical scenarios not seen in training
- You can specify goals visually (goal images)
- Compute at inference is less constrained
- You want to leverage large-scale video pretraining without action labels

### Choose VLAs when:
- Language-based instruction following is critical
- You need fast inference for real-time control
- Tasks are well-represented in robot datasets
- You want to leverage pre-trained LLM capabilities

### Consider Hybrid Approaches when:
- You need both semantic understanding and smooth control
- You can handle architectural complexity
- You want to balance instruction-following with precise manipulation

---

## The Convergence

The line between these paradigms is already blurring:

- **DreamZero** jointly generates video and actions
- **Pi-Zero** uses hierarchical reasoning with continuous action generation
- **V-JEPA 2** is exploring language conditioning

The most capable systems will likely combine:
- **Physical reasoning** from world models
- **Semantic understanding** from VLAs
- **Efficient planning** from learned policies

---

## My Take

Having built [world models with probabilistic graphical models](https://ojs.aaai.org/index.php/ICAPS/article/view/16009) and now working with V-JEPA2, I see the appeal of both paradigms.

World models feel more principled - you learn how the world works, then reason about it. But VLAs are pragmatic - they work, they're fast, and language is how humans specify tasks.

The future isn't one or the other. It's systems that can:
1. **Understand physics** (world models)
2. **Follow instructions** (VLAs)
3. **Plan efficiently** (amortized policies)
4. **Generalize broadly** (foundation model pretraining)

We're in the early days of figuring out how to combine these pieces.

---

*This concludes the World Models series. Part of my research for CMU's 11-977 Multi-Modal ML course. [Reach out](mailto:contactme.teja@gmail.com) with questions or thoughts.*
