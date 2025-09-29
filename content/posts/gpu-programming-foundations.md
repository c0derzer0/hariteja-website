---
title: "GPU Programming Foundations: Breaking Down the Barriers Series"
tags: ["GPU", "CUDA", "Programming", "Tutorial"]
date: 2025-09-29
draft: false
summary: "GPU programming often feels intimidating with terminology like threads, blocks, warps, and SMs. But at its core, it's about one beautiful idea: breaking big problems into thousands of tiny parallel tasks."
---

GPU programming often feels daunting with terminology like threads, blocks, warps, and SMs. But at its core, it's about one core idea: **breaking big problems into thousands of tiny parallel tasks and solving them all at once**.

You already know this from your daily life. 

Imagine cooking a meal. You have several tasks: chopping vegetables, marinating protein, preparing sauces, cooking everything. If you're alone, you work sequentially—but even then, you're clever. You chop vegetables *while* the protein marinates. You prep the sauce *while* things cook. You're doing independent tasks in parallel with waiting time. You are essentially pipelining your work. 

Now imagine you have a partner. Suddenly, you split the work: one person chops vegetables while the other marinates the protein. One preps sauces while the other boils water. You've just doubled your throughput by working in parallel. This is the core idea of parallel computing—splitting one big job into independent tasks and finishing them simultaneously using multiple workers.
 
Let's make this concrete with a simple experiment. 

You have 10 numbers written on slips of paper: [2, 5, 8, 1, 9, 3, 7, 4, 6, 10]

Five people are available to help you add them all up. What's the fastest strategy? Think about this for a minute.

- Sequential: One person adds all 10 (slow)
- Naive parallel: Give 2 numbers to each person, they add their pair (better)
- Tree reduction: Pairs add, then pairs of results add, etc. (optimal)


## Where this series goes

In GPU programming, you are essentially coordinating thousands of these "workers" (called **threads**) to solve problems in parallel. But before we can launch an army of threads, we first need to load them up with the ammunition of data. For this, we need to understand something fundamental: **where does the data live?**

The CPU and GPU don't share memory—they are like two separate computers. The CPU has RAM and GPU has its VRAM, and you need to explicitly move data between them. In the next post, I'll show you exactly how this works with concrete examples, complete with memory diagrams showing where each pointer points. 

We'll start with the absolute basics: what `cudaMalloc` does, why you need both `h_A` and `d_A`, and the "copy dance" that every CUDA program must perform.

**Next in series:** Part 2: Host, Device, and the Memory Copy Dance