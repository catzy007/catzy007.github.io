#### BitNet: The Era of Sachet LLM?
_Friday, April 25, 2025_

Recently Microsoft released an open-source Large Language Model (LLM) called BitNet. 
Currently, this model doesn't sit in the top chart what it does is quite interesting. 
BitNet uses 
[Ternary Weights](https://arxiv.org/pdf/2402.17764) 
(1 bit, or more like 1.5 bit) which store its value as {-1,0,1} compared to a regular 
LLM that uses 32 or 16 bit (FP32, FP16) this meant that BitNet uses less memory, 
require less energy and possibly able to run in a mobile hardware. As a side note, 
Microsoft isn't new in the AI space it is one of the 
[early investor in OpenAI](https://openai.com/index/microsoft-invests-in-and-partners-with-openai/) 
they also the one behind Copilot and GitHub Copilot.

With all of that out of the way, let's try it. First, i follow the instructions from 
[BitNet GitHub page](https://github.com/microsoft/BitNet) to spice it up i also build 
a custom Docker image with Alpine as the base image.

```
FROM alpine:3.21

MAINTAINER multiverse.bagussaputra@gmail.com

ENV PIP_BREAK_SYSTEM_PACKAGES 1
RUN apk update && apk upgrade &&\
   apk add nano git python3-dev py3-pip cmake clang18 alpine-sdk

WORKDIR /home/bitnet

RUN git clone --recursive https://github.com/microsoft/BitNet.git /home/bitnet
RUN pip install -r requirements.txt
RUN huggingface-cli download microsoft/BitNet-b1.58-2B-4T-gguf --local-dir models/BitNet-b1.58-2B-4T

RUN python setup_env.py -md models/BitNet-b1.58-2B-4T -q i2_s

CMD python run_inference.py \
  -m models/BitNet-b1.58-2B-4T/ggml-model-i2_s.gguf \
  -p "Hello from BitNet what can i help you today?" \
  -cnv -t $(nproc) -c 2048
```

![video](./posts/2025-04-23-bitnet-the-era-of-sachet-llm/vid1.mp4)

![img_xl](./posts/2025-04-23-bitnet-the-era-of-sachet-llm/img1.png)

![img_xl](./posts/2025-04-23-bitnet-the-era-of-sachet-llm/img2.png)

The result is interesting, using the command below i was able to get around 14 to 16 
tokens per second while using about 200 MB of RAM all of this without the help of a 
mighty GPU and NPU accelerator. As for context, average human reading speed is 5-7 
tokens per second, regular 7B LLM with full precision (FP32) require about 28 GB of 
memory (7B * 4 Bytes) (GPT-4 around 1.76T) while current iPhone 16 has 8 GB of RAM.

```
python run_inference.py \
  -m models/BitNet-b1.58-2B-4T/ggml-model-i2_s.gguf \
  -p "Hello from BitNet what can i help you today?" \
  -cnv
```

Then i suddenly remember a scene from a k-drama called 
[Start-Up](https://www.imdb.com/title/tt12867810/)
when they run object detection (similar to AlexNet) in Raspberry Pi. This make me 
think can i run BitNet in Raspberry Pi? Apparently 
[someone already did](https://www.youtube.com/watch?v=3q_ItuNNpmY) 
it with RPI4 2 GB. Will it work in RPI3 1 GB? Well let's find out. Somehow the alpine 
based image that i previously use doesn't work in arm64 therefore i need to rewrite 
the entire thing form scratch.

:::details
::summary[Dockerfile.debian]
```
FROM python:3.9-slim-bullseye

MAINTAINER multiverse.bagussaputra@gmail.com

ENV PIP_BREAK_SYSTEM_PACKAGES=1
RUN apt-get update && apt-get upgrade -y &&\
   apt-get install -y nano git wget lsb-release software-properties-common gnupg cmake build-essential

RUN wget -O - https://apt.llvm.org/llvm.sh | bash -s 18
ENV CC=clang-18
ENV CXX=clang++-18

WORKDIR /home/bitnet

RUN git clone --recursive https://github.com/microsoft/BitNet.git /home/bitnet
RUN pip install -r requirements.txt
RUN huggingface-cli download microsoft/BitNet-b1.58-2B-4T-gguf --local-dir models/BitNet-b1.58-2B-4T

RUN python setup_env.py -md models/BitNet-b1.58-2B-4T -q i2_s

CMD python run_inference.py \
    -m models/BitNet-b1.58-2B-4T/ggml-model-i2_s.gguf \
    -p "Hello from BitNet what can i help you today?" \
    -cnv -t $(nproc) -c 2048
```
:::
::br

It works! Barely. The best i can get is 0.02 tokens per second not even useable while 
my laptop got around 16 token per second. To be fair, RPI3 was released 9 years ago 
with 4 Cortex-A53 cores running at 1.2 Ghz comparable to a cheap smartphone today. 
With newer SoC, advanced ISA, higher clock speed, uses of GPU acceleration with 
kompute or even NPU accelerator may bring the performance to an acceptable level for 
daily usage and maybe one day everyone carries their own LLM.

![img_lg](./posts/2025-04-23-bitnet-the-era-of-sachet-llm/img3.png)