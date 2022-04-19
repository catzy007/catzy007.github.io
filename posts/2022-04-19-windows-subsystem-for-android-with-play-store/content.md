#### Windows Subsystem for Android With Play Store
_Tuesday, April 19, 2022_

This guide assumes you have Windows 11 installed with Supported Hardware like specific CPU, Memory, TPM, 
SSD and Latest OS Build Version. At the time of writing current build version is `22000.613`. To obtain 
this, you need to enroll Windows Insider Release Preview Channel and enable Windows telemetry data 
collection and all of that good stuff. Then get and install 
[Windows Subsystem for Android™ with Amazon Appstore](https://www.microsoft.com/en-us/p/windows-subsystem-for-android/9p3395vx91nr) 
assuming that everything is working then please continue to next step.

First, install and enable WSL. To do this, open start menu then type and open `Turn Windows features on or off`. Check on 
`Windows Subsystem for Linux` and `Virtual Machine Platform` if you have not done so.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then download and install WSL2 Kernel from [aka.ms](https://aka.ms/wsl2kernel) followed by installing WSL distro from MS Store. 
Here I'm using Ubuntu 20.04. For detailed information about this process, check my [Previous Post](./loader.html?post=2022-03-22-docker-based-software-development-in-windows)
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

