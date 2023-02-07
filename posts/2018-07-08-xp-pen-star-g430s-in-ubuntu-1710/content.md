#### XP-PEN Star G430S in Ubuntu 17.10
_Sunday, July 8, 2018_

Recently i bought this [G430S](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=xp-pen+star+G430S) 
for... FUN! this thing need no battery, has 8192 
pressure level and very compact. so i plug this thing into my windows machine... 
wait what windows machine?? and it's working properly. so i plug this into my 
ubuntu machine and use krita to draw and.... nothing works! by googling for 5 
mins and came to this [thread](https://ubuntuforums.org/showthread.php?t=2326961) 
try it out and it's works. okay enough talks let's get into it.

* First plug your pen tab, open terminal and make sure you're in home
	```
	cd ~
	```

* Then Install some dependency
	```
	sudo apt update
	sudo apt install libelf-dev
	```

* Next clone into DIGImend repo
	```
	git clone https://github.com/DIGImend/digimend-kernel-drivers.git
	cd digimend-kernel-drivers
	```

* Next compile and install
	```
	make
	sudo make install
	```

* And optionally, remove other tab driver
	```
	sudo rmmod hid-kye
	sudo rmmod hid-uclogic
	sudo rmmod hid-huion
	```

* Then unplug and plug your pen tab
* If your pen tab still won't work, try rebooting
* Aand that's it!
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2018-07-08-xp-pen-star-g430s-in-ubuntu-1710/1.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

even the pressure works just fine.

> for other brand like huion, just skip the optional step!
<br>

> actually i have XP-Pen star 03 too but it just plug and play without additional driver install.

<br>
#### Some external links
<https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=xp-pen+star+G430S>

<https://ubuntuforums.org/showthread.php?t=2326961>

<https://digimend.github.io/>

<https://www.xp-pen.com/goods/show/id/302.html>
