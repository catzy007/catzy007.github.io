### **Use USB TV or USB Capture on linux**
#### Thursday, July 25, 2019
I have a usb tv that i bought long time ago back in 2016. It's 1USD usb tv form gadmei.

Okay the first thing we need to know is device id. That can be achieved by running `lsusb` 
and this is the output.
<p align="center">
	<img src="./posts/2019-07-25-use-usb-tv-or-usb-capture-on-linux/1.png" height="250px" alt="1">
</p>
As you can see it only had hardware id not the name, so little bit of googling and found this 
<https://www.linuxtv.org/wiki/index.php/Gadmei_USB_TVBox_UTV382_(id_0x1f71:0x3301)> 
seems promising so far, but then i found that 
> Note: This seems to only enable the device to capture AV, not to do TV or FM reception. 
Dang so close.. but that's enough for me because for now i just need the AV capture function. 

Then i found out that new-ish kernel include support for this device. Here is my raspbian 
buster running 4.19.58 kernel.
<p align="center">
	<img src="./posts/2019-07-25-use-usb-tv-or-usb-capture-on-linux/2.png" height="250px" alt="2">
</p>

So i just use VLC to get some picture and here is my config.
<p align="center">
	<img src="./posts/2019-07-25-use-usb-tv-or-usb-capture-on-linux/3.png" height="250px" alt="3">
</p>
> the config for your device might be different. Try to change some parameter

If you want to have more fancier settings, try to install tvtime `sudo apt update && sudo apt install tvtime`.

If you have different usb tv, take a look at <https://linuxtv.org/wiki/index.php?search> and 
get some time for good reading