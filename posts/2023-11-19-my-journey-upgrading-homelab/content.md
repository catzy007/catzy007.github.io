#### My Journey Upgrading Homelab
_Sunday, November 19, 2023_

Recently or more specifically few months ago, I acquire a new machine 
which is going to replace my dying Proxmox server from 2020. The machine 
in question is a Lenovo ThinkCentre M900 SFF with a sticker price of 
roughly 45 USD and include a Pentium G4400 2 Core 2 Thread CPU, 4 GB 
RAM and 500 GB mechanical spinning drive. While this specs may not seem 
"impressive", In my local area it is a decent deal considering my 
use case and upgrade that I'm planning to do.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-upgrading-homelab/01.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

The first thing that I did is to upgrade the RAM. Lenovo M900 has 4 
slots of DDR4 RAM which is already populated with a single 
stick of DDR4 4 GB RAM, and fortunately for me, I have 3 sticks of 
DDR4 4 GB lying around making the total system memory to 16 GB which 
is enough for my use cases, unless I play around with AI and require 
more system memory.

The next upgrade is to add a GPU. But because my system is SFF form 
factor, I can't just use any GPU and expect it to fit. Instead, I 
have to use specific GPU called "Low-Profile" not the standard 
"Full-Height" one. There are few consumer-class GPU that are available 
in this form factor such as GTX 1050 or GTX 1650, but the majority of 
the GPU is either workstation or server-class one such as Quadro 
or Tesla lineup. In my case, I'm using NVIDIA Quadro K620 2 GB which 
I acquire for about 25 USD. Other than that, I also need DVI to HDMI 
adapter and HDMI Dummy Adapter because I plan to run this Headless.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-upgrading-homelab/02.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then I power it up, download and install latest Proxmox VE, backup 
and restore all services from my old server and plug it straight 
into the interweb with a proper protection. But how does it run? 
For the past month it has been fine actually with only minor thing such 
as high IO delay because of mechanical hard drive instead of a solid 
state one which I'm planning upgrade later.

The next thing I did is to try GPU Passthrough. The last time I did this 
back in 2019 with a Radeon GPU. Now a lot has changed, and I use NVIDIA 
GPU instead. Here are the resources that I use as a reference.

