#### Running Large language Model Locally
_Tuesday, May 30, 2023_

---------
```
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
make
```

```
python3 -m pip install torch numpy sentencepiece
```

Grab yourself a copy of original LLAMA weight 
then put it in `llama.cpp/models/`. In my case, 
i only grab 7B weight, tokenizer_checklist.chk 
and tokenizer.model.
```
ls ./models
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

-----------------------

git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp

python3 -m pip install -r requirements.txt

python3 convert.py models/7B/

./quantize ./models/7B/ggml-model-f16.bin ./models/7B/ggml-model-q4_0.bin q4_0
