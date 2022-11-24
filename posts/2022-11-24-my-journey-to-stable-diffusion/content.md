#### My Journey To Stable Diffusion
_Thursday, November 24, 2022_

**Decade old server, Polaris 11 GPU, and ROCm. What could go wrong?**

**Installing ROCm**

[ROCm Docker Quickstart](https://github.com/RadeonOpenCompute/ROCm-docker/blob/master/quick-start.md)

```
sudo apt-get update
wget https://repo.radeon.com/amdgpu-install/5.3/ubuntu/focal/amdgpu-install_5.3.50300-1_all.deb 
sudo apt-get install ./amdgpu-install_5.3.50300-1_all.deb
sudo amdgpu-install --usecase=rocm

# Add user to the render group if you're using Ubuntu20.04
sudo usermod -a -G render $LOGNAME

# To add future users to the video and render groups, run the following command:
echo 'ADD_EXTRA_GROUPS=1' | sudo tee -a /etc/adduser.conf
echo 'EXTRA_GROUPS=video' | sudo tee -a /etc/adduser.conf
echo 'EXTRA_GROUPS=render' | sudo tee -a /etc/adduser.conf 
```

Then reboot system. To test if ROCm is installed, run `rocm-smi`

```
======================= ROCm System Management Interface =======================
WARNING: No AMD GPUs specified
================================= Concise Info =================================
GPU  Temp  AvgPwr  SCLK  MCLK  Fan  Perf  PwrCap  VRAM%  GPU%  
================================================================================
============================= End of ROCm SMI Log =============================
```

But as you can see, no GPU compute device shows up. Next i run `rocminfo` and this 
is what i got.

<details>
<summary>&#9432; Click to show rocminfo output</summary>
```
ROCk module is loaded
=====================    
HSA System Attributes    
=====================    
Runtime Version:         1.1
System Timestamp Freq.:  1000.000000MHz
Sig. Max Wait Duration:  18446744073709551615 (0xFFFFFFFFFFFFFFFF) (timestamp count)
Machine Model:           LARGE                              
System Endianness:       LITTLE                             

==========               
HSA Agents               
==========               
*******                  
Agent 1                  
*******                  
  Name:                    Intel(R) Xeon(R) CPU           X5670  @ 2.93GHz
  Uuid:                    CPU-XX                             
  Marketing Name:          Intel(R) Xeon(R) CPU           X5670  @ 2.93GHz
  Vendor Name:             CPU                                
  Feature:                 None specified                     
  Profile:                 FULL_PROFILE                       
  Float Round Mode:        NEAR                               
  Max Queue Number:        0(0x0)                             
  Queue Min Size:          0(0x0)                             
  Queue Max Size:          0(0x0)                             
  Queue Type:              MULTI                              
  Node:                    0                                  
  Device Type:             CPU                                
  Cache Info:              
    L1:                      32768(0x8000) KB                   
  Chip ID:                 0(0x0)                             
  ASIC Revision:           0(0x0)                             
  Cacheline Size:          64(0x40)                           
  Max Clock Freq. (MHz):   2934                               
  BDFID:                   0                                  
  Internal Node ID:        0                                  
  Compute Unit:            12                                 
  SIMDs per CU:            0                                  
  Shader Engines:          0                                  
  Shader Arrs. per Eng.:   0                                  
  WatchPts on Addr. Ranges:1                                  
  Features:                None
  Pool Info:               
    Pool 1                   
      Segment:                 GLOBAL; FLAGS: FINE GRAINED        
      Size:                    6114824(0x5d4e08) KB               
      Allocatable:             TRUE                               
      Alloc Granule:           4KB                                
      Alloc Alignment:         4KB                                
      Accessible by all:       TRUE                               
    Pool 2                   
      Segment:                 GLOBAL; FLAGS: KERNARG, FINE GRAINED
      Size:                    6114824(0x5d4e08) KB               
      Allocatable:             TRUE                               
      Alloc Granule:           4KB                                
      Alloc Alignment:         4KB                                
      Accessible by all:       TRUE                               
    Pool 3                   
      Segment:                 GLOBAL; FLAGS: COARSE GRAINED      
      Size:                    6114824(0x5d4e08) KB               
      Allocatable:             TRUE                               
      Alloc Granule:           4KB                                
      Alloc Alignment:         4KB                                
      Accessible by all:       TRUE                               
  ISA Info:                
*******                  
Agent 2                  
*******                  
  Name:                    Intel(R) Xeon(R) CPU           X5670  @ 2.93GHz
  Uuid:                    CPU-XX                             
  Marketing Name:          Intel(R) Xeon(R) CPU           X5670  @ 2.93GHz
  Vendor Name:             CPU                                
  Feature:                 None specified                     
  Profile:                 FULL_PROFILE                       
  Float Round Mode:        NEAR                               
  Max Queue Number:        0(0x0)                             
  Queue Min Size:          0(0x0)                             
  Queue Max Size:          0(0x0)                             
  Queue Type:              MULTI                              
  Node:                    1                                  
  Device Type:             CPU                                
  Cache Info:              
    L1:                      32768(0x8000) KB                   
  Chip ID:                 0(0x0)                             
  ASIC Revision:           0(0x0)                             
  Cacheline Size:          64(0x40)                           
  Max Clock Freq. (MHz):   2934                               
  BDFID:                   0                                  
  Internal Node ID:        1                                  
  Compute Unit:            12                                 
  SIMDs per CU:            0                                  
  Shader Engines:          0                                  
  Shader Arrs. per Eng.:   0                                  
  WatchPts on Addr. Ranges:1                                  
  Features:                None
  Pool Info:               
    Pool 1                   
      Segment:                 GLOBAL; FLAGS: FINE GRAINED        
      Size:                    6152980(0x5de314) KB               
      Allocatable:             TRUE                               
      Alloc Granule:           4KB                                
      Alloc Alignment:         4KB                                
      Accessible by all:       TRUE                               
    Pool 2                   
      Segment:                 GLOBAL; FLAGS: KERNARG, FINE GRAINED
      Size:                    6152980(0x5de314) KB               
      Allocatable:             TRUE                               
      Alloc Granule:           4KB                                
      Alloc Alignment:         4KB                                
      Accessible by all:       TRUE                               
    Pool 3                   
      Segment:                 GLOBAL; FLAGS: COARSE GRAINED      
      Size:                    6152980(0x5de314) KB               
      Allocatable:             TRUE                               
      Alloc Granule:           4KB                                
      Alloc Alignment:         4KB                                
      Accessible by all:       TRUE                               
  ISA Info:                
*** Done ***
```
</details>

While my GPU is missing, as you can see both of my CPUs is listed 
instead so i decided to continue.

<br>
**Running under docker**

Here i'm using 
[AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) 
and create my own Docker Compose with corresponding Dockerfile.

<details>
<summary>&#9432; Click to show docker-compose.yml</summary>
```
version: '3'

services:
  stablediff-git:
    image: alpine/git:latest
    environment:
      TZ: "Asia/Jakarta"
      TARGET: "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    entrypoint: ["/bin/sh","-c"]
    command: >
      "if [ ! -d /git/.git ]; then
        git clone --depth 1 $${TARGET} /git
      fi"
    volumes:
      - ./stablediff-web:/git
  stablediff-web:
    build: .
    environment:
      TZ: "Asia/Jakarta"
      ROC_ENABLE_PRE_VEGA: 1
      REQS_FILE: "requirements.txt"
      TORCH_COMMAND: "pip install torch torchvision --extra-index-url https://download.pytorch.org/whl/rocm5.1.1"
    entrypoint: ["/bin/sh","-c"]
    command: >
      "/opt/rocm/bin/rocminfo;
      if [ -d /stablediff-web/.git ]; then
        python launch.py --precision full --no-half --skip-torch-cuda-test
      fi"
    network_mode: host
    devices:
      - "/dev/kfd:/dev/kfd"
      - "/dev/dri:/dev/dri"
    group_add:
      - video
    ipc: host
    cap_add:
      - SYS_PTRACE
    security_opt:
      - seccomp:unconfined
    volumes:
      - ./stablediff-web:/stablediff-web
```
</details>
<details>
<summary>&#9432; Click to show Dockerfile</summary>
```
FROM rocm/pytorch
ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONIOENCODING=UTF-8
WORKDIR /stablediff-web
RUN python -m pip install --upgrade pip wheel
RUN python -m pip install torch torchvision --extra-index-url https://download.pytorch.org/whl/rocm5.1.1
```
</details>

To run this, first do `docker-compose pull` this is going 
to take a while because 
[rocm/pytorch](https://hub.docker.com/r/rocm/pytorch/tags) 
compressed image size is around 10 GB and around 30 GB after extraction. 

Next do `docker-compose run stablediff-git` this will clone the 
required repository. You can access the code and config files from 
`stablediff-web` directory.

Then run `docker-compose build .` in my case, this will take additional 
5 GB of disk space to build. 

Don't forget to 
[download](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies#required-dependencies) 
and copy the ckpt model data to `stablediff-web/models/Stable-diffusion`. 
You may need sudo to do this.

Last, run `docker-compose run stablediff-web`.

<details>
<summary>&#9432; Click to show additional notes</summary>
* Because rocm/pytorch uses python 3.7, you need to edit 
`requirements_versions.txt` and change `numpy` to version 
`1.21.6` and `fairscale` to version `0.4.6`.
* In case you get ROCm GPU compute working, remove `--skip-torch-cuda-test` 
from `docker-compose.yml`.
* In order to run ROCm with RX400/500 GPUs, add `ROC_ENABLE_PRE_VEGA=1` to `/etc/environment`
</details>

<br>
**Is it working?**

Unfortunately after all of that, this is what i got.
```
Python 3.7.13 (default, Mar 29 2022, 02:18:16) 
[GCC 7.5.0]
Commit hash: 828438b4a190759807f9054932cae3a8b880ddf1
Installing gfpgan
Installing clip
Installing requirements for CodeFormer
Installing requirements for Web UI
Launching Web UI with arguments: --precision full --no-half
Illegal instruction (core dumped)
ERROR: 132
```

From the error message above, it seems like stable diffusion 
try to run using CPU which is correct because i could not get 
ROCm GPU compute working. My theory is that pytorch that been 
used in this instance only support AVX/AVX2 instruction set. 
Which is absent in my Westmere CPUs.

<br>
**What went wrong?**
