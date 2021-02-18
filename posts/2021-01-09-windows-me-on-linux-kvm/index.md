### **Windows ME on Linux KVM**
_Saturday, January 9, 2021_

After few weeks catching up my study, it finally almost done and i need to take a rest and have fun. So why not install a 
old windows and play some old games and apps. Here i'm using i7 but you can go as low as latest(ish) i3 or ryzen equivalent. 
as long as Virtualization is enabled. To get WinME installer, check <https://archive.org> and this what i use 
<https://archive.org/details/windows-me-101-retail-full>. 

<br>

#### Linux Host System
* i7-7700hq
* 8 GB RAM
* VT-D enabled
* Ubuntu 20.04 with 5.8.0-36-generic
* Current latest version KVM (4.2.1) and VMM (2.2.1)
* to Install VMM and KVM

    ```
    sudo apt update
    sudo apt install virt-manager -y
    ```

<br>

#### Create New VM
* Open `Virtual Machine Manager`
* Click `Create New Virtual Machine`
* Browse your WINME `iso`
* If OS not detected, uncheck automatic detection and type `generic`
* Set Memory to `128` and CPUS to `1`
* Choose `Select or create custom storage` then `Manage`
* Click plus button `+`, set name `WINME`, set max capacity `2GB` then finish, choose volume
* Check `Customize configuration before install`
* Finish

<br>

#### VM Hardware Configuration
* In `Overview` tab, make sure Chipset is `i440FX` and firmware `BIOS`
* In `CPUs` tab, uncheck `Copy host CPU configuration`, and change to `Pentium 3`
* In `NIC` tab, click on `XML` and change `<model type="e1000"/>` to `<model type="pcnet"/>`
* In `Sound` tab, change model to `AC97`
* In `Video` tab, click on `XML` and change `<model type="qxl"/>` to `<model type="cirrus"/>`
* `[Optional]` if your OS boot using floppy, click `Add hardware`, Storage, Device type `Floppy device`, finish and browse the floppy image
* Last `Boot Options` tab, Enable boot menu, and set your primary boot device
* Begin Installation

Installation process should be easy, just follow the on screen guide, basically just enter or next, enter serial number, 
enter username, location, datetime and you good to go.

<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/0.jpg" height="300em" alt="img1">
    <br>
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/1.jpg" height="300em" alt="img2">
</p>

<br>

#### Fix PCI Bus device driver
After successful installation, there is few thing that wrong, graphic is broken, sound not working, cd/dvd controller not working, etc. 
To fix all that, do

* Open `My Computer` and right click > properties
* Go to `Device Manager` tab, then select `Plug and Play BIOS` and `Properties`
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/1.jpg" height="300em" alt="img1">
</p>

* Then go to `Driver` tab and `Update Driver`
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/2.jpg" height="300em" alt="img1">
</p>

* Next, select `Specify the location of the driver (Advanced)` and `next`
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/3.jpg" height="300em" alt="img1">
</p>

* Select the `second option` and `next`
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/4.jpg" height="300em" alt="img1">
</p>

* Choose `Show all hardware` and change models to `PCI Bus` and next
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/5.jpg" height="300em" alt="img1">
</p>

* There will be a warning, just choose Yes
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/6.jpg" height="300em" alt="img1">
</p>

* Next, Finish and Restart
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/7.jpg" height="300em" alt="img1">
    <br>
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/8.jpg" height="300em" alt="img1">
    <br>
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/9.jpg" height="300em" alt="img1">
</p>

* After restart, there will be a lot of new hardware found, just install all of them and you good to go.
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/driver-fix/10.jpg" height="300em" alt="img1">
</p>

Basically all that does is force the device to become PCI Bus, instead of WinME false detection as Plug and Play BIOS. 
After PCI bus device detected and installed correct(ish), all other PCI device will start working to. Including graphic ethernet and sound.

<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/2.jpg" height="300em" alt="img1">
    <br>
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/4.jpg" height="300em" alt="img1">
    <br>
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/3.jpg" height="300em" alt="img1">
</p>

After all that, the system work well enough, for basic usage like old office app, old medical app, light gaming, it works just fine.
even Duke works. Because ethernet is working, you can even browse the interweb. 

To transter files, install webserver (apache) on your linux host, and use browser to transfer files
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/5.jpg" height="300em" alt="img1">
</p>

> As side note, this system isn't perfect, crash is common, and some program or device might not work properly.
<p align="center">
    <img src="./posts/2021-01-09-windows-me-on-linux-kvm/6.png" height="300em" alt="img1">
</p>

Here [XML](./posts/2021-01-09-windows-me-on-linux-kvm/winme.xml) config for references

Special thanks to <https://www.win-raid.com/t6017f53-Windows-SE-on-Modern-Hardware-5.html> 