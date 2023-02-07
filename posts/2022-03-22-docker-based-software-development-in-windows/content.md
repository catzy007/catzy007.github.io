#### Docker Based Software Development in Windows
_Tuesday, March 22, 2022_

As much as we would like to use Linux on everything, there are an exception. 
For example a machine issued by your company. If it is a laptop then sure 
you might be able to set a Linux install and good to go, but what if you get 
a single PC with shared users, or one server with multiple Thin Client?.

At the time of writing, this tutorial is applicable to Windows 10 and 11.

<br><br>
The first thing you need is a proper text editor. Vscode is one of the best 
out there. The problem was it has Telemetry Data collection and send them 
to Microsoft servers. If you fine with that then it's good, if you don't 
then you can try Vscodium. Basically the same thing but without Telemetry.

You can download Vscode from [https://code.visualstudio.com](https://code.visualstudio.com/download) 
as the last time i tried with Microsoft store it throws error. As for Vscodium 
you can get it from [https://vscodium.com](https://vscodium.com/#install). 
Don't forget to properly select the right version. For normal computers, you 
need `64 bit` or `x64` with `exe` file type. Get the right version and install 
as usual.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/code2.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br><br>
Next thing you need is Git version control. If you do substantial amount of 
software development, you'll know the importance of git. Download from 
[https://git-scm.com](https://git-scm.com/downloads) then install as usual. 
You might need to set up your git credential before doing any actual works.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/git.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br><br>
The next step is installing Windows Subsystem for Linux (WSL) you may not need 
one, so this step is `OPTIONAL`. The reason i put this here is that it is easier 
to install WSL first, then followed by Docker installation. If you do this other 
way around, you can. But it requires more step which i didn't cover here.

To install WSL, first you need to open a `Start Menu`, then search for 
`Turn Windows features on or off`. Open it up, scroll down and look for 
`Windows Subsystem for Linux`. Put a `Checkmark` and `OK` to install. 
Then wait to finish, and your computer will ask for reboot.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/wsl1.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/wsl2.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
After successful WSL installation, you'll need to grab a Linux Kernel package 
for WSL you can get it from [https://aka.ms](https://aka.ms/wsl2kernel). Download and install 
as usual.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/wsl3.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
Next, you need to install Linux Distro you want to use. Here i'm using Ubuntu 20.04, 
but you can use whatever suit your needs. To do this, Open `Microsoft Store` 
then type Linux Distro you want to use, open it up and press `Get`. If everything 
goes well, you will get your chosen Linux Distro as a Start Menu Icon. Open it up, 
type a new `Username` and `Password`. Then do an update/upgrade if you need to.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/wsl4.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br><br>
The last step is to install Docker. You can get it from 
[https://hub.docker.com](https://hub.docker.com/editions/community/docker-ce-desktop-windows). 
Download and install as usual.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/docker1.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
After successful installation, Open the docker application, and accept the terms 
condition. Otherwise, the docker service will not run. 
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/docker2.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

<br><br>
Then verify if everything is working. Open or create project inside Vscode, 
Open terminal <code>Ctrl+Shift+`</code> then try `git status`, 
try `docker run hello-world`, then try `bash` if you decided to install WSL. 
If everything works out, great.
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/test1.png" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-03-22-docker-based-software-development-in-windows/test2.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>
