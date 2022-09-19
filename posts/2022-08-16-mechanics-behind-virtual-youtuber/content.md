#### Mechanics Behind Virtual Youtuber
_Tuesday, August 16, 2022_

Virtual YouTuber (ブイチューバー) or VTuber for short is an online 
entertainer who uses computer-generated avatar and scene which their 
motion and movement is but not always tied to a motion-capture software 
and hardware. The technology itself has existed for a while but their 
popularity becomes firm since late 2016.

Now what make them tick? What lies beneath? Let's unravel the secret 
scrolls. The technology behind VTuber is 
[Animation](https://en.wikipedia.org/wiki/Animation), 
[Computer Generated Imagery (CGI)](https://en.wikipedia.org/wiki/Computer-generated_imagery) and 
[Motion Capture (MoCap)](https://en.wikipedia.org/wiki/Motion_capture) 
which is used by animation and gaming industry since 80s. The 
[idea of converting human movement to animation itself](https://en.wikipedia.org/wiki/Rotoscoping) 
has existed since late 1800s or even beyond. Back then a frame is hand 
traced from a projected film roll one by one, Then advancement in 
[computer graphics](https://en.wikipedia.org/wiki/Computer_graphics) 
meant that combining animation, computer graphics and MoCap is possible.

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-08-16-mechanics-behind-virtual-youtuber/07.jpg" alt="img">
			<span>MotionSampler Utilities - reality.sgi.com</span>
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>
While early system paved a way, it was 
[expensive](https://web.archive.org/web/20000830080826/http://reality.sgi.com/jam_sb/mocap/MoCapWP_v2.0.html) 
and require a 
[specialized equipment](https://en.wikipedia.org/wiki/Silicon_Graphics) 
or even [specialized room](https://en.wikipedia.org/wiki/Motion_capture#Optical_systems) 
with bodysuit markers and cameras placed at strategic locations which 
is unreachable for most people. Fortunately further advancement in 
computer vision technology allow us to enjoy such technology even at the 
palm of your hand!

This technology is called [Kinect](https://en.wikipedia.org/wiki/Kinect) 
released in 2010 for Xbox 360. Kinect is motion sensing device capable 
of real-time gesture recognition, body skeletal detection, 3D scanning 
and other capabilities. Technology behind kinect is emerged from company 
called PrimeSense. First generation kinect uses IR Projector, IR Camera, 
and regular RGB camera. The way this works is Kinect IR Projector is 
emitting a pattern of dot into the surrounding area and then IR camera 
is used to capture image from projected pattern. Then a mathematic 
calculation is performed to determine how far an object is according 
to how the light pattern has changed. This way you can get depth data 
from your surrounding area. 
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-08-16-mechanics-behind-virtual-youtuber/01.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>
You can use the depth data to create a 
[Point Cloud](https://en.wikipedia.org/wiki/Point_cloud) then recreate it 
as 3D model of surrounding area, or you can use the depth data to filter 
the subject you're trying to capture and the background. In 2013 Apple 
purchased PrimeSense and their technology used to develop 
[Face ID](https://www.extremetech.com/mobile/255771-apple-iphone-x-truedepth-camera-works)
and [other things](https://www.patentlyapple.com/patently-apple/2018/08/apple-won-52-patents-today-covering-face-id-for-future-macs-a-trio-of-apple-store-design-patents-more.html).

But hardware just one part of the equation. You need a piece of software 
to get and translate raw values from hardware to actual useable data. Seeing 
potential of kinect, people begin to "Hack" Kinect and get it to do other 
things and one of them is animation. One of the software to utilize kinect 
motion capture capabilities is 
[MikuMikuDance (MMD)](https://en.wikipedia.org/wiki/MikuMikuDance) 
MMD is freeware that allows its users to create 3D animation by meticulously 
move avatar skeletal bones and joints. Instead of manually move skeletal bone 
one by one you can use kinect motion data to move avatar skeletal bone, and you 
get motion capture animation.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-08-16-mechanics-behind-virtual-youtuber/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>
This allow small or even individual creators to make animations, music 
videos and even video games. Unfortunately at the mid of 2011, original 
creator of MMD stopped it's development and left the fate of MMD to it's 
community without any source code release. Fortunately alternative 
software existed such as [MikuMikuCapture (MMC)](https://sites.google.com/site/mikumikucapturee/).
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-08-16-mechanics-behind-virtual-youtuber/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>
You can use it as is live or capture and load the motion data to 
[blender](https://www.blender.org/) and do animation works there.

While kinect is great, kinect is specialized equipment after all and 
further advancement in computer vision is needed to allow anyone to do 
motion capture. Improvement in 
[Pose Estimation](https://learnopencv.com/deep-learning-based-human-pose-estimation-using-opencv-cpp-python/) and 
[Head Pose Estimation](https://learnopencv.com/head-pose-estimation-using-opencv-and-dlib/) 
among other computer vision algorithm allows motion capture using regular 
camera. 
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-08-16-mechanics-behind-virtual-youtuber/00.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
While it is working, the computational cost of such system is quite high. 
To combat this, pre-trained datasets can be used instead of manually training 
the algorithm for example 
[MediaPipe Pose](https://google.github.io/mediapipe/solutions/pose.html).

Motion capture above uses camera at least in one form or another. There is 
also motion capture system that do not use any camera, instead they're using 
[Inertial Measurement Unit (IMU)](https://en.wikipedia.org/wiki/Inertial_measurement_unit) 
which consist of few sensors like accelerometer, gyroscope, magnetometer, etc.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-08-16-mechanics-behind-virtual-youtuber/06.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
The way this works is first 
[you strap IMU to strategic part of your body like legs, waist, etc](https://www.xsens.com/products/mvn-animate). 
Then you sent the IMU data usually via wireless and recipient computer translate 
the IMU data to your Avatar. Compared to camera based MoCap, IMU based MoCap 
needs less computation power, but current consumer class IMU drift from time to 
time so it needs regular calibration.

Virtual YouTuber also needs an Avatar. If you want 3D avatar you can create your 
own using Blender, Maya or ZBrush. But for most doing 3D works like modelling 
and rigging is hard and takes a lot of time. Fortunately Pixiv created 
[VRoid Studio](https://vroid.com/en/studio) If you have created an in game 
character it is pretty much the same. If you want more, you can create your 
own 3D component in other software and load them to your avatar you can also 
draw your own texture and add custom text or logo to your avatar.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-08-16-mechanics-behind-virtual-youtuber/04.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>
Remember that you can always convert from one 3D format to another, sometimes 
with a catch and sometimes not at all.

If you want 2D avatar, [Live2D](https://www.live2d.com/en/) is the way to go. 
Live2D works by first you [separate your 2D drawings by parts](https://docs.live2d.com/cubism-editor-manual/divide-the-material/) 
for example a face, lips, eyes, ears, body, legs, etc. and then you 
["connect them together"](https://docs.live2d.com/cubism-editor-manual/template/#) 
then the software mathematically deform and transform respected parts according 
to motion data.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-08-16-mechanics-behind-virtual-youtuber/05.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

And that's the current technology behind Virtual YouTuber. There is also 
technology such as [Virtual Reality (VR)](https://en.wikipedia.org/wiki/Virtual_reality) 
and [Augmented Reality (AR)](https://en.wikipedia.org/wiki/Augmented_reality) 
which allows you to interact with virtual character from the comfort of your 
room. Who knows what future technology will bring us.
