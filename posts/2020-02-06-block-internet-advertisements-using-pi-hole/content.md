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
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="thumbnail">
                <img class="img-responsive" src="./posts/2020-02-06-block-internet-advertisements-using-pi-hole/1.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
* Then select DNS provider you want to use, press arrow key and tab to navigate and enter to confirm
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="thumbnail">
                <img class="img-responsive" src="./posts/2020-02-06-block-internet-advertisements-using-pi-hole/2.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
* Next, it will ask to use existing blocklist. Just leave it as is
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="thumbnail">
                <img class="img-responsive" src="./posts/2020-02-06-block-internet-advertisements-using-pi-hole/3.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
* Next
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="thumbnail">
                <img class="img-responsive" src="./posts/2020-02-06-block-internet-advertisements-using-pi-hole/4.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
* Then it will ask to install web admin, for sake of convenient yes
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="thumbnail">
                <img class="img-responsive" src="./posts/2020-02-06-block-internet-advertisements-using-pi-hole/5.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
* After pihole finishes it's thing, you'll told your web admin `password`. You can change it in web admin
* Open your browser and type <http://pi.hole/admin>, login and pihole was set
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="thumbnail">
                <img class="img-responsive" src="./posts/2020-02-06-block-internet-advertisements-using-pi-hole/6.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
* The last thing is to go to your router settings and put pihole ip address as DNS
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="thumbnail">
                <img class="img-responsive" src="./posts/2020-02-06-block-internet-advertisements-using-pi-hole/7.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>

And that's it, it might not be perfect but you can improve it by adding your own blacklist