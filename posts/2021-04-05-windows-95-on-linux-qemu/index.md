### **Windows 98 on Linux QEMU**
_Sunday, April 5, 2021_


<br>
#### Create disk image
```
qemu-img create -f qcow2 win95.qcow2 1G
```

<br>
#### Installation begin
Let's create system with pentium cpu, 128gb ram. Win95 boot disk is `disk01.img`, 
Win95 disk image is `Disk01.iso` and harddrive is `win95.qcow`. Change it according to yours
```
qemu-system-i386 -netdev user,id=mynet0 -device ne2k_isa,netdev=mynet0 \
 -cpu pentium \
 -m 128 \
 -vga cirrus \
 -soundhw sb16 -soundhw pcspk \
 -fda disk01.img \
 -cdrom Disk01.iso \
 -hda win95.qcow2 \
 -boot a 
```
<p align="center">
    <img src="./posts/2021-04-05-windows-95-on-linux-qemu/1.png" height="300em" alt="img1">
</p>
At this screen, just press enter to continue.

<br>
#### Creating partition
In DOS or text based interface, type then press enter the following:
```
fdisk
Y
1
1
Y
```
then press `esc` and to restart, press `ctrl + alt + del` 

<br>
#### Formatting the disk
To format the newly partition disk, type then press enter the following:
```
format c:
Y
```
after done, press `enter` then do `Setup`

<br>
#### Setup
To begin installation process, type then press enter the following:
```
d:setup
```
then press `enter`. After that GUI installer should appear

<p align="center">
    <img src="./posts/2021-04-05-windows-95-on-linux-qemu/2.png" height="400em" alt="img2">
</p>
Then follow the installer. After getting into Key or `COA screen`, enter
```
Windows 95 OEM
35595-OEM-0000007-00000

Windows 95 RETAIL
111-1111111
```

<p align="center">
    <img src="./posts/2021-04-05-windows-95-on-linux-qemu/3.png" height="400em" alt="img3">
</p>
> This is reverse engineering key so don't worry too much about it. 

Next enter your username and group

<p align="center">
    <img src="./posts/2021-04-05-windows-95-on-linux-qemu/4.png" height="400em" alt="img4">
</p>
Then follow installer again. After getting into `Startup Disk`, choose `No`

<p align="center">
    <img src="./posts/2021-04-05-windows-95-on-linux-qemu/5.png" height="400em" alt="img5">
</p>
At the end of installation, press `Finish` then `OK`. System will restart 
and simply just close qemu and proceed to next step.
<p align="center">
    <img src="./posts/2021-04-05-windows-95-on-linux-qemu/6.png" height="400em" alt="img6">
</p>

<br>
#### Fix 2.1GHz CPU
<https://msfn.org/board/topic/141402-windows-95-21ghz-cpu-limit-broken/>
```
qemu-system-i386 -netdev user,id=mynet0 -device ne2k_isa,netdev=mynet0 \
 -cpu pentium \
 -m 128 \
 -vga cirrus \
 -soundhw sb16 -soundhw pcspk \
 -fda FIX95CPU.IMA \
 -hda win95.qcow2 \
 -boot a 
```

<br>
#### Running windows 95
```
qemu-system-i386 -netdev user,id=mynet0 -device ne2k_isa,netdev=mynet0 \
 -cpu pentium \
 -m 128 \
 -vga cirrus \
 -soundhw sb16 -soundhw pcspk \
 -hda win95.qcow2 \
 -boot d
```
At first time boot, it need to install some driver, configure location and printer.


<https://wiki.qemu.org/Documentation/GuestOperatingSystems/Windows95>