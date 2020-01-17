### **Ubuntu Chroot Container in Android**
#### Friday, January 17, 2020

For quite some time, i have Asus K012 tablet. It's powered by Intel X86 processors 
yeah back then (2014) Intel make processor for low power device such as Phone and Tablet. 
But i kinda wonder if this old tablet can be used as ultra portable linux machine. yeah 
i mean it basically just ultra low power x86 computer right? But no it has locked-down 
bootloader and graphic accelerator is not usual so yeah maybe i can use it for something else. 
Then i found ot that you can run chroot container in android. It's predecessor of linux container 
so it does not have absolute encapsulation of the system but at least it's better than the emulator.

Then i found [Linux Deploy]() this app can turn your android device into powerful linux machine in 
cost of [Rooting]() your device you can install ssh to the container, run xserver + lxde + vnc to run 
in GUI mode, Hacking, Web development (apache, httpd, node, php), C development, Python development 
and many more. I know some people might not feel comfortable rooting their device. But if you have old 
android device laying around and has decent enough spec then go ahead. To start, follow

1. Rooting your android device.
because  difference in rooting method of each android device, I suggest to google how to root your 
spesific android device and follow carefully. Or ask someone with higher experties to perform this step.
> WARNING : this step has some risk of corrupting your device and might cancel your device warranty. 
Proceed with your own risks and make sure you know what you're doing!

2. Install Linux Deploy
