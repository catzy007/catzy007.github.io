#### Fix Linux Network Adapter Not Detected
##### *Sunday, June 2, 2019*
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
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-06-12-fix-network-adapter-not-detected/1.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
as you can see in my `Network Controller` it is `BCM43142` try to remember that.

<br>
#### Next google how to install wifi driver
just do simple googling.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-06-12-fix-network-adapter-not-detected/2.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
> You might need to plug LAN cable or use verified wifi dongle to proceed

<br>
#### Next install your wifi driver
in my case it's `sudo apt install bcmwl-kernel-source`
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-06-12-fix-network-adapter-not-detected/3.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-06-12-fix-network-adapter-not-detected/4.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
> Your specific device might be different

<br>
#### Then reboot your machine and your wifi will work
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2019-06-12-fix-network-adapter-not-detected/5.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

> This method can be use to install any device. Just find the model number and google it