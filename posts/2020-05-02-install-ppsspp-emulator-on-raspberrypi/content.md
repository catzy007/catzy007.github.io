#### Install PPSSPP Emulator on Raspberrypi
_Saturday, May 2, 2020_

Due to the current pandemic across the globe, many people staying at home. 
Some had less free time than usual like medical staff take care of patient, 
programmer who need to make website to educate public ASAP, scientist who 
trying to find cure, etc. But for a lot of us, we got lot of free time than 
usual. So why not try something new.

Here i'm using
* Raspberrypi 3 B+ with 1GB ram and 1.2Ghz CPU, GPU memmory set to 256MB
* 16GB microsd card
* True 2.5A Power supply

Now let's begin!
* First, clone ppsspp repository (this may take a while, take coffee or 10)

    ```
    git clone --recurse-submodules https://github.com/hrydgard/ppsspp.git
    ```
* Then install dependency needed to compile ppsspp

    ```
    sudo apt install build-essential cmake libgl1-mesa-dev libsdl2-dev libvulkan-dev
    ```
* Next, compile ppsspp for rpi

    ```
    cd ppsspp
    ./b.sh --rpi
    ```
* This is optional and will increase your rpi temperature, but can improve performance

    ```
    echo 5 | sudo tee /sys/devices/system/cpu/cpufreq/ondemand/up_threshold
    ```
* Last, copy your legally owned PSP game

All done! you can play psp game on rpi3 with some tweak ofc. Here i'm playing 
`Basara Chronicle Heroes` using lowest settings (1x resolution, nearest, AA off) 
and frameskip set to auto.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2020-05-02-install-ppsspp-emulator-on-raspberrypi/1.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>