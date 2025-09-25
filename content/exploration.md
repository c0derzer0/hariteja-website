I've spent years chasing a simple question: how does intelligence emerge from computation?

This pursuit has taken me from inventing new probabilistic architectures to writing CUDA kernels at 3am, from fine-tuning LLMs to building multi-agent systems that somehow develop their own strategies.

---

## Building Earth from Pixels

At Geopipe, we had an audacious goal: recreate the entire Earth in 3D from aerial photos. I developed neural architectures inspired by Pix2PixHD that could transform flat satellite imagery into detailed 3D city models.

Some breakthroughs came from vectorization - achieving a 120x speedup in data preprocessing that made it practical to train entire cities. This work led to a patent and used for major urban areas.

[See it in action](https://www.geopipe.ai/download)

---

## The Journey into Probabilistic Reasoning

My fascination with intelligence led me to RSPMNs - Recurrent Sum-Product-Max Networks. Traditional neural networks are powerful but opaque. I wanted something different: structured probabilistic models that could reason about sequences and make decisions we could actually understand.

The result? A novel architecture that learns to play games, navigate environments, and make sequential decisions while maintaining interpretability. We published this at ICAPS and IJCAI, but what excites me most is seeing other researchers build on these ideas.

[Dive into the paper](https://ojs.aaai.org/index.php/ICAPS/article/view/16009) | [Explore the code](https://github.com/c0derzer0/RSPMN)

---

## Teaching Machines to Navigate the Web

Have you ever watched someone use a computer and thought - why can't the computer just do this itself? I fine-tuned LLaMA-3.2B to become an autonomous web navigator. Starting from complete failure (0% success), I taught it to click buttons, fill forms, and navigate complex websites with 85% accuracy.

The magic wasn't in the model size - it was in understanding how to translate Large LM browsing patterns into something a small language model could learn.

[Try the model](https://huggingface.co/hiddenVariable/llama_3.2_3b_instruct_web_navigation) | [Explore the code](https://github.com/c0derzer0/web-nav)

---

## The Art of Procurement Automation

I architected AI agents that transformed procurement from paperwork to conversation. These agents don't just extract data - they reason about it, follow up with suppliers, and evolve their skills over time.

The email reasoning engine I designed adds learned patterns to a skills repository, expanding its capabilities with each interaction. I'm writing about these techniques in an upcoming blog post on building effective AI agents.

---

## The Multi-Agent Revolution

Before OpenAI's Deep Research made headlines, I was building multi-agent systems that could conduct deep market research autonomously. Using RAG and tool calling, these agents learned to collaborate, dividing complex research tasks among specialists and synthesizing insights.

The breakthrough insight: instead of forcing instant responses like traditional LLMs, these agents could take their time. They'd decompose queries into keywords, crawl through layers of web information, and use RAG to filter signal from noise. This wasn't common practice back then - most people expected immediate answers. I realized that depth required patience.

 More on this architecture in my upcoming blog post on building effective AI agents.

 ---

## Understanding Deep Learning from Scratch

Sometimes you need to go back to basics. I'm building MiniTorch - implementing PyTorch from the ground up. Every tensor operation, every gradient calculation, every CUDA kernel written by hand. It's like taking apart a watch to understand time itself.

There's something beautiful about implementing backpropagation in pure Python, then watching it come alive on GPUs through custom CUDA kernels.

[Follow the journey](https://github.com/c0derzer0/llmsys_f25_hw1/tree/hari-assignment-1)

---

## Extending the Boundaries

I've contributed to open source projects that push the boundaries of what's possible:

- Extended SPFlow to handle Influence Diagrams - bringing decision-making to probabilistic models
- Implemented Sum-Product-Max Networks from a University of Waterloo paper - making tractable decision-making accessible
- Created custom RL environments for research - because sometimes you need to build the playground before you can play

[Explore SPFlow extensions](https://github.com/c0derzer0/SPFlow)

---

## What's Brewing Now

Currently, I'm obsessed with a few things:

**GPU Kernel Optimization** - There's zen in making transformers run 10x faster through custom CUDA implementations. Each optimization feels like solving a puzzle.

**Exploring Mojo** - Diving into [Mojo](https://www.modular.com/mojo), a new language that promises Python simplicity with systems-level performance. The potential for AI development is fascinating.

**The Nature of Intelligence** - Whether it's artificial or biological, I'm fascinated by how simple rules create complex behavior. From neurons to transformers, from ant colonies to language models.

--- 

## Let's Talk

I love conversations that start with "what if" and end with working code. Whether you're curious about probabilistic models, want to discuss consciousness emerging from computation, or need help making AI systems actually work in production - let's explore together.

[email](mailto:contactme.teja@gmail.com)