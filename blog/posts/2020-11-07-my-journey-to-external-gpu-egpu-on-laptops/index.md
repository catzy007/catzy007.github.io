### **My Journey to External GPU (EGPU) on Laptops**
_Saturday, November 7, 2020_

When i was a kid, i used to play lot of videogames with my friend. 
Wether it was a Playstation 2 or PC game and we both enjoy that. 
One day he got a brand new i3 laptop from HP and we tought 
that laptop has a great CPU, what if we can slap a GPU on that. 
Then come a product called EXP GDC. Which does what we want, But 
at the time it is very expensive especially for us. Then time goes on 
my interest about tech still there and now i can finally test can 
you even plug a GPU on laptop and game on it!

But first let me introduce to egpu adapter from China. And yes it 
isn't from EXP GDC, this adapter basically remains from mining craze 
few years back. The original plug is actually PCIE 1x and changed to 
Mini PCIE so it can be repurpose as external GPU adapter. And the best 
is it only cost 7-10 USD, yeah great deal.
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/1.png" height="300em" alt="img1">
</p>
Image is taken from <https://egpu.io> if you interested in egpu, check them too.
In my case, i get all this stuff from my local online store. You can 
find it in amazon, ebay, aliexpress or something like that. 

Here i'm using AMD Radeon RX 560 from sapphire, EGPU adapter with 6PIN and 
basically do some mod to it. The PSU i'm using is standard ATX psu with 
750W from aerocool and random old psu. What should you do is to jump a connection 
between Green wire and Black wire or **PS_ON#** with **COM**. it basically force a PSU to stay on. 
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/3.png" height="400em" alt="img3">
    <br>
    <a href="https://en.wikipedia.org/wiki/Power_supply_unit_(computer)">Image from Wikipedia</a>
</p>
The basic installation is, disassemble your laptop (to get at least mini-PCIe WIFI card) then 
replace WIFI card with EGPU adapter, plug the mini-PCIe adapter cable to the egpu adapter, plug A GPU 
to EGPU adapter, plug a (modded) PSU to EGPU adapter, plug a GPU power cable (if your GPU need it)
and done.

The power on Sequence is turn on the ATX PSU, wait for few second, then turn on the laptop.

<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/4.jpg" height="300em" alt="img4">
</p>
As you can se from my egpu adapter it's little different. Yes i mod it little bit, on the left it 
i change the power plug from SATA power to dual molex because some reason, my second psu doesn't 
have SATA power, so changed that to dual MOLEX. On the right side, i shorten the adapter by half. 
I'm using handsaw followed by fine sandpaper. The next thing i did which isn't visible from the 
picture is i sand the Mini-PCIe adapter little bit. Because the price is so low and the finish is 
really bad. At least the PCB and trace quality is good so yeah.

<br>
The first system i test is ASUS K43E with latest BIOS, I3-2350M, no-dGPU, Windows 10 20.04. 
It basically goes blank and won't event show bios splash screen. I think the bios is failed to
recognize or allocate resource for the gpu. I tried UEFI, Non-UEFI and still won't work. 
I haven't found a way around it so just leave it for now.

<br>
The second system i test is Acer Aspire V5-132 with latest BIOS, Celeron 1019Y, no-dGPU, 
Ubuntu 20.04. And you know what it actually works and detected in 2nd monitor just plug and play.
<p align="center" style="cursor:pointer;">
    <a onclick="window.open('https://www.instagram.com/p/CHH7-qeBS9c/');"><img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/5.png" height="400em" alt="img5"></a>
</p>

<br>
The third system i test is Acer Aspire One 756 with Non-UEFI BIOS, Celeron B877, no-dGPU, Windows 8.1. 
and it works great, apart from custom driver because RX560 don't support windows 8.1 yeah it detected 
in GPU-Z. But still no gaming test.
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/2.jpg" height="400em" alt="img2">
</p>

