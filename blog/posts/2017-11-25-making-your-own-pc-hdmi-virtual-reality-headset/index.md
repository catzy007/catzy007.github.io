### **Making Your Own PC HDMI Virtual Reality Headset**
#### Saturday, November 25, 2017

Yes you're right. this will be crude ways to make VR headset but we're here to 
explore the science.
 
After almost 6 months. finally i done this post.... YEAH! the main reason it 
took so long to finish this post... read the bottom section.

Based on [Wikipedia](https://en.wikipedia.org/wiki/Virtual_reality), Virtual 
reality (VR) is a computer technology that uses virtual 
reality headsets or multi-projected environments, sometimes in combination with physical 
environments or props, to generate realistic images, sounds and other sensations 
that simulate a user's physical presence in a virtual or imaginary environment. 
A person using virtual reality equipment is able to "look around" the artificial 
world, and with high quality VR move around in it and interact with virtual features 
or items. The effect is commonly created by VR headsets consisting of head-mounted 
goggles with a screen in front of the eyes, but can also be created through specially 
designed spaces with multiple large screens.

<br>
#### **Ok First we need to get all parts.**
*  Screen 5" to 7" with highest possible PPI
   <https://www.aliexpress.com/store/product/60HZ-5-5-inch-1440p-display-1440-2560-with-hdmi-to-mipi-board-for-oculus-rift/1764418_32366781090.html> 
   but i'm using 5" 480x800px screen for raspberrypi with around 235ppi or you can use 
   5.6" 720p too
   
* Some case
  you can use any google cardboard based case.. but i'm using 10USD case <https://www.gearbest.com/vr-headset/pp_272221.html>
  
* Something to track your head movement.
  i'm using 6 or 9DOF sensor paired with arduino nano. You need AT LEAST 6DOF gyro + 
  accelerometer sensor. the magnetometer is just optional. for example razor IMU, 
  SparkFun 9DoF Sensor Stick, GY-85, MPU6050, or any 6 or 9DOF sensor or you can even 
  using 42USD oculus dk2 sensor. i'm using MPU6050 and arduino nano for cheap.

* Something to read and write from I2C sensor.
  Here i'm using arduino nano from robotdyn. you can use pro micro too but yeah take 
  care because low quality board can destroy itself! read all post for more info! btw 
  if you're planning to use pro micro, you doesn't necessarily need to use FreePIE, 
  just use 32u4 chip to emulate mouse movement.

* Some usb cable, power supply or just use power from your laptop/pc.

<br>
#### **Tools**
* Soldering iron + solder tin
* Some wire
* Some glue. i'm using hot-glue
* Dremel or very hot nails and hacksaw
* Basically any tools you think you'll need lol

<br>
#### **Next, software**
1. Arduino IDE <https://www.arduino.cc/en/Main/Software>
2. Some arduino code to read data from sensor i'm using code from thanks to mirkoBastianini <https://github.com/catzy007/HeadTracking-Arduino-FreePie/>
3. FreePie <http://andersmalmgren.github.io/FreePIE/>
4. Vireiro Perception to play normal game in VR.. here i'm using version 3.0.1 at this time 4.0 still alpha <https://www.mtbs3d.com/download>
5. VR Player to play your video or anything to VR <https://archive.codeplex.com/?p=vrplayer>

<br>
#### **Then we come to building parts yaay.**
1. First we need to measure length and width of our screen
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/1.png" height="250px" alt="measure">
</p> 
<p align="center">measurement on image not to be scaled!</p>
> and make sure screen is working before doing anything stupid!

2. Make some hole to mount your screen to vr case based on your measurements
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/2.png" height="250px" alt="measure">
</p> 
<p align="center">image not to be scaled with your working vr headset</p>
> pro tips1 : use dremel to make initial holes then use saw or anything you have to cut the rest.. if cut was ruff then just sand it using sand paper

> pro tips2 : tear everything apart before proceeding this step!

3. Mount screen to case and add some glue... i'm using hot-glue but you can use silicon glue or anything that doesn't destroy pcb
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/3.png" height="250px" alt="measure">
</p> 
<p align="center">re test your screen to make sure everything is going daijobu ~('-'~)</p>

4. Solder your MPU6050 or any Gyro+Acceleration sensors you use to arduino nano or pro micro
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/4.png" height="250px" alt="measure">
</p> 
<p align="center">make sure all sensors is working properly or you'll have bad time fixing all of them!</p>
> pro tips3 : if you have conductive hand like me then use gloves when handling all of this

> pro tips4 : don't do it in any reverse! or even powering it when reverse '-')

> pro tips5 : NEVER touch your sensors directly when it's powered on! especially if you're using GY-85

5. Mount sensors to your case.. i'm using foam double sided tape.. if you have sugru or something similar then use it.
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/5.png" height="250px" alt="measure">
</p> 
> pro tips6 : make sure your tape doesn't conductive! especially when you're using GY-85 '-') use multimeter to check that

