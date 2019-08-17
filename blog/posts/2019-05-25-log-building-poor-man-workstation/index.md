### **Log Building Poor Man Workstation**
#### Saturday, 25 May 2019

Hello, this is my first post after migrating to <https://catzy007.github.io>. Okay this 
is the story, I need a multi core machine with as high 
performance/price as possible. But building machine from new part that 
equivalent with my need is pricey enough for me. Then i watch 
this video <https://www.youtube.com/watch?v=7IK0Yer4XTc> and surprise 
that 10 years old processor can hold up even in 2019. So i looking around a 
overclockable motherboard like Rampage 3 and found that still surprisingly 
expensive. So i'm doing more research and found this motherboard that 
i think is enough for my need [Asus Z8NA-D6](https://www.asus.com/Commercial-Servers-Workstations/Z8NAD6/) 
It is dual socket LGA1366 with 6 bank of ram and support for ECC 
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

<br>
#### [UPDATE 05/22/19 13:39]
Fast forward and some time with customs and the first item has arrive. 
That was the motherboard. It even come with IO Shield too
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/1.jpg" height="250px" alt="img1">
</p>

Next thing i want to buy is processor. And i made tables about 
performance/dollar. The price is double because i need 2 processor
```
Model. | CLK  | CB.  | $  | cb/$  | DLT | $DLT
 X5650 @ 2.66   1279 / 22 = 58.     0     0
 X5660 @ 2.90   1360 / 34 = 40.     81    12
 X5670 @ 2.94   1410 / 44 = 32.04   50    10
 X5675 @ 3.06   1471 / 60 = 24.51   61    16
```
Hopefully i can get X5670 without much problem.

<br>
#### [UPDATE 06/30/19 22:42]
After around 2 weeks, the processor was arrive. I quickly search for old DDR3 ram and bought 700W PSU from AeroCool for 30USD.
Yeah i know not the best PSU but i hope it get job done. After quick plug and test, the system wont boot. . . yeah f*ck. 
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/2.jpg" height="250px" alt="img2">
</p>
My quick diagnose was my old RAM was bad or BIOS in my motherboard was too old, so yeah trying to find working 
RAM and buying 2009 CPU and update the bios that way. Hopefully i can get E5506 without any problem (once for ever)

<br>
#### [UPDATE 07/03/19 09:54]
After bought two stick of RAM and old AMD HSF from work, i'm ready to test this machine again.. aand it turned on. Great.
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/3.jpg" height="250px" alt="img3">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/4.jpg" height="250px" alt="img4">
</p>
The actual problem was my ram is dead.. so yeah it mean that i can update BIOS later. Next in my list was getting true on spec HSF.
Hopefully i can get [Deepcool Gammaxx 400](https://www.blibli.com/p/deepcool-gammaxx-400-cpu-cooler/ps--FRC-24438-00061?ds=FRC-24438-00061-00001&source=BRAND_PAGE) or [Deepcool Ice Blade 200M](https://www.blibli.com/p/deepcool-ice-blade-200m-cpu-cooler/ps--FRC-24438-00060?ds=FRC-24438-00060-00001&source=SEARCH_OR_CATEGORY_PAGE). And for cooler, i can only go with LGA2011/1366 screw 
based cooler because 1366 server board include onboard backplate for CPU mounting.

<br>
#### [UPDATE 07/16/19 22:31]
After waiting a week and still didn't get my monthly wage on time, i decide to continue and test my system anyway. The results was
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/5.jpg" height="250px" alt="img5">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/6.jpg" height="250px" alt="img6">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/7.jpg" height="250px" alt="img7">
</p>
Yeah some number are great but, the temperature was pretty high there. Hopefully i can get the cooler and retest everything.

<br>
#### [UPDATE 07/22/19 22:00]
Today my cooler arrive it's deepcool Ice Blade 200M. I quickly open and mount it on the motherboard aand yeah the LGA2011 screw was too big '-') sh*t.
okay the problem is this
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/add1.jpg" height="250px" alt="add1">
	<br>
	<a href="https://forums.servethehome.com/index.php?threads/guide-1356-1366-xeon-aftermarket-heatsink-selection-installation.5003/">image source</a>
</p>
Then i cut the four corner of backplate using handsaw and this what it look like. The pink thing is nail polish to prevent short circuit from my rough cut
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/8.jpg" height="250px" alt="img8">
</p>
Finally i can mount the cooler using standar intel push-pin fastener
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/9.jpg" height="250px" alt="img9">
</p>
Aand here is some benchmark. I get a minute less in blender than previous benchmark not that bad. The problem still the processor get up to 90+ centigrade.
I think that because the exhaust of second CPU was directed to the first CPU. In other word feeding hot air into heatsink... i tried to change the heatsink direction but i have clearance issues. Maybe someday i will re route everything.
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/10.jpg" height="250px" alt="img10">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/11.jpg" height="250px" alt="img11">
</p>

<br>
#### [UPDATE 07/01/2019 13:23]
Yesterday i bought some DDR3 Registered ram for my server. It's 1GB per stick so in total i have 6GB of RAM. 
The ram itself is very cheap less than 1USD per stick yeah great deal. Maybe some day i will get 4GB stick from aliexpress
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/12.jpg" height="250px" alt="img12">
</p>
And i made some remote management too. It just simple relay and sbc glued together. Actually i plan to make 
custom PCB and using arduino + ethernet module to make that but i only had a week to make this so yeah... maybe next time i will make that.
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/13.jpg" height="250px" alt="img13">
</p>
Next thing to buy is case. At first, i plan to buy 2U rackmount case.. But here everything server related is expensive as hell so i will buy standard ATX case.

#### [UPDATE 08/17/2019 16:20]
After getting a random 20USD case from local store, this workstation is 80% finished. 
<p align="center">
	<img src="./posts/2019-05-25-log-building-poor-man-workstation/14.jpg" height="250px" alt="img14">
</p>
The last thing i need is Graphic Card. Maybe some day i will get RX570 uder 100USD or something.