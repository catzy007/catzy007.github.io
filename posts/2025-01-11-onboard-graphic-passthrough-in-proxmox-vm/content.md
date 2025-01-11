#### Onboard Graphic Passthrough in Proxmox VM 
_Saturday, January 11, 2025_

There are times when you need a GPU acceleration inside a VM, whether it is for 
3D graphics or video hardware acceleration. Unfortunately dedicated GPU is not 
always an option a budget, power and space constrain may become an issue. Another 
uses are to add second GPU to reduce load from primary GPU and gain better 
performance overall. Fear not one may already have a GPU without spending extra 
dime in form of an onboard GPU. The drawback is that one can't use a display 
to host OS after system is booted. Another drawback is performance may be 
limited but at least something is better than nothing. 

First, go to BIOS and enable Virtualization and VT-D. Then boot into the machine and do the following.
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
    blacklist snd_hda_intel
    blacklist i915
update-initramfs -u -k all
reboot
dmesg | grep -E DMAR
```
If nothing goes wrong, you should get `DMAR: Intel(R) Virtualization Technology for Directed I/O`.

Then add GPU and GPU Audio PCIe device ID in vfio-pci options.

![img_lg](./posts/2025-01-11-onboard-graphic-passthrough-in-proxmox-vm/03.png)

```
lspci -vnn | grep -iP "vga|amdgpu|nvidia|nouveau|vfio-pci"
nano /etc/modprobe.d/vfio.conf  
    options vfio-pci ids=8086:191d disable_vga=1
update-initramfs -u -k all
reboot
lspci -vnn | grep -iP "vga|amdgpu|nvidia|nouveau|vfio-pci"
```

Next, create a new VM with `OVMF (UEFI)` BIOS and machine type as `Q35 8.0`. 
For CPU type set it as Host.

![img](./posts/2025-01-11-onboard-graphic-passthrough-in-proxmox-vm/01.png)

Then Add GPU as PCI Device, Check `PCI Express`, make sure `Primary GPU` is left uncheck.

![img](./posts/2025-01-11-onboard-graphic-passthrough-in-proxmox-vm/02.png)

Another way is to use Intel GVT-g. The way this works is virtualizing the GPU by mediating 
passthrough device (VFIO mediated device framework based) to provide virtual GPU therefore 
multiple VM can utilize it at the same time. As a side note GVT-g utilize i915 driver, 
therefore only Intel Broadwell to Comet Lake iGPU is supported. For later device, SR-IOV is 
may become an option.

```
apt install -y intel-opencl-icd 
```
```
nano /etc/default/grub 
	GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on i915.enable_gvt=1" 
update-grub 
nano /etc/modules 
	# Modules required for PCI passthrough
	vfio
	vfio_iommu_type1
	vfio_pci
	vfio_virqfd
	# Modules required for Intel GVT
	kvmgt
	exngt
	Vfio-mdev 
update-initramfs -u -k all 
reboot
dmesg | grep -e DMAR -e IOMMU 
```

Then Add GPU as PCI Device, Select `Mapped Device` and `Mdev Type`.

[Enabled GPU passthrough of Intel HD 610 with GVT-g in Proxmox 8](https://forum.proxmox.com/threads/enabled-gpu-passthrough-of-intel-hd-610-with-gvt-g-in-proxmox-8.134461/)

[GVTg Setup Guide](https://github.com/intel/gvt-linux/wiki/GVTg_Setup_Guide)

[Intel GVT-g](https://wiki.archlinux.org/title/Intel_GVT-g)