<br>
#### **Next comes to software part (~'-')~**
1. Install and open arduino IDE followed by load `Arduino script\YawPtichRoll.ino` you download 
from [github](https://github.com/catzy007/HeadTracking-Arduino-FreePie/)
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/6.png" height="250px" alt="software 1">
</p>

2. Next plug arduino to your pc and upload that code to your arduino.. don't forget to change 
board, processor, and com port!

3. Then change open serial monitor, change baud rate to 115200 and you'll see something like this
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/7.png" height="250px" alt="software 3">
</p> 

4. Plug everything from HDMI, screen power, arduino then install followed by opening FreePIE. 
then open `FreePIE Script\FreeIMU-MouseEMU.py`
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/8.png" height="250px" alt="software 4">
</p> 
5. Then Click `Settings>Plugins>FreeIMU`... change com port to arduino port and baud rate to `115200`
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/9.png" height="250px" alt="software 5">
</p> 
>  pro tips7 : your com port might be different from picture above!

6. Next run script and press `left shift + Z`. If you're moving headset around, it'll move your cursor 
too. Now your VR headset is ready to do it's job ~('-'~)
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/10.png" height="250px" alt="software 6">
</p> 
>  pro tips8 : if emulation status show 0 then mouse emulation disabled, else if emulation status 
show 1 then emulation enabled

7. To reset position, press `left shift + X`. To make cursor absolute center, press `left shift + C`

<br>
#### **Almost final. Next we'll try to play game and movie with our crude VR headset**
>  pro tips 9 : **NEVER** open VIREIRO and VRPLAYER at same time!... just never or if you do, and 
get some error, restart your computer

<br>
**Here I'm going to play Portal2 with VR**
1. Open `Steam > login > enter code > chat with your friend` etc.... lol

2. Open `FreePIE > load that script > run > press left shift + Z`

3. Next open `Perception.exe` change config to `DIY rift, No Tracking, Primary Monitor`
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/11.png" height="250px" alt="game 3">
</p> 

4. Then Launch Portal2... That's it

5. If you're done playing, close vireiro, and stop script manually and wait around 10 sec then unplug all cable
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/12.jpg" height="250px" alt="game 5">
</p> 

<br>
**Next let's play video with our crude VR**
1. First, plug everything, run freepie+script, and make sure everything working as it should be

2. Next, install and open VR Player

3. Goto `tools > Load Preset > From File...` then open `vrplayer\vrplayer.json`
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/13.png" height="250px" alt="video 3">
</p> 

4. Goto `Device > tracker > mouse`
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/14.png" height="250px" alt="video 4">
</p> 

5. Next, open your favorite video player and play some video and play it in full screen if possible... 
here i'm using MPC-HC
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/15.png" height="250px" alt="video 5">
</p> 

6. just `alt+tab` and go to `VR Player` again, then `file > open process > with GDI > click process dropdown > select your video player`.
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/16.png" height="250px" alt="video 6">
</p> 

7. aaand it's done... double click to fullscreen, click to make movement... to pause video just alt+tab 
to original player then pause :v and enjoy your video

8. if you're done with the movie, close VR player first, followed by your video player, then freepie, in 
freepie, stop script manually, wait for 10sec, then close and unplug everything.

>  pro tips10 : Playing video using this method "GDI" is going to make video a little bit laggy so yeah

<br>
#### **The reason why this take so long**
Is sensor i used "GY-85" burned 3 times, adruino i used "pro micro" broken 2 times... 
that was freaking stupid '-') now i'm gonna explain why and how to avoid that.

<br>
**First, GY-85**

