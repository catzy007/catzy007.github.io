##### Using Cryptocurrency Mining GPU as Poor Man Nvidia Tesla
_Thursday, February 9, 2023_

If you follow tech for quite some time, you probably know recent news 
about Cryptocurrency crash and yes this is definitely ~~not~~ a first 
time Cryptocurrency crash and yet people still to this day fall for it. 
I guess history existed for no reason, huh? Anyway minor sidenote aside.
With [POW](https://en.wikipedia.org/wiki/Proof_of_work) 
based [Cryptocurrency mining](https://en.wikipedia.org/wiki/Bitcoin#Mining), 
multiple `workers` are given a task to find a value called `nonce`. If the 
`hash` of nonce and block content is less than or equal to the value set by 
mining difficulty then the miner who found a nonce is given a privilege to 
create a new block, write its transaction content and a reward in form of a 
coin then the process is repeated. With 32-bit nonce, there are around 
four billion possible combinations which require process similar to 
[brute-force](https://en.wikipedia.org/wiki/Brute-force_attack) therefore 
a highly parallelized system can be beneficial. With the recent crash of 
cryptocurrency and transition from Proof of Work (POW) to Proof of Stake 
(POS), lead to an e-waste problem in form of used crypto mining hardware 
like GPU, FPGA and ASIC. 

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

https://repair.wiki/w/Nvidia_Pascal_GPU_Diagnosing_Guide