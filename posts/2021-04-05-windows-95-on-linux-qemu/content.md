#### Windows 98 on Linux QEMU
_Sunday, April 5, 2021_

Today i need to make a paperwork, but i cannot think about anything. So instead i just 
spend my day trying to install a Win95 on KVM. But it doesn't work, so i just use simple 
QEMU.

<br>
#### Create disk image
It will create 1GB of disk image called win95.qcow2
```
qemu-img create -f qcow2 win95.qcow2 1G
```

<br>
#### Installation begin
Let's create system with Pentium CPU, 128GB RAM. Win95 boot disk is `disk01.img`, 
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
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/1.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
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

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/2.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then follow the installer. After getting into Key or `COA screen`, enter
```
Windows 95 OEM
35595-OEM-0000007-00000

Windows 95 RETAIL
111-1111111
```

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/3.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
> This is reverse engineering key so don't worry too much about it. 

Next enter your username and group

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/4.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Then follow installer again. After getting into `Startup Disk`, choose `No`

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/5.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
At the end of installation, press `Finish` then `OK`. System will restart 
and simply just close qemu and proceed to next step.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/6.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br>
#### Fix 2.1GHz CPU
If you using modern-ish machine which you probably did, there is a bit of a catch. Win95 can't 
deal with cpu faster than 2.1Ghz, so to fix that download a patch from
[msfn.org](https://msfn.org/board/topic/141402-windows-95-21ghz-cpu-limit-broken/)
then extract `FIX95CPU.IMA`, then run this
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
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/7.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/8.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/9.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Then Just pres any key, press `N`, press any key again, and after everything is done, 
just close the QEMU.

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
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/10.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/11.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
I just cancel the printer part

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/12.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then go to `Control Panel` then `Add New Hardware` Then just follow the instruction and that's it.

After using for some time, i found out that SB16 doesn't work well in my setup so i change that 
to adlib (OPL2). Other problem i found is NE2K_ISA doesn't do it's job. So i change that to PCNET
```
qemu-system-i386 -netdev user,id=mynet0 -device pcnet,netdev=mynet0 \
 -cpu pentium \
 -m 128 \
 -vga cirrus \
 -soundhw adlib -soundhw pcspk \
 -cdrom Disk01.iso \
 -hda win95.qcow2 \
 -boot d
```
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-04-05-windows-95-on-linux-qemu/13.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
And i finally able to browse some web, play games using ADLIB and some MIDI playback.

<br>
#### Sauce
[Documentation / GuestOperatingSystems / Windows95 - QEMU](https://wiki.qemu.org/Documentation/GuestOperatingSystems/Windows95)