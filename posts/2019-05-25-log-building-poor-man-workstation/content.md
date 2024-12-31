#### Log Building Poor Man Workstation
##### *Saturday, 25 May 2019*

Hello, this is my first post after migrating to <https://catzy007.github.io>. Okay this 
is the story, I need a multicore machine with as high 
performance/price as possible. But building machine from new part that 
equivalent with my need is pricey enough for me. Then i watch 
this video <https://www.youtube.com/watch?v=7IK0Yer4XTc> and surprise 
that 10 years old processor can hold up even in 2019. So i looking around an 
overclockable motherboard like Rampage 3 and found that still surprisingly 
expensive. So i'm doing more research and found this motherboard that 
i think is enough for my need [Asus Z8NA-D6](https://www.asus.com/Commercial-Servers-Workstations/Z8NAD6/) 
It is a dual socket LGA1366 with 6 banks of ram and support for ECC 
Registered ram. Perfect.

And day after that i quickly made this build plan.

```
Nvidia 970 @1.2JT
AMD 570 4G @1JT ~ 1.3JT

COOLER/HSF ~10$ x 2
 14USD/ea 4tube
 22USD/ea 6tube

MOUNT FOR HSF

PROCIE
 x5675
 X5670 ~20$ x 2
 X5660 x2

ANY BOARD < 130$ !
 X8DTL-3F
 Z8NA-D6 ~100$
 Z8NR-D12 ~120$
```

#### [UPDATE 05/22/19 13:39]
Fast forward and some time with customs and the first item has arrived. 
That was the motherboard. It even comes with IO Shield too

![img](./posts/2019-05-25-log-building-poor-man-workstation/1.jpg)

::br

Next thing i want to buy is processor. And i made tables about 
performance/dollar. The price is double because i need 2 processors
```
Model. | CLK  | CB.  | $  | cb/$  | DLT | $DLT
 X5650 @ 2.66   1279 / 22 = 58.     0     0
 X5660 @ 2.90   1360 / 34 = 40.     81    12
 X5670 @ 2.94   1410 / 44 = 32.04   50    10
 X5675 @ 3.06   1471 / 60 = 24.51   61    16
```
Hopefully i can get X5670 without much problem.

#### [UPDATE 06/30/19 22:42]
After around 2 weeks, the processor was arrived. I quickly search for old DDR3 ram and bought 700W PSU from AeroCool for 30USD.
Not the best PSU but i hope it gets job done. After quick plug and test, the system won't boot. 

![img](./posts/2019-05-25-log-building-poor-man-workstation/2.jpg)

::br

My quick diagnose was my old RAM was bad or BIOS in my motherboard was too old, so yeah trying to find working 
RAM and buying 2009 CPU and update the bios that way. Hopefully i can get E5506 without any problem.

#### [UPDATE 07/03/19 09:54]
After bought two stick of RAM and old AMD HSF from work, i'm ready to test this machine again, and it turned on. Great.

![img](./posts/2019-05-25-log-building-poor-man-workstation/3.jpg)
![img](./posts/2019-05-25-log-building-poor-man-workstation/4.jpg)

::br

The actual problem was the ram is dead. Which meant that i can update BIOS later. Next in my list was getting true on spec HSF.
Hopefully i can get [Deepcool Gammaxx 400](https://www.blibli.com/p/deepcool-gammaxx-400-cpu-cooler/ps--FRC-24438-00061?ds=FRC-24438-00061-00001&source=BRAND_PAGE) or [Deepcool Ice Blade 200M](https://www.blibli.com/p/deepcool-ice-blade-200m-cpu-cooler/ps--FRC-24438-00060?ds=FRC-24438-00060-00001&source=SEARCH_OR_CATEGORY_PAGE). And for cooler, i can only go with LGA2011/1366 screw 
based cooler because 1366 server board include onboard backplate for CPU mounting.

#### [UPDATE 07/16/19 22:31]
After waiting a week and still didn't get my monthly wage on time, i decide to continue and test my system anyway. The results were

![img](./posts/2019-05-25-log-building-poor-man-workstation/5.jpg)
![img](./posts/2019-05-25-log-building-poor-man-workstation/6.jpg)
![img](./posts/2019-05-25-log-building-poor-man-workstation/7.jpg)

::br

Some number are great but, the temperature was pretty high there. Hopefully i can get the cooler and retest everything.

#### [UPDATE 07/22/19 22:00]
Today my cooler arrive it's deepcool Ice Blade 200M. I quickly open and mount it on the motherboard and the LGA2011 screw was too big.
Okay the problem is this.

<div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2019-05-25-log-building-poor-man-workstation/add1.jpg" alt="img">
			<p><a href="https://forums.servethehome.com/index.php?threads/guide-1356-1366-xeon-aftermarket-heatsink-selection-installation.5003/">
            image source
            </a></p>
        </div>
    </div>
    <div class="col-sm-4"></div>
</div>

::br

Then i cut the four corner of backplate using handsaw and this what it looks like. The pink thing is nail polish to prevent short circuit from my rough cut

![img](./posts/2019-05-25-log-building-poor-man-workstation/8.jpg)

::br

Finally, i can mount the cooler using standard intel push-pin fastener

![img](./posts/2019-05-25-log-building-poor-man-workstation/9.jpg)

::br

Aand here is some benchmark. I get a minute less in blender than previous benchmark not that bad. The problem still the processor get up to 90+ centigrade.
I think that because the exhaust of second CPU was directed to the first CPU. In other word feeding hot air into heatsink. I can't change the heatsink direction because clearance issues. Hopefully one day i can re-route everything.

![img](./posts/2019-05-25-log-building-poor-man-workstation/10.jpg)
![img](./posts/2019-05-25-log-building-poor-man-workstation/11.jpg)

::br

#### [UPDATE 07/01/2019 13:23]
Yesterday i bought some DDR3 Registered ram for my server. It's 1GB per stick so in total i have 6GB of RAM. 
The ram itself is very cheap less than 1USD per stick a great deal if you ask me. Maybe some day i can get 4GB stick from aliexpress.

![img](./posts/2019-05-25-log-building-poor-man-workstation/12.jpg)

::br

And i made some remote management too. It just simple relay and sbc glued together. Actually i plan to make 
custom PCB and using arduino + ethernet module to make that but i only had a week to make this. Maybe next time i will revisit that.

![img](./posts/2019-05-25-log-building-poor-man-workstation/13.jpg)

::br

Next thing to buy is case. At first, i plan to buy 2U rackmount case. But in my local area everything server related is expensive, i'm going to  
use standard ATX case instead.

#### [UPDATE 08/17/2019 16:20]
After getting a random 20USD case from local store, this workstation is 80% finished. 

![img](./posts/2019-05-25-log-building-poor-man-workstation/14.jpg)

::br

The last thing i need is Graphic Card. Hopefully i can get RX570 under 100USD or something.

#### [UPDATE 09/13/2019 19:57]
Today the case fan is arrive it's Xfan 120 from deepcool. I hope this will tame that beast ultra hot power hungry CPUs. 
I bought three fan and set it in Push-Pull configuration

![img](./posts/2019-05-25-log-building-poor-man-workstation/15.jpg)
![img](./posts/2019-05-25-log-building-poor-man-workstation/16.jpg)

::br

Also last week i'm building new remote management system using ESP8266 and relay, it still has some issues but at the moment it works just fine.

![img](./posts/2019-05-25-log-building-poor-man-workstation/17.jpg)

::br

#### [UPDATE 12/01/2019 15:07]
Few months pass and here i am. In the meantime, i'm modifying my case so i can get more air coming from 120mm intake fans.
It's not that pretty, but it works really well, I just cut the front case with dremel and put mesh behind followed by some plastic plate.

![img](./posts/2019-05-25-log-building-poor-man-workstation/18.jpg)

And finally i got my graphic card. It is RX460 4GB from Sapphire. I know it is not an RX570, but i got it for a good price and it works well.

![img](./posts/2019-05-25-log-building-poor-man-workstation/19.jpg)

::br

And that's wrap this journey to build my own workstation. Next upgrade in my plan is to get 24GB of DDR3 ECC ram from China. 
Thank you for reading this far. Hope you have a good day!