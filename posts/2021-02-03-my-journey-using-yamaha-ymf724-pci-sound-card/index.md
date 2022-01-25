#### My Journey Using Yamaha YMF724 PCI Sound Card
_Wednesday, February 3, 2021_

Few days ago, i'm looking for a sound card. Well why anyone looking for a sound card in 2021? 
Because i'm using server board as workstation and yes it has modern-ish GPU with HDMI+HDA but 
i'm using DP monitor and no it doesn't have onboard sound because who the hell would play music 
on a freakin server. So i began to search around my local online shop and found this Yamaha 
YMF724F-V at less than 2 USD with another 2 for shipping and i could not resist so i bought it. 
In the meantime, i read the [datasheet](./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/YMF724F_ETC.pdf) 
thanks to <https://datasheetspdf.com/pdf/285420/ETC/YMF724F/1> 
from the datasheet, it said support for FM Synth which is basically OPL3, and it should support 
Sound Blaster Pro Compatibility and many others all that in one single package so yeah DOS 
gaming in this sound card should be interesting. Also, i found this is review from back in the day 
<https://assets.hardwarezone.com/2009/reviews/sound/roundup/soundcards.htm> if this sound card 
doesn't work, maybe some day i can get Sound Blaster Live or something like that as a replacement.

<br>
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/2.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
After few days i't arrive i just plug it to Windows 10 64Bit system and nothing. Then i actually 
remember something really important "Windows device is using proprietary driver" so yeah here 
i am looking for a way to check if this card is working. The problem is that driver made for this 
card is 32Bit WDM driver for Windows XP so in order to make this work in 64Bit windows, i had to 
recompile the driver to 64Bit. 

<br>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/3.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Other alternative is of course Linux which basically runs everything. I use Lubuntu 18.04 
and Ubuntu 20.04 and it works just fine. And the chip itself is lsted in ALSA project 
<https://www.alsa-project.org/wiki/Matrix:Vendor-Yamaha> the problem is that there is a some kind 
of Crackling noise coming out and i think there is something wrong in the card configuration and 
in linux there is no easy way to configure lot of input and output for this card so yeah. At least 
the card is working which is a good thing.

<br>
The next thing i try is 32Bit Windows 7 and force WDM driver to install and you know what, it 
actually works just fine. There is a crackling noise and to solve that, i disable lot of unused 
input and output port like CD in, phone in, line in, all that thing. Then it work just fine. And 
after trying it on linux again, the noise is gone. I think what happen is that somehow, some of 
the audio output is routed to audio input and causing lot of ground loop noise then by disabling 
the problematic port, everything work just fine.

<br>
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/meme.jpeg" alt="img">
            <a href="https://makeameme.org/meme/virtualize-all-the">makeameme.org</a>
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
Next thing i want to try is to run this on Windows XP system. But i don't feel like installing XP 
on my system just to listen some music, so i decided to run yes you probably guess it a KVM 
Virtualization with PCI (yes not PCIE) passthrough. The way i did it basically follow my old Post and 
fix some error around interrupt sharing.
```
Failed to set up TRIGGER eventfd signaling for interrupt INTX-0: VFIO_DEVICE_SET_IRQS failure: Device or resource busy
genirq: Flags mismatch irq 18. 00000000 (vfio-intx(0000:01:04.0)) vs. 00000080 (ehci_hcd:usb1)
```
The way i solve it is disabling some USB controller in the motherboard from BIOS. Then after everything 
is clear, it work just fine.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/1.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

