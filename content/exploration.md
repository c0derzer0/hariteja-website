I've spent years chasing a simple question: how does intelligence emerge from computation?

This has taken me from inventing probabilistic architectures to writing CUDA kernels at 3am, from fine-tuning LLMs to building multi-agent systems.

---

## Building Earth from Pixels

**Problem:** Creating 3D city models manually takes months. Game studios and simulation companies needed a faster way to generate accurate urban environments.

At Geopipe, we set out to recreate the entire Earth in 3D from aerial photos. I developed neural architectures inspired by Pix2PixHD that transform satellite imagery into detailed 3D city models. I also designed a custom 3D IoU loss function by extending 2D IoU, which improved reconstruction accuracy.

One thing I'm proud of: refactoring data preprocessing from nested loops to vectorized operations gave us a 120x speedup. This work led to a patent and powers digital twins of major cities.

[See it in action](https://www.geopipe.ai/download)

---

## Probabilistic Reasoning

**Problem:** Neural networks for RL are powerful but opaque. You can't inspect why they make decisions, and they need tons of data. I wanted models that could reason about sequential decisions with interpretability and sample efficiency.

This led me to invent RSPMNs - Recurrent Sum-Product-Max Networks. They learn environment dynamics as a graphical structure and compute exact Bellman updates, outperforming neural baselines on planning tasks. Published at ICAPS and IJCAI, built in collaboration with UGA and University of Waterloo.

[Paper](https://ojs.aaai.org/index.php/ICAPS/article/view/16009) | [Code](https://github.com/c0derzer0/RSPMN)

---

## Teaching Small LLMs to Navigate the Web

**Problem:** Large LLMs can use tools, but they're expensive to run. Can a 3B model learn to navigate websites autonomously?

I fine-tuned LLaMA-3.2B to become a web navigator. Collected training data using GPT-4.1 with Browser-Use, converted it to LLaMA's tool-calling format, and trained with Unsloth.

Starting from complete failure (0% success), I got it to reliably handle basic navigation: clicking buttons, filling forms, visiting URLs. Runs locally via Ollama.

[Model](https://huggingface.co/hiddenVariable/llama_3.2_3b_instruct_web_navigation) | [Code](https://github.com/c0derzer0/web-nav)

---

## Deep Research Before Deep Research

**Problem:** Traditional search gives you links. I wanted a system that could actually research a topic - read multiple sources, synthesize information, and produce a coherent report.

Months before OpenAI released their Deep Research feature, I built a similar system using RAG and web search. Multiple LLM agents that decompose queries, crawl the web, and synthesize findings.

The key insight was letting agents take their time instead of forcing immediate responses. Depth requires patience.

---

## Procurement Agents

**Problem:** Procurement teams drown in emails and PDFs - purchase orders, invoices, order acknowledgments. Matching them manually is tedious and error-prone.

At Didero, I built the AI stack for procurement automation: agents that extract data from documents, match POs to order acknowledgments, and follow up with suppliers via email.

The email reasoning engine I designed adds learned patterns to a skills repository, expanding its capabilities with each interaction.

---

## Understanding Deep Learning from Scratch

**Problem:** I wanted to actually understand what happens inside PyTorch, not just use it as a black box.

I'm implementing PyTorch from the ground up through CMU's LLM Systems courses - tensor operations, gradient calculations, CUDA kernels, all by hand. Finished GPU programming last semester. This semester I'm taking Multimodal ML, where I'm exploring world models for robotics.

[Follow the journey](https://github.com/c0derzer0/llmsys_f25_hw1/tree/hari-assignment-1)

---

## Open Source

- Extended SPFlow to handle Influence Diagrams for decision-making
- Implemented Sum-Product-Max Networks from a University of Waterloo paper
- Created custom RL environments for RSPMN research

[SPFlow extensions](https://github.com/c0derzer0/SPFlow)

---

## What I'm Working On Now

**World Models** - Researching V-JEPA2 and comparing world models to VLAs for robotics. [Read the series](/posts/what-is-a-world-model)

**Multimodal ML** - CMU course exploring vision-language models and their applications.

**Continuous Learning in Enterprise** - Building continuous learning systems at Didero and collecting data trajectories to make RL possible in sandbox environments for model fine-tuning in the supply chain vertical.

---

## Let's Talk

If you want to chat about probabilistic models, how to make AI systems work in production, or anything else - reach out.

[email](mailto:contactme.teja@gmail.com)