[PCI Passthrough - Proxmox VE](https://pve.proxmox.com/wiki/PCI_Passthrough)

[Proxmox PCI(e) Passthrough in 2 minutes : r/Proxmox](https://www.reddit.com/r/Proxmox/comments/lcnn5w/proxmox_pcie_passthrough_in_2_minutes/)

First, go to BIOS and enable Virtualization and VT-D. Then boot into 
the machine and do the following.
```
nano /etc/default/grub
	GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on iommu=pt nofb video=efifb:off"
update-grub
nano /etc/modules
	vfio
	vfio_iommu_type1
	vfio_virqfd
	vfio_pci
nano /etc/initramfs-tools/modules
	vfio
	vfio_iommu_type1
	vfio_virqfd
	vfio_pci
nano /etc/modprobe.d/pve-blacklist.conf
	blacklist nvidiafb
	blacklist nouveau
	blacklist snd_hda_intel
update-initramfs -u -k all
reboot
dmesg | grep -E DMAR
```
If nothing goes wrong, you should get `DMAR: Intel(R) Virtualization Technology for Directed I/O`.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-upgrading-homelab/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then add GPU and GPU Audio PCIe device ID in vfio-pci options.
```
lspci -vnn | grep -iP "vga|amdgpu|nvidia|nouveau|vfio-pci"
nano /etc/modprobe.d/vfio.conf
	options vfio-pci ids=10de:13bb,10de:0fbc disable_vga=1
update-initramfs -u -k all
reboot
lspci -vnn | grep -iP "vga|amdgpu|nvidia|nouveau|vfio-pci"
```
If nothing goes wrong, you should get `Kernel driver in use: vfio-pci`
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-upgrading-homelab/04.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Next, create a new VM with `OVMF (UEFI)` BIOS and machine type as 
`Q35 8.0` for CPU type I set it as `Host`.

Then Add GPU as PCI Device, Check `All functions` and `PCI Express`, 
make sure `Primary GPU` is left uncheck.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-upgrading-homelab/05.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

After that, boot the OS then download and install the NVIDIA Driver 
followed by your favorite remote desktop software.

Next reboot the and power off the VM.

Then in VM settings, set `Display` to `VirtIO-GPU (virtio)` and 
Check `Primary GPU` in `PCI Device`. 

Last, boot and remote to your VM, and hopefully it is working.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-upgrading-homelab/06.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<details>
<summary>Click to reveal vm.conf</summary>
```
bios: ovmf
boot: order=sata0;ide2;net0
cores: 2
cpu: host,hidden=1,flags=+pcid
efidisk0: local-lvm:vm-101-disk-0,efitype=4m,pre-enrolled-keys=1,size=4M
hostpci0: 0000:01:00,pcie=1,x-vga=1
ide2: local:iso/virtio-win.iso,media=cdrom,size=612812K
machine: pc-q35-8.0
memory: 8192
meta: creation-qemu=8.0.2,ctime=1698721066
name: vm.umbrella.net
net0: e1000=CD:80:C8:38:BE:0A,bridge=vmbr0,firewall=1
numa: 0
ostype: win10
sata0: local-lvm:vm-101-disk-1,size=64G
sata1: local-lvm:vm-101-disk-2,size=128G
smbios1: uuid=f64b38da-1149-4fc0-a3cf-05008ff2f08d
sockets: 1
vga: virtio
vmgenid: 1e606f3e-6cfc-42af-844b-cf61f4ebcb05
```
</details>

The next upgrade that I did is to add a Solid State Drive or more like 
two of them. The first SSD is just a regular Samsung 256 GB M.2 SATA. 
The other one is 16 GB of Intel Optane that I use as a boot drive. 
Compared to a traditional NAND based SSD, Optane is faster (IOPS) and 
has higher endurance rating (TBW) but since Q2 2022 Intel announce that 
development of future Optane product is ceased.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-upgrading-homelab/07.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Now for the overlooked one. The battery backup or most people call it 
Uninterruptible Power Supply (UPS) mine is APC BX650 (the one with USB 
data connector on the back) that I got second hand in dead condition 
I also grab myself a replacement sealed lead acid battery with 7.5Ah 
capacity. Then I disassemble the unit replace the battery, and it 
works kinda, for some reason it just keep beeping non-stop. After 
further disassembly I found that one of the connector got loose, 
so I just plug it back, and it works.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-11-19-my-journey-upgrading-homelab/08.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then I plug the USB to my system and set it up. In Windows, you can use 
something called APC PowerChute in Linux, you can use 
[apcupsd](https://help.ubuntu.com/community/apcupsd)

```
apt install apcupsd -y
cp /etc/apcupsd/apcupsd.conf /etc/apcupsd/apcupsd.conf.bak
nano /etc/apcupsd/apcupsd.conf
```
```
UPSNAME bx650
UPSCABLE usb
UPSTYPE usb
DEVICE 
POLLTIME 60
TIMEOUT 180
BEEPSTATE N
```
```
cp /etc/default/apcupsd /etc/default/apcupsd.bak
nano /etc/default/apcupsd
```
```
ISCONFIGURED=yes
```
```
systemctl restart apcupsd
apcaccess status
```
If everything set properly you should get a UPS status log. With my 
config the system will safely shut down after 3 minutes in battery 
mode, also I disable beep so that it won't disturb anyone if there 
is a power outage at the middle of the night.

For a while, I'm actually confused about how to properly disable alarm 
in my UPS. Apparently using apcupsd config to disable alarm only works 
for smart-ups class not the regular back-ups one. Well the following 
is a guide to disable APC UPS alarm for good. Here I'm using 
programmed interaction tool called `expect` and `autoexpect` to 
disable alarm via apctest. First install the required modules 
and create a new config.
```
apt update
apt install expect
nano /root/disableApcAlarm.exp
```
```
#!/usr/bin/expect

spawn apctest
expect {
    "6)  View/Change alarm behavior\r" {
        expect "Select function number: "
        send -- "6\r"
        expect {
            "Current alarm setting: ENABLED\r" {
                expect "Your choice: Select function: "
                send -- "d\r"
            }
            "Current alarm setting: DISABLED\r" {
                expect "Your choice: Select function: "
                send -- "q\r"
            }
        }
    }
}
expect "Select function number: "
send -- "q\r"
expect eof
```
Test the config and make sure the alarm is disabled.
```
expect /root/disableApcAlarm.exp
```
Then edit apcupsd service to disable alarm every time it starts.
```
systemctl stop apcupsd
nano /lib/systemd/system/apcupsd.service
```
```
ExecStartPre=/usr/bin/expect /root/disableApcAlarm.exp && /lib/apcupsd/prestart
```
Reload the config and start apcupsd back.
```
systemctl daemon-reload
systemctl start apcupsd
```