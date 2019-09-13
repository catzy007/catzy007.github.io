### **Running MacOS on Any Linux Machine**
#### Saturday, September 14, 2019
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

<br>
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
<p align="center">
	<img src="./posts/2019-09-13-running-macos-on-any-linux-machine/1.png" height="300px" alt="1">
</p>
To run it, click `macOS-Simple-KVM`, press the play button then press computer icon on the left. 
<p align="center">
	<img src="./posts/2019-09-13-running-macos-on-any-linux-machine/2.png" height="250px" alt="2">
</p>
In the clover boot menu, press enter and the system will boot into `MacOS Utilities`
<p align="center">
	<img src="./posts/2019-09-13-running-macos-on-any-linux-machine/3.png" height="250px" alt="3">
</p>
First select `Disk Utility` then delete partition you want to use
<p align="center">
	<img src="./posts/2019-09-13-running-macos-on-any-linux-machine/4.png" height="250px" alt="4">
</p>
Next go to `Reinstall macOS`, Continue, Select partition, Set username, Password, etc.
<p align="center">
	<img src="./posts/2019-09-13-running-macos-on-any-linux-machine/5.png" height="250px" alt="5">
</p>