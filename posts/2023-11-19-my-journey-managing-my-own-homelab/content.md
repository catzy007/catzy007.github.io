#### My Journey Managing My Own Homelab
_Sunday, November 19, 2023_

Recently or more specifically few months ago, I acquire a new machine 
which is going to replace my dying Proxmox server from 2020. The machine 
in question is a Lenovo ThinkCentre M900 SFF with a sticker price of 
roughly 45 USD and include a Pentium G4400 2 Core 2 Thread CPU, 4 GB 
RAM and 500 GB Mechanical spinning drive. While this specs may not seem 
"impressive", In my local area it is a decent deal considering my 
use case and upgrade that I'm planning to do.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-managing-my-own-homelab/01.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

The first thing that I did is to upgrade the RAM. Fortunately Lenovo 
M900 has 4 slots of DDR4 RAM which is already populated with single 
stick of DDR4 4 GB RAM, and fortunately for me, I have 3 sticks of 
DDR4 4 GB lying around making the total system memory to 16 GB which 
is enough for my use cases, unless I play around with AI and require 
more system memory.

The next upgrade is to add a GPU. But because my system is SFF form 
factor, I can't just use any GPU and expect it to fit. Instead, I 
have to use specific GPU called "Low-Profile" not the standard 
"Full-Height" one. There are few consumer-class GPU that are available 
in this form factor like GTX 1050 or GTX 1650, but the majority of 
the GPU is either professional or server class one such as Quadro 
or Tesla lineup. In my case, I'm using NVIDIA Quadro K620 2 GB which 
I acquire for about 25 USD. Other than that, I only add DVI to HDMI 
adapter and HDMI Dummy Adapter because I plan to run this Headless.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-managing-my-own-homelab/02.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>