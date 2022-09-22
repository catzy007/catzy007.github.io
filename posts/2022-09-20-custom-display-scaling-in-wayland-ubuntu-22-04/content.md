#### Custom Display Scaling in Wayland Ubuntu 22.04
_Tuesday, September 20, 2022_

Recently i upgrade my daily system from Ubuntu 20.04 to Ubuntu 22.04 which bring 
one notable update, change the display server protocol from X11 to Wayland this 
in theory should bring improvement in many things unfortunately in practice, a 
lot of things straight up not working like drag and drop, screen sharing and many 
more. But Why bother to change from perfectly running system to a newer one? Well 
X11 is a version of X.Org which is an implementation of X Window System display 
server. First release of X.Org (X10R3) released in 1986. At the time, X Window is 
used when you need separate server to handle input and render a graphical output 
to the client machine and maintaining such ancient system is hard at best, let alone 
adding new features to keep up with modern computing needs and that's when Wayland 
comes in.

One of the issues i encounter after upgrade is my custom display scaling is not 
working anymore, i previously using xrandr to set this which is not working after 
using Wayland. So how to set this in Ubuntu 22.04, first go to `Settings > Displays > 
Check Fractional Scaling`.

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-20-custom-display-scaling-in-wayland-ubuntu-22-04/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Before you proceed, divide your vertical resolution with resolution you want. 
For example mine is 900p and i wanted 1080p, divide 900/1080 = 0.83 (use 2 decimal 
places only).

Next, open terminal and type `sudo nano ~/.config/monitors.xml`

<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-09-20-custom-display-scaling-in-wayland-ubuntu-22-04/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Find the `<scale>` and set the value according to your previous calculation, then 
save and exit by pressing `Ctrl + X` then `Y` and `Enter` followed by a system reboot 
to apply the changes and that's it.