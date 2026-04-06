---
title: "V-JEPA Internals: Building My Understanding"
tags: ["Robotics", "AI", "World Models", "V-JEPA", "Self-Supervised Learning"]
date: 2026-04-05
draft: false
series: "World Models"
series_order: 4
summary: "Going back through V-JEPA's encoder, predictor, and target encoder in detail — the mechanics of masking, EMA, stop-gradient, and why collapse prevention is harder than it looks."
---

*This is Part 4 of my [World Models series](/posts/what-is-a-world-model). Part 1 covers [foundations](/posts/what-is-a-world-model), Part 2 explores [V-JEPA2 for robot learning](/posts/world-models-for-robot-learning), Part 3 compares [world models vs VLAs](/posts/world-models-vs-vla).*

---

I've been reading the [LeWorldModel paper](https://arxiv.org/abs/2603.19312) this week — a new JEPA from Yann LeCun's group at NYU and Mila. On the surface it looks like a cleaner V-JEPA. But to appreciate what it changed, I wanted to make sure I had a sharp picture of V-JEPA's internals — the kind of detail that's easy to gloss over when you first learn it.

This post is me going back through those details carefully. The next post covers what LeWorldModel does differently and why it matters.

---

## First: What is the encoder actually doing?

In V-JEPA, the encoder is a Vision Transformer (ViT). ViT doesn't process pixels one at a time — it chops an image into fixed-size patches, typically 16×16 pixels, and treats each patch as a token.

For a 224×224 image:

```
224 / 16 = 14 patches wide
224 / 16 = 14 patches tall
14 × 14 = 196 tokens per frame
```

Now extend that to a video clip of 16 frames. V-JEPA doesn't process each frame independently — it groups patches across frames into 3D blocks called **tubelets**. A tubelet spans 2 frames × 16×16 pixels, so it covers space and time simultaneously.

```
16 frames / 2 = 8 temporal positions
8 × 196 = 1568 total tubelet tokens per clip
```

That's the raw count. Then V-JEPA masks ~90% of them, leaving around 150 visible tokens to work with. The predictor has to reconstruct the rest — up to 1400 hidden tokens — from those 150 visible ones.

This is where the compute problem starts. The predictor is a transformer. Transformers have O(n²) attention complexity. Processing 1400+ tokens simultaneously is expensive.

---

## Wait — there are three separate components?

Yes, and this confused me too. They're easy to conflate.

**The online encoder (θ):** Takes raw pixels as input. Converts visible patch tokens into embeddings. It's a ViT. Its only job is to turn pixels into vectors.

**The predictor (P):** Takes embeddings as input. Never sees pixels. Its job is to look at the embeddings of visible patches and predict what the hidden patches should look like — entirely in latent space.

**The target encoder (θ̄):** An EMA copy of the encoder, but frozen with respect to gradients. It sees all tokens (including hidden ones) and produces the targets that the predictor is trying to match.

```
pixels → [online encoder θ] → 150 embeddings
                                      ↓
                               [predictor P] → predicted embeddings for hidden patches
                                                        ↕ compare (L1 loss)
pixels → [target encoder θ̄] → embeddings for all 1568 tokens
```

The online encoder and predictor together form the "student." The target encoder is the "teacher." Gradients flow through the student. They do not flow through the teacher.

---

## Why does this training setup make the encoder learn anything useful?

The masking task puts pressure on the encoder. To predict what a hidden tubelet looks like, the predictor needs embeddings that capture spatial structure, object relationships, temporal motion — because there's no way to guess a hidden patch without understanding context.

If the encoder produces garbage embeddings, the predictor can't predict anything, loss is high, gradients push the encoder to do better. The predictor is a demanding customer during training.

After training, you throw the predictor away. The encoder has already internalized rich visual features — those features were forced by the prediction task. You then use the encoder's embeddings for downstream tasks: action prediction, goal reaching, etc.

---

## But then why doesn't the network just collapse?

Here's the subtle part. If you just train an encoder to predict its own future embeddings with MSE loss, the network finds a trivial solution: map every input to the same vector (say, all zeros). Predicted embedding = zero, target embedding = zero, loss = zero. Problem "solved" but the encoder has learned nothing.

V-JEPA prevents this with two tricks:

**Stop-gradient:** When computing the loss, don't backpropagate through the target encoder side. The target is treated as a fixed constant during the backward pass. This breaks the "both sides collapse together" shortcut — the target can't cooperate with the prediction to cheat.

**EMA (Exponential Moving Average):** The target encoder θ̄ isn't trained directly. Instead it's updated as a slow-moving average of the online encoder:

```
θ̄ ← m · θ̄ + (1 - m) · θ     where m ≈ 0.996
```

This gives the predictor a stable, slowly-moving target rather than one that jumps around every gradient step.

Both of these are heuristics. They work empirically, but there's no formal proof they prevent collapse. You can't write down a loss function that EMA + stop-gradient is provably minimizing.

The V-JEPA2 paper ([arXiv:2506.09985](https://arxiv.org/abs/2506.09985)) states this directly: *"The loss uses a stop-gradient operation, sg(·), and an exponential moving average, θ̄ of the weights θ of the encoder network to prevent representation collapse."* The full training objective is:

```
minimize_{θ,ϕ,Δy}  ||P_ϕ(Δy, E_θ(x)) − sg(E_θ̄(y))||₁
```

Where x is the masked view, y is the unmasked view, Δy are learnable mask tokens, and sg() is the stop-gradient. That's the entire loss — a single L1 term. No VICReg, no variance/covariance regularization. Just L1 regression with EMA + stop-gradient doing all the collapse prevention work.

---

## Why this matters for the next post

Understanding these mechanics is essential for appreciating what LeWorldModel changes. LeWorldModel removes:

- The target encoder entirely (no EMA copy)
- Stop-gradient (gradients flow through everything)
- Masking (no hidden patches to predict)

And replaces all of it with a single statistical regularizer that has a provable anti-collapse guarantee.

How that works is [Part 5](/posts/sigreg-the-anti-collapse-trick). Then [Part 6](/posts/lewm-vs-vjepa-what-changed) covers the full LeWorldModel architecture.

---

*Part of my [World Models series](/posts/what-is-a-world-model). Previous: [Part 1: What is a World Model?](/posts/what-is-a-world-model), [Part 2: World Models for Robot Learning](/posts/world-models-for-robot-learning), [Part 3: World Models vs VLAs](/posts/world-models-vs-vla).*
