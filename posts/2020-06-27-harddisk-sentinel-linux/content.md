#### Harddisk Sentinel Linux
_Saturday, June 27, 2020_

Let's say you have a old SSD that you bought for really cheap and want to check it's remaining 
lifetime. If you got a *non linux based* machine, you can go to the manufacturer website and 
download the tools they provide. It can check the lifetime and even update the firmware for you. 
Oh your manufacturer didn't provide the tools, then i suggest you keep an eye on that SSD because 
it can go bad anytime. Then what if we're using linux, then you come to a right places.

There is a tool called hdsentinel it basically paid windows app that can determine remaining 
lifetime of a HDD or SSD. But wait is that paid apps? fortunately they provide free app for linux.

For sake of simplicity and anyone new to linux can do it easily, In this post i'm gonna use the GUI 
version.

To use it, first go to <https://www.hdsentinel.com/hard_disk_sentinel_linux.php> (for CLI version) and 
<https://www.hdsentinel.com/hard_disk_sentinel_linux_gui.php> (for GUI version) and download the 64Bit 
version. If you have 32Bit system then downlaod the 32Bit version.
![img](./posts/2020-06-27-harddisk-sentinel-linux/1.png)

Then go to your download folder and open terminal there

Next, extract the downloaded files using `tar -zxvf <your-filename>` replace your-filename with your 
downloaded file name.

After sucessful extraction, you shoud see new directory. Go to new directory and open terminal there.

Last, do installation using `sudo ./install.sh`, wait for installation process and you should see new 
application appears.
![img](./posts/2020-06-27-harddisk-sentinel-linux/2.jpg)
![img](./posts/2020-06-27-harddisk-sentinel-linux/3.png)

And that's it. Thank you to `Raul del Cid Lopez` and `Gregory25` to create this awesome tools. Also 
thanks to `Hard Disk Sentinel` for distributing this awesome tools for free.