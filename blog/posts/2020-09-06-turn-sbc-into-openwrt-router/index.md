### **Turn SBC Into OpenWRT Router**
_Sunday, September 6, 2020_

Yeah let's face it. It's summertime and COVID has strike for almost a year now, i had no money 
and i got lot of free time at home. So yeah i need a new toys and that is what i gonna do. 
As you can see from my older post, i got quite a lot of SBC and i'm not going to use it until 
my next research so rather than sitting and collecting dust, i'm gonna use it for my home router.

The sbc i'm gonna use for this is [OrangePI Zero](https://linux-sunxi.org/Xunlong_Orange_Pi_Zero) the version 
i use has [Allwinner H2+](http://linux-sunxi.org/H2%2B#Variants) processor, 512MB RAM and 8GB MicroSD.

Before proceeding, make sure your SBC is supported in [OpenWRT Table of Hardware](https://openwrt.org/toh/start) 
in my case the only thing that isn't supportted is OpiZero wifi chip (XR819) or at least isn't supportted by 
current version of OpenWRT (19.07.03) so i use my old usb wifi from TP-LINK (TL-WN321G) my version 
has Ralink RT2070 your might be different. 

To verify your wifi chip, plug your usb wifi to linux system and do `lsusb`. It should output similar to 
```
# lsusb
Bus 003 Device 002: ID 148f:2070 Ralink Technology, Corp. RT2070 Wireless Adapter
Bus 002 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
then make sure Openwrt has driver support for your wifi chip. Just google the name followed by openwrt. 
from [someone post](https://forum.archive.openwrt.org/viewtopic.php?id=71340), i need to install
```
kmod-lib-crc-itu-t
kmod-rt2x00-lib
kmod-rt2x00-usb
kmod-rt2800-lib
kmod-rt2800-usb
hostapd
```

Okay after some searching and make sure all part supported, which version to use, which driver to use it's 
time to download they called `firmware` from <https://downloads.openwrt.org/releases/>. Openwrt sort 
the system by it's Chip/Processor manufacturer so (your might be different). 
<p align="center">
	<img src="./posts/2020-09-06-turn-sbc-into-openwrt-router/1.png" height="400px" alt="img1">
</p>

First, go to current supportted version `(mine 19.07.3)`, then go to `targets`, then go to chip manuf 
`(mine sunxi)`, then go to architecture `(mine cortexa7)` then download the image `(mine sun8i-h2-plus-orangepi-zero-ext4-sdcard.img.gz)`
<p align="center">
	<img src="./posts/2020-09-06-turn-sbc-into-openwrt-router/2.png" height="400px" alt="img2">
</p>