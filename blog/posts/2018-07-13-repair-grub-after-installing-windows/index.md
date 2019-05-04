### **Repair GRUB after installing windows**
#### Friday, July 13, 2018

Maybe you're someone like me who like playing with code and play windows games a 
lot and have under-power computer that can't run wine smoothly. the answer for 
that is of course. dual boot.

at windows installation process you're realize that installing windows over linux 
will causing windows to take over your boot priority. So how to fix that.

here i'm using lubuntu as example. but any ubuntu based OSes will work just fine!

First, make ubuntu bootable cd or usb
* Install [Unetbootin](https://unetbootin.github.io/)
* Plug your usb drive
* Open Unetbootin and select `DiskImage`
* Press tri dot on right corner `...`
* Select your linux `ISO`
<p align="center">
	<img src="./posts/2018-07-13-repair-grub-after-installing-windows/1.png" height="250px" alt="unetbootin">
</p> 

* Next boot the usb in `live mode` and connect it into internet
> You might need to change boot order via BIOS. Check your device manual

* Then open terminal and type
```
sudo add-apt-repository ppa:yannubuntu/boot-repair
sudo apt-get update
sudo apt-get install -y boot-repair && boot-repair
boot-repair
```
* Next click on `"recommended repair"`
* Aand that's it... so simple

#### Sauce
<https://help.ubuntu.com/community/Boot-Repair>
