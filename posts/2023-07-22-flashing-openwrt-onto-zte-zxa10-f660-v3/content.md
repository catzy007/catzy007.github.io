#### Flashing OpenWrt onto ZTE ZXA10 F660 V3
_Saturday, July 22, 2023_

A lot is happening recently, I started moving and live alone, and I had 
a full-time job now. Of course, I still want to play around with new 
things and here we are.

For a while I'm trying to find / build open-source, inexpensive, scalable 
and fully manageable home router solution. Then I stumble upon an OpenWrt 
based router. My attempt so far was to use x86-x64 based system with 
virtualization therefore I can run multiple services inside one box. 
But I find out later that the I/O throughput is not enough. My next 
option is to use a dedicated box and the first candidate is Xiaomi MIR4A 
it supports OpenWrt and had enough storage and ram for my uses, but it 
lacks a USB port. My second candidate is ZTE F660 V3 which comes from my 
old internet provider. Apparently my unit had 128 MB RAM, 128 MB NAND 
which is plenty for my use case and a USB port, but it has a small 
problem OpenWrt doesn't officially support it. After digging around, 
I found [github.com/msdos03](https://github.com/msdos03) that build 
and maintain custom U-Boot and OpenWrt support for F660. And before 
long I managed to flash my F660 with OpenWrt and here is how.

The first part is to flash a custom uboot to the device. My method is 
to use UART to gain shell and tftp to quickly transfer files between 
host device and target. As for UART adapter, I'm using CP2102. I have 
tried other adapter, and it just output a random unreadable character.
* First open your device and solder pin header to your board. Then wire 
it to the UART adapter and don't forget to plug LAN1 (the rightmost 
connector) to the network.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="https://catzy007.github.io/things/f660v3/serial.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
* Then grab a custom uboot image from [msdos03/avanta-uboot-f660](https://github.com/msdos03/avanta-uboot-f660/releases) or if you have 128MB NAND version, you can grab one from [here](https://github.com/msdos03/avanta-uboot-f660/files/11854368/u-boot-f660_f660_128m_ddr3_nand.zip).
* Next, install U-Boot tools and tftp server.
```
sudo apt install u-boot-tools atftpd
sudo mkdir /srv/tftp
```
* Then copy custom uboot image to tftp directory and start tftp
```
sudo cp ./uboot.bin /srv/tftp
sudo chown nobody:nogroup -R /srv/tftp
sudo atftpd --daemon --no-fork --logfile - /srv/tftp
```
* Next, start kwboot and repeatedly press enter to gain shell
```
sudo kwboot -t -p -B115200 /dev/ttyUSB0 -b uboot.bin
```
* Then pull and flash the custom uboot image
```
tftp uboot.bin
nand erase
nand write 0x2000000 0x0 0x100000
```
* Next, power cycle your device. If nothing goes wrong, it should output 
something like
```
 __   __                      _ _
|  \/  | __ _ _ ____   _____| | |
| |\/| |/ _` | '__\ \ / / _ \ | |
| |  | | (_| | |   \ V /  __/ | |
|_|  |_|\__,_|_|    \_/ \___|_|_|
         _   _     ____              _
        | | | |   | __ )  ___   ___ | |_ 
        | | | |___|  _ \ / _ \ / _ \| __| 
        | |_| |___| |_) | (_) | (_) | |_ 
         \___/    |____/ \___/ \___/ \__| 
 ** LOADER **


U-Boot 2009.08 (11月 19 2022 - 15:53:08) Marvell version: 2.1.6_NQ

Board: F660
SoC:   88F6560 A0
CPU:   Marvell Feroceon (Rev 1) - LE
       CPU @ 0Mhz, L2 @ 0Mhz
       DDR3 @ 0Mhz, TClock @ 200Mhz
PEX 0: Detected No Link.
PEX 1: Root Complex Interface, Detected Link X1
DRAM:  128 MB
       CS 0: base 0x00000000 size 128 MB
       Addresses 10M - 0M are saved for the U-Boot usage.
NAND:  1bit HM ECC, Size: 128 MiB
*** Warning - bad CRC or NAND, using default environment
```
* Congratulations, the easy part is over. Now for the hard part (to be continued).