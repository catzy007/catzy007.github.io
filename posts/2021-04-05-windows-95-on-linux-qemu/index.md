### **Windows 98 on Linux QEMU**
_Sunday, April 5, 2021_


#### Create disk image
```
qemu-img create -f qcow2 win95.qcow2 1G
```

#### Installation Begin
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

##### Creating partition
```
fdisk + enter
Y + enter
1 + enter
1 + enter
Y + enter
esc
ctrl + alt + del
```

##### Formatting the disk
```
format c: + enter
Y + enter
enter
```

##### Setup
```
d:setup + enter
enter
```

Then follow the installer. After getting into Key or COA screen, enter
```
Windows 95 OEM
35595-OEM-0000007-00000

Windows 95 RETAIL
111-1111111
```

> This is reverse engineering key so don't worry too much about it. 

Next enter your username and group

Then follow installer again. After getting into `Startup Disk`, choose `No`

At the end of installation, press `Finish` then `OK`. System will restart 
and simply just close qemu and proceed to next step.

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
