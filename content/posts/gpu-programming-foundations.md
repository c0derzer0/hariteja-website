---
title: "GPU Programming Foundations: Breaking Down the Barriers"
date: 2025-01-24
tags: ["GPU", "CUDA", "Programming", "Tutorial"]
draft: true
summary: "GPU programming often feels intimidating with terminology like threads, blocks, warps, and SMs. But at its core, it's about one beautiful idea: breaking big problems into thousands of tiny parallel tasks."
---

GPU programming often feels intimidating with terminology like threads, blocks, warps, and SMs. But at its core, it's about one beautiful idea: **breaking big problems into thousands of tiny parallel tasks**.

Let me demystify these concepts and show you why GPU programming is more accessible than you think.

## Why GPUs? The Kitchen Analogy

Think of it this way:
- **CPUs** are like a few master chefs - incredibly skilled, can do complex tasks, but limited in number (4-16 cores typically)
- **GPUs** are like hundreds of sous-chefs - each less sophisticated, but when working together on simple, repetitive tasks, they're unstoppable (thousands of cores)

When you're chopping 10,000 onions, would you rather have 4 master chefs or 1,000 sous-chefs?

## Core Concepts

### 1. Host vs Device

This is your first mental model:
- **Host** = Your CPU and its memory (RAM)
- **Device** = Your GPU and its memory (VRAM)

Data lives on the host by default. To use the GPU, you:
1. Allocate memory on the device
2. Copy data from host → device
3. Run your computation
4. Copy results back device → host

```cuda
// Allocate device memory
cudaMalloc(&d_array, size);

// Copy data to device
cudaMemcpy(d_array, h_array, size, cudaMemcpyHostToDevice);

// Run kernel (GPU function)
myKernel<<<blocks, threads>>>(d_array);

// Copy results back
cudaMemcpy(h_array, d_array, size, cudaMemcpyDeviceToHost);
```

### 2. Kernels: Your GPU Functions

A kernel is just a function that runs on the GPU. The magic? It runs **thousands of times in parallel**.

```cuda
__global__ void addOne(int *array, int n) {
    int idx = blockIdx.x * blockDim.x + threadIdx.x;
    if (idx < n) {
        array[idx] = array[idx] + 1;
    }
}
```

That `__global__` keyword? It means "this function can be called from CPU but runs on GPU."

### 3. The Hierarchy: Threads, Blocks, and Grids

Here's the mental model that clicked for me:

- **Thread** = One worker doing one task
- **Block** = A team of workers (up to 1024 threads) that can share resources
- **Grid** = The entire factory floor (all blocks)

When you launch a kernel:
```cuda
addOne<<<100, 256>>>(array, n);
// 100 blocks × 256 threads/block = 25,600 parallel workers!
```

### 4. Warps: The Hidden Reality

Here's what they don't tell you at first: threads don't actually execute independently. They move in lockstep groups of 32 called **warps**.

Think of it like synchronized swimmers - 32 threads doing the exact same instruction at the exact same time. This is why:
- Divergent branches (if/else) can hurt performance
- Memory access patterns matter enormously
- Understanding warps is key to optimization

### 5. Streaming Multiprocessors (SMs)

Each SM is like a mini-CPU inside your GPU. Modern GPUs have dozens of SMs, each can handle multiple blocks simultaneously.

Key insight: Your GPU doesn't actually run all threads at once. It schedules blocks to SMs, which then schedule warps for execution. It's a beautiful dance of parallelism.

## Memory Hierarchy: The Secret Sauce

Understanding GPU memory is crucial:

1. **Registers** (fastest, ~1 cycle): Private to each thread
2. **Shared Memory** (~5 cycles): Shared within a block - perfect for collaboration
3. **Global Memory** (~200-400 cycles): Accessible by all threads but slow

Pro tip: Coalesced memory access (when consecutive threads access consecutive memory) can be 10x faster than random access.

## Your First CUDA Program

Let's add two vectors. Simple, but illustrates everything:

```cuda
__global__ void vectorAdd(float *a, float *b, float *c, int n) {
    int idx = blockIdx.x * blockDim.x + threadIdx.x;

    if (idx < n) {
        c[idx] = a[idx] + b[idx];
    }
}

int main() {
    int n = 1000000;
    size_t size = n * sizeof(float);

    // Allocate host memory
    float *h_a = (float*)malloc(size);
    float *h_b = (float*)malloc(size);
    float *h_c = (float*)malloc(size);

    // Initialize vectors
    // ... fill h_a and h_b with data ...

    // Allocate device memory
    float *d_a, *d_b, *d_c;
    cudaMalloc(&d_a, size);
    cudaMalloc(&d_b, size);
    cudaMalloc(&d_c, size);

    // Copy inputs to device
    cudaMemcpy(d_a, h_a, size, cudaMemcpyHostToDevice);
    cudaMemcpy(d_b, h_b, size, cudaMemcpyHostToDevice);

    // Launch kernel
    int threadsPerBlock = 256;
    int blocksPerGrid = (n + threadsPerBlock - 1) / threadsPerBlock;
    vectorAdd<<<blocksPerGrid, threadsPerBlock>>>(d_a, d_b, d_c, n);

    // Copy result back
    cudaMemcpy(h_c, d_c, size, cudaMemcpyDeviceToHost);

    // Cleanup
    cudaFree(d_a); cudaFree(d_b); cudaFree(d_c);
    free(h_a); free(h_b); free(h_c);

    return 0;
}
```

## Grid-Stride Loops: Scaling to Any Size

Here's a pattern that changed how I write kernels:

```cuda
__global__ void gridStrideAdd(float *a, float *b, float *c, int n) {
    int idx = blockIdx.x * blockDim.x + threadIdx.x;
    int stride = blockDim.x * gridDim.x;

    for (int i = idx; i < n; i += stride) {
        c[i] = a[i] + b[i];
    }
}
```

This elegantly handles arrays of any size, even if they're bigger than your total thread count.

## The Journey Ahead

GPU programming is a superpower. Once these concepts click, you'll see opportunities everywhere:
- Machine learning training (PyTorch/TensorFlow use CUDA under the hood)
- Scientific computing (simulations that took days now take hours)
- Image/video processing (real-time filters and effects)
- Cryptography (parallel hash cracking)

## Resources to Go Deeper

- **My GitHub**: Check out my CUDA implementations and MiniTorch framework
- **NVIDIA's CUDA Guide**: The official docs are actually excellent
- **Jupyter Notebooks**: I've created interactive examples you can run in Colab

Remember: Every expert was once confused by these concepts. The key is to start simple, visualize the parallelism, and build up.

Have questions? Found this helpful? [Drop me an email](mailto:contactme.teja@gmail.com) - I love talking about this stuff!

---

*Next post: "Optimizing CUDA Kernels: From 100x to 1000x Speedups"*