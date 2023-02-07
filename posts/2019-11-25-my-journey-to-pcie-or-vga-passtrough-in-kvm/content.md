#### My Journey to PCIE or VGA Passtrough in KVM
##### *Sunday, November 25, 2019*
For a long time, Linux users has to face a fact that Microsoft Windows have some strength in 
lot of applications such as Games, CAD application, Many Adobe product and list goes on. Yes 
i know there are some alternatives and [DXVK](https://github.com/doitsujin/dxvk)-[Proton](https://github.com/ValveSoftware/Proton) 
is a thing. Even some steam games run natively on Linux, but that wasn't enough 
for me. And that was the main reason why [i build my own server](https://catzy007.github.io/loader.html?post=2019-05-25-log-building-poor-man-workstation) 
with lot of cores so that i can use KVM (Kernel-based Virtual Machine) so i can create Windows 
VM and pass a Video Graphic Adapter and use it as normal Windows machine... Neat. So here's my journey.

First, make sure that your hardware support [Hypervisor](https://en.wikipedia.org/wiki/Hypervisor), 
make sure that your Processor, Chipset, and Motherboard support VT-D or AMD-Vi. Here i'm using LGA1366 
based motherboard ASUS Z8NA-D6 and Xeon X5670. As for PCIE device, i'm using my Radeon RX 560. For 
Operating system, i'm using Xubuntu 18.04 and kernel version `4.15.0-70-generic` if you curious about it. 
For more information, you can read <https://en.wikipedia.org/wiki/List_of_IOMMU-supporting_hardware> 
and <https://wiki.xen.org/wiki/VTd_HowTo> and don't forget to enable Virtualization in BIOS. Make sure that 
you have two video adapter. Here i have onboard Aspeed as primary display and RX 560 that will be 
passtrough into KVM. Server grade processor and board is your best bet but sometimes it can be little 
bit tricky. Do your best research and hope for the best.

<br><br>
First, go to the BIOS settings and enable VT-D or AMD-Vi
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/001.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
If your motherboard support SR-IOV, enable it too
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/002.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
Then, install virt-manager and ovmf. Here i'm using VMM to make our life easy.
```
sudo apt install virt-manager ovmf -y
```

<br><br>
Next enable IOMMU in linux
```
sudo nano /etc/default/grub 
```
then add `iommu=1 intel_iommu=on` after `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash` 
or if you're using AMD based system, use `iommu=1 amd_iommu=on`. Here's mine
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash iommu=1 intel_iommu=on vfio-pci.ids=1002:67ff,1186:1300 vga=normal nofb nomodeset video=vesafb:off i915.modeset=0"
```
then do the following
```
sudo update-grub
```
and `reboot` your system.

<br><br>
Then check if IOMMU is enabled
```
sudo dmesg | grep IOMMU
```
in my case it will output.
```
[    0.000000] DMAR: IOMMU enabled
[    0.000000] DMAR-IR: IOAPIC id 6 under DRHD base  0xfbffe000 IOMMU 0
[    0.000000] DMAR-IR: IOAPIC id 7 under DRHD base  0xfbffe000 IOMMU 0
```
You may get similar output.

<br><br>
Next step is to make sure that your motherboard has good IOMMU Group.
Copy, save as `check.sh` do `chmod +x check.sh` and run the script as root
```
#!/bin/bash
for d in /sys/kernel/iommu_groups/*/devices/*; do
    n=${d#*/iommu_groups/*}; n=${n%%/*}
    printf 'IOMMU Group %s ' "$n"
    lspci -nns "${d##*/}"
done;
```
Then find your PCIE device. Here's mine
```
IOMMU Group 16 00:1e.0 PCI bridge [0604]: Intel Corporation 82801 PCI Bridge [8086:244e] (rev 90)
IOMMU Group 17 00:1f.0 ISA bridge [0601]: Intel Corporation 82801JIR (ICH10R) LPC Interface Controller [8086:3a16]
IOMMU Group 17 00:1f.2 IDE interface [0101]: Intel Corporation 82801JI (ICH10 Family) 4 port SATA IDE Controller #1 [8086:3a20]
IOMMU Group 17 00:1f.3 SMBus [0c05]: Intel Corporation 82801JI (ICH10 Family) SMBus Controller [8086:3a30]
IOMMU Group 17 00:1f.5 IDE interface [0101]: Intel Corporation 82801JI (ICH10 Family) 2 port SATA IDE Controller #2 [8086:3a26]
IOMMU Group 18 08:00.0 VGA compatible controller [0300]: Advanced Micro Devices, Inc. [AMD/ATI] Baffin [Radeon RX 550 640SP / RX 560/560X] [1002:67ff] (rev cf)
IOMMU Group 18 08:00.1 Audio device [0403]: Advanced Micro Devices, Inc. [AMD/ATI] Baffin HDMI/DP Audio [Radeon RX 550 640SP / RX 560/560X] [1002:aae0]
IOMMU Group 19 fe:00.0 Host bridge [0600]: Intel Corporation Xeon 5600 Series QuickPath Architecture Generic Non-core Registers [8086:2c70] (rev 02)
IOMMU Group 19 fe:00.1 Host bridge [0600]: Intel Corporation Xeon 5600 Series QuickPath Architecture System Address Decoder [8086:2d81] (rev 02)
IOMMU Group 1 00:01.0 PCI bridge [0604]: Intel Corporation 5520/5500/X58 I/O Hub PCI Express Root Port 1 [8086:3408] (rev 22)
```
As you can see, my RX 560 was using IOMMU group 18 and no other PCIE device using that group. 
That was a good sign because we can proceed to next step. If you get multiple device on same 
IOMMU group, you have two basic options. If your system is running fine even that device is 
used in KVM, you MUST pass everything into KVM. If that device is critical to your system then 
you can stop there. Or Arch linux users has made custom patch to bypass IOMMU Group `ACS override patch` 
but DO THAT WITH YOUR OWN RISKS. Some device should not passed into KVM for example `PCI Bridge`.

<br><br>
Try to take a note for PCI Numeric id's. mine is
> 08:00.0 VGA compatible controller [0300]: Advanced Micro Devices, Inc. [AMD/ATI] Baffin [Radeon RX 550 640SP / RX 560/560X] [1002:67ff] (rev cf)

and
> 08:00.1 Audio device [0403]: Advanced Micro Devices, Inc. [AMD/ATI] Baffin HDMI/DP Audio [Radeon RX 550 640SP / RX 560/560X] [1002:aae0]

<br><br>
Then pass the PCI devices
```
sudo nano /etc/initramfs-tools/modules
```
add the line
```
softdep amdgpu pre: vfio vfio_pci

vfio
vfio_iommu_type1
vfio_virqfd
options vfio_pci ids=1002:67ff,1002:aae0
vfio_pci ids=1002:67ff,1002:aae0
vfio_pci
amdgpu
```
then
```
sudo nano /etc/modules
```
add the line
```
vfio
vfio_iommu_type1
# vfio_pci ids=1002:67ff,1002:aae0
```
Then
```
sudo nano /etc/modprobe.d/amdgpu.conf
```
add the line
```
softdep amdgpu pre: vfio vfio_pci
```
Next
```
sudo nano /etc/modprobe.d/vfio.conf 
```
add the line 
```
options vfio-pci ids=1002:67ff,1002:aae0
```
Change the PCI ids with your PCI ids. Some of the line used because i'm 
using AMD GPU. for Nvidia GPU, the process is similar. Read this 
[forum post](https://linustechtips.com/main/topic/978579-guide-linux-pci-gpu-vfio-passthrough/) 
for more information

<br><br>
Then update the initramfs
```
sudo update-initramfs -u 
```
next `reboot` your system and make sure VFIO is working
```
lspci -vnn | grep -iP "vga|amdgpu|nvidia|nouveau|vfio-pci"
```
you should get something similar
```
08:00.0 VGA compatible controller [0300]: Advanced Micro Devices, Inc. [AMD/ATI] Baffin [Radeon RX 550 640SP / RX 560/560X] [1002:67ff] (rev cf) (prog-if 00 [VGA controller])
	Kernel modules: amdgpu
	Kernel driver in use: vfio-pci
```
as you can see the kernel driver is changed to vfio-pci it mean that vfio is working. 
If not re-check your configurations. More informations
```
sudo dmesg | grep -e DMAR -e IOMMU -e vfio
```

<br><br><br>
The next part is to configure the VM itself.
first enable UEFI support in QEMU
```
sudo nano /etc/libvirt/qemu.conf
```
do `ctrl + w` and type `#nvram` and press `enter` now you need to remove `#` in
```
nvram = [
   "/usr/share/OVMF/OVMF_CODE.fd:/usr/share/OVMF/OVMF_VARS.fd",
   "/usr/share/OVMF/OVMF_CODE.secboot.fd:/usr/share/OVMF/OVMF_VARS.fd",
   "/usr/share/AAVMF/AAVMF_CODE.fd:/usr/share/AAVMF/AAVMF_VARS.fd",
   "/usr/share/AAVMF/AAVMF32_CODE.fd:/usr/share/AAVMF/AAVMF32_VARS.fd"
]
```
the line may be different but it should look similar. Then do `reboot`

<br><br>
Then create simple and quick VM using `Virtual Machine Manager`
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/01.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/02.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/03.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/04.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/05.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
Don't forget to check `Customize configuration before install`
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/06.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/07.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
Here i'm using Q35 Chipset and regular BIOS as my setup. You can combination of i440FX, Q35 and UEFI, BIOS if you encounter some problem.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/08.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
Then go to `CPUs tab` and configure as you need.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/09.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
Next, `Add Hardware` select `Input Tab` and select `EvTouch USB Graphic Tablet`.
Then install Windows as usual.

<br><br>
After Windows installation finished, then shutdown the VM and add a new hardware and pass both Video output and sound
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/10.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
Then boot your VM and install the necessary drivers and hope that your PCI device is working as intended
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-11-25-my-journey-to-pcie-or-vga-passtrough-in-kvm/11.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
And That's it, You have full Windows system running in KVM and the best part is you can play games or other 
heavy task as well

<br><br>
In my case, because i'm using my server primarily as GUI remote machine, the vesa frame buffer is using the VGA 
memory so i cannot pass that into KVM. So i need to disable vesafb by editing grub config.
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash iommu=1 intel_iommu=on vga=normal nofb nomodeset video=vesafb:off i915.modeset=0"
```

If you're using Nvidia card and you're getting error 43 in device manager, you might need to do
```
virsh edit YOUR-VM-NAME
```
do something like
```
...
<features>
	<hyperv>
		...
		<vendor_id state='on' value='1234567890ab'/>
		...
	</hyperv>
	...
	<kvm>
	<hidden state='on'/>
	</kvm>
</features>
...
```

If you still doesn't get output from your VGA, Try different Video source 
(HDMI, DVI, Displayport) or change Chipset to Q35 or i440FX and change from BIOS to UEFI.

If that still won't work, you might need to copy your VBIOS and put that inside the KVM.

Keep trying and good luck!

<br><br>
> Update 13/01/2020
> Recently i boot into my windows 10 vm and after few second it just freeze, then i find out that kernel `4.15.0-74-generic` was the culprit. after going back to `4.15.0-72-generic`, everything back to normal.

<br><br>
To hide vm status in windows

* set cpu to `Copy host CPU configuration`
* do `sudo virsh edit <vmname>`
* change
	```
	<cpu mode='host-model' check='partial'>
		<model fallback='allow'/>
	</cpu>
	```

* to
	```
	<cpu mode='host-model' check='partial'>
		<model fallback='allow'/>
		<feature policy='disable' name='hypervisor'/>
	</cpu>
	```

* then add

	```
	<kvm>
		<hidden state='on'/>
	</kvm>
	```

<br><br>
Some Sauce

<https://dominicm.com/gpu-passthrough-qemu-arch-linux/>

<https://linustechtips.com/main/topic/978579-guide-linux-pci-gpu-vfio-passthrough/>

<https://mathiashueber.com/windows-virtual-machine-gpu-passthrough-ubuntu/>

<https://blog.zerosector.io/2018/07/28/kvm-qemu-windows-10-gpu-passthrough/>

<https://forums.unraid.net/topic/78188-rx-580-passthrough-hard-hanging-host/>

<https://bbs.archlinux.org/viewtopic.php?id=230386>

<https://youtu.be/3yhwJxWSqXI>
