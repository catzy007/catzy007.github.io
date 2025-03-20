#### Portable Workstation With eGPU Thunderbolt Dock
_Saturday, March 15, 2025_

There is a time when I need a High-perfomance computing in my local machine 
for certain workflow such as 3D modelling or running machine learning model 
but for most of the time, I only use basic office suite such as excel, web 
browser, or a glorified text editor to write some code which doesn't require 
that many compute resources.

In the past I have explored a selection of options such as using gaming laptop 
and building my own server. Let's talk about gaming laptop, in my experience 
gaming laptop is usually bulky with 15 to 17 inch diagonal size it weighs 
3 to 5 Kg or 6 to 10 freedom units it is also power hungry with power adapter 
the size of a literal brick and of course with great power usage comes a great heat 
and less runtime in battery mode, and the worst part in my opinion is the performance 
while in specs it may seem appealing with high-end parts at the end of the day, it 
is a mobile-specific part with in my experience about 20% to 40% performance 
reduction compared to its desktop counterpart and yes I get it cramming 
all of that performance in a portable device is not easy and yes physics always 
win. 

With that in mind I tried a different approach what if I have a capable 
machine that I can remote with inexpensive thin and light client device which 
works wonder. All I need is a laptop, tablet or even smartphone and fast internet 
connection I have access to my server anywhere even space when they have good 
internet. But that's exactly the problem when it works great, until it doesn't 
a power outage, a rodents ate fiber cable, bad weather, etc.

What next, I still need a lightweight portable workstation that I can use when needed 
while carrying thin and light device daily, how about Thunderbolt. Developed by Intel 
in collaboration with Apple it combines PCIe (the one used by GPUs and other peripheral), 
DisplayPort, USB and Power Delivery in a single cable it also supports daisy-chain which 
allow you to connect multiple Thunderbolt device into one and other while only require 
a single cable to your device. In its early form Thunderbolt uses miniDP which found 
in older Apple Mac, then since Thunderbolt 3 it is being replaced by USB-C, and later 
it becomes part of USB4 standard.

If Thunderbolt is good then what is the catch, Thunderbolt is usually available 
in "Business-class" device with premium sticker price. Therefore, personal and gaming 
device usually doesn't have Thunderbolt which limit market adoption. The other catch is 
[protocol overhead which can reduce the overall performance](https://egpu.io/best-external-graphics-card-builds/#perf) 
while in most use cases such as driving a high-definition 
display it is completely fine, using it with GPU or NVME SSD may result in 
[lower performance compare to using direct PCIE](https://egpu.io/forums/expresscard-mpcie-m-2-adapters/build-m2-vs-thunderbolt). 

One of the thing that I like from Thunderbolt is the convenience for plugging 
and unplugging it whenever I wanted unlike using M.2 or OCulink based Dock which require specific power and boot sequence. Except when unplugging Thunderbolt 
Dock with a GPU while running 3D program which instantly crash the system. 
Close the 3D program, and you can safely unplug the Dock.

With that out the way, let's try it. Here I'm using 
[TH3P4G3](https://egpu.io/exp-gdc-th3p4g2-thunderbolt-gpu-dock-review/) 
which is a DIY solution that doesn't include a case, PSU, and GPU. The GPU that 
I'm using for this test is Nvidia Quadro K620, for PSU I'm using an 400W SFX 
off-brand one as for a case I grab scissor, cardboard and duct-tape then channel 
my creativity turning it into a box. For host device, I'm using good ol' ThinkPad 
T480s.

![img](./posts/2025-03-15-portable-workstation-with-egpu-thunderbolt-dock/01.jpg)

My first test is with Ubuntu 22.04, I plug the one end of TB cable to center port 
on TB Dock (the one with battery icon) and another end to T480s. Next I open 
`Settings > Privacy > Thunderbolt`, Unlock the dialog window, Check `Direct Access`, 
and Authorize the TB dock.

![img](./posts/2025-03-15-portable-workstation-with-egpu-thunderbolt-dock/02.png)

![img_lg](./posts/2025-03-15-portable-workstation-with-egpu-thunderbolt-dock/03.png)

If you're using Nvidia GPU, do the following step before Authorize TB dock.
```
sudo nano /etc/modprobe.d/nv-blacklist.conf
    blacklist nouveau
sudo update-initramfs -u -k all
reboot
```

Then install Nvidia drivers by opening `Software & Updates > Additional Drivers` 
or using command line below.
```
sudo ubuntu-drivers list
    nvidia-driver-550, (kernel modules provided by linux-modules-nvidia-550-generic-hwe-22.04)
    nvidia-driver-545, (kernel modules provided by nvidia-dkms-545)
    nvidia-driver-418-server, (kernel modules provided by nvidia-dkms-418-server)
sudo ubuntu-drivers install nvidia:550
sudo apt install nvidia-utils-550
sudo reboot
nvidia-smi
```

![img](./posts/2025-03-15-portable-workstation-with-egpu-thunderbolt-dock/04.png)

In Windows, make sure Thunderbolt driver is installed properly it should have shown in
system tray.

![img_xs](./posts/2025-03-15-portable-workstation-with-egpu-thunderbolt-dock/05.png)

Next connect TB dock and Approve, then select `Always Connect`, install required 
driver, and that's pretty much it.

![img](./posts/2025-03-15-portable-workstation-with-egpu-thunderbolt-dock/06.png)