It's a very great sensors because it very similar to RAZOR IMU 
<https://www.sparkfun.com/products/retired/10736> but without ATmega328p. 
so basically we need to add arduino nano then we can use almost same code 
from razor imu... but yeah here comes to my main problem... My hand is very 
conductive.. and the GY-85 can be shorted only with touch from my finger... 
so sometimes i need to adjust my sensors and accidentally touch that sensors... 
so yeah i'm shorted 3 board by touching it... that's 30USD and 6 week of 
shipping from china '-')... how to avoid that... use gloves, don't touch or 
hit when it's running, or just use other sensors like MPU6050 '-')

The reason why i choose MPU6050... first, price... it just 2USD each item... 
so it's very good compare to GY-85 10USD. second, old oculus is using 
MPU-6000 <http://developers-club.com/posts/181159/>

<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/17.jpg" height="250px" alt="story 1">
</p>
<p align="center">MPU-6000 is that orange highlight</p>

and based on this datasheet from ivensense <https://store.invensense.com/datasheets/invensense/MPU-6050_DataSheet_V3%204.pdf>
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/18.png" height="250px" alt="story 2">
</p>
maybe MPU-6050 is same as MPU-6000 or at least almost. so yeah using oculus sensors... i'm feeling little bit happy lol.

<br>
**Next Pro micro**

My first plan is to use mouse emulation from pro micro ATmega32u4 so i 
don't have to use software like freepie to translate gyro+accel motion 
into mouse XY motion. But you need to make sure that micro usb connector 
is strong enough or it'll break like mine '-').. to avoid choose your 
board wisely!... for comparison

<br>
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/19.jpg" height="100px" alt="story 3">
</p>
This is ProMicro as you can see it has no additional structural for that usb port.. but it has some black circle thing.. i dont know.. i hope it made for some structural support..

<br>
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/20.jpg" height="100px" alt="story 4">
</p>
the board i broke is same as this... has no support at all.. the port basically solder directly to trace of PCB.. so if your port broke, it's basically done!

<br>
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/21.jpg" height="100px" alt="story 5">
</p>
This is pro micro from RobotDyn that red circle is structural support for usb port

<br>
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/22.jpg" height="100px" alt="story 6">
</p>
Same here Arduino Micro.. it has structural support

<br>
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/23.jpg" height="100px" alt="story 7">
</p>
Same here with my nano 328p... i'm using this for my headset because robotdyn pro micro is too expensive


anyway i don't blame company to make board like that... it just for our purpose that you're 
moving your head so it must has some stress at that tiny usb port... it just nice to have 
some structural support so choose your board wisely! just look at the bottom of board and 
you're done.

if you're finally decide that to use 32u4 board to your VR headset, you can use follow this 
<http://www.instructables.com/id/Head-Mouse-With-MPU6050-and-Arduino-Micro> and or 
<https://github.com/pocketmoon/MPU-6050-Arduino-Micro-Head-Tracker>

<br>
#### **UPDATE 4/22/18 Playing VRChat on our crude VR Heasdet**
> THIS GUARANTEE WORKS ON WINDOWS10 CREATOR UPDATE OR LATER. VERSION 1703+

1. First, make sure you have steam and vrchat downloaded
2. Download DesktopSBS <https://github.com/PaysPlat/DesktopSbS/releases>
3. Install DesktopSBS but don't open it yet.
4. Open FreePIE, load that mouse emulation script, run, press `Lshift+Z`
5. Launch VRChat using `non steamvr mode`
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/24.png" height="250px" alt="update 1">
</p>
6. Open `DesktopSBS`
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/25.png" height="250px" alt="update 2">
</p>
7. aaaand enjoy SteamVR games using our crude VR Headset (~'-')~
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/26.png" height="250px" alt="update 3">
</p>

>  pro tips11 : to check windows 10 version in your machine, goto `windows settings > system > about > scroll a little bit` and done.
<p align="center">
	<img src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/27.png" height="250px" alt="check 1">
</p>

<br>
#### **Some Sauce**
<https://github.com/ayildirim/OpenVR>

<https://github.com/mirkoBastianini/HeadTracking-Arduino-FreePie>

<http://andersmalmgren.github.io/FreePIE/>

<https://www.mtbs3d.com/new-vireio-site>

<https://www.mtbs3d.com/download>

<https://archive.codeplex.com/?p=vrplayer>

<http://www.hotmcu.com/gy85-9dof-imu-sensor-module-p-298.html>

<http://developers-club.com/posts/181159/>

<https://store.invensense.com/datasheets/invensense/MPU-6050_DataSheet_V3%204.pdf>

<https://github.com/PaysPlat/DesktopSbS/releases>
