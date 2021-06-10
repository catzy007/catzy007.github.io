### **Repurpose Old Thin Client as DOS Gaming System**
_Thursday, June 10, 2021_

Few weeks ago i need to test my DOS program in baremetal. So i started looking around 
local shop and shock to find that old i486 computer cost double than i3 sandy bridge computer. 
Even Pentium 3 cost little bit more than i3 sandy bridge computer. So you know what, forget 
about it. 

The problem was i need to interface with sound system (Sound Blaster or Adlib) and newer computer 
simply doesn't support old sound system anymore. So i started to looking around the internet and 
found out that some Thin Client with specific chipset can do Sound Blaster and Adlib. 
<https://www.youtube.com/watch?v=W4Fv2DwlldI> and <https://www.vogons.org/viewtopic.php?p=840879>.

Supported chipset is VIA VT8231 and VT82C686. And looking around <https://www.parkytowers.me.uk/thin/hware/hardware.shtml> 
i found HP T5700 so i just search my local shop and failed to find anything. Then i look again and 
it seems like T5700 is rebranded T5000 with almost exact internal. So i look for T5000 and 
sure enough find it for 10 USD so yeah that's good.

Then i take it home and notice a `Asset code` from local bank, when i plug it up i see some 
data still there. So what i do is format the disk and everything is mine now. Then what i found 
interesting is that the two different sticker said different thing, so one of them said T5000 
and the other one said T5700. If any of you need this, look for both keyword.
<p align="center">
    <img src="./posts/2021-06-10-repurpose-old-thin-client-as-dos-gaming-system/1.jpg" height="300em" alt="img">
</p>

The specification for this is Transmeta Crusoe TM5800 in my case the clock speed is 733MHz with 
512MB of DDR memory and 512MB of storage (IDE DOM) and ATI Rage XL GPU. From the sticker it should come 
with 192/256 whatever that is. As for the operating system, it comes with Windows XP Embedded. 
Other interesting thing about this is that from lscpu BogoMIPS, it got 1463.19 which according to 
<https://tldp.org/HOWTO/BogoMips/bogo-list.html> is similar to Pentium III at 700MHz. Then to add a 
cherry on top, this processor are not x86. But how it can run windows and such, well it actually 
running x86 code using [Code Morphing](https://en.wikipedia.org/wiki/Transmeta#Code_Morphing_Software). 
As far as i can remember, only few company that has x86 license. Intel, AMD, VIA and other that i can't 
remember so the way Transmeta achieve this is to translate x86 code to native code then execute it 
accordingly.
<p align="center">
    <img src="./posts/2021-06-10-repurpose-old-thin-client-as-dos-gaming-system/2.jpg" height="300em" alt="img">
</p>

Then i change the IDE DOM to 2GB then i try to install Windows 98 on it. The problem is 
Windows 98 doesn't go well if you install it with other drive. Meaning you cant just make 
a bootable Windows 98 USB installer and plug it in. The way i install it might not be the most 
elegant or something but it goes really well to me.

* First create MS-DOS bootable USB. Download [this](./posts/2021-06-10-repurpose-old-thin-client-as-dos-gaming-system/dos622-disk-image.zip)
* Then flash it to USB drive using DD or Etcher

> If you only need MS-DOS, you can stop here and use USB directly as primary disk.

* Next, boot the USB drive and follow this

    ```
    fdisk
    press 5 enter (to change current fixed disk)
    press 2 enter (to select disk number 2)
    press 3 enter (to delete current partition)
    press 4 enter (to delete non-dos partition *if not working try other option too)
    press 1 enter y enter (to confirm delete)
    press 1 enter (to create dos partition)
    press 1 enter (to create primary dos partition)
    press y enter (to confirm)
    press esc esc (system will reboot)
    ```
* Then Follow this

    ```
    format d: /s
    sys d:
    ```
* After that copy Windows 98 Installer to DOM
* Then get a linux, not any other linux because modern linux os need specific CPU instruction set 
to even run and other linux may contain heavy GUI which slow tings and make it unusable. So what i 
use is Tiny Core Linux [(The 16MB CLI one)](http://tinycorelinux.net/12.x/x86/release/Core-current.iso). 
After that, plug your USB drive and create a bootable using Unetbootin or something similar. 
* Then follow this
    ```
    sudo fdisk -l
    ```
* Find your DOM (in my case it's /dev/sda). Then

    ```
    sudo fdisk /dev/sda
    press A enter (to mark partition as bootable)
    press 1 enter (to select partition 1)
    Press W enter (to write changes)
    sudo poweroff (to shutdown system)
    ```
* After that unplug the usb and boot from DOM
* Then look for `setup.exe` and run it.
* Just follow the On-screen instruction.
* Or if you confused, check this <https://www.youtube.com/watch?v=7_GEsE2_j4Y> (different approach)
<p align="center">
    <img src="./posts/2021-06-10-repurpose-old-thin-client-as-dos-gaming-system/3.jpg" height="300em" alt="img">
</p>

<p align="center">
    <img src="./posts/2021-06-10-repurpose-old-thin-client-as-dos-gaming-system/4.jpg" height="300em" alt="img">
</p>

<p align="center">
    <img src="./posts/2021-06-10-repurpose-old-thin-client-as-dos-gaming-system/5.jpg" height="300em" alt="img">
</p>