#### My Attempt to 5GHz USB WIFI Access Point
_Friday, September 3, 2021_

Recently i wanted to try 5GHz AC Wi-Fi in my house. But there are some constraints, 
first is space constraint i'm going to deploy this under my TV cabinet and space 
is premium there. Second is price constraint i don't want to put a lot of money 
into something that doesn't work. But in the end this backfires a little.

My solution is to put a 5GHz USB WI-FI adapter in my home server and run it inside 
a VM or LXC. First thing i did is to look out which adapter to use. I just look 
around online shop and type `USB 5GHz WIFI Adapter` sort by lowest price and that's 
it. Well no what you should do instead is to look for chip used by those adapters 
and check the compatibility against Linux driver.

For example:

You're looking for TP-Link Archer T2U then google `TP-Link Archer T2U chipset` 
in my case, the first result is <http://en.techinfodepot.shoutwiki.com/wiki/TP-LINK_Archer_T2U> 
then scroll a little, and you'll find `Chip1 MediaTek MT7610U`. From here, google 
`MT7610U linux driver` or better `MT7610U OpenWRT` and check if that specific chipset 
natively supported by Linux kernel. Or simply google `openwrt 5ghz usb AP` and see yourself which 
chipset has good support.

But here i'm going to deviate from my own advice. Which is to get the cheap 
adapter (literally has no brand name on it) and try to get it work as best as 
i can. The reason is that the recommended adapter is not fit into my price constraint. 
It's 3x as much as adapter i'm using, so that's my reason to cut corners. I hope 
that you learn from this and do it properly instead.

Alright, the adapter i'm using called `AC1200M` and that's it. It just random 
cheap 5Ghz USB WI-FI from unknown manufacturer in China (probably) the device comes 
with no box just bubble wrap and no cardboard, at 10 USD what you expect. The seller 
list chipset used is `RTL8812BU` and speaking about Linux driver, it had few drivers 
but most of them had to be compiled manually.

![img](./posts/2021-09-03-my-attempt-to-5ghz-usb-wifi-access-point/01.jpg)

::br

#### Initial Testing and Driver Installation

After it arrives from China i just plug it in and do `lsusb`, and it has shown something 
like this.
```
0bda:b812 Realtek Semiconductor Corp. USB3.0 802.11ac 1200M Adapter
```

Which mean that everything is working so far. Next thing i did was to get working 
driver for this adapter, there are at least 3 of them.

<https://github.com/cilynx/rtl88x2bu>

<https://github.com/morrownr/88x2bu>

<https://github.com/EntropicEffect/rtl8822bu>

From those 3 driver, only <https://github.com/morrownr/88x2bu> had AP Mode 
working (not stable but good enough), so i just use it. 
To install the driver, do
```
sudo apt update
sudo apt install -y linux-headers-$(uname -r) build-essential dkms git libelf-dev
cd ~ && git clone https://github.com/morrownr/88x2bu.git && cd 88x2bu
sudo ./install-driver.sh
```

Or check <https://github.com/morrownr/88x2bu/#installation-steps> if you use other 
distros.

#### AP Creation and Power Workaround

After installation complete i create AP for it, and it works. After few hours, no 
device can connect to it anymore. According to <https://www.fastoe.com/blog/install-rtl8812bu-usb-wifi-dongle-on-linux> 
There is a bug about power management, If the adapter going into power saving 
mode something not good happen. To fix it simply follow

* `sudo nano /etc/modprobe.d/88x2bu.conf`
* Change `rtw_power_mgnt=1`
* To `rtw_power_mgnt=0 rtw_ips_mode=0 rtw_enusbss=0`
* Save and exit `Ctrl+x, Ctrl+y, enter`
* Then do a reboot.

After that, it should work just fine. Check your AP status from `iwconfig`.

To create AP and simplify my life a little, i'm using <https://github.com/lakinduakash/linux-wifi-hotspot>. 
```
sudo add-apt-repository ppa:lakinduakash/lwh
sudo apt install -y linux-wifi-hotspot util-linux procps hostapd iproute2 iw dnsmasq iptables
```

Then i'm using `create_ap --config myconfig.conf` command with following config
```
GATEWAY=192.168.20.1
WPA_VERSION=2
ETC_HOSTS=0
DHCP_DNS=1.1.1.1
NO_DNS=0
NO_DNSMASQ=0
HIDDEN=0
MAC_FILTER=0
MAC_FILTER_ACCEPT=/etc/hostapd/hostapd.accept
ISOLATE_CLIENTS=0
SHARE_METHOD=nat
IEEE80211N=0
IEEE80211AC=1
HT_CAPAB=[HT40+][HT40-][SHORT-GI-20][SHORT-GI-40][MAX-AMSDU-7935]
VHT_CAPAB=[HT40+][HT40-][SHORT-GI-20][MAX-AMSDU-7935][MAX-MPDU-11454][SHORT-GI-80][HTC-VHT]
DRIVER=nl80211
NO_VIRT=0
COUNTRY=US
FREQ_BAND=5
CHANNEL=36
NEW_MACADDR=
DAEMONIZE=0
DAEMON_PIDFILE=
DAEMON_LOGFILE=/dev/null
NO_HAVEGED=0
WIFI_IFACE=wlx1cbfce90c01e
INTERNET_IFACE=wlp3s0
SSID=TEST-5GHZ-WIFI
PASSPHRASE=password5Ghz
USE_PSK=
```

You probably need to change `GATEWAY, COUNTRY, SSID, PASSPHRASE, WIFI_IFACE, INTERNET_IFACE` 
to fit your specific configuration.

#### Things to Keep In Mind

