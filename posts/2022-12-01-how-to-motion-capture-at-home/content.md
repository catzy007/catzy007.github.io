#### How To Motion Capture at Home
_Thursday, December 1, 2022_

First, download and install `KinectSDK-v1.8-Setup.exe` and optionally `KinectDeveloperToolkit-v1.8.0-Setup.exe`.
* [Kinect for Windows SDK v1.8](https://www.microsoft.com/en-us/download/details.aspx?id=40278)
* [Kinect for Windows Developer Toolkit v1.8 (Optional)](https://www.microsoft.com/en-us/download/details.aspx?id=40276)
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then download and install Microsoft Visual C++ 2008 Redistributable `vcredist_x86.exe` and `vcredist_x64.exe`.
* [Microsoft Visual C++ 2008 Service Pack 1 Redistributable Package](https://www.microsoft.com/en-us/download/details.aspx?id=26368)
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Next, download and extract `32 bit` version of MikuMikuDance (MMD). At the time of writing, the latest version 
is `MikuMikuDanceE_v932.zip` and make sure it is working.
* [MikuMikuDance Download](https://learnmmd.com/downloads/)
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/03.png" alt="img">
		</div>
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/04.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Next, download `MoggNUI` and extract `ja, DxOpenNi.dll, MoggNuiConfig.dll` to the `Data` directory of MMD and 
then `launch MMD > motion capture(K) > Kinect` and make sure it is working. 
* [MoggNUI Developer Site](https://sites.google.com/site/moggproject/)
* [MoggNUI Download](https://drive.google.com/drive/folders/1zMSmDRbGHNUWNsaD8druoeod-z6HgbZt)
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/05.png" alt="img">
		</div>
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/06.png" alt="img">
		</div>
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/07.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Then, download MikuMikuCapture (MMC) and extract the content to the same directory as MMD. At the time of writing, 
the latest version is `MikuMikuCapture_v202_6_en.zip`.
* [MikuMikuCapture Download](https://sites.google.com/site/mikumikucapturee/download)
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/08.png" alt="img">
		</div>
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/09.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Next, launch `MMCapture.exe` then go to `Settings > Capture Settings` and change Kinect Device Library to 
`MMCResource\Plugins\DxMsNui4Win.dll`
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/10.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then load your model and go to `Capture > Press Kinect Icon` to start Motion Capture and press `X` to Stop.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/11.png" alt="img">
		</div>
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-12-01-how-to-motion-capture-at-home/12.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Translated and adapted from [wpteq.org - Kinect v1をWindows10で使う方法+MMDで使う方法。](https://wpteq.org/windows/windows10-manual/post-22791)