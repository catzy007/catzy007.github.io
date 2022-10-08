#### My Attempt to 5GHz USB WIFI Access Point Part 2
_Monday, September 26, 2022_

Exactly a year ago i tried 5GHz AC Wi-Fi in my house. At the time, i was using USB 
adapter based on RTL8812BU which is working but with few issues. First, no in-kernel 
driver support which is quite important if you want to deploy this system long term 
as one kernel upgrade might render the driver to non-working state. Next is flaky AP 
compatibility, if you set the device as Access Point (AP) eventually at some point 
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
Code `US`. For some reason if i set the country code to my actual one, it throws error and 
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
android app](https://play.google.com/store/apps/details?id=iperf.project) and this is the 
result.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/06.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Which is weird this time i get 23.4Mbps instead of getting 248Mbps i get before. Okay this 
doesn't seem right then i turn my attention into USB Controller in my system, to do it 
i open terminal and type `lspci | grep usb` which gave me.
```
00:13.0 USB controller: Advanced Micro Devices, Inc. [AMD/ATI] SB600 USB (OHCI0)
00:13.1 USB controller: Advanced Micro Devices, Inc. [AMD/ATI] SB600 USB (OHCI1)
00:13.2 USB controller: Advanced Micro Devices, Inc. [AMD/ATI] SB600 USB (OHCI2)
00:13.3 USB controller: Advanced Micro Devices, Inc. [AMD/ATI] SB600 USB (OHCI3)
00:13.4 USB controller: Advanced Micro Devices, Inc. [AMD/ATI] SB600 USB (OHCI4)
00:13.5 USB controller: Advanced Micro Devices, Inc. [AMD/ATI] SB600 USB Controller (EHCI)
```
Next i look for `SB600` and found document about 
[AMD SB600 Databook](https://www.amd.com/system/files/TechDocs/42119_sb600_ds_pub_3.07.pdf) 
From the document it shows that the USB controller chip itself support 10 USB port with a 
catch, It only has 5 OHCI controller and 1 EHCI controller. Which mean that out of all 10 
USB port, it can only handle one USB 2.0 (EHCI) at a time and the rest is USB 1.1 (OHCI). 
While regular board configured as 2 EHCI and the rest is OHCI/UHCI.

<br>
Finally, what's next? I need another USB adapter to handle Wi-Fi 4 (2.4GHz) i also need 
to upgrade "replace" my system to one with USB 3.0 support. In the meantime I will 
deploy this system to test its long-term stability.

<br>
**[UPDATE 28/09/22]**
I finally got it. The main issues about my current system is that it only has one USB 2.0 
EHCI controller onboard, then what if i plug only one device to take advantage of full EHCI 
controller? How about my other stuff? That's where USB Hub comes in.
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/07.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
Using USB Hub, the controller technically only see one device connected so hopefully it 
will use USB 2.0 ECHI all the time. Only downside is that the bandwidth become shared 
between connected devices. In my testing i have this 1$ USB Hub laying around, then i 
plug all of my USB devices to it and this is what i got.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/08.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>
While 50~60Mbps may not sound that much my last result is around 23Mbps. Which mean that i 
get 2~3X the performance just using USB Hub. My theory is that the AMD chipset in my system 
uses early implementation of USB scheduling so it is a little flaky then using simple USB 
Hub which is well known technology at this point with better packet queueing and scheduling 
i get a better result. I currently plug 3 devices to my USB Hub, in theory i should be able 
to pull around (280Mbps / 3 = 93Mbps) But i only get closer to (280Mbps / 4 = 70Mbps) i think 
my USB Hub isn't aware about how much device plugged in and it just divide the bandwidth by 
4 all the time. I mean that's what you get for 1$ USB Hub.

Other concern that i have is that the more devices you plugged in, the more power it draws. 
In my case i'm using low power MT7610U but if i'm using RTL8812BU it may draw more power 
than USB Hub can handle. The next task is to get a USB 3.0 Hub and i hope it can scale the 
bandwidth according to how much device plugged (for note the bandwidth is still capped at 
USB 2.0 speed). Also, i need to get an external powered USB Hub in case i use high power 
devices in the future.

<br>
**[UPDATE 08/10/22]**
I recently acquired another USB Wi-Fi. It is [TP-Link TL-WN727N V3](http://en.techinfodepot.shoutwiki.com/wiki/TP-LINK_TL-WN727N_v3) it uses Ralink RT5370 and 
should be able to handle 150Mbps PHY definietly not the fastest i can get but at 2$ old stock shipped complete in box, that's pretty good deal. The reason why i specifically 
looking for V3 revision is that it uses Ralink chipset which should get AP mode 
support under OpenWrt [kmod-rt2x00-usb](https://openwrt.org/packages/pkgdata/kmod-rt2x00-usb). Since Ralink bought by Mediatek, USB adapter with ralink chipset new in box from established vendor is quite rare. Other option might be RT3070, RT3072, RT5372.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/09.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
As usual first is test the absolute limit of what this adapter can do. I plug it into my laptop USB 3.0 port, set it as AP then use iperf to test it's throughput and this is what i got.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/10.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Next, i plug it into my OpenWrt system, install `kmod-rt2x00-usb`, set it as AP mode and see what happens.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/11.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Then i do another iperf testing unfortunately this time i got very dissapointing result.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-26-my-attempt-to-5ghz-usb-wifi-access-point-part-2/12.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
I only get around 20Mbps which mean that this is the absolute limit of what my current system can do. I also encounter issues about USB plug of the adapter is 
getting warm which can indicate that the adapter tries to pull more amperage from the USB plug which also indicate that the adapter may not get enough power?

<br>
If you want to replicate this project, please take a look.

[USB WiFi chipset information for Linux](https://github.com/morrownr/USB-WiFi/blob/main/home/USB_WiFi_Chipsets.md)

[Wi-Fi 4/5/6/6E (802.11 n/ac/ax)](https://www.duckware.com/tech/wifi-in-the-us.html)

[OpenWrt Forum Archive](https://forum.archive.openwrt.org/viewtopic.php?id=45166)