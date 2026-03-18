#### BIOS Modding Lenovo M900
_Wednesday, May 18, 2026_

Today's weather is nice, a clear blue sky with kind winds, plants blooming 
birds chirping as if gossiping about the storm that may come from across the 
hemisphere. What a good day to do a BIOS modding.

There are a few reasons to do a BIOS modding such as unlock turbo frequency 
of a CPU, unlock hidden menu, disable BIOS lock and so on. What I am interested 
is to add support for later gen CPUs. Lenovo M900 officially only support Skylake 
based CPUs, with BIOS modding it can support Kabylake, Coffeelake and Xeon derivative.

![img_md](./posts/2026-03-18-bios-modding-lenovo-m900/02.jpg)

**Preparations**

The hardware required for BIOS modding is 

* CH341 SPI programmer
* SOP8 Flash Chip Test Clip

To assemble the BIOS programmer, The red wire in the ribbon cable correspond to PIN-1. 
Connect ribbon cable to the blue board with red wire in the PIN-1. Next put the 
blue board in the SPI programmer with matching PIN-1.

![img_md](./posts/2026-03-18-bios-modding-lenovo-m900/01.jpg)

As for software required is

* Flashrom
* CoffeeTime 0.99
* UEFItool (optional)

For the device itself simply unplug all cable connected to the board, Take GPU, DISK, 
SSD, RAM and CMOS battery out.

**Backup**

First, locate the BIOS chip in the board, look for black square IC with 6 legs around CMOS 
battery take note of the marking and google them, if it comes out as 8 MB or more SPI Flash 
then it could be the right one.

Then put Flash Clip into the BIOS chip with RED wire or PIN-1 correspond to PIN-1 on the 
Flash chip, usually it is marked with a small indentation. Make sure the connection is solid 
and all the PIN is connected with the clip.

Next run flashrom if the connection is good it should output similar to this.

![img_md](./posts/2026-03-18-bios-modding-lenovo-m900/03.jpg)

Then make a backup of the BIOS, in my case I also need to specify the chip.

![img_md](./posts/2026-03-18-bios-modding-lenovo-m900/04.jpg)

Make at least 3 copy of the BIOS image, and run md5sum to make sure all copy is match. Save 
BIOS image somewhere safe, upload to Cloud storage if necessary.

![img_md](./posts/2026-03-18-bios-modding-lenovo-m900/05.jpg)

(Optional) Open BIOS image with UEFItool and verify that BIOS image is valid.

**BIOS Modding**

Then disable antivirus and Windows defender. Open CoffeeTime 0.99 and load newly backup 
BIOS image. In my case I also need to Uncheck NVRAM.

![img_md](./posts/2026-03-18-bios-modding-lenovo-m900/06.jpg)

In my case, I upgrade ME to version 11.8 Corporate and set it to Disabled, I also upgrade 
VBIOS and GOP alongside adding few patches and fix. As for Microcode I added Skylake, Kabylake, 
4 core and 6 core Coffeelake.

Next simply save the modded BIOS image.

**Writing BIOS**

Before writing the BIOS image, make sure that the connection is good. Then simply write the BIOS image 
make sure no error occurred, and the flash is verified.

![img_md](./posts/2026-03-18-bios-modding-lenovo-m900/07.jpg)

**Moment of truth**

After that put everything back together with original CPU installed. Then pray and hope it boots. 
In my case everything works normally until I swap the CPU with I3-7100 Kabylake it just output a 
black screen. After moment of debugging I came to the conclusion that either I held a dead chip 
or there is something missing in the BIOS itself. 

Then I remember that I also swap the ME from consumer to corporate version which should be able to 
boot Xeon based CPUs. I simply took the CPU from my server which is E3-1245v5 and lo and behold it 
boots. Next I grab E3-1240v5 for 14 USD which is I7 Skylake without the iGPU and that pretty much it.