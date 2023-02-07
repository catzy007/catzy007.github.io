#### OpenWrt inside Proxmox VM
_Saturday, September 4, 2021_

Recently i wanted to consolidate all my network stuff into single box. Which contain 
few web services, router and access point. But how exactly you put a router inside 
servers, well keep reading to find out how.

First, i assume you already had known how to 
[install and run Proxmox in your server](https://pve.proxmox.com/wiki/Installation). 
Second, i assume you know how to set up OpenWrt, dealt with firewall, routing and 
things like that. you probably need to look around 
[OpenWrt User guide](https://openwrt.org/docs/guide-user/start).

Alright, with that out of the way let's begin. The first thing you need to do is 
to create a VM inside Proxmox.

* At the `OS` tab, select `Do not use any media`
* Then at `Hard Disk` tab, Set `Disk size` as `1GB` and `Format` as `Raw disk image`
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-09-04-openwrt-inside-proxmox-vm/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
* At the `Network` tab, change `Model` to `Intel E1000`
* Then confirm, finish and `Do not boot` the VM yet.

What you need next is OpenWrt disk image. To get it, go to 
[OpenWrt Release](https://downloads.openwrt.org/releases/). 
Here i'm using version 21.02.0 with x86/x64, then copy the download link for `generic-ext4-combined.img.gz` 
[file](https://downloads.openwrt.org/releases/21.02.0/targets/x86/64/). 

Then open your Proxmox terminal and go to your VM images directory. Usually `/var/lib/vz/images/<VMID>` 
for example, my VM ID is 103 so `/var/lib/vz/images/103`.

Next, use `wget <downloadlink>` to download OpenWrt disk image and extract it using `gzip -d <filename>`. 
Replace `<downloadlink>` with download link you obtain in previous step and replace `<filename>` with 
`generic-ext4-combined.img.gz`.

Then delete `VM-<VMID>-disk-0.raw` and replace it with OpenWrt disk image. Replace `<VMID>` with yours, 
mine is 103.

Last, boot it up and if everything goes well, OpenWrt should work right away.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-09-04-openwrt-inside-proxmox-vm/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

If you need, you can attach USB Wi-Fi Adapter, set it as USB Passthrough, Install some `kmod` package, 
and you should get Wi-Fi.

Or you can create another network bridge with no physical adapter attached to it, add another 
network to your OpenWrt and attach it to new network bridge. This way, if you create other VM or 
Container attached to new bridge, you can manage their network from OpenWrt.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-09-04-openwrt-inside-proxmox-vm/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

And i think that's it, Good luck and Have Fun.