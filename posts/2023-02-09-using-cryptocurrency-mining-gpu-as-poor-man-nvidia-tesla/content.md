##### Using Cryptocurrency Mining GPU as Poor Man Nvidia Tesla
_Thursday, February 9, 2023_

If you follow tech for quite some time, you probably know recent news 
about Cryptocurrency crash and yes this is definitely ~~not~~ a first 
time Cryptocurrency crash and yet people still to this day fall for it. 
I guess history existed for no reason, huh? Anyway minor sidenote aside.
First of all how Cryptocurrency mining even works? The basic idea of crypto 
mining is [Proof of Work (POW)](https://en.wikipedia.org/wiki/Proof_of_work) 
meaning that you need to proof that you have done some form of computational 
work in this case solving a mathematical function and get it verified.

In [Cryptocurrency mining](https://en.wikipedia.org/wiki/Bitcoin#Mining), 
multiple `workers` are given a task to find a value called `nonce`. If the 
`hash` of nonce and block content is less than or equal to the value set by 
mining difficulty then the miner who found a nonce is given a privilege to 
create a new block, write its transaction content and a reward in form of a 
coin then the process is repeated. With 32-bit nonce, there are around 
four billion possible combinations which require process similar to 
[brute-force](https://en.wikipedia.org/wiki/Brute-force_attack) therefore 
a highly parallelized system can be beneficial. With the recent crash of 
cryptocurrency and transition from Proof of Work (POW) to Proof of Stake 
(POS), this specialized device lead to an e-waste problem in form of used 
crypto mining hardware like GPU, FPGA and ASIC. 

While yes, you can reuse GPU for playing video games parallel compute 
and rendering reprogram FPGA for electronic projects. Unfortunately, the 
same can't be said for ASIC they are specialized chip that designed to 
do one specific workload. What happens if you can't reuse a piece of highly 
technological product? You 
[grind it down](https://www.youtube.com/watch?v=toijA2e1sLw) and process it to 
extract the precious material, you
[grind it and burn it down](https://www.youtube.com/watch?v=ee_lmZIAwek) then 
process the leftover ash, or you simply dig a hole and bury it to pollute land 
and water supply.

There is another mining hardware called mining GPU they look almost exactly 
like a regular GPU but mining GPU does not have a display output. Meaning 
that you can't use it to play video games at least without modification or 
hack and of course there is always an exception. Usually this GPU started 
its life as regular GPU from the same fabrication plant, then they test the 
GPU to check its functionality. Because the nature of semiconductor 
fabrication, you always end up with a reject. Sometimes part of the GPU 
like [GPGPU](https://en.wikipedia.org/wiki/General-purpose_computing_on_graphics_processing_units) module is working 
fine, but the display output module is defective and instead of throwing 
it away, you put it in a board and sell it as mining GPU.

What make me interested in used mining GPU is that the ability to use GPGPU 
for AI research, scientific computing and 3D rendering at lower cost. Recently 
I found one on my local area in non-working condition and try to revive it. 
The GPU itself is NVIDIA P104-100 which based of NVIDIA GTX 1070. My specific 
Unit is triple fan model by Colorful with 8 GB of GDDR5X instead of GDDR5 
found in regular GTX 1070. Another notable difference is PCIE 1.0 X4 instead 
of PCIE 3.0 X16 which drastically cut the PCIE bandwidth.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-02-09-using-cryptocurrency-mining-gpu-as-poor-man-nvidia-tesla/01.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

The seller advertises this card as detected could not install driver. The first 
thing that I did is physical inspection. Check if any SMD component such as 
resistor or capacitor fall off, then check for any burn marks and burning smell. 
I did not find any, so I decided to plug it in and hope for the best. And sure 
enough the card is detected and has an error code on device manager.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-02-09-using-cryptocurrency-mining-gpu-as-poor-man-nvidia-tesla/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-02-09-using-cryptocurrency-mining-gpu-as-poor-man-nvidia-tesla/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>

Next I decided to disassemble everything spray the board with electronic contact cleaner and brush it with unused toothbrush and let it dry. For the heatsink, I 
use automotive brake cleaner. As for the plastic shroud, I just wipe it off using 
a damp cloth then wipe the fan using dry cloth.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-02-09-using-cryptocurrency-mining-gpu-as-poor-man-nvidia-tesla/04.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Next, I grab my multimeter and follow 
[repair.wiki pascal guide](https://repair.wiki/w/Nvidia_Pascal_GPU_Diagnosing_Guide) 
to check for any short on base voltage rails and minor voltage rails. 
Then I power the card and make sure every voltage rails shows up their 
respective rating.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-02-09-using-cryptocurrency-mining-gpu-as-poor-man-nvidia-tesla/05.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

After ensuring that none of the voltage rails shorts out, I decided to 
continue and 
[test the VRAM](https://repair.wiki/w/Nvidia_Memory_Testing_Guide). 
To do this, a proprietary software called NVIDIA MODS/MATS is required. 
In my case, I'm using version 400.184 and sure enough my card didn't 
pass the test.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-02-09-using-cryptocurrency-mining-gpu-as-poor-man-nvidia-tesla/06.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-02-09-using-cryptocurrency-mining-gpu-as-poor-man-nvidia-tesla/07.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Looking around the log, I found that `FBIOB1` is the culprit. According to 
[Pascal Memory Labelling](https://repair.wiki/w/Nvidia_Memory_Testing_Guide#/media/File:Nvidia_memory_labeling_pascal.jpg) 
Here is the problematic VRAM.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-02-09-using-cryptocurrency-mining-gpu-as-poor-man-nvidia-tesla/08.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

My specific model uses Micron D9VRL GDDR5X I need to find local seller, or 
I need to source it overseas. I also need a BGA repair tool such as hot air 
soldering station, BGA precision tweezer, BGA stencils, antistatic mat and 
a lot more. In my case I was a little lucky because I only have one VRAM 
fail. If I Have two VRAM failure in the same channel, there is a risk that 
memory controller inside the GPU itself is broken. The fact that this is 
mining GPU doesn't help either. In the mining process, the GPU need to 
load part of the network transaction in the VRAM. This could be a Blockchain 
Block or Directed Acyclic Graph (DAG) which require multiple gigabytes to 
store [and still growing](https://minerstat.com/dag-size-calculator).