#### Updating Proxmox 6 to 7
_Friday, June 17, 2022_

First do a simple update and upgrade to make sure you have latest package (at the time of writing, it is Proxmox 6.4).
```
apt update
apt dist-upgrade
```
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-06-17-updating-proxmox-6-to-7/00.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Next, check using built-in tools. Open terminal and type
```
pve6to7
```
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-06-17-updating-proxmox-6-to-7/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

In my case, i need to change `lxc.cgroup` in one of my container to `lxc.cgroup2`. Also i need to change 
debian security apt source list from `buster/updates` to `bullseye-security`. 
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-06-17-updating-proxmox-6-to-7/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Then go to apt source list directory and change apt sources from buster to bullseye. 
```
sed -i 's/buster\/updates/bullseye-security/g;s/buster/bullseye/g' /etc/apt/sources.list
```
then change proxmox source list.
```
echo "deb https://enterprise.proxmox.com/debian/pve bullseye pve-enterprise" > /etc/apt/sources.list.d/pve-enterprise.list
```
if you're using non-subscription repo, do
```
sed -i -e 's/buster/bullseye/g' /etc/apt/sources.list.d/pve-install-repo.list 
```
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-06-17-updating-proxmox-6-to-7/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Assuming nothing goes wrong, do update and dist-upgrade.
```
apt update
apt dist-upgrade
```
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-06-17-updating-proxmox-6-to-7/04.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Sometimes a promopt will shows up and ask you to accept a term or select a configuration.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-06-17-updating-proxmox-6-to-7/05.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

Assuming everything works properly, your system should boot into proxmox 7.2 and that's it.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-06-17-updating-proxmox-6-to-7/06.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

In my case, i need to change `lxc.cgroup` in one of my container to `lxc.cgroup2`. Power off the container 
and edit the config file manually.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-06-17-updating-proxmox-6-to-7/07.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

[Source Proxmox Wiki Upgrade from 6.x to 7.0](https://pve.proxmox.com/wiki/Upgrade_from_6.x_to_7.0)