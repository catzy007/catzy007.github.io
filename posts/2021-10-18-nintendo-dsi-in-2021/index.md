### **Nintendo DSI in 2021**
_Monday, October 18, 2021_

Recently, i found interesting listing about Nintendo DSI. It's White DSI with JP language, 
working battery, vibrant screen no crack no dead pixel at least from the picture. 
The seller said that it just stuck in this Japanese error message, the digitizer 
doesn't work, the button is not working at the price of 10 USD, i just take it. 
Few days later, it came and to my surprise it comes with Stylus, SD to Micro SD adapter 
and R4 clone. Then i power it up and i get this message.
<p align="center">
    <img class="imgrespS" src="./posts/2021-10-18-nintendo-dsi-in-2021/01.jpg" alt="img">
    <br><br>
    <img class="imgrespS" src="./posts/2021-10-18-nintendo-dsi-in-2021/00.jpg" alt="img">
</p>

After googling around, i found few posts about this topic 
[Yahoo! Chiebukuro](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1131130136) and 
[Oshiete! Goo](https://oshiete.goo.ne.jp/qa/4596782.html) 
all of them said that i should hold `L R Start` button then press `Power`. 
By doing this, the system should boot into `Calibration` mode and 
after following the on-screen instructions, it should work again.
```
はじめに本体の設定をします。
OKをタッチしてください。
```
<p align="center">
    <img class="imgrespM" src="./posts/2021-10-18-nintendo-dsi-in-2021/02.png" alt="img">
</p>

I tried that, and it doesn't work at all. So i disassemble my unit then using multimeter 
i found out that the `R` button is not registering. So i tried to get replacement part 
which consist of ribbon cable, LR button, and SD assembly but could not find it locally. 
Then i look for the Button Switches and get a listing 10 pcs at 1 USD + Shipping. Check 
[GBAtemp forum post](https://gbatemp.net/threads/need-advice-fixing-broken-dsi-shoulder-buttons.364401/)
<p align="center">
    <img class="imgrespS" src="./posts/2021-10-18-nintendo-dsi-in-2021/03.jpg" alt="img">
    <br><br>
    <img class="imgrespS" src="./posts/2021-10-18-nintendo-dsi-in-2021/04.jpg" alt="img">
    <br><br>
    <img class="imgrespS" src="./posts/2021-10-18-nintendo-dsi-in-2021/05.jpg" alt="img">
    <br><br>
    <img class="imgrespS" src="./posts/2021-10-18-nintendo-dsi-in-2021/06.jpg" alt="img">
</p>

Few days later my switches arrive and i start my disassembly again, then using micro pencil 
solder tip i desolder the old switches, clean the pad, solder new switches and to my surprise 
it works. One thing to note here is that the new switches feel different from the original 
but as long as it's working just fine then i'll take it.
<p align="center">
    <img class="imgrespS" src="./posts/2021-10-18-nintendo-dsi-in-2021/07.jpg" alt="img">
</p>

Next thing i did is to check if everything works. Also to my surprise, the system did not 
really have any owner data. No names, games, disware, only few blurry photos. So i decided 
to do a system wipe and try to update the firmware to the latest version.
<p align="center">
    <img class="imgrespM" src="./posts/2021-10-18-nintendo-dsi-in-2021/08.jpg" alt="img">
    <br><br>
    <img class="imgrespM" src="./posts/2021-10-18-nintendo-dsi-in-2021/09.jpg" alt="img">
</p>

So i just connect it to Wi-Fi and update the system firmware from 1.0 to 1.45 then i go to 
dsiware and download web browser just to make the system more useable.
<p align="center">
    <img class="imgrespS" src="./posts/2021-10-18-nintendo-dsi-in-2021/10.jpg" alt="img">
</p>

The next thing i tried is R4 card which result nothing so far. I can say that i do all sort 
of format and firmware combination but still none of them works maybe my R4 flashcart is faulty 
maybe the kernal is damaged from other suspicious firmware IDK the point is it not working and 
i might try other method instead. Check 
[linfoxdomain flashcart mirror](https://www.linfoxdomain.com/nintendo/ds/)

The next thing i tried is to boot a custom firmware from SD Card. The way it works is to 
use a memory buffer overflow exploit found in photo apps metadata sound fancy right? You can 
follow [dsi.cfw.guide](https://dsi.cfw.guide/) tutorial. Just prepare a SD Card, format it 
to FAT32, download pit.bin to match your firmware version, and then create a folder with 
specific structure, put pit.bin inside, get and put TWiLightMenu in the SD Card, and it should 
ready to go. 

To launch the system, Open Camera Apps, go to Album, select SD Card, and it should 
boot into TWiLightMenu. At this point, you can stop and put "Legally owned ROM files" to 
the SD Card and play it. This mod is `NOT` permanent, so you can format the SD Card and 
everything will back to normal, but if you want to do a Homebrew then you can install 
Unlaunch. Or [Watch this](https://www.youtube.com/watch?v=qW6DDLM56ps)

With TWiLightMenu you can also play GB GBC GBA games using emulators. As for usability, 
sometimes i use my DSI to play music. You can use included music apps which sound amazing 
but require you to convert all of your mp3 to MP4-AAC files. I use [VLC](https://www.videolan.org/) 
to do this and manage to do a batch conversion so i don't have to manually convert hundreds 
of music file. The only inconvenience that i encounter is that the included music apps 
while i can play music with earphone plugged in and closed lid, i can't control play pause and 
next track without opening the lid.

My solution to this is using Homebrew apps called `Moonshell 1.71` this specific apps with 
this specific version obtained from linfoxdomain. With this apps, i can play mp3 files 
and do `Hold L` then `Press R` to pause/play and `Hold R` then `Press L` to play next track. 
The problem is that this app is not stable at all and the output sound is not that good. 
If you want to try it out, follow [GBAtemp forum post](https://gbatemp.net/threads/moonshell-without-flashcard.547225/)
<p align="center">
    <img class="imgrespXL" src="./posts/2021-10-18-nintendo-dsi-in-2021/11.png" alt="img">
</p>

The last thing i need is Charger (DSI, 3DS, 2DS is the same), Case, and acrylic strap and 
that's it. Also, here is my vacation picture taken using DSI rear camera, not bad for decade 
plus camera.
<p align="center">
    <img class="imgrespM" src="./posts/2021-10-18-nintendo-dsi-in-2021/12.jpg" alt="img">
</p>