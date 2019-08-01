### **Internet Freedom using OpenVPN**
#### Saturday, May 5, 2018

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

<br>
#### THIS TUTORIAL FOR LINUX USER.
##### First, tools you need, OpenVPN client. 

for linux (ubuntu based) machine 
```
sudo apt update
sudo apt install openvpn
```

##### Next, you need openvpn config.
basically some text file contains server ip address, some certificate, protocol used, 
etc. here i'm using vpngate. they still collect some records for 3 months 
<http://www.vpngate.net/en/about_abuse.aspx> but yeah basically you can use 
any vpn provider you want. 

to get that, go to <vpngate.net> choose address you want and ping that ip. if it's 
up then use it. 
<p align="center">
	<img src="./posts/2018-05-05-internet-freedom-using-openvpn/1.jpg" height="250px" alt="ping">
</p> 

If it's frustrating to ping all address one by one, use tools i made 
<https://github.com/catzy007/UMBRELLAVPNTEST> compile with `gcc -o vpntest vpntest.c` 
just use ip with lowest time
<p align="center">
	<img src="./posts/2018-05-05-internet-freedom-using-openvpn/2.jpg" height="250px" alt="vpntest">
</p> 

next click `"OpenVPN Config file"`, select tcp or udp it's up to you, then download the config files
<p align="center">
	<img src="./posts/2018-05-05-internet-freedom-using-openvpn/3.jpg" height="250px" alt="download">
</p> 

then run openvpn with this command `sudo openvpn CONFIG_FILE_NAME` change CONFIG_FILE_NAME with your 
actual config file name
<p align="center">
	<img src="./posts/2018-05-05-internet-freedom-using-openvpn/4.jpg" height="250px" alt="run ovpn">
</p> 

and make sure you get `initialization sequence completed`

<br>
#### THIS TUTORIAL FOR WINDOWS USER
First, Download and Install OpenVPN Client

https://openvpn.net/index.php/open-source/downloads.html

Next, Get OpenVPN config

COMING SOON! 
