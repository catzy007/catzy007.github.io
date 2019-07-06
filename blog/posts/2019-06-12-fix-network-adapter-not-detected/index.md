### **Fix Linux Network Adapter Not Detected**
#### Sunday, June 2, 2019
Here's the story, you finally decide to install linux on your machine. 
It installed and boot, but then you realize that your network adapter not detected. 
What happend? the simple analogy is. Linux is operating system, and same as windows, 
it communicate to your hardware via driver that your hardware maker create. On windows 
it won't be a problem because hardware maker will make driver or ther device won't be 
usable. On linux that may be a different story. The hardware maker might not create 
driver for linux, they didn't share source code for ther driver to port on linux, or 
their driver might be propriatery which sometimes linux iso can't include.

for most of the time, the driver just propriatery so the linux cant include it in 
the iso's. So to install the driver, you need to download and install it manually. 
That's what we're doing here.

<br>
#### First, getting information about your wifi model number
what you need to do is
```
sudo lspci
```
this will list all your hardware on PCI bus. Or if your device is usb then
```
sudo lsusb
```
it will do the same thing but via usb
<p align="center">
	<img src="./posts/2019-06-12-fix-network-adapter-not-detected/1.png" height="250px" alt="1">
</p>
as you can see in my `Network Controller` it is `BCM43142` try to remember that.

<br>
#### Next google how to install wifi driver
just do simple googling.
<p align="center">
	<img src="./posts/2019-06-12-fix-network-adapter-not-detected/2.png" height="250px" alt="2">
</p>
> You might need to plug LAN cable or use verified wifi dongle to proceed

<br>
#### Next install your wifi driver
in my case it's `sudo apt install bcmwl-kernel-source`
<p align="center">
	<img src="./posts/2019-06-12-fix-network-adapter-not-detected/3.png" height="250px" alt="3">
    <br>
    <img src="./posts/2019-06-12-fix-network-adapter-not-detected/4.png" height="250px" alt="4">
</p>
> Your specific device might be different

<br>
#### Then reboot your machine and your wifi will work
<p align="center">
	<img src="./posts/2019-06-12-fix-network-adapter-not-detected/5.png" height="250px" alt="5">
</p>

> This method can be use to install any device. Just find the model number and google it