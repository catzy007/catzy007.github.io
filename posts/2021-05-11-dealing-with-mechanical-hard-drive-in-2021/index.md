### **Dealing With Mechanical Hard Drive in 2021**
_Tuesday, May 11, 2021_

#### **PC Troubleshooting 101 Series** 

Mechanical hard-drive or some people called spinning rust. Basically an old storage 
technology and first commercially shipped by IBM in 1956, and somehow it still used 
in modern day as storage media that offer great capacity per price while offering 
good enough reliability for most use case.

In business or specifically server space, they're still using hard drive as primary 
storage medium while using RAM and SSD as tiering storage or cache to accelerate 
computation for example [ZFS ARC](https://www.45drives.com/community/articles/zfs-caching/). 
In home use, people use hard drive as their main storage while using SSD to store Windows or 
games to improve load time and reduce system delay.

But how to deal with hard drive? Here's how.

<br>

#### **First, do a defragmentation**
In windows based PC with NTFS file system, you need to regularly do a defragmentation. 
If you use a PC for long time, you might do add and delete files from your hard drive 
regularly, and the problem is that over time, your files is physically scatter all over 
your hard drive platter and most of the time it will reduce the performance because each 
time you access a file, your hard drive head will seek out to entire disk to find and 
stitch a single file. SSD's and Linux EXT based don't come with these issues because SSD 
has internal system to dealt with that called TRIM and Garbage Collection, and Linux EXT 
has internal algorithm to dealt with that as well.

How to do a disk defragmentation
* First, right-click on your hard drive and select `Properties`.
* Then go to `Tools` and select `Optimize`.
<p align="center">
    <img src="./posts/2021-05-11-dealing-with-mechanical-hard-drive-in-2021/tools.png" height="400em" alt="img1">
</p>

* Next, select `Analyze` to see how much your disk fragmentation is.
<p align="center">
    <img src="./posts/2021-05-11-dealing-with-mechanical-hard-drive-in-2021/defrag2.png" height="400em" alt="img2">
</p>

* If your disk fragmentation is more than 3%, select `Optimize`.
> Before proceeding, you need to make sure your PC are plugged in into a steady power source. 
If somehow you lost power during a defragmentation process, your drive might get damaged and 
your files might be corrupted.

* After that, wait for the process to finished.
<p align="center">
    <img src="./posts/2021-05-11-dealing-with-mechanical-hard-drive-in-2021/defrag3.png" height="400em" alt="img3">
</p>

* During defragmentation process, your drive will be used of it's maximum capabilities, please 
leave it as is until the process is finished.
<p align="center">
    <img src="./posts/2021-05-11-dealing-with-mechanical-hard-drive-in-2021/defrag4.png" height="400em" alt="img4">
</p>

* I suggest you do defragmentation every 3 months. 

<br>

#### **Second, do a Check Disk**
If your PC recently lost power during a file copy, document writing, Windows update or 
something like that, there is a chance that some of your files get corrupted, or even 
you got a problem called [Bad Sector](https://en.wikipedia.org/wiki/Bad_sector). To fix 
that, you can try to Check disk.

* First, right-click on your hard drive and select `Properties`.
* Next, Then go to `Tools` and select `Check`.
<p align="center">
    <img src="./posts/2021-05-11-dealing-with-mechanical-hard-drive-in-2021/tools.png" height="400em" alt="img5">
</p>

* Then select `Scan drive`.
<p align="center">
    <img src="./posts/2021-05-11-dealing-with-mechanical-hard-drive-in-2021/scan1.png" height="175em" alt="img6">
</p>

> Before proceeding, you need to make sure your PC are plugged in into a steady power source. 

* If no errors found, the process will be fast and if error found, the program will try to fix it.
<p align="center">
    <img src="./posts/2021-05-11-dealing-with-mechanical-hard-drive-in-2021/scan2.png" height="200em" alt="img7">
</p>

<br>

#### **Third, do a Check Disk (Advanced)**
If second method still not fix the problem, you can try command line interface Chkdsk. 
This method require you to manually type a command and probably restart your PC if needed.

> Before proceeding, you need to make sure your PC are plugged in into a steady power source. 

* First, open `Start Menu` and type `CMD`.
* Then select `Run As Administrator`.
<p align="center">
    <img src="./posts/2021-05-11-dealing-with-mechanical-hard-drive-in-2021/chkdsk1.png" height="400em" alt="img8">
</p>

* Then type `chkdsk /F /R /X /I /B D:` notice `D:`, change that to your partition letter.
* If the drive you check is a system partition, it might ask you to restart your PC if it's not 
then it will continue as is.

```
/f
Fixes errors on the disk. The disk must be locked. If chkdsk cannot lock the drive, a message appears that asks you if you want to check the drive the next time you restart the computer.

/r
Locates bad sectors and recovers readable information. The disk must be locked. /r includes the functionality of /f, with the additional analysis of physical disk errors.

/x
Forces the volume to dismount first, if necessary. All open handles to the drive are invalidated. /x also includes the functionality of /f.

/i
Use with NTFS only. Performs a less vigorous check of index entries, which reduces the amount of time required to run chkdsk.

/b
Use with NTFS only. Clears the list of bad clusters on the volume and rescans all allocated and free clusters for errors. /b includes the functionality of /r. Use this parameter after imaging a volume to a new hard disk drive.
```

More information about `chkdsk`, check <https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk>