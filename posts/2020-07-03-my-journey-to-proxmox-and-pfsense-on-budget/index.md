#### My Journey To Proxmox and pfSense On Budget
_Friday, July 3, 2020_

Few weeks ago, i come to an online listing. They sell a `HP Thin Client T5730` at around 20 USD, 
i thought it was really good price. Yeah, you can comment `its not a good deal you dumb` yeah i know 
i live in region where even 10-year-old computer still hold its price really strong. So i might try 
to snatch it in. Then i watch video about this thin client from [PhilsComputerLab](https://www.youtube.com/watch?v=ekRQS-uyJ4Y) 
and find out that this thin client has upgradeable processor and that would be interesting.

The feature i was looking from this thin client is 64Bit support. Many newer Ubuntu based distros 
has dropped support for 32Bit based system. The other thin client `T5740` has intel Atom with 
HyperThreading, but it only supports 32Bit so yeah drop that even tho T5740 has internal SATA connector. 
I also stumble upon listing for `gt7725` which had dual-core 64Bit system and had two slots for RAM. 
But the seller said it's sold out. So finally i pick `T5730` and do a little gamble. I'm going to put 
Dual Core processor in that, give it 2 GB ram, and anything that can make SATA drive work on that system.

<br>
#### Chapter 1 - Upgrading the CPU

The CPU come with the system is `AMD Sempron 2100+` which is 64Bit single core processor based on AMD 
K8 microarchitecture which is early x86-x64 implementation. The system itself using Socket S1 Gen 1 `S1g1`, 
so the processor choice is little limited. You can look at the 
[Compatibility lists](http://www.cpu-world.com/Related_CPUs/Socket%20S1%20_S1g1__K8.html). 
However, in my local area, i can only find two processors that are reasonably priced which is `Athlon 64 X2 TK-55` 
and `Turion 64 X2 TL-50`.
<div class="row">
	<div class=col-sm-4></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/2.jpg" alt="img">
		</div>
	</div>
	<div class=col-sm-4></div>
</div>

The first is the `Athlon TK-55`, i ordered it and came tomorrow afternoon. I pop the cover off, undo the 
heat sink, replace the CPU with my new 2 core CPU, and it just works! Well kinda. I actually don't know if 
the CPU is faulty, i upgrade the bios, and it doesn't support the CPU, or i do something stupid and basically 
fried the CPU. I don't know it just works when it wants, and doesn't when it won't. The good thing is it just 
6USD CPU so yeah not a big deal. But i kinda hope it works in the first run (just hoping).
<div class="row">
	<div class=col-sm-4></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/2.jpg" alt="img">
		</div>
	</div>
	<div class=col-sm-4></div>
</div>

The Final processor i use is `Turion 64 X2 TL-50` which i got for around 4USD, it works in the first time and 
still working (at least when this post is written it still do). Yeah, it basically works just fine
<div class="row">
	<div class=col-sm-2></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/3.png" alt="img">
		</div>
	</div>
	<div class=col-sm-2></div>
</div>

The problem about this processor for me is actually found one. They aren't that expensive (yet) but finding one 
that reasonable and work is really hard. My tips are just look at random listing using generic keyword 
`turion mobile`, `turion laptop` or something like that. Look at the posted picture, and you'll see `Part Number`. 
For example, my Athlon TK-55 part number is `AMDTK55HAX4DC` just google that, and you'll get exact processor. If 
you still unsure, just chat the seller.

Now we should talk about power and thermal constraint. Okay first is the Sempron 2100+ has 9W of TDP. Okay that's 
pretty low, now look at the TL-50 it had 31W of TDP. More than 3x the TDP just going from single core to dual-core. 
Okay it isn't as simple, but you got the idea. Which means that we MUST use active cooling instead of passive one. 
The next one is power supply. The included supply only comes with around 50W of power. If you plug a lot of things, you 
should consider upgrading you power supply.
<div class="row">
	<div class=col-sm-4></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/4.jpg" alt="img">
		</div>
	</div>
	<div class=col-sm-4></div>
</div>

<br>
#### Chapter 2 - Upgrading RAM and Storage

The system i got has one slot of RAM populated with 1 GB of Hynix DDR2 667Mhz. Yeah, just simple swap that with 2 GB 
of old stock RAM and done! Actually this machine had solder pad for second memory, but you must get correct socket 
for that, solder that little SMD pad, and solder some resistor and capacitor to make it works. And yes someone has 
successfully done this. Check [parkytowers.me.uk](https://www.parkytowers.me.uk/thin/hp/t5730/mods.shtml) and 
[phoneservicesupport.com](https://www.phoneservicesupport.com/new-mods-t5730-a-dual-core-64-bit-cpu-pcie-g-card-t3517.html)


For storage, my system got 2 GB 44 pin IDE Flash memory which is basically early generation of SLC SSD. But yeah 2 GB 
of raw storage in 2020 won't get you anywhere. My first idea is using `44 pin IDE to SATA converter` and uses random 
SATA SSD, the adapter itself costs me around 10 USD shipped from China. Don't forget to get 44 pin cable.
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/5.jpg" alt="img">
		</div>
	</div>
	<div class=col-sm-3></div>
</div>
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/6.jpg" alt="img">
		</div>
	</div>
	<div class=col-sm-3></div>
</div>
As you can see in the red marked image, it should be jumper. For my purpose, i just unplug the jumper to make it work. 
I think if you put the jumper on, it work in SATA to IDE mode and other way around.

My second idea is to use generic USB to SATA adapter. It is really cheap around 5 USD and i got it from my local 
computer store.
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/7.jpg" alt="img">
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

Okay now let's see some speed test result.
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/8.png" alt="img">
		<span>This is my random chinese SSD i plugged into my laptop via USB 3.0</span> 
		</div>
	</div>
	<div class=col-sm-3></div>
</div>
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/9.png" alt="img">
		<span>Okay this is the built-in 2GB SSD that i got from the system</span> 
		</div>
	</div>
	<div class=col-sm-3></div>
</div>
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/10.png" alt="img">
		<span>Now this is my SATA ssd connected to 44 pin IDE converter</span> 
		</div>
	</div>
	<div class=col-sm-3></div>
</div>
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/11.png" alt="img">
		<span>Then this is my SATA ssd connected to random USB 3.0 to SATA</span> 
		</div>
	</div>
	<div class=col-sm-3></div>
</div>
<br>

Okay you seen enough data right, well that told us we got some major bottleneck. My SATA SSD capable of reaching 
around 400 MB/s but it being bottleneck by IDE controller and maybe USB controller in the system. Theoretically 
i should get around 1 Gigabit from my IDE converter and 480 Megabits from USB2.0 controller and none of them can 
even reach that "theoretical" speed. Instead, i only get around 256 Megabit (32MBps*8) so yeah if anyone will get 
HP T5730, go with USB to SATA adapter it's cheaper, readily available and perfectly fine for the job. Oh, i forgot 
to mention that other expansion may be possible such as CF-Card and some model had mini PCIE adapter on the bottom. 
Yeah, that may be the way to go.

<br>
#### Chapter 3 - Proxmox Installation

Okay now comes the fun part. At first, my intention was to install pfSense on bare-metal but everything i've tried, 
and it just won't even detect the bootable and i thought wow installing BSD based OS on this old machine is really 
hard. And then i remembered i've seen pfSense can run inside KVM so i download Proxmox and try to install it. 
At least the bootable was working fine but after the installation, the system just stuck in BIOS splash screen. 
I thought what the heck. Then i realize if i plugged my 32 GB `GPT` SSD into the system during boot, it just stuck and 
the worse part is Proxmox only install in GPT mode. Then i found this [Reddit post](https://www.reddit.com/r/homelab/comments/7knwk7/proxmox_with_mbr/) 
someone posted that i can install Debian in `MBR` then install Proxmox on top and i did just that.

First i install Debian and unfortunately i forgot to uncheck the GUI mode so yeah i had to dealt with that later. 
Next install Proxmox. Just follow this [wonderful tutorial](https://pve.proxmox.com/wiki/Install_Proxmox_VE_on_Debian_Buster) 
hehe. Okay really their explanation is better than me, and mostly you just do `apt install` so yeah.

<div class="row">
	<div class=col-sm-2></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/12.png" alt="img">
		</div>
	</div>
	<div class=col-sm-2></div>
</div>

To access the Proxmox, open `https://your-server-ip-address:8006` and login using `root` and `your-root-password`.

<br>
#### Chapter 4 - pfSense Installation

Okay now it's come the pfSense part. The installation itself is 
not as hard because installing pfSense in Proxmox VM is 
[officially supported](https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-proxmox-ve.html)

Okay first, download [pfSense ISO image](https://www.pfsense.org/download/) and make sure to download the `CD Image (ISO) Installer` 
file not the other one.
<div class="row">
	<div class=col-sm-4></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/13.png" alt="img">
		</div>
	</div>
	<div class=col-sm-4></div>
</div>
And copy the ISO to `/var/lib/vz/template/iso`

Then create (at least) two `Network Bridge` in Proxmox for WAN and 
LAN, then pass physical port to each bridge.

Next create new VM in Proxmox, Choose `Other` for OS type, locate 
your pfSense ISO, set CPU as `Default (kvm64)`, add `at least  1024MB` as memory, add `Network Bridge` and set model as `VirtIO  (paravirtualized)`.

Then add second `Network Bridge` and start the VM to install 
pfSense.
<div class="row">
	<div class=col-sm-2></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/14.png" alt="img">
		</div>
	</div>
	<div class=col-sm-2></div>
</div>

Last, configure pfSense as you need and that's it!

<br>
#### [UPDATE 2021/02/22] - My Insight Using This System for More Than 6 Months

Alright for starter, this system is working great. I'm actually running this for more than 6 months 
straight with minor downtime consisting of maintenance and power outage. For some of you might asking 
if the hardware still the same, yes still the same CPU TL-50, 2 GB RAM, 32 GB SSD connected via USB to 
SATA adapter, same cooler. For the software side of thing, it basically still the same Proxmox sit on 
top of the Debian installation. 
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/15.png" alt="img">
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

As you can see i actually using more resources than before because i'm trying to run few service in 
form of container (LXC) to fit more service in one system rather than using VM which is more resource 
hungry and of course there still few things that only run on VM. On top of LXC, i also run docker which 
is another form of container. How that works, go to 
`Container Menu -> Options -> Features -> Enable Keyctl and Nesting` then install docker on your LXC, and 
it should work just fine. At the time of writing, this is tested and working in PVE 6.3.3 in kernel 
5.4.78-2-pve with Ubuntu 20.04 LXC image.

Alright now for the not good thing. While the system itself working almost 24/7 for 6 months without 
any major problem `basically like set and forget`, there still few things that i would change and 
encourage. The first is lack of memory support, while 2 GB is actually plenty for what i do right now, 
there is still things that need more memory, and i actually encounter few service (docker image) that 
require more memory and just crash the entire system. While yes i know 4 GB DDR2 SO-DIMM stick is existed 
in the wild, it is `in my opinion` not worth financially. Because i need to get it from overseas and 
who know how much stock still left out in the wild.

The other thing that lacking from this system is dedicated port for high speed storage. There is no SATA 
port on this thing, let alone USB 3.0. The problem is actually high intensive data moving with random 
read write or just simple sequential data transfer and the bandwidth is not cutting it. That's probably 
what i overlooked, this actually causes problem more often than you probably think. If for any reason 
I/O delay is maxed out by extracting image files or even plain system (kernel) update, then your service 
is done until the system finished what it's doing.

So if in the future anyone who want to replicate this project, i recommend getting at least with DDR3 RAM 
and proper storage system (SATA, NVMe) or anything faster than IDE and USB 2.0. My recommendation for now 
is `HP Thin Client T610` which had Dual Core processor, DDR3 RAM, Internal SATA port, USB 3.0 all of that 
out of the box with the current listing price around 80 USD in my local area. Which seems little much 
but hopefully with less headache, so you can sleep well and not dealing with system downtime while updating 
or heavy disk load. And check other [Thin Client](https://www.parkytowers.me.uk/thin/hware/hardware.shtml) 
if you want specific device for your need.

<br>
#### [UPDATE 2021/06/25] - Investigation on high I/O delay when performing write operation

For quite some time i wondering about this system Achilles Heel, which is poor performance or even system 
halt when data intensive write happen. This includes creating a new disk image, uploading new image file, 
or simply doing system and kernel update. 
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/16.jpg" alt="img">
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

My current solution which is adding extra memory or by the extent is to add secondary disk as swap disk 
because DDR2 4 GB SODIMM Memory is not cheap, doesn't seem to do much. Even recently i bought a 2 GB DOM 
and then upgrade to 16 GB DOM as swap disk still doesn't solve the issue. So i began this investigation to 
end this once and for all what is wrong with this system.

What i'm going to do is to test most storage combination to get the best possible speed from the available 
port the system have, which is USB 2.0 and 44 Pins IDE. The way i'm going to test this is to use Gnome Disks 
Utility built in benchmark to test average read, write, and access time of each combination with parameter below.
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/17.png" alt="img">
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

The combination is
* C1: KEBIDU Cable Converter SATA to USB 3.0 HDD / SSD (Triangle shaped one i use all this time) + Kingfast 32 GB MLC SSD
* C2: Orico 1-Bay 2.5 Inch External HDD Enclosure Sata 2 USB 3.0 + Kingfast 32 GB MLC SSD
* C3: Apacer 16 GB IDE Disk on Module (DOM)
For ease, i'm going to call C1 as Triangle, C2 as Orico and C3 as DOM.

First, let's get a baseline, Here i'm testing C1 and C2 plug it in to my Asus laptop with USB 3.0 and test it.
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/18.png" alt="img">
		<span>Here is C2</span>
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/19.png" alt="img">
		<span>Here is C1</span>
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

As you can see there is a lot of difference between Orico adapter and Triangle adapter, not only Random adapter 
can't deliver the speed it advertises which is only 36 MBPS instead of 300MBPS, it also fluctuates more. Next test 
is USB 2.0 in the thin client system.
<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/20.png" alt="img">
		<span>Here is C2</span>
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/21.png" alt="img">
		<span>Here is C1</span>
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

<div class="row">
	<div class=col-sm-3></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/22.png" alt="img">
			<span>Here is C3</span>
		</div>
	</div>
	<div class=col-sm-3></div>
</div>

Now let's talk about the final results, as you can see the C2 (Orico) deliver fine enough performance, while yes there 
are some dips it still relatively good performance overall, and C2 (Triangle) at first, it's fine then it just drops to 
mostly below 4 MBPS which is explained a lot why the system just halt when high intensive write happen. And then the last 
one C3 (DOM) while not fast, it delivers the most stable result so far.

And now the conclusion which is to get product from reputable brand, while you can save some and get the cheapest product, 
the performance impact in my opinion is not worth at all.