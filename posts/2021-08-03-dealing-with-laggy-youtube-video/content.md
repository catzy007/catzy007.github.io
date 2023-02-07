#### Dealing With Laggy YouTube Video
_Tuesday, August 3, 2021_

##### PC Troubleshooting 101 Series 

It's a nice and slow Sunday morning, and you suddenly got a call from your friend about 
ooh why suddenly laptop can't play YouTube properly, or it's laggy or something like that. 
Here is some reason why YouTube can't play smoothly and what you should do about it.

* First and in my case the most common issues is simply connection problem. Whether the ISP 
is having a maintenance or just random packet loss. The way to fix this is to fix the 
internet connection itself.

* Second is device doesn't have enough system memory (RAM). Sometimes older device only 
equipped with 2 GB of system memory and simply running the Operating System and Web 
Browser is enough to max it up. The way to check this out is to open op `Task Manager` 
by pressing `start` button and typing `task manager` in the search bar. Or by pressing 
`Ctrl + Alt + Del` and you should see task manager as an option, Then open the web 
browser, and watch the memory usage. If it's using more than 80% of the system memory 
then you have a problem. The solution is to upgrade the system memory to 4 or 8 GB or 
just change the device entirely.

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2021-08-03-dealing-with-laggy-youtube-video/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

* The third one is simply a Video Decoder in the device can't decode codec used by YouTube 
videos. So basically YouTube is trying to compress the video with smaller data size while 
retain as much detail as possible. To do that, they use computer algorithm few of them is 
[AVC, VP8, VP9, HEVC, and recently AV1](https://en.wikipedia.org/wiki/AV1). Because newer 
and more improved algorithm is developed, sometimes it doesn't compatible with your device 
hardware decoder, so the CPU used to handle all of that task instead with a slowdown. So 
one of the solution is to force YouTube to deliver video with older codec instead. I'm 
using h264ify [Chrome](https://chrome.google.com/webstore/detail/h264ify/aleakchihdccplidncghkekgioiakgal?hl=en) 
or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/h264ify/) Why this helps? 
Well most of the devices from at least 2010 shipped with GPU that capable to do h264/AVC 
hardware decoding. If somehow YouTube stop deliver video with this codec, then the only 
way to solve this is to change the device with newer one.

* Fourth is device driver is not properly installed. A driver is piece of software that 
present the hardware device to the Operating System and tell what your hardware device is 
Capable of and how to do it. It works like a translator that translate Operating System 
command to your hardware device, so it can do the job properly. The way to fix this is to 
install or update the specified driver properly.

* The fifth one is simply a computer virus. With a recent public interest in software-based 
currency or cryptocurrency which need a lot of computer calculation to get, some hacker 
simply make a computer virus that do a crypto mining using your computer computational power 
and earn the profit themselves. The symptoms of this attack is your computer CPU or GPU 
suddenly goes to 100% usage and your device is suddenly heat up. Your computer is getting 
warmer to the touch, the fan is suddenly ramped up to the maximum and your computer feels 
really slow to use. The way to fix this is to scan your system with proper Anti Virus or 
do a full Operating System Reinstallation instead.

That's it, hopefully you can watch YouTube flawlessly next time. Good luck, Have fun!