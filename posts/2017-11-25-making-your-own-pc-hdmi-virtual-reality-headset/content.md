#### Making Your Own PC HDMI Virtual Reality Headset
_Saturday, November 25, 2017_

Yes you're right. This will be a crude ways to make VR headset but we're here to 
explore the science.

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
##### **Ok First we need to get all parts.**
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
##### **Tools**
* Soldering iron + solder tin
* Some wire
* Some glue. i'm using hot-glue
* Dremel or very hot nails and hacksaw
* Basically any tools you think you'll need lol

<br>
##### **Next, software**
1. Arduino IDE <https://www.arduino.cc/en/Main/Software>
2. Some arduino code to read data from sensor i'm using code from thanks to mirkoBastianini <https://github.com/catzy007/HeadTracking-Arduino-FreePie/>
3. FreePie <http://andersmalmgren.github.io/FreePIE/>
4. Vireiro Perception to play normal game in VR.. here i'm using version 3.0.1 at this time 4.0 still alpha <https://www.mtbs3d.com/download>
5. VR Player to play your video or anything to VR <https://archive.codeplex.com/?p=vrplayer>

<br>
##### **Then we come to building parts yaay.**
1. First we need to measure length and width of our screen.
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/1.jpg" alt="img">
			<span>measurement on image not to be scaled!</span>
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>
<p align="center"></p>
Make sure screen is working before proceeding.

2. Make some hole to mount your screen to vr case based on your measurements.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/2.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

`pro tips1 : use dremel to make initial holes then use saw or anything you have to cut the rest. if cut was ruff then just sand it using sand paper`

`pro tips2 : tear everything apart before proceeding this step!`

3. Mount screen to case and add some glue. i'm using hot-glue but you can use silicon glue or anything that doesn't destroy PCB.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/3.jpg" alt="img">
			<span>re test your screen to make sure everything went well</span>
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

4. Solder your MPU6050 or any Gyro+Acceleration sensors you use to arduino nano or pro micro.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/4.jpg" alt="img">
			<span>make sure all sensors is working properly</span>
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

`pro tips3 : if you have conductive hand, use gloves when handling electronic parts`

`pro tips4 : follow step by step instruction to avoid breaking stuff`

`pro tips5 : NEVER touch your sensors directly when it's powered on! ESD could kill your device`

5. Mount sensors to your case. I'm using foam double sided tape, if you have sugru or something similar then use it.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/5.jpg" alt="img">
			<span>measurement on image not to be scaled!</span>
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
`pro tips6 : make sure your tape is not conductive! use multimeter to check that`