<br>
As for KVM passthrough configuration, well basically make sure you hardware supprot VT-D or AMD-VI, 
enable that in BIOS, and make sure your motherboard support IOMMU group seperation or you have to use 
[ACS Patch](https://wiki.archlinux.org/index.php/PCI_passthrough_via_OVMF#Bypassing_the_IOMMU_groups_(ACS_override_patch)) don't forget to install `virt-manager and ovmf`. after all that clear do.

1. First you need to enable [IOMMU](https://wiki.archlinux.org/index.php/PCI_passthrough_via_OVMF#Setting_up_IOMMU) 
in the Linux. To do that, go to GRUB config file, find `quiet splash` and add 
`iommu=1 intel_iommu=on` or `iommu=1 amd_iommu=on` depending on your system.
1. Then `sudo update-grub` and reboot your system.
1. Next Make sure IOMMU and VT is enabled `sudo dmesg | grep -e DMAR -e IOMMU -e vfio` then you'll find.
    ```
    DMAR: IOMMU enabled
    ```

1. After that, you need to find PCI/E ID for your device, to do that, copy to `.sh` file and run it.
    ```
    #!/bin/bash
    for d in /sys/kernel/iommu_groups/*/devices/*; do
        n=${d#*/iommu_groups/*}; n=${n%%/*}
        printf 'IOMMU Group %s ' "$n"
        lspci -nns "${d##*/}"
    done;
    ```

1. After done correctly, you'll find a lot of devices with IOMMU group and different PCI/E. Make sure your 
device IOMMU is different. For example mine is Group 25 with PCI Bridge that is fine, if the group is 16 
Shared to GPU, USB, Sound, PCI Bridge, then you're done! Or use ACS patch.
    ```
    IOMMU Group 23 02:00.0 Ethernet controller [0200]: Intel Corporation 82574L Gigabit Network Connection [8086:10d3]
    IOMMU Group 23 03:00.0 Ethernet controller [0200]: Intel Corporation 82574L Gigabit Network Connection [8086:10d3]
    IOMMU Group 24 00:1d.0 USB controller [0c03]: Intel Corporation 82801JI (ICH10 Family) USB UHCI Controller #1 [8086:3a34]
    IOMMU Group 24 00:1d.7 USB controller [0c03]: Intel Corporation 82801JI (ICH10 Family) USB2 EHCI Controller #1 [8086:3a3a]
    IOMMU Group 25 00:1e.0 PCI bridge [0604]: Intel Corporation 82801 PCI Bridge [8086:244e] (rev 90)
    IOMMU Group 25 01:04.0 Multimedia audio controller [0401]: Yamaha Corporation YMF-724F [DS-1 Audio Controller] [1073:000d] (rev 03)
    IOMMU Group 26 00:1f.0 ISA bridge [0601]: Intel Corporation 82801JIR (ICH10R) LPC Interface Controller [8086:3a16]
    IOMMU Group 26 00:1f.2 SATA controller [0106]: Intel Corporation 82801JI (ICH10 Family) SATA AHCI Controller [8086:3a22]
    IOMMU Group 26 00:1f.3 SMBus [0c05]: Intel Corporation 82801JI (ICH10 Family) SMBus Controller [8086:3a30]
    ```

1. Take note on that random string inside the bracket, it is PCI/E id take note of that. Mine is `1073:000d`
1. Then edit GRUB again and add `vfio-pci.ids=1073:000d vfio_iommu_type1.allow_unsafe_interrupts=1` make sure 
`vfio-pci.ids` is match with your device.
1. Next do it again `sudo update-grub`
1. Then update some kernel module. Open terminal and do.

    a. `sudo nano /etc/initramfs-tools/modules` and add.
    ```
    vfio
    vfio_iommu_type1
    vfio_virqfd
    options vfio_pci ids=1073:000d
    vfio_pci ids=1073:000d
    vfio_pci
    ```

    b. `sudo nano /etc/modules` and add.
    ```
    vfio
    vfio_iommu_type1
    ```

    c. `sudo nano /etc/modprobe.d/vfio.conf` and add.
    ```
    options vfio-pci ids=1073:000d
    ```
    d. *Make sure your PCI IDs is match.*

1. Then apply all that by doing `sudo update-initramfs -u` then reboot
1. Check if everything is working by doing `sudo dmesg | grep -e DMAR -e IOMMU -e vfio` it should look similar
    ```
    [    0.018915] ACPI: DMAR 0x00000000BF79E0C0 0000E0 (v01 AMI    OEMDMAR  00000001 MSFT 00000097)
    [    0.055218] DMAR: IOMMU enabled
    [    0.137043] DMAR: Host address width 40
    [    0.137044] DMAR: DRHD base: 0x000000fbffe000 flags: 0x1
    [    0.137050] DMAR: dmar0: reg_base_addr fbffe000 ver 1:0 cap c90780106f0462 ecap f020fe
    [    0.137052] DMAR: RMRR base: 0x000000000e5000 end: 0x000000000e7fff
    [    0.137053] DMAR: RMRR base: 0x000000bf7ed000 end: 0x000000bf7fffff
    [    0.137054] DMAR: ATSR flags: 0x0
    [    0.137057] DMAR-IR: IOAPIC id 4 under DRHD base  0xfbffe000 IOMMU 0
    [    0.137058] DMAR-IR: IOAPIC id 5 under DRHD base  0xfbffe000 IOMMU 0
    [    0.137390] DMAR-IR: Enabled IRQ remapping in xapic mode
    [    0.677817] DMAR: dmar0: Using Queued invalidation
    [    0.690133] DMAR: Intel(R) Virtualization Technology for Directed I/O
    [    0.778885] vfio_pci: add [1073:000d[ffffffff:ffffffff]] class 0x000000/00000000
    ```

1. After all that, create VM in Virt-Manager and pass the device to VM.

<br>
As for side note, some DOS games do run on Windows XP but most of the time without sound, so to make 
sound working, i use [VDMSound](https://en.wikipedia.org/wiki/VDMSound). Yes i know it isn't pure hardware 
based but for the time being, i'm going to use it while trying to make Windows 9x or DOS working on KVM. 
At least VDMSound is GPLv2 so yeah nice <https://sourceforge.net/projects/vdmsound/>.

<br>
Driver and some information i use, in this post. Most of software provided is found on [Public 
domain](https://en.wikipedia.org/wiki/Public_domain) or considered as [Abandonware](https://en.wikipedia.org/wiki/Abandonware) in this case the original creator is [Yamaha Corporation](https://device.yamaha.com/en/lsi/download/), [George Yohng](http://www.yohng.com/powerymf/), and [Vlad Romascanu](https://sourceforge.net/projects/vdmsound)

<https://device.yamaha.com/en/lsi/download/>

<https://www.philscomputerlab.com/yamaha-ymf744-pci-sound-card.html>

<https://www.vogons.org/viewtopic.php?f=46&t=48133>

<https://sourceforge.net/projects/vdmsound/>

[Mirror WDM XP Driver](./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/dsxgxp.zip)

[Mirror PowerYMF](./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/powerymf201.zip)

[Mirror VDMSound](./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/VDMSound2.1.0.zip)

<br>
> [UPDATE April 7 2021]

After failing to install Windows 95 in KVM, then going to QEMU TCG, then do PCI passthrough using libvirt, 
Installing the driver and finally sound blaster mode still not working in DOS games. And here is how i have 
done it.

* First create vm in `Virtual Machine Manager` with this config
    ```
    Single core CPU with Westmere mode
    128MB RAM
    VGA Cirrus
    Network Pcnet
    HDD 1GB
    ```

* Then do XML edit and change `<domain type="kvm">` to `<domain type="qemu">` this will force libvirt 
to use TCG accelerator instead of KVM which a bit forgiving to older system.
* Next follow this for installation <https://catzy007.github.io/#!2021-04-05-windows-95-on-linux-qemu> 
Similar process, but you have to manually change boot order instead of changing qemu parameter.
* After that, follow this to <https://catzy007.github.io/#!2021-01-09-windows-me-on-linux-kvm> 
`Fix PCI Bus device driver` again similar process but with Windows 95 instead of ME.
* Then do a PCI passthrough. Similar to how i did it with XP.
* Next, download and install a driver <https://www.philscomputerlab.com/yamaha-ymf744-pci-sound-card.html>
* If everything works, you should see something like this
* Here my libvirt [XML](./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/win95.xml)

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/4.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Then after that i just play DOS game in Win95 DOS window mode and no sound, I reboot to DOS mode still no sound, 
Then i reboot to DOS mode and use DOS driver (SETUPDS/S and DSDMA) then enable EMS still no sound. The only 
thing that i still not tried is using regular DOS (6.22 etc) but here i end this journey. So after reading old 
forum posts, i discover that in order to use this card in DOS mode, you need a special cable called `PC/PCI` 
connector or i think similar to `SB-LINK` which connect your card to special header on the motherboard. Or you 
need a special motherboard with special chipset on it. So there is no way i can get it in modern-ish system or 
even hardware passthrough like this.

<br>
> [UPDATE April 22 2021]

After having a some free time from mid-test, i decided to unplug my SB Audigy and use Yamaha once again to test if 
running it in DOS 6.22 with KVM acceleration will make a difference.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/5.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

The system spec is similar as win95 with single core CPU, 128 megs RAM, 500 megs HDD, but in KVM instead of TCG. 
Then i use [Phils MS-DOS starter pack](https://www.philscomputerlab.com/ms-dos-starter-pack.html) to easily use 
mouse and extended memory support.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/6.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then i just use `setupds/s` then `dsdma` and still nothing, then i just run setupds and simply test the sound output, 
the Native 16 bit output is working just fine. The SB mode is disabled or greyed out and the FM mode throw a error.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/7.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then i try edit `FIRSTTRY=` in `ds.ini` file, then run `loadtrs.bat` and get this error instead.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2021-02-03-my-journey-using-yamaha-ymf724-pci-sound-card/8.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

So my take is there is probably a way to make this work, but the effort might not worth at least for me, i think 
you can use virtio IRQ remapping mode or something like that but don't quote me on this. In the meantime, i just 
gonna stick to my SB Audigy and maybe revisit dos gaming in dedicated box.

<br>
> [UPDATE May 11 2021]

After somehow i manage to install MS-DOS 6.22 in a USB flash drive, then i plug the card in my 12 core Xeon, boot it 
up and the FM Synth works. The SB mode won't work because it needs EMS, but somehow EMS won't initialize. Maybe EMS can't 
deal with 12GB of RAM, or somehow it has problem with IMC. But at least FM/Adlib mode works.

<br>
> Further reading

<https://www.vogons.org/viewtopic.php?t=24769>

<https://www.vogons.org/viewtopic.php?f=46&t=48983>

<https://www.youtube.com/watch?v=vNCg_zy1_d4>

<https://www.vogons.org/viewtopic.php?f=61&t=61044>