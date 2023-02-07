#### Disable Hard Drive Clicking Noise
_Wednesday, May 12, 2021_

#### PC Troubleshooting 101 Series 

You wake up in the morning, getting ready to do some work, you sat down in front of the computer 
with your fresh new hard drive installed and wait, why is the hard drive make clicking noises?

I'ts [APM](https://smarthdd.com/apm.htm) or Advanced Power Management which is form of power 
management for hard drive by spinning down the platter and parking the head to reduce power and 
hopefully prolonged lifespan of that drive. While yes that seems good, In practice it's not always 
the case. Sometimes the hard drive manufacturer dial in APM too much and the drive always going 
into an APM mode. When Windows just randomly load files or some background tasks just randomly 
running, the hard drive has to wake up from APM mode. This process may happen a dozen times in a 
day and in the end it will hurt the hard drive performance and lifespan. You may notice this from 
your computer starts and if you leave your computer for a few moments and using it back that same 
click will show up again.

So how to fix that? Well the method i show you will force the hard drive to always spin up, and 
probably going off if the OS tell it to do so. I strongly recommend you to avoid any shock to your 
computer and hard drive to avoid any damage from [Head Crash](https://en.wikipedia.org/wiki/Head_crash) 
and [Bad Sector](https://en.wikipedia.org/wiki/Bad_sector).

* First, [Download hdparm](./posts/2021-05-12-disable-hard-drive-clicking-noise/hdparm-6.9-20070516.win32-setup.zip). 
    * [Here is the original source](http://hdparm-win32.dyndns.org/hdparm/) which is dead long time ago.
* Then install it as usual. Just next, next, finish.
* Next, add a startup system to make sure `hdparm` run immediately after Windows boot.
    1. Open `Start` type `Computer Management` enter.
    1. Expand `Task Scheduler` then `right click` on `Task Scheduler Library` and select `Create Basic Task`
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="img-thumbnail">
                <img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/1.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
    1. Fill name with `hdparm`
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="img-thumbnail">
                <img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/2.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
    1. Select trigger as `When I log on`
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="img-thumbnail">
                <img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/3.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
    1. Select action as `Start a program`
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="img-thumbnail">
                <img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/4.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
    1. Fill program/script as `"C:\Program Files (x86)\hdparm\bin\hdparm"` (note quotation mark)
    1. Then fill arguments as `-B 255 hdb` 
        * In my case, my hdd is secondary drive so the corresponding letter is `sdb`, if your drive is primary, set it as `sda`
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="img-thumbnail">
                <img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/5.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
    1. Next, `right click` on your newly created entry and select `properties`
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="img-thumbnail">
                <img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/6.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
    1. In `General` tab, check the `Run with highest privileges`
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="img-thumbnail">
                <img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/7.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
    1. Then in `Trigger` tab, change to `At logon of any user`
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="img-thumbnail">
                <img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/8.png" alt="img">
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
* And that's it, restart your computer to see if anything changed.
* If you really want to make sure, Install [Crystal Disk Info.](https://crystalmark.info/en/software/crystaldiskinfo/)
* Then go to `Function > Advanced Feature > AAM/APM Control`
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/9.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

* If everything works fine, you should see `APM OFF`
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-05-12-disable-hard-drive-clicking-noise/10.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br>

#### More readings
<https://www.techpowerup.com/forums/threads/beware-of-aggressive-apm-on-windows-10-build-1809.254023/>

<https://superuser.com/questions/1013553/how-to-prevent-a-secondary-hdd-from-spinning-down>

<https://superuser.com/questions/857123/what-is-an-alternative-to-linux-utility-hdparm-on-windows-8>

<https://faculty.etsu.edu/tarnoff/labs2150/hd_perf/smart.html?tabid=2&print=no>

<https://crystalmark.info/en/software/crystaldiskinfo/crystaldiskinfo-aam-apm-control/>