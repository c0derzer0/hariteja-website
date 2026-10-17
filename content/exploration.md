---
title: "Work"
type: page
---

The thread running through my work is systems that learn from feedback and make decisions over time. Here's what I've built, starting with what I'd most want you to see.

---

## Agents That Improve Themselves

*Didero · 2025 to now*

**Problem:** Every procurement customer runs their workflows a little differently: who gets notified when a purchase order goes out, which mismatches need a person, what can be accepted automatically. The fixed pipelines in place broke on each variation, so every new customer meant custom engineering.

I was the first on the team to push for an agentic architecture, and I architected the core agent platform that replaced the pipelines. It adapts to each customer's workflow through configuration instead of a rebuild, and it became the foundation of Didero's Series A.

The next bottleneck was evaluation. Writing test cases by hand for each new customer took days. I designed a closed loop to replace that and led the build: a generator and a reviewer improve the agent's prompts until they're ready to ship, a person approves each change, and accepted cases become regression tests automatically. Rejected cases from production get clustered, an agent proposes a likely cause and a fix for each cluster, and the proposed rule goes to the team for review.

Along the way I built the in-house tracing system the loop runs on, started the browser agents that reach customer systems with no API, and built a freight-invoice audit agent that was the top project at an internal hackathon.

---

## Recurrent Sum-Product-Max Networks

*University of Georgia, THINC Lab · 2018 to 2021*

**Problem:** Neural networks for sequential decision-making are powerful but opaque, and they need a lot of data. I wanted models you could inspect that still made good decisions with less data.

I invented RSPMNs, which learn an environment's dynamics as a probabilistic graphical structure and compute exact Bellman updates, and implemented them end to end. They outperformed contemporary deep-learning baselines on sequential decision-making benchmarks. The work was published at ICAPS 2021 (first author) and IJCAI 2021, with collaborators at UGA and the University of Waterloo, and researchers at other labs, including a group at MIT, reached out to build on the open-source code.

[Paper](https://ojs.aaai.org/index.php/ICAPS/article/view/16009) · [Code](https://github.com/c0derzer0/RSPMN)

---

## Building Earth from Pixels

*Geopipe (acquired by NBCUniversal) · 2021 to 2023*

**Problem:** Modeling a city in 3D by hand takes months. Geopipe set out to generate accurate 3D cities automatically from aerial imagery, for games and simulation.

I joined as the fourth full-time hire. I worked on the first-generation model, the Neural Building Printer (a Pix2PixHD-based GAN), improving it from rough reconstructions to usable 3D geometry. On its successor, the ViT-based Neural Building Painter, I'm one of the named inventors on a pending patent. My contributions there included extending 2D IoU into a 3D IoU loss that improved training stability and accuracy. I also vectorized the data preprocessing for a roughly 120x speedup.

[See it in action](https://www.geopipe.ai/download)

---

## World Models for Robot Control

*Carnegie Mellon University · 2026*

**Problem:** Can a model that predicts what happens next help a robot arm follow language instructions over long tasks?

I led our team's world-models research on VLA-Arena, a benchmark of 170 language-conditioned manipulation tasks. I designed the team's main world-model setup and the experimental framework the others built on. The clearest finding: three very different visual backbones (DINOv2, V-JEPA and Cosmos) all hit the same performance ceiling, so the bottleneck was how the world model was used, not the encoder. In a low-data regime, world models helped more as conditioning for the policy than as planners.

[Read the World Models series](/posts/what-is-a-world-model/)

---

## Teaching Small LLMs to Navigate the Web

*Carnegie Mellon University · 2025*

**Problem:** Large LLMs can use a browser, but they're expensive to run. Can a 3B model learn to do it?

I fine-tuned LLaMA 3.2 (3B) on browser tool-call traces I generated with GPT-4.1 and Browser-Use, converted to LLaMA's tool-calling format and trained with Unsloth. It went from 0% to reliably handling the basics: entering URLs, filling forms, clicking buttons. Full multi-step tasks mostly still failed, usually because long sequences ran out of context, which is a real limit for small models on agentic work.

[Model](https://huggingface.co/hiddenVariable/llama_3.2_3b_instruct_web_navigation) · [Code](https://github.com/c0derzer0/web-nav)

---

## Deep Research Before Deep Research

*Andiron AI · 2024*

**Problem:** Search gives you links. I wanted a system that would actually research a topic: read many sources, combine what they say, and write it up.

Several months before OpenAI released Deep Research, I built a multi-agent system with RAG and web search that broke a question into parts, crawled the web, and synthesized a report. The lesson that stuck: agents do better work when they're allowed to take their time. I also redesigned a keyword-research pipeline that took 30 minutes and 128 GB of RAM so it ran on demand in under 4 GB.

---

## Deep Learning from Scratch

*Carnegie Mellon University · 2025*

To understand what happens inside PyTorch, I rebuilt the core of it in MiniTorch through CMU's LLM Systems courses: tensors, autograd and training loops, then CUDA kernels for matrix operations and attention, then full LLM pretraining and evaluation pipelines.

[GPU Programming Foundations](/posts/gpu-programming-foundations/) · [Code](https://github.com/c0derzer0/llmsys_f25_hw1/tree/hari-assignment-1)

---

## Open Source

- Extended SPFlow to handle influence diagrams for decision-making ([code](https://github.com/c0derzer0/SPFlow))
- Implemented Sum-Product-Max Networks from a University of Waterloo paper
- Built custom RL environments for the RSPMN research

---

## What I'm Working On Now

**Agent memory that knows how sure it is.** Storing what an agent knows as beliefs with probabilities, weighted by how trustworthy each source has proven. [Read the series](/posts/memory-and-learning-for-agents/)

**Economics from Scratch.** Learning economics from the definitions up, building toward what AI does to work and value. [Start here](/posts/economics-wealth-value-growth/)

**Self-improving agents at Didero.** Extending the feedback loop so agents keep getting better from what happens in production.

---

If you want to talk about any of this, [email me](mailto:contactme.teja@gmail.com).