<br>
#### [UPDATE 8 Nov 20]
Today i got access to Lenovo E10-30. After disassembly, i found out that it uses M.2 connector. As you can see 
from the picture, the Mini-PCIe connector is bigger than M.2 connector. From <https://www.delock.de/infothek/M.2/M.2_e.html> 
i assume that the M.2 Connector is Key-E, and the Wifi card is Key-A+E, which means M.2 Key-E adapter is needed 
to use EGPU in this laptop.
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/6.jpg" height="300em" alt="img6">
</p>

<br>
#### [UPDATE 10 Nov 20]
Today i got free time and i can test EGPU on my primary laptop. It is ASUS X550VXK with UEFI BIOS, i7-7700HQ, 
Nvidia 950M, Windows 10 2004 + Ubuntu 20.04. As usual just dissasemble the laptop and plug Mini-PCIE adapter in.
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/7.jpg" height="300em" alt="img7">
</p>
Aaand it works, first try. But it doesnt have a driver so i download it then bluescreen dank. After reboot, it just stuck 
in the bios, just blank screen. After few try and try suggestion from interweb to unplug the adapter at transition from 
BIOS to Windows, still no luck. Either it doesn't boot, or it doesn't detected. Then i go to BIOS and Enable **Compatibility 
Support Module (CSM)**
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/8.jpg" height="300em" alt="img8">
</p>
Then it did the trick, just boot normally and detected! my second monitor even works just well. It even detected in 
Ubuntu 20.04 just fine.
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/9.jpg" height="300em" alt="img9">
    <br>
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/10.jpg" height="300em" alt="img10">
</p>
After all that, i install AMD Radeon driver and it work just fine. Then let's test some game what about DotA2
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/11.jpg" height="300em" alt="img11">
</p>
Well it still updates, so current hot game? Genshin Impact with Max settings at 1080p
<p align="center">
   <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/12.jpg" height="300em" alt="img12">
   <br>
   <iframe width="420" height="315"
   src="https://www.youtube.com/embed/FQ-bXqkbFKA">
   </iframe> 
</p>
Because current version this game has no built-in fps counter, i just felt it and the results is kinda great, 
i meant usually in Mondstadt at night especially when my GPU is overheating, it just mess of fps but now it's butter 
smooth. Then DotA2 is finished updating and this is the results.
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/13.jpg" height="300em" alt="img13">
    <br>
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/14.jpg" height="300em" alt="img14">
    <br>
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/15.jpg" height="300em" alt="img15">
    <br>
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/16.jpg" height="500em" alt="img16">
</p>
As you can see, i'm using 1080p max setting with DirectX11 and i got around 40-70 fps at normal combat. At intense 
combat it down to 35fps Not bad. But as you can see from Task manager and GPU-Z, GPU utilization is only 60% at 
most, so what happend? it think it's down to PCIE-1X used in Mini-PCIE so the GPU bandwith is little bit bottlenecked. 
What we can do is to use M.2 NVME adapter which is rated Up to PCIE-4X bandwith. Last game i want to test is No Man's Sky.
<p align="center">
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/17.jpg" height="300em" alt="img17">
    <br>
    <img src="./posts/2020-11-07-my-journey-to-external-gpu-egpu-on-laptops/18.jpg" height="500em" alt="img18">
</p>
This game is little weird. As you can see in video options, i allredy set GPU to RX 560 yet Task manager report 
nvidia 950M uses 100% utilization and i only get around 22 fps not great at all. I think, the game doesn't understand 
the hardware configuration or something.

As you can see with powerful enough CPU and Mini-PCIE adapter which is PCIE-1X bandwith, you can still game with reasonable 
enough FPS. But i don't recommend GPU Higher than this RX 560 because of bandwith limitation. If you want to get more, 
go with M.2 NVME adapter which is require newer laptops and different adapter. As for GPU goes, and you're only using it 
for gaming, go with old-ish Radeon GPU. Because driver is pretty much stable and can be used in many weird situation like GPU 
Passtruogh or EGPU like this. As for some games like No Man's Sky, you can try to disable NVIDIA dGPU try again.

If i had access to more device, i'll post it here. Maybe with more gaming number as well.
