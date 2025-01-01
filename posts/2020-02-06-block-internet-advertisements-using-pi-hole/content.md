#### Block Internet Advertisements Using PI Hole
_Wednesday, February 26, 2020_

Sometimes when you're watching simple youtube videos or surfing across random website 
you'll greeted with something called _Advertisements_ and sometimes it really annoying 
and then you look for an option to block internet ads and you find something called 
_Adblock_ but the thing is that it need to be installed to every device you have. 
Wether it's a laptop, tablet, mobile phone, smart tv you need to install adblock to 
all of that device. And make matter worse, sometimes it may not deliver what it should be 
<https://www.engadget.com/2016/09/13/adblock-plus-acceptable-ads-platform/> so here i'm 
using [PI-Hole](https://pi-hole.net/). PI-Hole is opensource dns level adblock so you dont 
have to install all adblock to every single device you want to use. It's opensource meaning 
that if you dont trust them, you can look into the code directly and even contribute. 
Okay enough talking, let's do this. Here i'm using autoinstall to make my life easier.

* For starter, in my case i'm using raspberrypi, and set the static ip to `192.168.1.2`. In this example i'll 
install it in my laptop but the installation process is similar.
* First, run autoinstall `curl -sSL https://install.pi-hole.net | bash`

![img](./posts/2020-02-06-block-internet-advertisements-using-pi-hole/1.png)

* Then select DNS provider you want to use, press arrow key and tab to navigate and enter to confirm

![img](./posts/2020-02-06-block-internet-advertisements-using-pi-hole/2.png)

* Next, it will ask to use existing blocklist. Just leave it as is

![img](./posts/2020-02-06-block-internet-advertisements-using-pi-hole/3.png)

* Next

![img](./posts/2020-02-06-block-internet-advertisements-using-pi-hole/4.png)

* Then it will ask to install web admin, for sake of convenient yes

![img](./posts/2020-02-06-block-internet-advertisements-using-pi-hole/5.png)

* After pihole finishes it's thing, you'll told your web admin `password`. You can change it in web admin
* Open your browser and type <http://pi.hole/admin>, login and pihole was set

![img](./posts/2020-02-06-block-internet-advertisements-using-pi-hole/6.png)

* The last thing is to go to your router settings and put pihole ip address as DNS

![img](./posts/2020-02-06-block-internet-advertisements-using-pi-hole/7.png)

And that's it, it might not be perfect but you can improve it by adding your own blacklist