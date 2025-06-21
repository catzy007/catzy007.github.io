#### Bolt Dual Band Router With 4G Failover
_Saturday, June 21, 2025_

A while ago I pick up a network router for about 3 USD shipped the model 
name is Bolt BL201 it has dual-band support which mean it can use 2.4 and 
5 GHz Wi-Fi and apparently OpenWrt 24.10 just added support for similar 
device called BL100. From what I can tell both share similar components 
MT7620A Soc, 64MB RAM, 16MB Flash except for Bolt BL100 which include an 
LTE module and external antenna support. 

With that out of the way lets mod this. I begin by booting the device and 
found out that someone has already installed a custom bootloader. Using 
[BreedEnter](https://github.com/wwng2333/breed-enter-rust) 
I manage to open the Recovery page. Then I grab `sysupgrade` and `kernel` 
file from 
[OpenWrt firmware selector](https://firmware-selector.openwrt.org/).

![img_md](./posts/2025-06-21-bolt-dual-band-router-with-4g-failover/1.png)

In recovery console go to `Firmware updates > Regular firmware`. 
In `firmware` section press `Choose File` and point to OpenWrt `kernel` file.
Make sure `Auto-restart` is `checked` and press `upload`. It will take a 
few moments to flash the firmware and boot to OpenWrt. Once it booted login 
with empty password, and it will show `System running in recovery mode`.

![img_md](./posts/2025-06-21-bolt-dual-band-router-with-4g-failover/2.png)

Next, go to `System > Backup/Flash Firmware > Flash new firmware image` and 
choose the `sysupgrade` file, press `Upload` and that's it.

![img_md](./posts/2025-06-21-bolt-dual-band-router-with-4g-failover/3.png)

Then I was curious about using LTE module in BL100, so I decided to grab one 
for about 5 USD and use this to replace old access point in the 2nd floor.

First, I install OpenWrt with the exact same method as BL201. Next I need to 
install required module to make LTE works. Apparently there are few protocols 
used by each manufacturer such as PPP, QMI, MBIM, NCM, etc. In this case LTE 
module in BL100 uses Qualcomm chipset which support QMI. To use that, install 
the following module and restart the device.

```
opkg update
opkg install nano usbutils qmi-utils luci-proto-qmi

reboot
```

According to some sources that I read, I need to enable GPIO PIN 28 to enable 
LTE module, I tried that and it does nothing.

![img_md](./posts/2025-06-21-bolt-dual-band-router-with-4g-failover/4.png)

After some trial and error, apparently in OpenWrt 24.10 instead of GPIO PIN 28, 
PIN 540 is used. A simple edit to the script and it works!

```
nano /root/bootmodem.sh
```
```
#!/bin/sh 
echo Booting Modem 
echo "05c6 9026" > /sys/bus/usb/drivers/qmi_wwan/new_id
echo 540 > /sys/class/gpio/export 
echo out > /sys/class/gpio/gpio540/direction 
echo 0 > /sys/class/gpio/gpio540/value
echo "Sleeping 5s..."
sleep 5
echo "Turning On Modem"
echo 1 > /sys/class/gpio/gpio540/value
```

![img_md](./posts/2025-06-21-bolt-dual-band-router-with-4g-failover/5.png)
![img_md](./posts/2025-06-21-bolt-dual-band-router-with-4g-failover/4.png)

To make the changes permanent, do the following.

```
nano /etc/rc.local
```

![img_sm](./posts/2025-06-21-bolt-dual-band-router-with-4g-failover/7.png)

Next, open the Web UI, go to `Network > Interfaces > Add new interface` 
fill the name as `wwan` and set the protocol as `QMI Cellular` and press 
`Create Interface`. After that, set Modem Device as `/dev/cdc-wdm2`. 
Also fill carrier info such as APN, username, password a quick 2-minute Google 
search is all you need, also in `Firewall Settings` tab assign it to `WAN` zone. 
Then power down the device, put a SIM card in, power it back up and finger cross 
everything just works.

![img_md](./posts/2025-06-21-bolt-dual-band-router-with-4g-failover/8.png)

As a side note, the built-in LTE module only support 2300MHz or band-40 
which in my area only 3 carriers supports it. The good news is that because BL100 
uses standard mini PCI-E module swapping it with more capable module may be 
possible.

### More reading

[teklager.se - OpenWRT 4G WAN configuration](https://teklager.se/en/knowledge-base/openwrt-4g-wwan-configuration/)

[radito.github.io - Mengaktifkan Modem LTE di Router Bolt BL-100 (OpenWRT)](https://radito.github.io/posts/b396a73c-54cd-4f96-80c0-429fe568a363/)