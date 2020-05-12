### **Virtual Webcam Linux**
_Tuesday, May 12, 2020_

[akvcam](https://github.com/webcamoid/akvcam) and [webcamoid](https://webcamoid.github.io/)

First, install some dependency (gcc cmake)
```
sudo apt install build-essential
```

<br>
Then, install akvcam virtual camera driver
```
git clone https://github.com/webcamoid/akvcam
cd akvcam/src
make
sudo make install
sudo depmod -a
```
And make sure the driver is installed
```
ls /lib/modules/$(uname -r)/extra/akvcam.ko*
```
if you got `No such file or directory`, try again

<br>
Next, go to [webcamoid website](https://webcamoid.github.io/) and download the appimage

Then go to download folder and do
```
chmod +x webcamoid*.AppImage
```
and run it by doing
```
./webcamoid*.AppImage
```