In my case some smartphone won't detect 5GHz band. By disabling cellular 
connection using airplane mode or unplugging SIM Card it will detect right 
SSID and connect just fine [iFixit Why The phone Can't detect 5 Ghz Wifi](https://www.ifixit.com/Answers/View/536206/Why+The+phone+Can't+detect+5+Ghz+Wifi).

Then in my system, if i'm using 802.11AC mode the Bit Rate shown as 54 Mb/s. 
Instead of if i'm using 802.11N, i'm getting 300 Mb/s. To test this, simply change 

```
IEEE80211N=0
IEEE80211AC=1
```

to

```
IEEE80211N=1
IEEE80211AC=0
```

My test uses 5GHZ band at channel 36.

And i think that's it.

#### More Reading

<https://github.com/morrownr/88x2bu/blob/5.8.7.4/Bridged_Wireless_Access_Point.md>

<https://linux-hardware.org/index.php?id=usb:0bda-b812>

#### [UPDATE 2021/10/01] Go above and beyond

Recently or what i mean is few hours ago, i get a breakthrough. I finally 
able to use 802.11AC mode at 80MHz channel width and 867Mbps bit rate. 
I found this from `morrownr/88x2bu` note about Bridged AP mode <https://github.com/morrownr/88x2bu/blob/5.8.7.4/Bridged_Wireless_Access_Point.md>. 
In his note, to get the best performance out of `rtl8812au, rtl8814au, and rtl8812bu` 
chipsets, we need to pass this to `/etc/modprobe.d/88x2bu.conf` parameter.
```
rtw_vht_enable=2 rtw_switch_usb_mode=1
```
In my case i'm passing `rtw_vht_enable=2 rtw_switch_usb_mode=2`, 
but it should be fine for my purpose. So what we got?

Using `iwconfig` i managed to get 867Mbps bit rate and other nice info. Interestingly enough, 
the mode still shown as `802.11bgn` which is not actually the case as you see later.

![img_lg](./posts/2021-09-03-my-attempt-to-5ghz-usb-wifi-access-point/02.jpg)

::br

Then using [WiFiman](https://play.google.com/store/apps/details?id=com.ubnt.usurvey&hl=in&gl=US) 
a great mobile apps developed by `Ubiquiti Inc`, so clearly they know what they're doing and highly 
recommended. From the apps, it has shown that the mode is `802.11ac` and the channel width is `80MHz`
Awesome.

![img_sm](./posts/2021-09-03-my-attempt-to-5ghz-usb-wifi-access-point/03.jpg)

::br

So what we learn here is that a random 5Ghz Wi-Fi adapter can be used as Wi-Fi AP with all 
the tricks and quirks that needed to make it works. In my case, i finally managed to get 867Mbps 
bit rate and learn few things along the way. My set-up still has issues like DHCP is detached from 
AP after few days or system reset and the AP is missing altogether after certain amount of time. 
Maybe this is caused by using USB 2.0 port instead of USB 3.0.

#### [UPDATE 2023/06/11] Finally, In-Kernel Driver

Finally, after few years of waiting. Starting from 
[kernel 6.2 rtl8822bu, rtl8812bu, rtl8821cu and rtl8811cu](https://github.com/torvalds/linux/blob/master/drivers/net/wireless/realtek/rtw88/rtw8822bu.c) 
gets an in-kernel driver support. Which obviously I have to try and here we are.
The first thing I did is to install (at the time of writing) the latest stable kernel which is version 
6.3.7 using 
[bkw777/mainline](https://github.com/bkw777/mainline)

![img](./posts/2021-09-03-my-attempt-to-5ghz-usb-wifi-access-point/04.jpg)

::br

Then I created AP using [lakinduakash/linux-wifi-hotspot](https://github.com/lakinduakash/linux-wifi-hotspot) 
with the following config which is adapted from 
[morrownr/USB-WiFi/AP Mode](https://github.com/morrownr/USB-WiFi/blob/main/home/AP_Mode/Bridged_Wireless_Access_Point.md).

```
GATEWAY=192.168.20.1
WPA_VERSION=2
ETC_HOSTS=0
DHCP_DNS=1.1.1.1
NO_DNS=0
NO_DNSMASQ=0
HIDDEN=0
MAC_FILTER=0
MAC_FILTER_ACCEPT=/etc/hostapd/hostapd.accept
ISOLATE_CLIENTS=0
SHARE_METHOD=nat
IEEE80211N=1
IEEE80211AC=1
HT_CAPAB=[LDPC][HT40+][HT40-][SHORT-GI-20][SHORT-GI-40][MAX-AMSDU-7935]
VHT_CAPAB=[MAX-MPDU-11454][SHORT-GI-80][TX-STBC-2BY1][RX-STBC-1][HTC-VHT][MAX-A-MPDU-LEN-EXP7]
DRIVER=nl80211
NO_VIRT=0
COUNTRY=US
FREQ_BAND=5
CHANNEL=36
NEW_MACADDR=
DAEMONIZE=0
DAEMON_PIDFILE=
DAEMON_LOGFILE=/dev/null
NO_HAVEGED=0
WIFI_IFACE=wlan0
INTERNET_IFACE=eth0
SSID=TEST-5GHZ-WIFI
PASSPHRASE=password5
USE_PSK=
```

This way I can get about 400 Mbps PHY at 40 MHz MIMO 2x2 not bad at all. 
I also do an iperf test using my phone which can do 200 Mbps PHY I can 
get about 120~147 Mbps. 

![img](./posts/2021-09-03-my-attempt-to-5ghz-usb-wifi-access-point/05.jpg)

::br

While I currently could not get it to maximum 867 Mbps PHY at 80 MHz, 
I think it is a great first step, and it could get better over time.