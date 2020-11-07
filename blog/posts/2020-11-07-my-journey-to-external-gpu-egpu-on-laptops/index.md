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
between Green wire and Black wire or *PS_ON#* with *COM*. it basically force a PSU to stay on. 
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

If i had access to more device, i'll post it here. Maybe with gaming number as well.
