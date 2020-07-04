### **My Journey To Proxmox and pfSense On Budget**
_Friday, July 3, 2020_

Few weeks ago, i come to an online listing. They sell an `HP Thin Client T5730` at around 20 USD, 
i tought it was really good price. Yeah you can comment `its not a good deal you dumb` yeah i know 
i live in region where even 10 year old computer still hold it's price really strong. So i might try 
to snatch it in. Then i watch video about this thin client from `PhilsComputerLab` 
<https://www.youtube.com/watch?v=ekRQS-uyJ4Y> and find out that this thin client has upgradeable 
processor and that would be interesting.

The feature i was looking from this thin client is 64Bit support. Many newer ubuntu based distros 
has dropped support for 32Bit based system. The other thin client `T5740` has intel Atom with 
HyperThreading but it only support 32Bit so yeah drop that even tho T5740 has internal SATA connector. 
I also stumble upon listing for `gt7725` which had dual core 64Bit system and had two slot for RAM. 
But the seller said it's sold out. So finally i pick `T5730` and do a little gamble. I'm gonna put 
Dual Core processor in that, give it 2GB ram, and anything that can make SATA drive work on that system.

<br>
#### **Chapter 1 - Upgrading the CPU**

The cpu come with the system is `AMD Sempron 2100+` which is 64Bit single core processor based on AMD 
K8 microarchitecture which is early x86-x64 implementation. The system itself using Socket S1 Gen 1 `S1g1` 
so the processor choice is little bit limited. You can look at the compatibility list <http://www.cpu-world.com/Related_CPUs/Socket%20S1%20_S1g1__K8.html>. However in my local area, i can only find two processor that are reasonably 
priced which is `Athlon 64 X2 TK-55` and `Turion 64 X2 TL-50`.
<p align="center">
	<img src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/1.jpg" height="300px" alt="img1">
</p>

The first is the `Athlon TK-55`, i ordered it and came tomorrow afternoon. I pop the cover off, undo the 
heatsink, replace the cpu with my new 2 core cpu and it just works! well kinda. I actually don't know if 
the cpu is faulty, i upgrade the bios and it doesn't support the cpu, or i do something stupid and basically 
fried the cpu. I don't know it just works when it want, and doesn't when it wont. The good thing is it just 
6USD cpu so yeah not a big deal. But i kinda hope it works in the first run (just hoping).
<p align="center">
	<img src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/2.jpg" height="300px" alt="img2">
</p>

The Final processor i use is `Turion 64 X2 TL-50` which i got for around 4USD, it work in the first time and 
still working (at least when this post is written it still do). Yeah it basically work just fine
<p align="center">
	<img src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/3.png" height="300px" alt="img3">
</p>

The problem about this processor for me is actually found one. They aren't that expensive (yet) but finding one 
that reasonable and work is really hard. My tips is just look at random listing using generic keyword 
`turion mobile`, `turion laptop` or something like that. Look at the posted picture and you'll see `Part Number`. 
For example, my Athlon TK-55 part number is `AMDTK55HAX4DC` just google that and you'll get exact processor. If 
you still unsure, just chat the seller.

Now we should talk about power and thermal constraint. Okay first is the Sempron 2100+ has 9W of TDP. Okay that's 
pretty low, now look at the TL-50 it had 31W of TDP. More than 3x the TDP just going from single core to dual core. 
Okay it isn't as simple but you got the idea. Which means that we **MUST** use active cooling instead of passive one. 
The next one is powersupply. The included supply only comes with around 50W of power. If you plug lot of thing, you 
should consider upgrading you powersupply.
<p align="center">
	<img src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/4.jpg" height="300px" alt="img4">
</p>

<br>
#### **Chapter 2 - Upgrading RAM and Storage**

The system i got has one slot of RAM populated with 1GB of Hynix DDR2 667Mhz. Yeah just simple swap that with 2GB 
of old stock RAM and done! Actually this machine had solder pad for second memory but you must get correct socket 
for that, solder that little SMD pad, and solder some resistor and capacitor to make it works. And yes someone has 
sucessfully done this. <https://www.parkytowers.me.uk/thin/hp/t5730/mods.shtml> <https://www.phoneservicesupport.com/new-mods-t5730-a-dual-core-64-bit-cpu-pcie-g-card-t3517.html>


For storage, my system got 2GB 44 pin IDE Flash memory which is basically early generation of SLC SSD. But yeah 2GB 
of raw storage in 2020 won't get you anywhere. My first idea is using `44 pin IDE to SATA converter` and uses random 
SATA SSD, the adapter itself costs me around 10 USD shipped from china. Dont forget to get 44 pin cable.
<p align="center">
	<img src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/5.jpg" height="300px" alt="img5">
	<img src="./posts/2020-07-03-my-journey-to-proxmox-and-pfsense-on-budget/6.jpg" height="300px" alt="img6">
</p>
As you can see in the red marked image, it should be jumper. For my purpose, i just unplug the jumper to make it work. 
I think if you put the jumper on, it work in SATA to IDE mode and other way around.