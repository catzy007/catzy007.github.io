#### Starting life as designer using linux (ubuntu based)
##### *Wednesday, February 6, 2019*
```Imagine you're fresh graduate that only do design 2d, 3d and or drawing. Here's my suggestions.```
<br>
#### First get a PC or laptop.

> If you do 2d design like posters, brochure, some vector graphic something like that, get a pc or laptop with specification "at least" quad core processor with at least intel HD 5XX and 4GB of ram. if you really desperate, get second hand dual core processor with nvidia 600 series.

core i3 2XXX 4GB ram with nvidia 6XX is minimum

core i5 6XXX 4GB ram with intelHD 5XX is enough

core i7 7XXX 8GB ram with nvidia 9XX is great

> If your primary thing is 2d drawing like manga anime, dual core with intel graphic is good enough for stater. make sure you buy pen tab. some suggested brand is Xp-Pen, Huion, Wacom. if you can, go with quad core and nvidia one.

core i3 2XXX 4GB ram with nvidia 6XX is minimum

core i5 6XXX 4GB ram with intelHD 5XX is enough

core i7 7XXX 8GB ram with nvidia 9XX is great

> If you're 3d artist that create 3d model, 3d object, 3d sculpting etc, you might go with at least quad core and nvidia 900 series with 8GB of ram. if you can the go with xeon 6 core and nvidia 10 series card. i'm assuming that you allready own pen tab at this stage.

core i7 6XXX 8GB ram nvidia 9XX is good enough

amd ryzen 5 8GB ram amd rx 5XX is good enough

> If you're 3d rendering artist, some render engine like great amount of cpu core, and other like great gpu power. so it's depend. my suggestion is get 12 core xeon and 10 series nvidia card with 16GB ram. large ram for combat texture size. if you're professional then get 12 core xeon and maybe quadro or TITAN class card.

dual xeon X5690 with 16GB ram nvidia 9XX is poor man's rendering machine

12 core xeon with 16GB ram nvidia quadro is great

threadripper with 16GB ram nvidia quadro is great

anything above that is great

if you can get 2nd hand part with deals, that would be great.

<br>
#### Then select a software.

If you're draw using pen tablet, i suggest you to install Krita
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="thumbnail">
            <img class="img-responsive" src="./posts/2019-02-06-starting-life-as-designer/1.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

if you're illustrator and do lot of vector graphic, use Inkscape
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="thumbnail">
            <img class="img-responsive" src="./posts/2019-02-06-starting-life-as-designer/2.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

if you're doing light photo editing, use GIMP
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="thumbnail">
            <img class="img-responsive" src="./posts/2019-02-06-starting-life-as-designer/3.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

if you're 3d artist, 3d animator, almost anything using 3d graphic, use Blender
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="thumbnail">
            <img class="img-responsive" src="./posts/2019-02-06-starting-life-as-designer/4.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

<br>
#### Setting up few things
I Assuming that you're already assemble your PC and successfully install ubuntu.
first, get a update

`$ sudo apt update && sudo apt upgrade -y`

next install your software of choices

for krita users
`$ sudo apt install krita -y`

for inkscape users
`$ sudo apt install inkscape -y`

for gimp users
`$ sudo apt install gimp -y`

for blender users
`$ sudo apt install blender -y`

<br>
#### If you're using NVIDIA Graphic, do this
go to start menu and search for `software & updates`
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="thumbnail">
            <img class="img-responsive" src="./posts/2019-02-06-starting-life-as-designer/5.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

then select `additional drivers` and select `Using NVIDIA driver metapackage`
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="thumbnail">
            <img class="img-responsive" src="./posts/2019-02-06-starting-life-as-designer/6.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

then click `Apply Changes`

<br>
#### If you have Pen Tablet, try this
Hopefully someone has made driver for your pen tablet on linux <a href="./#2018-07-08-xp-pen-star-g430s-in-ubuntu-1710">link</a>

<br>
#### And you're done!
