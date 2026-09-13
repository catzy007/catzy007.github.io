### Daily Driving 35B LLM with 6GB VRAM
_Sunday, September 13, 2026_

Recently LLM has been integral part of my workflow. From generating simple query and basic code to reviewing hundreds of pages of documents alongside rows of historical data while doing background check and search at a same time and as you may guess it cost a lot of token. As a context, in the past week alone i burn around 628K token and according to some sources gpt-5.6-sol costs around 30 USD per 1M token and yes i did use the word “burn” because most of the world electricity comes from non renewable sources and you need to literally burn a hydrocarbon to get a token, but anyway i need a machine that i paid once and able produce unlimited token.

Before that i need to set a few constrains. First i want the output to be at least 14 tokens per second, then i want the LLM to at least able to do a basic research last i want to use inexpensive brand new hardware.

My approach for hardware is to get the cheapest RTX GPU that i can find which is Zotac RTX 3050 LP 6GB at the time of purchase (Feb26) i get it for around 168 USD. If I’m picking GPU today i may choose used RTX 3060 12GB, a new 8GB Radeon GPU or even a special 16/32GB Radeon GPU because llama.cpp vukan backend is actually quite good now. As for remaining hardware i use Thinkpad T14 Gen3 with 32GB RAM and Thunderbolt 3 GPU dock with 300W PSU. But i actually happy with my current setup because it sips power and it doesn’t turn my room into a sauna.

![img_md](./posts/2026-09-13-daily-driving-35b-llm-with-6gb-vram/07.jpg)

As for models i use Qwen 3.6 35B A3B unlike the traditional LLM that require the entire models to fit into a VRAM, Qwen 3.6 35B uses Mixture of experts (MoE) which means from a total of 35B parameters, only 3B active at a time. This is useful because only 3B sit in the VRAM while other stays in RAM until it is needed. Other than that, in my testing for such a small open model the output generation is not too bad.

For software and runtime i use latest version of LM Studio which at the time of writing is version 0.4.21 (Build 2) with Vulkan runtime v2.28.2. The older version had a bug with tool calling and it doesn’t have option to set thinking budget. As for tools i use datetime, rag-v1, and searxng-search.

![img_md](./posts/2026-09-13-daily-driving-35b-llm-with-6gb-vram/07.jpg)

For quantization i use Q4_K_M models and Q4_0 for KV cache, For context window i set it to 76K with 8192 thinking budget, repeat penalty 1.1, presence penalty 0.5, searxng result count 5 and rag retrieval limit 3.

![img_md](./posts/2026-09-13-daily-driving-35b-llm-with-6gb-vram/07.jpg)

With this setup i get about 19-20 token peak then it stabilize around 15-16 token per second and prompt processing around 116 token per second. Another note i did try unsloth models with MTP and for some reason i only get around 10 tokens per second maybe the 8GB card able to get a boost from MTP instead. Another thing i find interesting is that LLM token speed depends heavily on memory bandwidth in my case GPU utilization only sit around 40% because RTX 3050 6GB memory bandwidth is limited to 168 GBps compared to, for example a 5090 with 1.79 TBps memory bandwidth that means the core spent most of it’s time waiting for data instead of doing the actual compute.

What’s next, I would like to try newly release Bonsai 27B which is Qwen 3.6 27B quantized to ternary just like BitNet which in my calculation require at least 12GB of VRAM to daily drive also i would like to get my hands on GPU with 1 TBps memory bandwidth but that’s for another time.