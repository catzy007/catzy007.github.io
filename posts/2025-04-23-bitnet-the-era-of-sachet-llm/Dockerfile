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
  -cnv -t $(nproc) -c 2048 -temp 18