#### Easy Internet Voucher Using OpenNDS
_Saturday, July 20, 2024_

A while ago or more like a year ago, I bought a dead TP-Link CPE210 for 
about 10 USD shipped then I forgot about it and now here we are. This device 
is usually being used for long distance wireless communication in commercial 
setting to provide a network connection between buildings, connect clients 
to a central tower and many similar use cases. 

I begin by powering the unit, and it seems like it just stuck at boot-loop. 
I also discover that my unit is hardware rev1, so I pull everything out then 
began to dismantle the unit, grab myself corresponding 
[OpenWRT factory image](https://openwrt.org/toh/tp-link/cpe210), 
use SPI flash programmer to flash the new firmware, and it works!

![img](./posts/2024-07-20-easy-internet-voucher-using-opennds/01.jpg)

Next, I plug the WAN to my home router LAN, plug LAN to my PC and go to 
OpenWRT admin page and set proper password. Next I ssh into the unit and install 
OpenNDS.

```
opkg update
opkg install opennds
```

To enable voucher mode, do the following.

```
cd /usr/lib/opennds
wget https://raw.githubusercontent.com/openNDS/openNDS/master/community/themespec/theme_voucher/theme_voucher.sh
cd /tmp/ndslog
wget https://raw.githubusercontent.com/openNDS/openNDS/master/community/themespec/theme_voucher/vouchers.txt
```
```
chmod 744 /usr/lib/opennds/theme_voucher.sh
uci set opennds.@opennds[0].login_option_enabled='3'
uci set opennds.@opennds[0].themespec_path='/usr/lib/opennds/theme_voucher.sh'
uci set opennds.@opennds[0].use_outdated_mhd='1'
uci commit opennds
service opennds restart
```

Wait for few minutes use `ndsctl status` to check OpenNDS working state. To check the 
preinstalled voucher, do the following.
```
cat /tmp/ndslog/vouchers.txt
```

Next, open any website, and you will be prompted to enter a voucher, and 
that's pretty much it.

![img](./posts/2024-07-20-easy-internet-voucher-using-opennds/02.jpg)

But wait, there are few caveats. First because OpenNDS uses port 80, https is 
required to open OpenWRT admin page for example <https://192.168.1.1>. Next 
caveat is that OpenNDS need to do a regular write to track voucher usage 
therefore a prolonged use may degrade router NAND flash and result in 
permanent damage. To avoid this, one may need to move voucher file to 
external storage such as USB drive as configured in 
[theme_voucher.sh](https://github.com/openNDS/openNDS/blob/master/community/themespec/theme_voucher/theme_voucher.sh#L504). There also a lot more to 
configure check out [/etc/config/opennds](https://github.com/openNDS/openNDS/blob/master/linux_openwrt/opennds/files/etc/config/opennds). To generate new voucher, use [voucher&#95;generator.py](https://github.com/openNDS/openNDS/blob/master/community/themespec/theme_voucher/voucher_generator.py).