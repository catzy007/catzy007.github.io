#### Internet Freedom using OpenVPN
_Saturday, May 5, 2018_

Based on [Wikipedia](https://en.wikipedia.org/wiki/Internet_freedom), Internet freedom 
is a broad term encompassing several related concepts regarding use of the Internet, 
including:
* Digital rights
* Freedom of information
* Right to Internet access
* Internet censorship
* Net neutrality

Okay i can't guarantee you get all of that freedom, but you'll get some of it including 
ability to bypass internet censorship. I divide this post for windows and linux user.

##### **THIS TUTORIAL FOR LINUX USERS.**
First, you need OpenVPN client. For linux (ubuntu based) machine 
```
sudo apt update
sudo apt install openvpn
```

Next, you need openvpn config. basically config file is some text file 
contains server ip address, some certificate, protocol used, etc. here i'm 
using [vpngate](https://www.vpngate.net/en/). they still collect some 
records for 3 months <http://www.vpngate.net/en/about_abuse.aspx> basically 
you can use any vpn provider you want. 

to get that, go to <vpngate.net> choose address you want and ping that ip. if it's 
up then use it. 

<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2018-05-05-internet-freedom-using-openvpn/1.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

::br

It is frustrating to ping all address one by one, so i made a tools to do 
just that <https://github.com/catzy007/UMBRELLAVPNTEST> compile with 
`gcc -o vpntest vpntest.c` just use ip with lowest time.

<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2018-05-05-internet-freedom-using-openvpn/2.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

::br

next click `"OpenVPN Config file"`, select tcp or udp it's up to you, 
then download the config files.

![img](./posts/2018-05-05-internet-freedom-using-openvpn/4.jpg)

::br

then run openvpn with this command `sudo openvpn CONFIG_FILE_NAME` change 
`CONFIG_FILE_NAME` with your actual config file name.

![img](./posts/2018-05-05-internet-freedom-using-openvpn/4.jpg)

::br

and make sure you get `initialization sequence completed!`

##### **THIS TUTORIAL FOR WINDOWS USERS**

First, Download and Install OpenVPN Client
[https://openvpn.net](https://openvpn.net/index.php/open-source/downloads.html)

![img](./posts/2018-05-05-internet-freedom-using-openvpn/5.png)

::br

Next, Get OpenVPN config look for `Next, you need openvpn config.` step above. 
download the file and double click to import the profile.

![img](./posts/2018-05-05-internet-freedom-using-openvpn/7.png)

::br

In your system tray you should see new icon, double click to activate and 
right click for other functions.

<div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2018-05-05-internet-freedom-using-openvpn/6.png" alt="img">
        </div>
    </div>
    <div class="col-sm-4"></div>
</div>

::br

If your vpn config need password, a prompt will shows up otherwise it will 
automatically connect to the server.

<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2018-05-05-internet-freedom-using-openvpn/8.png" alt="img">
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

::br

If you see `initialization sequence completed!` that's it you're connected 
to a VPN.