<br>
##### **Next comes to software part**
1. Install and open arduino IDE followed by load `Arduino script\YawPtichRoll.ino` you download 
from [github](https://github.com/catzy007/HeadTracking-Arduino-FreePie/)
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/6.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

2. Next plug arduino to your pc and upload that code to your arduino.. don't forget to change 
board, processor, and com port!

3. Then change open serial monitor, change baud rate to 115200 and you'll see something like this
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/7.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

4. Plug everything from HDMI, screen power, arduino then install followed by opening FreePIE. 
then open `FreePIE Script\FreeIMU-MouseEMU.py`
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/8.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

5. Then Click `Settings>Plugins>FreeIMU`... change com port to arduino port and baud rate to `115200`
<div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/9.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-4"></div>
</div>
`pro tips7 : your com port might be different from picture above!`

6. Next run script and press `left shift + Z`. If you're moving headset around, it'll move your cursor 
too. Now your VR headset is ready to do it's job ~('-'~)
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="img-thumbnail">
            <img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/10.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>
`pro tips8 : if emulation status show 0 then mouse emulation disabled, else if emulation status 
show 1 then emulation enabled`

7. To reset position, press `left shift + X`. To make cursor absolute center, press `left shift + C`

<br>
##### **Almost final. Next we'll try to play game and movie with our crude VR headset**

`pro tips9 : **NEVER** open VIREIRO and VRPLAYER at same time!... just never or if you do, and 
get some error, restart your computer`

<br>
* **Here I'm going to play Portal2 with VR**

	1. Open Open and log into Steam

	2. Open `FreePIE > load the script > run > press left shift + Z`

	3. Next open `Perception.exe` change config to `DIY rift, No Tracking, Primary Monitor`
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="img-thumbnail">
				<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/11.jpg" alt="img">
			</div>
		</div>
		<div class="col-sm-3"></div>
	</div>

	4. Then Launch Portal2. That's it

	5. If you're done playing, close vireiro, and stop script manually and wait around 10 sec then unplug all cable
	<div class="row">
		<div class="col-sm-2"></div>
		<div class="col-sm-8">
			<div class="img-thumbnail">
				<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/12.jpg" alt="img">
			</div>
		</div>
		<div class="col-sm-2"></div>
	</div>

<br>
* **Next let's play video with our crude VR**

	1. First, plug everything, run freepie+script, and make sure everything working as it should.

	2. Next, install and open VR Player.

	3. Goto `tools > Load Preset > From File...` then open `vrplayer\vrplayer.json`
	<div class="row">
		<div class="col-sm-2"></div>
		<div class="col-sm-8">
			<div class="img-thumbnail">
				<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/13.jpg" alt="img">
			</div>
		</div>
		<div class="col-sm-2"></div>
	</div>

	4. Goto `Device > tracker > mouse`
	<div class="row">
		<div class="col-sm-2"></div>
		<div class="col-sm-8">
			<div class="img-thumbnail">
				<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/14.jpg" alt="img">
			</div>
		</div>
		<div class="col-sm-2"></div>
	</div>

	5. Next, open your favorite video player and play some video and play it in full screen if possible.
	here i'm using MPC-HC
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="img-thumbnail">
				<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/15.jpg" alt="img">
			</div>
		</div>
		<div class="col-sm-3"></div>
	</div>

	6. just `alt+tab` and go to `VR Player` again, then `file > open process > with GDI > click process dropdown > select your video player`.
	<div class="row">
		<div class="col-sm-2"></div>
		<div class="col-sm-8">
			<div class="img-thumbnail">
				<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/16.jpg" alt="img">
			</div>
		</div>
		<div class="col-sm-2"></div>
	</div>

	7. aaand it's done. double click to fullscreen, click to make movement. to pause video just alt+tab 
	to original player then pause and enjoy your video.

	8. if you're done with the movie, close VR player first, followed by your video player, then freepie, in 
	freepie, stop script manually, wait for 10 seconds, then close and unplug everything.

	`pro tips10 : Playing video using this method "GDI" is going to make video a little bit laggy`

<br>
##### **The reason why this delayed for a while**
Sensor i used "GY-85" got toasted 3 times i think it is from ESD, I use "Pro Micro" board and the USB 
port snapped 2 times. Wow i'm gonna explain why and how to avoid that.

<br>
**First, GY-85**

It's a very great sensors because it very similar to 
[RAZOR IMU](https://www.sparkfun.com/products/retired/10736) without ATmega328p. 
so basically we need to add arduino nano then we can use almost the same code 
from razor imu. but here comes to my main problem, my hand is very 
conductive and the GY-85 can be shorted only with touch from my finger or ESD. 
Sometimes i need to adjust my sensors and accidentally bump the sensors. 
So yeah i short-circuit 3 board by touching it. that's 30 USD and 6 week of 
shipping from china. How to avoid that, use gloves and don not touch or 
hit the board when it's running or just use other sensors like MPU6050 '-')

The reason why i choose MPU6050, first is price. It cost 2 USD each. 
so it's very good compare to GY-85 10 USD. Second, old oculus is using 
MPU-6000 <http://developers-club.com/posts/181159/>

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/17.jpg" alt="img">
			<span>MPU-6000 highlighted in orange</span>
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

and based on this datasheet from [ivensense](https://store.invensense.com/datasheets/invensense/MPU-6050_DataSheet_V3%204.pdf)
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/18.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
maybe MPU-6050 is same as MPU-6000 or at least almost.

<br>
**Next, Pro micro**

My first plan is to use mouse emulation from pro micro ATmega32u4 so i 
don't have to use software like freepie to translate gyro+accel motion 
into mouse XY motion. But you need to make sure that micro usb connector 
is strong enough or it'll break. To avoid this, choose your board wisely! 
for comparison

<br>
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/19.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
This is ProMicro as you can see it has no additional structural for that usb port. but it has some black circle thing. i dont know. 
i hope it is made for some structural support.

<br>
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/20.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
the board i broke is same as this. has no support at all. the port basically solder directly to trace of PCB. If your port broke, 
it's basically done!

<br>
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/21.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
This is pro micro from RobotDyn that red circle is structural support for usb port.

<br>
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/22.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
Same here Arduino Micro. it has structural support.

<br>
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/23.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
Same here with my nano 328p. i'm using this for my headset because robotdyn pro micro is too expensive for my taste.

Anyway i don't blame company to make board like that. It just for our purpose that you're 
moving your head so it must has some stress at that tiny usb port. It is nice to have 
some structural support so choose your board wisely! Look at the bottom of board to find 
if the board have structural support.

If you're finally decide that to use 32u4 board to your VR headset, you can follow this 
<http://www.instructables.com/id/Head-Mouse-With-MPU6050-and-Arduino-Micro> 
and <https://github.com/pocketmoon/MPU-6050-Arduino-Micro-Head-Tracker>

<br>
##### **UPDATE 4/22/18 Playing VRChat on our crude VR Heasdet**
`TESTED WORKING ON WINDOWS 10 CREATOR UPDATE OR LATER. VERSION 1703+`

1. First, make sure you have steam and vrchat downloaded
2. Download DesktopSBS <https://github.com/PaysPlat/DesktopSbS/releases>
3. Install DesktopSBS but don't open it yet.
4. Open FreePIE, load that mouse emulation script, run, press `Lshift+Z`
5. Launch VRChat using `non steamvr mode`
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/24.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

6. Open `DesktopSBS`
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/25.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

7. aaaand enjoy SteamVR games using our crude VR Headset (~'-')~
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/26.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

`pro tips11 : to check windows 10 version in your machine, go to "windows settings > system > about" and scroll a little bit.`
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2017-11-25-making-your-own-pc-hdmi-virtual-reality-headset/27.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

<br>
##### **Some Sauce**
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
