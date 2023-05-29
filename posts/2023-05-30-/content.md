#### Running Large language Model Locally
_Tuesday, May 30, 2023_

The main goal of this post is to set up and run a 
Large Language Model (LLM) called 
[LLAMA](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/) 
which developed by Meta (Facebook) 
and released to the public in late February 2023. 
Other LLAMA-based LLM is also available such as 
[Alpaca](https://arxiv.org/pdf/2303.16199.pdf), 
[GPT4ALL](https://static.nomic.ai/gpt4all/2023_GPT4All-J_Technical_Report_2.pdf), 
[Vicuna](https://lmsys.org/blog/2023-03-30-vicuna/) 
and many others. As for system requirements, Modern 
multi-core CPU and at least 16GB of system memory 
with 32GB of disk space is required to run 7B model. 
While you can substitute 16GB of ram with disk swap, 
it is not covered in this post.
```
$ free -h
               total        used        free      shared  buff/cache   available
Mem:            11Gi       3,5Gi       3,4Gi       1,3Gi       4,8Gi       6,6Gi
Swap:           23Gi          0B        23Gi
```

In this post we're going to use 
[llama.cpp](https://github.com/ggerganov/llama.cpp) 
which allow us to run LLAMA-based LLM locally using CPU. 
llama.cpp is written in C++ instead of usual python. 
It also uses tensor library called 
[GGML](https://github.com/ggerganov/ggml). 
As a word of warning, llama.cpp is have change their 
quantization format multiple times and sometimes 
previous quantization format no longer work and need 
to be re-quantized.

-----------------------
First, clone the llama.cpp repository, and compile 
the binary. Then install the required python dependency. 
Python is used for initial conversion and quantization 
of weight.
```
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
python3 -m pip install torch numpy sentencepiece
make
```

Grab yourself a copy of original LLAMA weight 
then put it in `llama.cpp/models/`. In my case, 
i only grab 7B weight, tokenizer_checklist.chk 
and tokenizer.model.
```
$ ls ./models
7B tokenizer_checklist.chk tokenizer.model
```

The original LLAMA weight is in PyTorch `pth` 
file format while llama.cpp requires ggml bin 
format therefore a conversion is required.
```
python3 convert-pth-to-ggml.py models/7B/ 1
```
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-05-30-/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

The original LLAMA weight uses 16-bit precision 
this require 
[immense amount of computational and memory](https://brainchip.com/4-bits-are-enough/). 
For our use case, we're going to convert 
it down (quantize) to 4-bit precision. While in 
theory we lost some precision it is not gonna matter 
for our use cases also the computation and memory 
requirement is significantly reduced.
```
python3 quantize.py 7B
```
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-05-30-/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Then you can run the following example.
```
./main -m ./models/7B/ggml-model-q4_0.bin -p "Building a website can be done in 10 simple steps:" -n 512
```

-----------------------
Above is an older method to run llama.cpp below is the 
latest one at least at the time of writing.
```
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
python3 -m pip install -r requirements.txt
make
python3 convert.py models/7B/
./quantize ./models/7B/ggml-model-f16.bin ./models/7B/ggml-model-q4_0.bin q4_0
./main -m ./models/7B/ggml-model-q4_0.bin -p "Building a website can be done in 10 simple steps:" -n 512
```
