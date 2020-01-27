### **Ubuntu Chroot Container in Android**
#### Friday, January 17, 2020

For quite some time, i have Asus K012 tablet. It's powered by Intel X86 processors 
yeah back then (2014) Intel make processor for low power device such as Phone and Tablet. 
But i kinda wonder if this old tablet can be used as ultra portable linux machine. yeah 
i mean it basically just ultra low power x86 computer right? But no it has locked-down 
bootloader and graphic accelerator is not usual so yeah maybe i can use it for something else. 
Then i found ot that you can run chroot container in android. It's predecessor of linux container 
so it does not have absolute encapsulation of the system but at least it's better than the emulator.

Then i found [Linux Deploy](https://github.com/meefik/linuxdeploy) this app can turn your android 
device into powerful linux machine in cost of [Rooting](https://en.wikipedia.org/wiki/Rooting_(Android)) 
your device you can install ssh to the container, run xserver + lxde + vnc to run in GUI mode, 
Hacking, Web development (apache, httpd, node, php), C development, Python development and many more. 
I know some people might not feel comfortable rooting their device. But if you have old android device 
laying around and has decent enough spec then go ahead. To start, follow

<br>

#### 1. [Rooting your android device](https://www.xda-developers.com/root/).
because  difference in rooting method of each android device, I suggest to google how to root your 
spesific android device and follow carefully. Or ask someone with higher experties to perform this step.
> WARNING : this step has some risk of corrupting your device, destroying your data and might cancel 
your device warranty. Proceed with your own risks and make sure you know what you're doing!

<br>

#### 2. Install Linux Deploy
You can download the APK file directly from [Github](https://github.com/meefik/linuxdeploy/releases) 
or go to [Play Store](https://play.google.com/store/apps/details?id=ru.meefik.linuxdeploy&hl=en) and 
download and install as usual.

<br>

#### 3. First time setup
Here I'm going to set Up i386 Ubuntu 18.04 Container. Why i386 because i have intel processor. You 
might need to change that yo arm or arm64 based on your device processor.

<p align="center">
	<img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/1.jpg" height="550px" alt="img1">
    <img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/2.jpg" height="550px" alt="img2">
</p>
First, press that control panel icon, then change the config based on your need. Here i set 
[Disk Image](https://en.wikipedia.org/wiki/Disk_image) in sdcard because i had limited internal storage.

<br>
<p align="center">
	<img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/3.jpg" height="550px" alt="img3">
    <img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/4.jpg" height="550px" alt="img4">
</p>
The next thing i enabled is init system. Because i would run [Apache](https://httpd.apache.org/) server 
inside my container. The last thing i enabled is [SSH](https://www.ssh.com/ssh) yeah basically i need to 
access the container so i need to have ssh access. You can actually enable GUI mode which i had tried but 
in my case, i only had limited amount of RAM, so yeah i disable that.

<br>
<p align="center">
	<img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/5.jpg" height="550px" alt="img5">
    <img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/6.jpg" height="550px" alt="img6">
</p>
Then back to the front page, Click that 3 dot on the top right corner and click `Install`, after the 
installation finished, click start to run the container.

<br>

#### 4. Connecting the container
For ssh connection, i use [ConnectBot](https://play.google.com/store/apps/details?id=org.connectbot&hl=en) 
first, click that `+` button then fill this by `username@127.0.0.1`. if you want to connect from other machine, 
use `ssh username@your_device_ip`
<p align="center">
	<img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/7.jpg" height="550px" alt="img7">
    <br><br>
    <img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/8.jpg" height="350px" alt="img8">
</p>

For GUI, i use VNC, to do that you need to config it in the step 3 first. Then use 
[VNC Viewer](https://play.google.com/store/apps/details?id=com.realvnc.viewer.android&hl=en) 
Same process as ssh, press that `+` button, fill `ipaddress:port`. here i'm using `127.0.0.1:5901` same as ssh, 
you can connect vnc from other machine too.
<p align="center">
	<img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/9.jpg" height="550px" alt="img9">
    <br><br>
    <img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/10.jpg" height="350px" alt="img10">
</p>

#### 5. Finishing
The idea of running (almost full) linux machine inside your pocket size device is great. In fact, 1/3 of this post 
is written in nano inside that chroot container.
<p align="center">
	<img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/11.jpg" height="550px" alt="img11">
    <br><br>
    <img src="./posts/2020-01-17-ubuntu-chroot-container-in-android/12.jpg" height="350px" alt="img12">
</p>

#### Some reading
<https://github.com/meefik/linuxdeploy>

<https://www.xda-developers.com/root/>

<https://en.wikipedia.org/wiki/Chroot>

<https://en.wikipedia.org/wiki/Container_Linux>

<https://en.wikipedia.org/wiki/Secure_Shell>

<https://en.wikipedia.org/wiki/Virtual_Network_Computing>