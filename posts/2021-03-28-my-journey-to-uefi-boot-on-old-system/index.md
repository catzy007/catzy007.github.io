### **My Journey To UEFI Boot On Old System**
_Sunday, March 28, 2021_

First, what is UEFI boot. Well it basically replacement of BIOS. But don't quote me on that. 
UEFI is form of interface between your hardware, firmware (software written to manage hardware) and 
operating system. 

In boot process after you press the power button, your PC detect that it being 
turned on, so it calls the firmware and check if connected hardware is working properly if it's not 
then it will beep, or you get error POST Code, then it passes the boot process to UEFI and then look for 
bootloader (EFI) file in your disk. 

In other hand, after POST, the boot process is handle to BIOS. Then BIOS will search for specific string 
or key (MBR) in your disk header which then point that to operating system bootloader.

Then why UEFI, Well because old BIOS boot is based on 80s technology it can't keep up with modern 
need with new platform and hardware capabilities. While yes, you can adapt or create custom system 
for that, it needs a lot of workarounds and a lot of investment in time, human and resources.

Don't quote me on this, lot of important detail is not present. If you want to read more, check this out.

<https://www.happyassassin.net/posts/2014/01/25/uefi-boot-how-does-that-actually-work-then/>

<https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface>

<https://uefi.org/specsandtesttools>

<https://uefi.org/specs/access>

Alright then good enough, but what are we doing here? Well you see UEFI is relatively new standard, so 
many old devices simply don't come with it. And as we move to the future, many old devices with relatively 
capable hardware simply cannot be used in modern days. For example, some OS only shipped in UEFI mode for 
security reason i guess, some GPU only works in UEFI, and sometimes some PCIE device only work in UEFI. 
While the method i use here might not solve all problem, at least there is a workaround you can try.

Okay enough talk, let's do this. The method i'm using here is boot a USB drive with Clover Bootloader on it.
If you know clover, basically it's modified UEFI BIOS that used to make Hackintosh. But i'm here for UEFI 
emulation stuff.

> Please note that everything here will delete any content of your USB device. Please do a backup.

The official clover project only comes with Mac installer, so Linux and Windows users need other way. In 
windows, you can use [BDUtility](http://cvad-mac.narod.ru/index/bootdiskutility_exe/0-5) in Linux, you can 
use [Clover Linux installer](https://github.com/m13253/clover-linux-installer) or just command line-fu yourself. 
That's the normal way to do things.

The other way is to create [Ventoy USB](https://www.ventoy.net/en/index.html) then download 
[Clover ISO](https://github.com/CloverHackyColor/CloverBootloader/releases) image, and put the ISO image on 
Ventoy USB. This is one of the easiest and relatively safe way to do things because everything is open-source. 
But using ISO image has limitation, you cannot simply just edit the content. So you can't just randomly modify 
config file, add random EFI driver. Something like that. Also, somehow in my machine, the system not goes into 
Clover. But instead it goes into OpenCore.

Other way to do this which i finally using is just download Clover boot image i made myself. What you need 
to do is just download the [boot image](./posts/2021-03-28-my-journey-to-uefi-boot-on-old-system/clover-r5131-bootimage.zip) 
file then use Etcher, dd, win32disk imager or something similar to flash the disk image to your USB drive.

The way i made this image is using VM with Windows 7 and attach a 300 MB raw disk image. Then using BDUtility 
with Enable Fixed Disks mode. Then just save the image and that's it.

Next i will do another testing with some picture and hopefully in the end, i can boot NVMe SSD in x58 based 
system.

<br>
#### [UPDATE - Mar 29 2021]
Suddenly i have some free time and just happen to found my HDMI USB Capture so here's some pictures
<p align="center">
    <img class="imgrespM" src="./posts/2021-03-28-my-journey-to-uefi-boot-on-old-system/1.jpg" height="300em" alt="img1">
    <br>
    <label>This is a old x58 based system with basic non-uefi firmware</label>
    <br><br>
    <img class="imgrespM" src="./posts/2021-03-28-my-journey-to-uefi-boot-on-old-system/2.jpg" height="300em" alt="img2">
    <br>
    <label>This is boot selection menu, the Kingston is Clover and Sandisk is Ubuntu 20.04</label>
    <br><br>
    <img class="imgrespM" src="./posts/2021-03-28-my-journey-to-uefi-boot-on-old-system/3.jpg" height="300em" alt="img3">
    <br>
    <label>This is Clover, if you want to see more option, press F1</label>
    <br><br>
    <img class="imgrespM" src="./posts/2021-03-28-my-journey-to-uefi-boot-on-old-system/4.jpg" height="300em" alt="img4">
    <br>
    <label>This is Ubuntu 20.04. And i check UEFI mode using "efibootmgr -v" if no error shown then it works</label>
</p>