#### My Journey To Stable Diffusion
_Thursday, November 24, 2022_

Stable Diffusion is open-source deep learning image synthesis based on 
latent diffusion model. Stable diffusion developed by CompVis group at 
LMU Munich. Unlike DALL-E which require web service, everyone can run 
Stable Diffusion in their local machine using proper hardware. Stable 
Diffusion is recommended to be run with 10 GB or more VRAM, however 
optimization and tweak is available to run Stable Diffusion with less
VRAM. More info about how Stable Diffusion works.

[How AI Image Generators Work (Stable Diffusion / Dall-E) - Computerphile](https://www.youtube.com/watch?v=1CIpzeNxIhU)

[Stable Diffusion in Code (AI Image Generation) - Computerphile](https://www.youtube.com/watch?v=-lz30by8-sU)

[High-Resolution Image Synthesis with Latent Diffusion Models](https://openaccess.thecvf.com/content/CVPR2022/papers/Rombach_High-Resolution_Image_Synthesis_With_Latent_Diffusion_Models_CVPR_2022_paper.pdf)

[CompVis/latent-diffusion Github](https://github.com/CompVis/latent-diffusion)

There is also issues about Copyright infringement because anyone 
can train Stable Diffusion using image dataset found on the internet 
without respective artist consent.

Which mean that you can also train Stable Diffusion to any image dataset 
including anime character 
[oh wait, someone did](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion#using-pre-trained-embeddings).

<br>
**Decade old server, Polaris 11 GPU, and ROCm. What could go wrong?**

Here i'm going to use system consist of two Xeon X5670 with 12 GB of ECC RAM 
and Radeon RX 460 4 GB (Polaris 11) GPU. For software i'm using Ubuntu 22.04 
and (at the time of writing) the latest version of ROCm which is version 5.3.

The last time i'm using Radeon GPU for OpenCL compute i brick my Linux install 
and immediately switched to my Nvidia laptop using CUDA. But this time everything 
is better and easier which is an improvement.

<br>
**Installing ROCm**

First, follow [ROCm Docker Quickstart](https://github.com/RadeonOpenCompute/ROCm-docker/blob/master/quick-start.md)

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

Then reboot the system. To test if ROCm is installed, run `rocm-smi`

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
<summary>&#9432; Click to reveal rocminfo output</summary>
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
instead. Later i decided to continue.

<br>
**Running under docker**

Here i'm using 
[AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) 
and create my own Docker Compose with corresponding Dockerfile.

<details>
<summary>&#9432; Click to reveal docker-compose.yml</summary>
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
<summary>&#9432; Click to reveal Dockerfile</summary>
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
<summary>&#9432; Click to reveal additional notes</summary>
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

First, i want to know why ROCm GPU compute doesn't work in my 
system. I look around and found 
[ROCm/issues/1659](https://github.com/RadeonOpenCompute/ROCm/issues/1659) 
(at the time of writing this issues still in open status) 
apparently ROCm support for Polaris based GPUs is **not guaranteed** 
and i need to set `ROC_ENABLE_PRE_VEGA=1` workaround to get it working. 

I also found 
[ROCm Hardware and Software Support Reference Guide](https://docs.amd.com/bundle/Hardware_and_Software_Reference_Guide/page/Hardware_and_Software_Support.html) 
which stated that GFX8 GPUs require PCIe atomics which available on PCI Express 
3.0. This mean that you need to run this on 
[Intel Haswell 4th gen and above or AMD Zen 1st gen and above](https://github.com/ROCm/ROCm.github.io/blob/master/hardware.md#supported-cpus).

To prove this, i can run `sudo dmesg | grep kfd` and i should get 
`PCI rejects atomics` error message.
```
[    4.592356] kfd kfd: amdgpu: skipped device 1002:67ef, PCI rejects atomics 730<0
```

I also run `sudo lspci -s 08:00.0 -vvv` to see more info about my GPU.
<details>
<summary>&#9432; Click to reveal lspci output</summary>
```
08:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Baffin [Radeon RX 460/560D / Pro 450/455/460/555/555X/560/560X] (rev cf) (prog-if 00 [VGA controller])
	Subsystem: PC Partner Limited / Sapphire Technology Baffin [Radeon RX 460/560D / Pro 450/455/460/555/555X/560/560X]
	Control: I/O+ Mem+ BusMaster+ SpecCycle- MemWINV- VGASnoop- ParErr- Stepping- SERR+ FastB2B- DisINTx+
	Status: Cap+ 66MHz- UDF- FastB2B- ParErr- DEVSEL=fast >TAbort- <TAbort- <MAbort- >SERR- <PERR- INTx-
	Latency: 0, Cache Line Size: 256 bytes
	Interrupt: pin A routed to IRQ 38
	Region 0: Memory at d0000000 (64-bit, prefetchable) [size=256M]
	Region 2: Memory at cfe00000 (64-bit, prefetchable) [size=2M]
	Region 4: I/O ports at e000 [size=256]
	Region 5: Memory at fbe80000 (32-bit, non-prefetchable) [size=256K]
	Expansion ROM at 000c0000 [disabled] [size=128K]
	Capabilities: [48] Vendor Specific Information: Len=08 <?>
	Capabilities: [50] Power Management version 3
		Flags: PMEClk- DSI- D1+ D2+ AuxCurrent=0mA PME(D0-,D1+,D2+,D3hot+,D3cold+)
		Status: D0 NoSoftRst+ PME-Enable- DSel=0 DScale=0 PME-
	Capabilities: [58] Express (v2) Legacy Endpoint, MSI 00
		DevCap:	MaxPayload 256 bytes, PhantFunc 0, Latency L0s <4us, L1 unlimited
			ExtTag+ AttnBtn- AttnInd- PwrInd- RBE+ FLReset-
		DevCtl:	CorrErr- NonFatalErr- FatalErr- UnsupReq-
			RlxdOrd- ExtTag+ PhantFunc- AuxPwr- NoSnoop+
			MaxPayload 256 bytes, MaxReadReq 512 bytes
		DevSta:	CorrErr+ NonFatalErr- FatalErr- UnsupReq+ AuxPwr- TransPend-
		LnkCap:	Port #0, Speed 8GT/s, Width x8, ASPM L1, Exit Latency L1 <1us
			ClockPM- Surprise- LLActRep- BwNot- ASPMOptComp+
		LnkCtl:	ASPM Disabled; RCB 64 bytes, Disabled- CommClk+
			ExtSynch- ClockPM- AutWidDis- BWInt- AutBWInt-
		LnkSta:	Speed 5GT/s (downgraded), Width x8 (ok)
			TrErr- Train- SlotClk+ DLActive- BWMgmt- ABWMgmt-
		DevCap2: Completion Timeout: Not Supported, TimeoutDis- NROPrPrP- LTR+
			 10BitTagComp- 10BitTagReq- OBFF Not Supported, ExtFmt+ EETLPPrefix+, MaxEETLPPrefixes 1
			 EmergencyPowerReduction Not Supported, EmergencyPowerReductionInit-
			 FRS-
			 AtomicOpsCap: 32bit+ 64bit+ 128bitCAS-
		DevCtl2: Completion Timeout: 50us to 50ms, TimeoutDis- LTR- OBFF Disabled,
			 AtomicOpsCtl: ReqEn-
		LnkCap2: Supported Link Speeds: 2.5-8GT/s, Crosslink- Retimer- 2Retimers- DRS-
		LnkCtl2: Target Link Speed: 8GT/s, EnterCompliance- SpeedDis-
			 Transmit Margin: Normal Operating Range, EnterModifiedCompliance- ComplianceSOS-
			 Compliance De-emphasis: -6dB
		LnkSta2: Current De-emphasis Level: -6dB, EqualizationComplete- EqualizationPhase1-
			 EqualizationPhase2- EqualizationPhase3- LinkEqualizationRequest-
			 Retimer- 2Retimers- CrosslinkRes: unsupported
	Capabilities: [a0] MSI: Enable+ Count=1/1 Maskable- 64bit+
		Address: 00000000fee00698  Data: 0000
	Capabilities: [100 v1] Vendor Specific Information: ID=0001 Rev=1 Len=010 <?>
	Capabilities: [150 v2] Advanced Error Reporting
		UESta:	DLP- SDES- TLP- FCP- CmpltTO- CmpltAbrt- UnxCmplt- RxOF- MalfTLP- ECRC- UnsupReq- ACSViol-
		UEMsk:	DLP- SDES- TLP- FCP- CmpltTO- CmpltAbrt- UnxCmplt- RxOF- MalfTLP- ECRC- UnsupReq- ACSViol-
		UESvrt:	DLP+ SDES+ TLP- FCP+ CmpltTO- CmpltAbrt- UnxCmplt- RxOF+ MalfTLP+ ECRC- UnsupReq- ACSViol-
		CESta:	RxErr- BadTLP- BadDLLP- Rollover- Timeout- AdvNonFatalErr+
		CEMsk:	RxErr- BadTLP- BadDLLP- Rollover- Timeout- AdvNonFatalErr+
		AERCap:	First Error Pointer: 00, ECRCGenCap+ ECRCGenEn- ECRCChkCap+ ECRCChkEn-
			MultHdrRecCap- MultHdrRecEn- TLPPfxPres- HdrLogCap-
		HeaderLog: 00000000 00000000 00000000 00000000
	Capabilities: [200 v1] Physical Resizable BAR
		BAR 0: current size: 256MB, supported: 256MB 512MB 1GB 2GB 4GB
	Capabilities: [270 v1] Secondary PCI Express
		LnkCtl3: LnkEquIntrruptEn- PerformEqu-
		LaneErrStat: 0
	Capabilities: [2b0 v1] Address Translation Service (ATS)
		ATSCap:	Invalidate Queue Depth: 00
		ATSCtl:	Enable-, Smallest Translation Unit: 00
	Capabilities: [2c0 v1] Page Request Interface (PRI)
		PRICtl: Enable- Reset-
		PRISta: RF- UPRGI- Stopped+
		Page Request Capacity: 00000020, Page Request Allocation: 00000000
	Capabilities: [2d0 v1] Process Address Space ID (PASID)
		PASIDCap: Exec+ Priv+, Max PASID Width: 10
		PASIDCtl: Enable- Exec- Priv-
	Capabilities: [320 v1] Latency Tolerance Reporting
		Max snoop latency: 0ns
		Max no snoop latency: 0ns
	Capabilities: [328 v1] Alternative Routing-ID Interpretation (ARI)
		ARICap:	MFVC- ACS-, Next Function: 1
		ARICtl:	MFVC- ACS-, Function Group: 0
	Capabilities: [370 v1] L1 PM Substates
		L1SubCap: PCI-PM_L1.2+ PCI-PM_L1.1+ ASPM_L1.2+ ASPM_L1.1+ L1_PM_Substates+
			  PortCommonModeRestoreTime=0us PortTPowerOnTime=170us
		L1SubCtl1: PCI-PM_L1.2- PCI-PM_L1.1- ASPM_L1.2- ASPM_L1.1-
			   T_CommonMode=0us LTR1.2_Threshold=0ns
		L1SubCtl2: T_PwrOn=10us
	Kernel driver in use: amdgpu
	Kernel modules: amdgpu
```
</details>

One thing that i found interesting is that this decade old system support 
`Capabilities: [200 v1] Physical Resizable BAR` but i have no idea if i can use 
it with modern GPU and get better performance.

[Run ROCm without PCIe atomics?](https://github.com/RadeonOpenCompute/ROCm/issues/157)

[More about how ROCm uses PCIe Atomics](https://rocmdocs.amd.com/en/latest/Installation_Guide/More-about-how-ROCm-uses-PCIe-Atomics.html)

<br>
**CPU to the rescue**

Apparently you can also run Stable Diffusion using CPU. But you trade 
compatibility with lower performance. Generating 512x512 image using 
dual Xeon X5670 take around 5 to 6 Minutes while current datacenter 
and high-end GPU take around 
[3 to 10 Seconds](https://lambdalabs.com/blog/inference-benchmark-stable-diffusion). 
To be fair, my decade old CPUs does not support AVX/AVX2 instruction 
and if your CPU does support AVX/AVX2 you probably get better performance. 
Also for some reason, almost half of my CPUs thread is idle so force it 
to use all threads may improve performance.

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
    <div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-11-24-my-journey-to-stable-diffusion/01.png" alt="img">
		</div>
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-11-24-my-journey-to-stable-diffusion/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

As for Stable Diffusion itself, it is certainly not perfect, but it is 
in my opinion very usable. For example sometimes face does not align 
properly, but there is an option to fix it. Then fingers may not be generated 
properly sometimes it just a blob of random shapes, and sometimes you can 
get extra fingers or lost some. Also unlike DALL-E which can understand 
complex sentence or even paragraph, Stable Diffusion NLP is still behind. 
Which is mostly stated in [Limitations and Bias](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original). 

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-11-24-my-journey-to-stable-diffusion/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Good thing about Stable Diffusion open approach is limitless 
options. Instead of relying on web service to fine tune or fix an issue, 
you can go online and 
[find a fix](https://github.com/CompVis/stable-diffusion/pulls) 
or fix it yourself. You don't like default 
model, or you want other more specific style instead, well 
[grab one yourself](https://huggingface.co/models?other=stable-diffusion) 
or better yet, 
[train your own model](https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/2284).

<br>
**CUDA: I am speed**

Using CPUs give great amount of compatibility with performance penalty. 
Unfortunately ROCm doesn't work in my system, but there is a third option. 
Enter Compute Unified Device Architecture (CUDA).

Here i'm using my laptop with I7 7700HQ, 8 GB RAM and GTX 950M 2 GB (Maxwell) 
GPU (I strongly recommend 16 GB RAM instead of 8 GB). The result is incredible, 
generating 512x512 image take around 1 to 2 Minutes (using --lowvram) 
compared to 5 to 6 Minutes. Not only using GPU is more efficient 75W vs 190W 
(95x2), it is also a lot faster.

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-11-24-my-journey-to-stable-diffusion/04.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Using CUDA in my opinion gives the best result so far. Installation is seamless, 
performance is great, it is more efficient. Unless in my case, my laptop only 
have 2 GB of VRAM which require `--lowvram` parameter easy. But the issue is 8 
GB of RAM because of this, i could not load standard Stable Diffusion 1.4 model. 
Instead, i'm using [Openjourney](https://huggingface.co/prompthero/openjourney) 
model even then i can only generate 3 to 4 images before the entire thing is out 
of memory and crash.

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-11-24-my-journey-to-stable-diffusion/05.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

<br>
**Docker all the things**

With all the results so far, here is how i did it.

* First, install Docker and Docker-compose 
[Ubuntu](https://docs.docker.com/engine/install/ubuntu/) 
[Windows](https://docs.docker.com/desktop/install/windows-install/) 
then run `docker-compose --version` and make sure you're running docker-compose 
[version 1.27.0 or above](https://docs.docker.com/compose/gpu-support/).

* If you want to use CUDA, follow guide below to set up CUDA with Docker 
    - [Linux](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html) Install
    - <p><a href="https://docs.nvidia.com/cuda/wsl-user-guide/index.html">Windows (WSL)</a> then follow 
    <a href="https://docs.nvidia.com/ai-enterprise/deployment-guide/dg-docker.html#enabling-the-docker-repository-and-installing-the-nvidia-container-toolkit">this</a></p> 

* If you want to use ROCm, follow guide below to set ROCm with Docker 
    - <p><a href="https://github.com/RadeonOpenCompute/ROCm-docker/blob/master/quick-start.md">Linux</a> Install</p>

* Get Stable Diffusion model `.ckpt` file. you can get original v1.4 from [Hugging Face](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original/tree/main).

* Next create a new directory called `stable-diffusion`.

* Then copy and save following files inside `stable-diffusion` directory.

<details>
<summary>&#9432; Click to reveal `docker-compose.yml`</summary>
```
version: '3'

services:
  stablediff-cpu:
    build: 
      context: .
      dockerfile: Dockerfile.cpu
    container_name: stablediff-cpu-runner
    environment:
      TZ: "Asia/Jakarta"
      COMMANDLINE_ARGS: "--listen --no-half --skip-torch-cuda-test"
    entrypoint: ["/bin/sh", "-c"]
    command: >
      ". /stablediff.env; echo launch.py $$COMMANDLINE_ARGS;
      if [ ! -d /stablediff-web/.git ]; then
        cp -a /sdtemp/. /stablediff-web/
      fi;
      if [ ! -f /stablediff-web/models/Stable-diffusion/*.ckpt ]; then
        echo 'Please copy stable diffusion model to stablediff-models directory'
        echo 'You may need sudo to perform this action'
        exit 1
      fi;
      python launch.py"
    ports:
      - "7860:7860"
    volumes:
      - ./stablediff.env:/stablediff.env
      - ./stablediff-web:/stablediff-web
      - ./stablediff-models:/stablediff-web/models/Stable-diffusion
  stablediff-rocm:
    build: 
      context: .
      dockerfile: Dockerfile.rocm
    container_name: stablediff-rocm-runner
    environment:
      TZ: "Asia/Jakarta"
      ROC_ENABLE_PRE_VEGA: 1
      COMMANDLINE_ARGS: "--listen --precision full --no-half"
    entrypoint: ["/bin/sh", "-c"]
    command: >
      "rocm-smi; . /stablediff.env; echo launch.py $$COMMANDLINE_ARGS;
      if [ ! -d /stablediff-web/.git ]; then
        cp -a /sdtemp/. /stablediff-web/
      fi;
      if [ ! -f /stablediff-web/models/Stable-diffusion/*.ckpt ]; then
        echo 'Please copy stable diffusion model to stablediff-models directory'
        echo 'You may need sudo to perform this action'
        exit 1
      fi;
      python launch.py"
    ports:
      - "7860:7860"
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
      - ./stablediff.env:/stablediff.env
      - ./stablediff-web:/stablediff-web
      - ./stablediff-models:/stablediff-web/models/Stable-diffusion
  stablediff-cuda:
    build: 
      context: .
      dockerfile: Dockerfile.cuda
    container_name: stablediff-runner-cuda
    runtime: nvidia
    environment:
      TZ: "Asia/Jakarta"
      NVIDIA_VISIBLE_DEVICES: all
      COMMANDLINE_ARGS: "--listen"
    entrypoint: ["/bin/sh", "-c"]
    command: >
      "nvidia-smi; . /stablediff.env; echo launch.py $$COMMANDLINE_ARGS;
      if [ ! -d /stablediff-web/.git ]; then
        cp -a /sdtemp/. /stablediff-web/
      fi;
      if [ ! -f /stablediff-web/models/Stable-diffusion/*.ckpt ]; then
        echo 'Please copy stable diffusion model to stablediff-models directory'
        echo 'You may need sudo to perform this action'
        exit 1
      fi;
      python launch.py"
    ports:
      - "7860:7860"
    volumes:
      - ./stablediff.env:/stablediff.env
      - ./stablediff-web:/stablediff-web
      - ./stablediff-models:/stablediff-web/models/Stable-diffusion
```
</details>

<details>
<summary>&#9432; Click to reveal `Dockerfile.cpu`</summary>
```
FROM python:3.10.6-bullseye
ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONIOENCODING=UTF-8
WORKDIR /sdtemp
RUN python -m pip install --upgrade pip wheel
RUN apt-get update &&\
    apt-get install -y wget git
RUN git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui /sdtemp

#torch and torchvision version number refer to
#https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/launch.py
ENV TORCH_COMMAND="pip install torch==1.12.1+cpu torchvision==0.13.1+cpu --extra-index-url https://download.pytorch.org/whl/cpu"
RUN python -m $TORCH_COMMAND

RUN python launch.py --skip-torch-cuda-test --exit
RUN python -m pip install opencv-python-headless
WORKDIR /stablediff-web
```
</details>

<details>
<summary>&#9432; Click to reveal `Dockerfile.cuda`</summary>
```
FROM nvidia/cuda:11.3.1-base-ubuntu20.04
ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONIOENCODING=UTF-8
WORKDIR /sdtemp
RUN apt-get update &&\
    apt-get install -y \
    wget \
    git \
    python3 \
    python3-pip \
    python-is-python3
RUN python -m pip install --upgrade pip wheel
RUN git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui /sdtemp

#torch and torchvision version number refer to
#https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/launch.py
ENV TORCH_COMMAND="pip install torch==1.12.1+cu113 torchvision==0.13.1+cu113 --extra-index-url https://download.pytorch.org/whl/cu113"
RUN python -m $TORCH_COMMAND

RUN python launch.py --skip-torch-cuda-test --exit
RUN python -m pip install opencv-python-headless
WORKDIR /stablediff-web
```
</details>

<details>
<summary>&#9432; Click to reveal `Dockerfile.rocm`</summary>
```
FROM rocm/dev-ubuntu-20.04
ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONIOENCODING=UTF-8
WORKDIR /sdtemp
RUN apt-get update &&\
    apt-get install -y \
    wget \
    git \
    python3 \
    python3-pip \
    python-is-python3
RUN python -m pip install --upgrade pip wheel
RUN git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui /sdtemp

#torch and torchvision version number refer to
#https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/launch.py
ENV TORCH_COMMAND="pip install torch==1.12.1+rocm5.1.1 torchvision==0.13.1+rocm5.1.1 --extra-index-url https://download.pytorch.org/whl/rocm5.1.1"
RUN python -m $TORCH_COMMAND

RUN python launch.py --skip-torch-cuda-test --exit
RUN python -m pip install opencv-python-headless
WORKDIR /stablediff-web
```
</details>

<details>
<summary>&#9432; Click to reveal `stablediff.env`</summary>
```
export COMMANDLINE_ARGS="--listen"
```
</details>

<details>
<summary>&#9432; Click to reveal `.dockerignore`</summary>
```
stablediff-web/
stablediff-models/
*.ckpt
```
</details>

* Edit launch parameter to match your system. Open `stablediff.env` and set it to the following.
    - Using CPU 
        <pre>
        export COMMANDLINE_ARGS="--listen --no-half --skip-torch-cuda-test"
        </pre>
    - Using CUDA 
        <pre>
        export COMMANDLINE_ARGS="--listen"
        </pre>
    - Using ROCm 
        <pre>
        export COMMANDLINE_ARGS="--listen --precision full --no-half"
        </pre>
    <p>You can also add 
    <a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings#all-command-line-arguments">other parameter</a> 
    such as <code>--lowvram</code> for GPU with 2 GB of VRAM.</p>

* Next, open terminal and navigate to `stable-diffusion` directory.

* Then build the Stable Diffusion Docker image, to do this enter.
    - Using CPU 
        <pre>docker-compose build stablediff-cpu</pre>
    - Using CUDA 
        <pre>docker-compose build stablediff-cuda</pre>
    - Using ROCm 
        <pre>docker-compose build stablediff-rocm</pre>
    <p>This may take a while.</p>

* If everything goes smoothly, initialize the Diffusion Docker image 
by entering.
    - Using CPU 
        <pre>docker-compose up stablediff-cpu</pre>
    - Using CUDA 
        <pre>docker-compose up stablediff-cuda</pre>
    - Using ROCm 
        <pre>docker-compose up stablediff-rocm</pre>

* After that, you will get message `Please copy stable diffusion model`. 
Copy your stable diffusion model to `stablediff-models` directory.

* To start Stable Diffusion, enter. 
    - Using CPU 
        <pre>docker start -a stablediff-cpu-runner</pre>
    - Using CUDA 
        <pre>docker start -a stablediff-cuda-runner</pre>
    - Using ROCm 
        <pre>docker start -a stablediff-rocm-runner</pre>
    <p>Do this every time you want to run Stable Diffusion.</p>

* Next Open Web browser and go to <http://localhost:7860/>

* To stop Stable Diffusion, press `Ctrl + C` then enter.
    - Using CPU 
        <pre>docker stop stablediff-cpu-runner</pre>
    - Using CUDA 
        <pre>docker stop stablediff-cuda-runner</pre>
    - Using ROCm 
        <pre>docker stop stablediff-rocm-runner</pre>

And that's pretty much it.

<br>
**Final Words**

Based on what i see from current technology of machine learning based image 
generation, this is completely useable. And the thing about technology is that 
this is going to get better over time. As for ethical and copyright issues, it 
is not okay to take someone works without their consent and not cite them or 
even worse profit from it. This exact same problem also happens in programming 
space with the introduction of [GitHub Copilot](https://github.com/features/copilot). 
They basically take someone repository (codebase) with clear LICENSE file stated 
and use it to train their AI code generator without the programmer consent and 
citation. Furthermore, (at the moment) copyright law does not cover 
machine-generated works which is basically a copyright law loophole. So my 
advice is that if you are an artist, learn this technology and maybe integrate 
it to your workflow. [Clip Studio](https://www.youtube.com/watch?v=a797qMnfFwM) 
recently added an experimental feature that uses this technology and at the 
moment there is not much you can do to avoid it, and it's just going to get 
better over time so why not use it to your advantage instead.

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-11-24-my-journey-to-stable-diffusion/06.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>
