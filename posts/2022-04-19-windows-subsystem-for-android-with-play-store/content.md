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
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then download and install WSL2 Kernel from [aka.ms](https://aka.ms/wsl2kernel) followed by installing WSL distro from MS Store. 
Here I'm using Ubuntu 20.04. For detailed information about this process, check my [Previous Post](./loader.html?post=2022-03-22-docker-based-software-development-in-windows)
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Next open start menu, launch Ubuntu and do. In my case, i'm using drive D to store my files.
```
sudo apt update
sudo apt install git unzip lzip
cd /mnt/d
git clone https://github.com/WSA-Community/WSAGAScript
cd WSAGAScript
```
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/05.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Then go to <https://store.rg-adguard.net/> change `URL (Link)` to `ProductId` then fill 
with `9P3395VX91NR` and change `RP` to `Slow`. Look for the largest file which at the 
time of writing is `MicrosoftCorporationII.WindowsSubsystemForAndroid` at 1.21 GB Download 
it. In my case, i also need a `Microsoft.UI.Xaml` file don't forget to choose x64 version.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Then download and install [7zip](https://www.7-zip.org/download.html), and open 
`MicrosoftCorporationII.WindowsSubsystemForAndroid` using 7zip. Find the 2 largest file 
and extract file with x64 type. At the time of writing the file is `WsaPackage_2203.40000.1.0_x64_Release-Nightly.msix`
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/04.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Next open `WsaPackage_2203.40000.1.0_x64_Release-Nightly.msix` using 7zip and extract the 
content. In my case, i'm extracting the files to `D:\modified_wsa_package`.

Then, go to `D:\modified_wsa_package`, locate and delete `AppxMetadata` folder, then locate 
and delete `AppxBlockMap.xml`, `AppxSignature.p7x` and `\[Content_Types\].xml` files.

Then look and copy `product.img, system.img, system_ext.img, vendor.img` to 
`D:\WSAGAScript\#IMAGES`

Next, download GAPPS from [OpenGAPPS](https://opengapps.org/) set to `x86_64`, android `11.0` 
and `Pico` variant. And copy the freshly downloaded zip file to `D:\WSAGAScript\#GAPPS`

To patch the file, open your Ubuntu terminal and make sure you're in `/mnt/d/WSAGAScript` 
then do 
```
chmod +x *.sh
./extract_gapps_pico.sh
sudo ./extend_and_mount_images.sh
sudo ./apply.sh
sudo ./unmount_images.sh
```

If everything works out, go to `D:\WSAGAScript\#IMAGES` copy and replace the `img` file in 
`D:\modified_wsa_package`

Then go to `PC Settings` and enable `Developer Mode` in `Developer Settings` section, 
Uninstall previously installed WSA. Then open `PowerShell` as administrator and run 
`Add-AppxPackage -Register D:\modified_wsa_package\AppxManifest.xml` Wait for few moments 
if nothing goes wrong, you'll have WSA with Google Play installed.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/06.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

In my case, i need to manually install `Microsoft.UI.Xaml` and here is how. You can also 
use the same method to install other required files.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-04-19-windows-subsystem-for-android-with-play-store/07.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

<https://github.com/WSA-Community/WSAGAScript>

<https://www.xda-developers.com/how-to-install-google-play-store-windows-subsystem-for-android/>