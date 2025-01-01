#### Make Cluster Computer (Supercomputer) for parallel computing
_Wednesday, December 13, 2017_

##### **1. Introduction**
According to [Wikipedia](https://en.wikipedia.org/wiki/Computer_cluster), 
computer cluster is a set of loosely or tightly 
connected computers that work together so that, in many respects, they 
can be viewed as a single system. Unlike grid computers, computer 
clusters have each node set to perform the same task, controlled and 
scheduled by software.

A computer cluster may be a simple two-node system which just connects 
two personal computers, or may be a very fast supercomputer. A basic 
approach to building a cluster is that of a Beowulf cluster which may 
be built with a few personal computers to produce a cost-effective 
alternative to traditional high performance computing. An early project 
that showed the viability of the concept was the 133-node Stone 
Supercomputer. The developers used Linux, the Parallel Virtual Machine 
toolkit and the Message Passing Interface library to achieve high 
performance at a relatively low cost.

Cluster Computer i'm gonna build here has 4 nodes, each has 4 Core 
Cortex-A7@1.2Ghz, 512MB RAM, 8GB Memory, and running armbian with MPICH.

##### **2. Part List And Price**

![img](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/1.jpg)

::br

That's almost all part i used to make this cluster computer around 
114.96USD at December 17. The reason i choose Orangepi zero is very 
cheap price and has powerful enough for the price. i can go with 
raspberrypi but it's 35USD board and i have very little amount of money 
for this project. Reason Why i choose Class4 microsd is because i read 
on forum class 4 is enough so i gonna using that for price. next 
networking tools and other. Actually you aren't necessarily need router 
because you can turn your node0 to router but i am too lazy to do that 
so yeah. next power supply, i'm using 4 port USB Charger that can 
deliver around 2A for each port. Next i forget to put in the list is 
cooling. any fan and heatsink will work so yeah.

##### **3. Network Map**

![img](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/2.jpg)

::br

Here i have two connected via WDS. router0 connected to world wide web 
and control PC and. router1 connected to switch which is connected to 
all four nodes

##### **4. First Testing Phase**

`You can skip this part if you sure your board works` First thing i do is 
download armbian at <https://www.armbian.com/download/> then download etcher. 
next plug sdcard, and etch it. "If you're planning to use normal x86 intel amd 
computer then just download debian based OS'es and install it up". plug the 
sdcard to your board, plug a networking cable power it up and ssh to your board. 
test as many function as possible then do it to other untouched board.

##### **5. Creating Master Image**
If you haven't download armbian go download it at <https://www.armbian.com/download/>. 
next download etcher, etch it into your sdcard plug in into your board, 
power it up and ssh it. it'll ask you to change password and add second 
user so do that. Btw first time login username is root and password is 
1234 for more info read this <https://docs.armbian.com/>. then change 
your master image hostname by following the command below.

```
$ sudo nano /etc/hostname
$ sudo nano /etc/hosts
```

Change `orangepi` into any name you want. i'm renaming it into nodex. 
next do update-upgrade and install fortran.

```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install gfortran 
```

Next download mpich by following instruction below. here i'm using 
mpich version 3.2.1 which is the latest version at this time december 
2017 or you can download it at <http://www.mpich.org/downloads/> 
replace USERNAME with username you're using.

```
$ cd ~
$ mkdir mpich2
$ cd ~\mpich2
$ wget http://www.mpich.org/static/downloads/3.2.1/mpich-3.2.1.tar.gz
$ tar xfz mpich-3.2.1.tar.gz
$ sudo mkdir /home/rpimpi/
$ sudo mkdir /home/rpimpi/mpi-install
$ mkdir /home/USERNAME/mpi-build
$ cd /home/USERNAME/mpi-build
$ sudo /home/USERNAME/mpich2/mpich-3.2.1/configure -prefix=/home/rpimpi/mpi-install
$ sudo make
$ sudo make install
```

next we need to configure mpich manually so system can know where we 
install mpich

```
$ cd ~
$ nano .bashrc
```

next go to the last line of your `.bashrc` file, and put this script

```
PATH=$PATH:/home/rpimpi/mpi-install/bin
```

next save the file and try the command below

```
$ mpiexec -n 1 hostname
```

if the output is your hostname then it's good to go. actually i'm going 
to install mpi4py too but my test show that i'm getting hardware level 
error yo yeah i think next time will be better. You can also install 
MPICH using apt `sudo apt install mpich` instead of manually compile one.

##### **Next step is Installing [ATLAS](http://www.vesperix.com/arm/atlas-arm/)**
`Installing ATLAS is highly optional, i'm using it solely to benchmark my system.`

![img_lg](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/3.jpg)

::br

first we need to disable CPU throttling. if you don't know what i'm 
talking about, check <https://en.wikipedia.org/wiki/Dynamic_frequency_scaling>. 
now copy script below and run it as sudo... basically this script change 
all core scaling governor from ondemand to performance.

```
#!/bin/sh
for CPUFREQ in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor;
 do
  [ -f $CPUFREQ ] || continue
  echo -n performance > $CPUFREQ
 done 
```

if you want that settings permanent, do

```
$ sudo apt-get install cpufrequtils
$ sudo nano /etc/default/cpufrequtils 

GOVERNOR="performance"

$ sudo update-rc.d ondemand disable
```

then reboot and check with

```
$ cpufreq-info 
```

then download atlas [from](https://sourceforge.net/projects/math-atlas/files/Stable/) 
here i'm using version 3.10.3 which is the latest at december 2017

```
$ wget  https://ncu.dl.sourceforge.net/project/math-atlas/Stable/3.10.3/atlas3.10.3.tar.bz2
$ tar -vxjf atlas3.10.3.tar.bz2
$ cd ATLAS
$ mkdir test; cd test
$ ../configure -Si archdef 0
$ make build
$ make check
```

`if you get "unable to resolve host address" try sudo dhclient eth0 
change eth0 with interface you're using.`

##### **6. Copying master image and flash it into another card**
In this part, We're going to copy disk you created in `part 5` so you 
don't have to repeat all step and wasting your resources. ok first we 
need software. if you're windows user, you can use `win32diskimager`. if 
you're linux master, you can use dd command, if you're lazy people like 
me and you're using ubuntu based OS'es you can use Disk Manager of if 
your system has no disk manager, use `sudo apt-get install gnome-disk-utility`

First plug your sdcard into sdcard reader and plug it into your computer. 
next open `Disks`

![img](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/4.jpg)

::br

Then click on dropdown menu and clik `"Create Disk Image"`

![img](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/5.jpg)

::br

Next change file name and directory "if you want", and start creating. 
type your password if system ask it. and take a coffee or 10.

![img](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/6.jpg)

::br

And it's done simple right. next flashing image to your another card. 
just use `etcher` or `win32diskimager` and your'e done. oh yeah don't 
forget to put label on your disk so you won't forget which goes where.

##### **7. Setting up each node**
First, Change your node hostname by following the command below.

```
$ sudo nano /etc/hostname
$ sudo nano /etc/hosts
```

if you're following steps above, remember nodex? change that to 
`node0 node1 node2 node3 etc...` next set IP address to static IP. 
you know it's easier for mpich to talk using static IP.

```
$ sudo nano /etc/network/interfaces
```

change `iface eth0 inet dynamic` to `iface eth0 inet static` next 
change or add address according to your network configuration. 
for example mine 

![img_lg](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/7.jpg)

::br

change address according to count of your node 

example. 192.168.1.250 then 192.168.1.251 192.168.1.252 192.168.1.253 and so on. 
for more information about network read "Computer Networks An Open Source Approach" 
by McGraw-Hill. oh yeah one more thing. if you don't want to use google 
dns "8.8.8.8 - 8.8.4.4" then use your router gateway address. usually 
admin ip address.

##### **8. Setting up master node**
here i choose my node0 as my master node. next we need to set ssh so 
master node can communicate with another node without problem.

```
$ cd~
$ ssh-keygen
```

then just pres enter enter enter. then

```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub ANOTHER_NODE_IP
```

replace `ANOTHER_NODE_IP` with all of your node ip address one by 
one. here i have `192.168.1.251` `192.168.1.252` `192.168.1.253` 
so i just run

```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.1.251
$ ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.1.252
$ ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.1.253 
```

next, create some kind of list of your network. to do that 

```
$ cd ~
$ nano hostfile 
```

then type all your node IP address followed by count of core you have. 
for example i have 4 node and 4 core `IPADDR:CORE`

```
192.168.1.250:4
192.168.1.251:4
192.168.1.252:4
192.168.1.253:4 
```

and master node is ready to rock

##### **9. Setting-UP NFS Server**
`ON MASTER NODE` 

first, install nfs server
```
$ sudo apt-get install nfs-kernel-server
$ cd ~
$ mkdir TEST
```

next, configure nfs server
```
$ sudo nano /etc/exports
```

fill with
```
/home/USERNAME/TEST *(rw,sync,no_root_squash,no_subtree_check)
```

then restart the service
```
$ sudo exportfs -a
$ sudo service nfs-kernel-server restart
```

`ON WORKER NODE`

first, install nfs client
```
$ sudo apt-get install nfs-common
$ mkdir TEST
$ sudo mount -t nfs 192.168.1.250:/home/USERNAME/TEST ~/TEST
```

to make permanent change
```
$ sudo nano /etc/fstab
```

fill with
```
192.168.1.250:/home/USERNAME/TEST /home/USERNAME/TEST nfs
```

do it to all remaining node

##### **10. More Testing Phase**

first, make sure you're home 
```
$ cd ~ 
```

next we need to clone this repository <https://github.com/wesleykendall/mpitutorial>
```
$ git clone https://github.com/wesleykendall/mpitutorial
```

if you haven't install git, do 
```
$ sudo apt-get install git
```

next compile hello world program
```
$ cd ~/mpitutorial/tutorials/mpi-hello-world/code
$ mpicc -o mpi_hello_world mpi_hello_world.c
```

next run it, and it's done
```
$ mpiexec -f hosfile -n 16 ~/mpitutorial/tutorials/mpi-hello-world/code/mpi_hello_world
```

![img](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/8.jpg)

::br

`it should look something like that`

##### **11. Some Sauce**
Lin, Y., Hwang, R., & Baker, F. (2012). Computer networks: an open source approach. New York: McGraw-Hill.

<https://askubuntu.com/questions/19901/how-to-make-a-disk-image-and-restore-from-it-later>

<https://www.swiftstack.com/docs/install/configure_networking.html>

<https://askubuntu.com/questions/523640/how-i-can-disable-cpu-frequency-scaling-and-set-the-system-to-performance>

<http://www.instructables.com/id/How-to-Make-a-Raspberry-Pi-SuperComputer/>

<http://mpitutorial.com/tutorials/mpi-hello-world/>

<http://khmel.org/?p=527>

<http://www.vesperix.com/arm/atlas-arm/>

<http://linux-sunxi.org/Benchmarks>

<https://askubuntu.com/questions/894665/add-startup-service-on-16-04>

<https://www.novaspirit.com/2017/10/19/crypto-mining-sbc/>

<http://mpitutorial.com/tutorials/running-an-mpi-cluster-within-a-lan/>

##### **12. Other Stuff**

![img](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/9.jpg)

::br

`It's my cluster, as you can see it's cooled by huge 220VAC fan`

##### **13. UPDATE 30.03.18**

![img](./posts/2017-12-13-make-cluster-computer-supercomputer-for-parallel-computing/10.jpg)

::br

Today after months not touching this project, finally i'm getting 
around 3.7GigaFLOPS of computational power that's good enough. but 
yeah current rank 1 on TOP500 "sunway" has 120+PetaFLOPS... 
and that's crazy.

tune `HPL.dat` file

<http://www.advancedclustering.com/act_kb/tune-hpl-dat-file/>

#### **Some other sauce**
<https://www.howtoforge.com/tutorial/hpl-high-performance-linpack-benchmark-raspberry-pi/>
