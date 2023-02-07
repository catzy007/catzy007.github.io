#### Turn SBC Into OpenWRT Router
_Sunday, September 6, 2020_

Yeah, let's face it. It's summer and COVID has strike for almost a year now, i had no money 
and i got a lot of free time at home. So yeah i need a new toy and that is what i going to do. 
As you can see from my older post, i got quite a lot of SBC and i'm not going to use it until 
my next research so rather than sitting and collecting dust, i'm going to use it for my home router.

The SBC i'm gonna use for this is [OrangePI Zero](https://linux-sunxi.org/Xunlong_Orange_Pi_Zero) the version 
i use has [Allwinner H2+](http://linux-sunxi.org/H2%2B#Variants) processor, 512MB RAM and 8GB MicroSD.

Before proceeding, make sure your SBC is supported in [OpenWRT Table of Hardware](https://openwrt.org/toh/start) 
in my case the only thing that isn't supported is OpiZero Wi-Fi chip (XR819) or at least isn't supported by 
current version of OpenWrt (19.07.03) so i use my old USB Wi-Fi from TP-LINK (TL-WN321G) my version 
has Ralink RT2070 your might be different. 

To verify your Wi-Fi chip, plug your USB Wi-Fi to Linux system and do `lsusb`. It should output similar to 
```
# lsusb
Bus 003 Device 002: ID 148f:2070 Ralink Technology, Corp. RT2070 Wireless Adapter
Bus 002 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
Then make sure OpenWrt has driver support for your Wi-Fi chip. Just google the name followed by OpenWrt. 
From [someone post](https://forum.archive.openwrt.org/viewtopic.php?id=71340), i need to install
```
kmod-lib-crc-itu-t
kmod-rt2x00-lib
kmod-rt2x00-usb
kmod-rt2800-lib
kmod-rt2800-usb
hostapd
```

Okay after some searching and make sure all part supported, which version to use, which driver to use it's 
time to download they called `firmware` from <https://downloads.openwrt.org/releases/>. OpenWrt sort 
the system by it's Chip/Processor manufacturer so (your might be different). 
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2020-09-06-turn-sbc-into-openwrt-router/1.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

First, go to current supported version, then go to `targets`, then go to chip manuf, then go to architecture, 
then download the image

Okay according to my SBC, `19.07.3/targets/sunxi/cortexa7/sun8i-h2-plus-orangepi-zero-ext4-sdcard.img.gz` 
yours might be different
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2020-09-06-turn-sbc-into-openwrt-router/2.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then prepare your SD Card don't forget to back up your data and flash the firmware to your SD Card. Here i'm using 
[Etcher](https://www.balena.io/etcher/) you can use dd, win32diskimager or any tools similar.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2020-09-06-turn-sbc-into-openwrt-router/3.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

After done flashing, plug the SD Card to SBC, plug the power and connect to your computer using LAN cable.

Then go to web browser and go to [192.168.1.1](http://192.168.1.1)
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2020-09-06-turn-sbc-into-openwrt-router/4.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Because no password set, just click `Login`. 

The first thing to do is set a password. To do that, go to `System > Administration` set your password and `Save`

Next thing to do is install all driver. Go to `System > Software > Update lists...` wait a second then find and 
install all necessary package.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2020-09-06-turn-sbc-into-openwrt-router/5.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

After all package has been installed, do a reboot `System > Reboot > Perform reboot`

Then go to `Network > Wireless` and that's it your Wi-Fi is working.

To turn this into Access Point.
* First plug the LAN to your laptop or PC.
* Open web browser and go to <http://192.168.1.1>.
* Then go to `Network > Firewall > Traffic Rules > Add`.
* Then Fill `Name` with `AllowLuciWan`.
* Next set the `Protocol` as `TCP`.
* Set the `Source zone` as `Any zone (forward)`.
* Set the `Destination zone` as `Device (input)`.
* Set the `Destination port` as `443`.
* Go to Advanced Settings tab and set `Restrict to address family` as `IPv4 only`.
* Press `Save` then `Save & Apply`.
* Next go `to Network > Interfaces`.
* Set the `Protocol` as `DHCP client`.
* Press `Save` then `Save & Apply` and Press the `RED Button`.
* Last, plug it to your local network, and you can access it 
via HTTPS.