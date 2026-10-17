---
title: "CV"
type: page
summary: "Hari Teja Tatavarti: AI scientist and research engineer working on agentic systems, world models and reinforcement learning."
---

AI scientist and research engineer working on agentic systems, world models and learning systems. My work spans research (ICAPS, IJCAI, one of the named inventors on a pending patent) and production AI platforms.

[contactme.teja@gmail.com](mailto:contactme.teja@gmail.com) · [LinkedIn](https://linkedin.com/in/hari-teja-at-linkedn) · [GitHub](https://github.com/c0derzer0)

---

## Experience

### Senior Member of Technical Staff, AI

*Didero, New York · Jan 2025 to present*

- First on the team to push for an agentic architecture for customer-specific procurement workflows, replacing fixed pipelines that couldn't handle per-customer variation.
- Architected the core agent platform that enabled Didero's Series A and the onboarding of new enterprise customers. It adapts to each customer's workflow through configuration rather than a rebuild.
- Built and drove a closed-loop, self-improving agent platform that replaced hand-written evals, previously a multi-day bottleneck for every new customer.
- Built the in-house agent tracing system used for debugging, eval generation and as the input signal for optimization.
- Built a reflection-based prompt optimization system with a feedback analyzer that clusters production rejections into structured signals.
- Extended the platform with a continuous-learning loop, leading the team's implementation while building core pieces directly.
- Built a freight-invoice audit agent at an internal hackathon, chosen as the top project and later productized.
- Started the web-browsing agents that integrate with ERPs and other systems that have no API.

### AI Research Scientist

*Andiron AI, Washington, D.C. · Dec 2023 to Dec 2024*

- Built a RAG and web-search multi-LLM framework for deep market research and content generation, months before OpenAI's Deep Research.
- Prototyped a Voyager-inspired multi-agent system with AutoGen for self-directed SEO optimization.
- Cut a keyword research pipeline from 30 minutes and 128 GB of RAM to on-demand runs under 4 GB.

### Deep Learning Research Engineer

*Geopipe (acquired by NBCUniversal), New York · Apr 2021 to Oct 2023*

- One of the named inventors on a pending patent for the Neural Building Painter, Geopipe's ViT-based second-generation model for 3D reconstruction from aerial imagery and LiDAR.
- Worked on the Neural Building Printer (first generation, Pix2PixHD-based GAN, issued patent), improving output from rough reconstructions to usable 3D geometry.
- Extended 2D IoU into a 3D IoU loss that improved training stability and reconstruction accuracy.
- Sped up preprocessing roughly 120x by vectorizing matrix operations.
- Joined as the fourth full-time hire and worked closely with the Chief Science Officer on research direction and infrastructure.

### Graduate Research Assistant

*University of Georgia, THINC Lab · Aug 2018 to Apr 2021*

- Invented Recurrent Sum-Product-Max Networks (RSPMNs) for sequential decision-making and offline reinforcement learning, and implemented them end to end.
- Outperformed contemporary deep-learning approaches on sequential decision-making benchmarks across 7 custom RL environments.
- Published at ICAPS (first author) and IJCAI. Open-source code drew interest from peer labs, including a group at MIT.
- Contributed to securing NSF funding through grant writing and experimental planning.

### Systems Engineer

*Amex, TCS, Bengaluru · May 2015 to May 2017*

---

## Research and Projects

**World models for robot control** *(Carnegie Mellon, 2026).* Led our team's world-models research for language-conditioned robot arm control on VLA-Arena. Found that DINOv2, V-JEPA and Cosmos backbones all converged to the same ceiling, and that in low-data regimes world models work better as policy conditioners than as planners.

**Web navigation with a small LLM** *(Carnegie Mellon, 2025).* Fine-tuned LLaMA 3.2 (3B) for browser navigation from GPT-4.1 tool-call traces, taking it from 0% to reliable basic navigation. [Model](https://huggingface.co/hiddenVariable/llama_3.2_3b_instruct_web_navigation)

**LLM training infrastructure and GPU kernels** *(Carnegie Mellon, 2025).* Built MiniTorch (tensors, autograd, training loops), wrote CUDA kernels for matrix operations and attention, and implemented LLM pretraining and evaluation pipelines.

---

## Publications and Patents

- **Data-Driven Decision-Theoretic Planning using RSPMNs.** ICAPS 2021. [Paper](https://ojs.aaai.org/index.php/ICAPS/article/view/16009)
- **State-Based RSPMNs for Partially-Observable Sequential Decision Making.** IJCAI 2021.
- **Neural Building Painter** (ViT-based 3D reconstruction), Geopipe / NBCUniversal. Patent pending, one of the named inventors.
- **Neural Building Printer** (GAN-based 3D reconstruction), Geopipe / NBCUniversal. Issued patent, contributed after filing.

---

## Education

- **Graduate Specialization, Generative AI and LLM Systems.** Carnegie Mellon University, 2025 to 2026.
- **M.S., Artificial Intelligence.** University of Georgia, 2017 to 2020. ROOST Scholarship.
- **B.Tech., Electrical and Electronics Engineering.** SASTRA University, India, 2011 to 2015.

---

## Skills

- **Areas:** LLMs, agentic systems, reinforcement learning, world models, multimodal learning
- **ML:** PyTorch, TensorFlow, JAX, Hugging Face, Unsloth
- **Agents:** Pydantic-AI, AutoGen, CrewAI, LangGraph, DSPy, Browser-Use
- **Systems:** Python, C++, CUDA, Docker, AWS, GCP, Temporal, Langfuse

---

## Service

- Technical writing at this site, 2025 to present
- AI mentor, AI4All, 2022
- Organizer, ACM NYC, 2022 to 2023
- Teaching volunteer for primary school students in India, 2015 to 2017
