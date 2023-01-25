#### Virtual Webcam Linux
_Tuesday, May 12, 2020_

Let just be honest, we all tired in the current pandemic, some people had endless work to do and 
some had nothing to do. But all share the common. You need to fill presence so your boss don't have 
to worry about their employee playing videogames all day instead of doing actual work. Or you just 
regular student who need to attend online classes. Either of you, we all share same problem. Yes 
how about Virtual webcam so your boss can see your pre recorded session in that nice suit. Even tho 
you actually playing video games. Let me introduce you to [akvcam](https://github.com/webcamoid/akvcam) 
and [webcamoid](https://webcamoid.github.io/).

First, Make `Pre Recorded Video` of you wearing nice suit. It should be `mp4` and at least `30fps`

Second, install some dependency (gcc cmake)
```
sudo apt install build-essential
```

<br>
Then, install akvcam virtual camera driver
```
git clone https://github.com/webcamoid/akvcam
cd akvcam/src
make
sudo make install
sudo depmod -a
```
And make sure the driver is installed
```
ls /lib/modules/$(uname -r)/extra/akvcam.ko*
```
if you got `No such file or directory`, try again

<br>
Next, go to [webcamoid website](https://webcamoid.github.io/) and download the appimage
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2020-05-12-virtual-webcam-linux/1.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Then go to download folder and do
```
chmod +x webcamoid*.AppImage
```
and run it by doing
```
./webcamoid*.AppImage
```

<br>
Then go to `Preferences` (thing with gear icon) and create new `Virtual Camera`
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2020-05-12-virtual-webcam-linux/2.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Next, go to `Configure Sources` and press the `Big + Green Button` and add your `Pre Recorded Video File`
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2020-05-12-virtual-webcam-linux/3.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2020-05-12-virtual-webcam-linux/4.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Then select your media in `Left Panel`
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2020-05-12-virtual-webcam-linux/5.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<br>
After all that, open video conference service (in my case, i'm using google meet)

Then allow all permission from `Audio` and `Webcam`

And go to config, and change camera source to virtual camera
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2020-05-12-virtual-webcam-linux/6.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2020-05-12-virtual-webcam-linux/7.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

> Modern problem require modern solution.