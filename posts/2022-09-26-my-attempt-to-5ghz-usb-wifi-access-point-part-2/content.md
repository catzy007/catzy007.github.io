#### My Attempt to 5GHz USB WIFI Access Point Part 2
_Monday, September 26, 2022_

Exactly a year ago i tried 5GHz AC Wi-Fi in my house. At the time, i was using USB 
adapter based on RTL8812BU which is working but with few issues. First, no in-kernel 
driver support which is quite important if you want to deploy this system long term 
as one kernel upgrade might render the driver to non-working state. Next is flaky AP 
compatibility, if you set the device as Access Point (AP) and eventually at some point 
it will stop working. I do not know if it's hardware bug (power management related) 
or it is driver related (community support driver). But it is enough to make me decide 
not to push it beyond testing phase. Maybe, just maybe one day community driver is good 
enough, and it got in-kernel driver support. I mean nothing works in the first try right? 
So here is my second attempt.

The basic concept is still the same i'm going to use USB adapter but this time i'm going 
to eat my own advice. The adapter i'm using is 
[TP-Link Archer T2UH](http://en.techinfodepot.shoutwiki.com/wiki/TP-LINK_Archer_T2UH) 
it uses MT7610U which can handle 433Mbps PHY speed and has in-kernel driver, also it 
should work under OpenWRT with [kmod-mt76x0u](https://openwrt.org/packages/pkgdata/kmod-mt76x0u) 
module. The reason i was finally able to get this adapter is clearance sale, this adapter 
is discontinued so i was able to get it pristine in box with driver CD and all the good 
stuff for 11 USD pretty good deal if you ask me.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/01.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br>
Every project start with testing. First i plug the adapter to my laptop via USB 3.0 
using Ubuntu 22.04 it just works no manual driver installation required. Then using 
another machine, i set my RTL8812BU as Access Point in channel 36 at 80Mhz 867Mbps 
PHY and just like that i get 433Mbps PHY out of my new adapter.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then i set [iperf](https://github.com/esnet/iperf) to see the maximum real-world throughput 
of the system and i get 248Mbps. Clearly 248 is less than 433 right, well this adapter is only 
rated for USB 2.0 which should be fine because USB 2.0 is rated at 480Mbps right? No, [the 
effective throughput of USB is 280Mbps](https://superuser.com/a/899993), so this speed is 
correct.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br>
Now that we know about the absolute maximum capability of this adapter, let's deploy this. 
Here i'm going to use my old post about 
[OpenWrt inisde Proxmox VM](https://catzy007.github.io/loader.html?post=2021-09-04-openwrt-inside-proxmox-vm) 
the gist is first you set up a VM with 1GB of RAW disk image and 2 Intel E1000 Virtual NICs, 
then download the OpenWrt image, extract it and replace the newly created VM disk image with 
OpenWrt disk image.

After VM creation, add the USB device to OpenWrt VM using USB Vendor/Device ID method then 
Boot the VM. Then find a way to get into LuCI or use serial command line instead. Then using 
LuCI go to `System > Software > Update lists...` and install following package one at a time.
```
hostapd
kmod-mt76x0u
```
or using opkg, do
```
$ opkg update
$ opkg install hostapd kmod-mt76x0u
```
Then reboot the VM. Assuming everything goes well, In `Network > Wireless` tab you shall see 
new wireless device. Press `Add` to create new Access Point and set it according to your 
preferences. In my case, i set my Channel to 36, 80MHz width, Max TX Power 50 mW and Country 
Code `US`. For some reason if i set my country code to my actual one, it throws error and 
the adapter won't work until i set the code correctly. Then enable your newly created AP 
and you should get.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/04.png" alt="img">
		</div>
	</div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/05.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

While most people will call it a day at this point, i decided to test the real world 
throughput of this system. I set iperf in my server using 1 Gigabit LAN, then i use [iperf 
android app](https://play.google.com/store/apps/details?id=iperf.project) and get.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/06.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br>
If you want to replicate this project and decided to bought anything please take a look 

[USB WiFi chipset information for Linux](https://github.com/morrownr/USB-WiFi/blob/main/home/USB_WiFi_Chipsets.md)

[Wi-Fi 4/5/6/6E (802.11 n/ac/ax)](https://www.duckware.com/tech/wifi-in-the-us.html)