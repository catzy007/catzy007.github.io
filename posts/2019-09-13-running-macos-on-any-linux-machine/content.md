#### Running MacOS on Any Linux Machine
##### *Saturday, September 14, 2019*
While i'm enjoying watching youtube videos, i'm stumbleupon at [Linus Tech Tips videos](https://www.youtube.com/watch?v=ATnpEOo3GJA) where he run MacOS on Virtual Machine and then i be like what? 
then some weeks later i decided to try that myself and here we go.

Okay what were doing here? Basically i'm going to tell you how to install MacOS on non Apple computers. 
Actually you have some choice, first using [Hackintosh](https://hackintosh.com/) it's basically customized version of MacOS so 
you can install it on non apple computer but it came with some problem some has no wifi, bluetooth, 
trackpad not deteced, camera not working, list goes on. Basically it has some driver problem. The 
second method is using [Virtual Machine](https://en.wikipedia.org/wiki/Virtual_machine) in this case 
[KVM](https://www.redhat.com/en/topics/virtualization/what-is-KVM) to fool that MacOS running on Apple computer. But actually it 
runs on virtual computer inside a linux machine. Okay enough talk, lets do this.

But i have to warn you that MacOS is not a lightweight operating system. And running it inside virtual machine 
mean that it need more resource than running it on bare metal. So make sure your hardware is capable enough. 
Some newer version of MacOS need processor with AVX instruction set to run properly make sure your processor is 
supported. For reference here's my spec
```
System:    Host: catzy-WORKSTATION Kernel: 4.15.0-62-generic x86_64 bits: 64 Desktop: Xfce 4.12.3
           Distro: Ubuntu 18.04.3 LTS
Machine:   Device: laptop System: ASUSTeK product: X550VXK v: 1.0 serial: H4N0CV08T562169
           Mobo: ASUSTeK model: X550VXK v: 1.0 serial: N0CV1716MB0015335
           UEFI: American Megatrends v: X550VXK.307 date: 04/19/2019
Battery    BAT0: charge: 37.0 Wh 97.5% condition: 37.9/45.0 Wh (84%)
CPU:       Quad core Intel Core i7-7700HQ (-MT-MCP-) speed/max: 1378/3800 MHz
Memory:    Array-1 capacity: 64 GB devices: 4 EC: None
           Device-1: ChannelA-DIMM0 size: 8 GB speed: 2400 MT/s type: DDR4
           Device-2: ChannelA-DIMM1 size: No Module Installed type: N/A
           Device-3: ChannelB-DIMM0 size: No Module Installed type: N/A
           Device-4: ChannelB-DIMM1 size: No Module Installed type: N/A
Graphics:  Card-1: Intel Device 591b
           Card-2: NVIDIA GM107M [GeForce GTX 950M]
           Display Server: X.Org 1.19.6 drivers: modesetting,nvidia (unloaded: fbdev,vesa,nouveau)
           Resolution: 1920x1080@60.01hz
           OpenGL: renderer: GeForce GTX 950M/PCIe/SSE2 version: 4.6.0 NVIDIA 430.26
Network:   Card-1: Realtek RTL8723BE PCIe Wireless Network Adapter driver: rtl8723be
           Card-2: Realtek RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller driver: r8169
Drives:    HDD Total Size: 1500.3GB (2.4% used)
Info:      Processes: 241 Uptime: 1:00 Memory: 1903.3/7857.7MB Client: Shell (sudo) inxi: 2.3.56
```
My recommendation is to use at minimum Intel Core i5 and 8GB of system memory.

First clone [macOS-Simple-KVM](https://github.com/foxlet/macOS-Simple-KVM) repository
```
git clone https://github.com/foxlet/macOS-Simple-KVM
```

Then install some dependency. Here i'm going to use [Virtual Machine Manager](https://virt-manager.org/) to make life easier
```
sudo apt update
sudo apt install install qemu-system qemu-utils python3 python3-pip virt-manager
```

Next download installation media using built in downloader. Here i'm using mojave but you can change to `./jumpstart.sh --high-sierra`
```
cd macOS-Simple-KVM
./jumpstart.sh --mojave
```

After download complete, add configuration to our Virtual Machine Manager
```
sudo ./make.sh --add
```

Then open VMM and you'll see macOS-Simple-KVM on the list.

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/1.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

Next click `macOS-Simple-KVM` and click `Open`. Then click `Add Hardware` on bottom left

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/2.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

Select `Storage` and add the amount of disk you want to have

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/3.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

To run it press the `Play Button` then press `Computer Icon` on the left. 

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/4.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

In the clover boot menu, press enter and the system will boot into `MacOS Utilities`

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/5.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

First select `Disk Utility` then erase partition you want to use

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/6.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

Next go to `Reinstall macOS`, Continue, Select partition, Set username, Password, etc. 
This will take some time because the installer is downloading some files too.

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/7.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

After that you'll be  greeted with MacOS desktop

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/8.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

Then power off the MacOS and add more CPU, RAM, add PCIe Passtrough, etc

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/9.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/10.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

If you're getting random keypress in my case it's numlock so it's annoying, go to `System Preferences > Accessibility > Keyboard` 
check `Enable Slow Keys` then go to `Options` and slide to low value

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/11.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

Next get [Karabiner](https://pqrs.org/osx/karabiner/) and disable the faulty key

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/13.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

Then uncheck The Slow key in `System Preferences > Accessibility > Keyboard > Enable Slow Keys`

Then if you want the system run automatically go to `Boot Options > Check on Start virtual machine on host boot up`

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-13-running-macos-on-any-linux-machine/12.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

Next create autostart. Here i'm using xubuntu so i can create `macos.desktop` in `/etc/xdg/autostart` 
you may not have this so refer to your Linux distro

first install vinagre
```
sudo apt update
sudo apt install vinagre
```
then write this `macos.desktop` to `/etc/xdg/autostart` 
```
[Desktop Entry]
Name=CustomMacOSLauncher
Comment=Custom MacOS Launcher
Icon=blueman
Exec=vinagre -f spice://localhost    
Terminal=false
Type=Application
Categories=
NotShowIn=LXDE
```

Aand that's it now you can run MacOS on your linux machine!
