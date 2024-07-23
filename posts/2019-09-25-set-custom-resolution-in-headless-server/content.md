#### Set Custom Resolution in Headless Server
##### *Wednesday, September 25, 2019*
Here's the story, you have a server and you connect to it using VNC or something similar but you doesn't 
have any monitor plugged in so you're stuck with the default resolution. You actually can bought dummy 
HDMI or VGA plug and call it a day, but if you think that spending extra buck is not worth it. Then you 
come to the right place here i'm going to set up sofware dummy display so you can set custom resolution.

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-25-set-custom-resolution-in-headless-server/1.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

First, install the dummy drivers
```
sudo apt update && sudo apt install xserver-xorg-video-dummy -y
``` 

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-25-set-custom-resolution-in-headless-server/2.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

Then write config `sudo nano /etc/X11/xorg.conf` fill the config with
```
Section "Device"    Identifier  "Configured Video Device"
    Driver      "dummy"
    VideoRam 256000
EndSection


Section "Monitor"
    Identifier  "Configured Monitor"
    HorizSync 5.0 - 1000.0
    VertRefresh 5.0 - 200.0
    ModeLine "1366x768" 72.00 1366 1414 1446 1494  768 771 777 803
#    ModeLine "1920x1080" 148.50 1920 2448 2492 2640 1080 1084 1089 1125 +Hsync +Vsync
#    Modeline "1280x800" 24.15 1280 1312 1400 1432 800 819 822 841
EndSection


Section "Screen"
    Identifier  "Default Screen"
    Monitor     "Configured Monitor"
    Device      "Configured Video Device"
    DefaultDepth 24
    SubSection "Display"
    Depth 24
    Modes "1366x768"
    EndSubSection
EndSection
```

Then reboot and that's it now you should be able to change resolution in display settings

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-09-25-set-custom-resolution-in-headless-server/3.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

::br

#### Sauce
<https://ubuntuforums.org/showthread.php?t=2296872>

<https://askubuntu.com/questions/453109/add-fake-display-when-no-monitor-is-plugged-in>

<https://gist.github.com/divinity76/ce210b5dbcd9ea7d0585ac403caef577>
