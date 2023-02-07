#### Disabling Intel ME (Management Engine)
#### *Sunday, November 4, 2018*

> `This post originally dated at 29 September 2017 but delayed due to lack of knowledge and hardware to perform some operations. After a year of delay, i'm back to bring this again.`

First, What is Intel ME? Based on Wikipedia, Intel ME or sometimes called `Intel Active Management Technology (AMT)` is hardware and firmware technology for remote out-of-band management of personal computers, in order to monitor, maintain, update, upgrade, and repair them. Out-of-band (OOB) or hardware-based management is different from software-based (or in-band) management and software management agents. 

Why disable Intel ME if the function is very critical? Well because Intel ME has many vulnerabilities. One of the most critical vulnerabilities is `Silent Bob is Silent`. The vulnerability was described as *giving remote attackers : `"full control of affected machines, including the ability to read and modify everything. It can be used to install persistent malware (possibly in firmware), and read and modify any data."` — Tatu Ylönen, ssh.com*. The problem is that Intel ME mostly sit in the firmware or BIOS and the only way to update Intel ME is to update the BIOS. Now, when the last time you get a BIOS update?, Also you basically rely on Intel magical black box and who knows what data Intel ME collects and how secure it is.

But i have other reason too. I want to check if intel ME has responsibility to lock CPU upgrade in mobile sandy bridge device. I have Lenovo G480 with Pentium B960 installed, when i look up the motherboard it has `G2 socket` and i can remove the processor easily replace it with other "compatible" model (in my case i'm using Intel i5-2520M). The problem is after 30 mins it just shut down with no warning. When i check intel me status, something seems wrong, then i come with this idea, what if partially disable Intel ME removes the 30 mins shutdown problem.

There are existed tools to remove or partially disable Intel ME. But the process itself is relatively difficult and risky for most people. The tools itself called [Me Cleaner](https://github.com/corna/me_cleaner). Based on this tutorial about [How to apply Me Cleaner](https://github.com/corna/me_cleaner/wiki/How-to-apply-me_cleaner), Me Cleaner can be applied using 2 method. The first method is using external flasher. Basically the procedure is to take your BIOS chip, put it on BIOS programmer, read and copy all of it's content, apply me cleaner, and then put the firmware back. Taking BIOS chip need specialized tools like Hot-air soldering gun, solder flux, tweezers, magnifier and super steady hands, Also BIOS chip can be varied from one computer to another. Using BIOS flasher is very recommended, but the risk is still relatively high. The second method is internal flashing. Some computer very difficult or almost impossible to flash by internal flashing, so the first method is the method that i'm using here.

The way i'm performing this is instead of using Hot-air soldering gun to pull out the BIOS chip, i'm using Single-Board Computer and programmer clip as media to flash BIOS chip (SPI Flash Chip). The tools i use is Raspberry Pi 3, SOP-8 BIOS clipper, some jumper wire and that's it.

<br>
#### Finding BIOS ROM Chip and wire everything

First disassemble your laptop/pc unplug power, ram, BIOS battery, basically unplug everything... then find the BIOS chip by inspecting your motherboard. Mine is cFeon Q64-104HIP

<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2018-11-04-disabling-intel-me/1.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

Next you need to find datasheet for it (just google the chip name + datasheet) ex. "Q64-104HIP datasheet" then look at the pinout. This will be wiring guide for next step! You can read more info too. Different manufacture may have different configurations.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2018-11-04-disabling-intel-me/2.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

Then wire everything according to the schematics provided by datasheet, followed by clipping SOP-8 clipper to bios chip.
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2018-11-04-disabling-intel-me/3.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
<div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
        <div class="img-thumbnail">
            <img class="img-fluid" src="./posts/2018-11-04-disabling-intel-me/4.jpg" alt="img">
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>
 
My setup. All pin connected to RPI GPIO, WP NC VCC connected to breadboard into 3.3V RPI GPIO

<br>
#### Enable SPI pin and download some tools
next enable SPI pin on [Raspberry Pi](https://learn.sparkfun.com/tutorials/raspberry-pi-spi-and-i2c-tutorial/all)

then download `flashrom`

```
sudo apt-get install build-essential pciutils usbutils libpci-dev libusb-dev libftdi1 libftdi-dev zlib1g-dev subversion libusb-1.0-0-dev
sudo apt-get install flashrom
```

then make working directory and download some tools
```
cd ~
mkdir INTELME
cd INTELME
wget https://github.com/corna/me_cleaner/archive/v1.2.zip
unzip *.zip
```

<br>
#### Copy image to RPI
then copy the image files to RPI using `flashrom`
```
flashrom -p linux_spi:dev=/dev/spidev0.0,spispeed=10000 -c EN25Q64 -r bios1.bin
flashrom -p linux_spi:dev=/dev/spidev0.0,spispeed=10000 -c EN25Q64 -r bios2.bin
flashrom -p linux_spi:dev=/dev/spidev0.0,spispeed=10000 -c EN25Q64 -r bios3.bin
```

the output should look like this
```
$ flashrom -p linux_spi:dev=/dev/spidev0.0,spispeed=10000 -c EN25Q64 -r bios1.bin
flashrom v0.9.9-r1954 on Linux 4.14.71-v7+ (armv7l)
flashrom is free software, get the source code at https://flashrom.org

Calibrating delay loop... OK.
Found Eon flash chip "EN25Q64" (8192 kB, SPI) on linux_spi.
Reading flash... done.
```

*EN25Q64 found in datasheet of my bios chip

<br>
#### Check integrity of all image
Next check all images if they're match

`md5sum *.bin`

the output should same across all readings
```
4d6b41f26efafecb4f4ba829a899fae4  bios1.bin
4d6b41f26efafecb4f4ba829a899fae4  bios2.bin
4d6b41f26efafecb4f4ba829a899fae4  bios3.bin
```
*if md5sum didn't match, check your wiring and repeat all steps!*

<br>
#### Check if image is valid
Next check if image is valid using `ifdtool`
```
git clone --depth=1 https://review.coreboot.org/p/coreboot
cd coreboot/util/ifdtool
make
./ifdtool -d ../../../bios1.bin
```

The output should look similar to this
```
File ../../../bios1.bin is 8388608 bytes
ICH Revision: 6 series Cougar Point
FLMAP0:    0x02040003
  NR:      2
  FRBA:    0x40
  NC:      1
  FCBA:    0x30
FLMAP1:    0x12100206
  ISL:     0x12
  FPSBA:   0x100
  NM:      2
  FMBA:    0x60
FLMAP2:    0x00210120
  PSL:     0x2101
  FMSBA:   0x200
FLUMAP1:   0x000008df
  Intel ME VSCC Table Length (VTL):        8
  Intel ME VSCC Table Base Address (VTBA): 0x000df0

ME VSCC table:
  JID0:  0x001740ef
    SPI Componend Vendor ID:            0xef
    SPI Componend Device ID 0:          0x40
    SPI Componend Device ID 1:          0x17
  VSCC0: 0x20052005
    Lower Erase Opcode:                 0x20
    Lower Write Enable on Write Status: 0x50
    Lower Write Status Required:        No
    Lower Write Granularity:            64 bytes
    Lower Block / Sector Erase Size:    4KB
    Upper Erase Opcode:                 0x20
    Upper Write Enable on Write Status: 0x50
    Upper Write Status Required:        No
    Upper Write Granularity:            64 bytes
    Upper Block / Sector Erase Size:    4KB
  JID1:  0x001720c2
    SPI Componend Vendor ID:            0xc2
    SPI Componend Device ID 0:          0x20
    SPI Componend Device ID 1:          0x17
  VSCC1: 0x20052005
    Lower Erase Opcode:                 0x20
    Lower Write Enable on Write Status: 0x50
    Lower Write Status Required:        No
    Lower Write Granularity:            64 bytes
    Lower Block / Sector Erase Size:    4KB
    Upper Erase Opcode:                 0x20
    Upper Write Enable on Write Status: 0x50
    Upper Write Status Required:        No
    Upper Write Granularity:            64 bytes
    Upper Block / Sector Erase Size:    4KB
  JID2:  0x0017301c
    SPI Componend Vendor ID:            0x1c
    SPI Componend Device ID 0:          0x30
    SPI Componend Device ID 1:          0x17
  VSCC2: 0x20052005
    Lower Erase Opcode:                 0x20
    Lower Write Enable on Write Status: 0x50
    Lower Write Status Required:        No
    Lower Write Granularity:            64 bytes
    Lower Block / Sector Erase Size:    4KB
    Upper Erase Opcode:                 0x20
    Upper Write Enable on Write Status: 0x50
    Upper Write Status Required:        No
    Upper Write Granularity:            64 bytes
    Upper Block / Sector Erase Size:    4KB
  JID3:  0x0017ba20
    SPI Componend Vendor ID:            0x20
    SPI Componend Device ID 0:          0xba
    SPI Componend Device ID 1:          0x17
  VSCC3: 0x20052005
    Lower Erase Opcode:                 0x20
    Lower Write Enable on Write Status: 0x50
    Lower Write Status Required:        No
    Lower Write Granularity:            64 bytes
    Lower Block / Sector Erase Size:    4KB
    Upper Erase Opcode:                 0x20
    Upper Write Enable on Write Status: 0x50
    Upper Write Status Required:        No
    Upper Write Granularity:            64 bytes
    Upper Block / Sector Erase Size:    4KB

OEM Section:
00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
10: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
20: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
30: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff

Found Region Section
FLREG0:    0x00000000
  Flash Region 0 (Flash Descriptor): 00000000 - 00000fff 
FLREG1:    0x07ff0400
  Flash Region 1 (BIOS): 00400000 - 007fffff 
FLREG2:    0x03ff0001
  Flash Region 2 (Intel ME): 00001000 - 003fffff 
FLREG3:    0x00001fff
  Flash Region 3 (GbE): 00fff000 - 00000fff (unused)
FLREG4:    0x00001fff
  Flash Region 4 (Platform Data): 00fff000 - 00000fff (unused)

Found Component Section
FLCOMP     0x09300024
  Dual Output Fast Read Support:       not supported
  Read ID/Read Status Clock Frequency: 33MHz
  Write/Erase Clock Frequency:         33MHz
  Fast Read Clock Frequency:           33MHz
  Fast Read Support:                   supported
  Read Clock Frequency:                20MHz
  Component 2 Density:                 8MB
  Component 1 Density:                 8MB
FLILL      0x00000000
  Invalid Instruction 3: 0x00
  Invalid Instruction 2: 0x00
  Invalid Instruction 1: 0x00
  Invalid Instruction 0: 0x00
FLPB       0x00000000
  Flash Partition Boundary Address: 0x000000

Found PCH Strap Section
PCHSTRP0:  0x0820d682
PCHSTRP1:  0x0000010f
PCHSTRP2:  0x00560000
PCHSTRP3:  0x00000000
PCHSTRP4:  0x00c8e000
PCHSTRP5:  0x00000000
PCHSTRP6:  0x00000000
PCHSTRP7:  0x00000000
PCHSTRP8:  0x00000000
PCHSTRP9:  0x30004580
PCHSTRP10: 0x00410044
PCHSTRP11: 0x95000097
PCHSTRP12: 0x00000000
PCHSTRP13: 0x00000000
PCHSTRP14: 0x00000000
PCHSTRP15: 0x0000033e
PCHSTRP16: 0x00000000
PCHSTRP17: 0x00000002
AltMeDisable bit is not set

Found Master Section
FLMSTR1:   0x0a0b0000 (Host CPU/BIOS)
  Platform Data Region Write Access: disabled
  GbE Region Write Access:           enabled
  Intel ME Region Write Access:      disabled
  Host CPU/BIOS Region Write Access: enabled
  Flash Descriptor Write Access:     disabled
  Platform Data Region Read Access:  disabled
  GbE Region Read Access:            enabled
  Intel ME Region Read Access:       disabled
  Host CPU/BIOS Region Read Access:  enabled
  Flash Descriptor Read Access:      enabled
  Requester ID:                      0x0000

FLMSTR2:   0x0c0d0000 (Intel ME)
  Platform Data Region Write Access: disabled
  GbE Region Write Access:           enabled
  Intel ME Region Write Access:      enabled
  Host CPU/BIOS Region Write Access: disabled
  Flash Descriptor Write Access:     disabled
  Platform Data Region Read Access:  disabled
  GbE Region Read Access:            enabled
  Intel ME Region Read Access:       enabled
  Host CPU/BIOS Region Read Access:  disabled
  Flash Descriptor Read Access:      enabled
  Requester ID:                      0x0000

FLMSTR3:   0x08080118 (GbE)
  Platform Data Region Write Access: disabled
  GbE Region Write Access:           enabled
  Intel ME Region Write Access:      disabled
  Host CPU/BIOS Region Write Access: disabled
  Flash Descriptor Write Access:     disabled
  Platform Data Region Read Access:  disabled
  GbE Region Read Access:            enabled
  Intel ME Region Read Access:       disabled
  Host CPU/BIOS Region Read Access:  disabled
  Flash Descriptor Read Access:      disabled
  Requester ID:                      0x0118

Found Processor Strap Section
????:      0x00000000
????:      0xffffffff
????:      0xffffffff
????:      0xffffffff
????:      0xffffffff
????:      0xffffffff
????:      0xffffffff
????:      0xffffffff
```

<br>
#### Check if image file can be analyzed by me_cleaner
```
cd ../../../
cd me_cleaner-1.2/
./me_cleaner.py -c ../bios1.bin
```
the output will look like this
```
Full image detected
The ME/TXE region goes from 0x1000 to 0x400000
Found FPT header at 0x1010
Found 15 partition(s)
Found FTPR header: FTPR partition spans from 0x93000 to 0x108000
ME/TXE firmware version 8.0.4.1441
Public key match: Intel ME, firmware versions 7.x.x.x, 8.x.x.x
The AltMeDisable bit is NOT SET
Checking the FTPR RSA signature... VALID
```

<br>
#### Apply Me Cleaner
```
./me_cleaner.py -S -O ../cleanbios.bin ../bios1.bin
```
```
Full image detected
The ME/TXE region goes from 0x1000 to 0x400000
Found FPT header at 0x1010
Found 15 partition(s)
Found FTPR header: FTPR partition spans from 0x93000 to 0x108000
ME/TXE firmware version 8.0.4.1441
Public key match: Intel ME, firmware versions 7.x.x.x, 8.x.x.x
The AltMeDisable bit is NOT SET
Reading partitions list...
 ???? (0x000003c0 - 0x000000400, 0x00000040 total bytes): removed
 FOVD (0x00000400 - 0x000001000, 0x00000c00 total bytes): removed
 MDES (0x00001000 - 0x000002000, 0x00001000 total bytes): removed
 FCRS (0x00002000 - 0x000003000, 0x00001000 total bytes): removed
 EFFS (0x00003000 - 0x00004b000, 0x00048000 total bytes): removed
 NVCL (NVRAM partition, no data, 0x00010511 total bytes): nothing to remove
 NVCP (NVRAM partition, no data, 0x0000a518 total bytes): nothing to remove
 NVJC (NVRAM partition, no data, 0x00005000 total bytes): nothing to remove
 NVKR (NVRAM partition, no data, 0x0001151a total bytes): nothing to remove
 NVSH (NVRAM partition, no data, 0x00007609 total bytes): nothing to remove
 NVTD (NVRAM partition, no data, 0x00001eac total bytes): nothing to remove
 GLUT (0x0004b000 - 0x00004d000, 0x00002000 total bytes): removed
 MDMV (0x0004d000 - 0x000093000, 0x00046000 total bytes): removed
 FTPR (0x00093000 - 0x000108000, 0x00075000 total bytes): NOT removed
 NFTP (0x00108000 - 0x00017d000, 0x00075000 total bytes): removed
Removing partition entries in FPT...
Removing EFFS presence flag...
Correcting checksum (0x4b)...
Reading FTPR modules list...
 UPDATE           (LZMA   , 0x0de8fa - 0x0de9fd       ): removed
 ROMP             (Huffman, fragmented data, ~2 KiB   ): NOT removed, essential
 BUP              (Huffman, fragmented data, ~54 KiB  ): NOT removed, essential
 KERNEL           (Huffman, fragmented data, ~135 KiB ): removed
 POLICY           (Huffman, fragmented data, ~89 KiB  ): removed
 HOSTCOMM         (LZMA   , 0x0de9fd - 0x0e56f4       ): removed
 RSA              (LZMA   , 0x0e56f4 - 0x0ea967       ): removed
 CLS              (LZMA   , 0x0ea967 - 0x0f009f       ): removed
 TDT              (LZMA   , 0x0f009f - 0x0f6783       ): removed
 FTCS             (Huffman, fragmented data, ~18 KiB  ): removed
 ClsPriv          (LZMA   , 0x0f6783 - 0x0f6b64       ): removed
 SESSMGR          (LZMA   , 0x0f6b64 - 0x105400       ): removed
The ME minimum size should be 696320 bytes (0xaa000 bytes)
The ME region can be reduced up to:
 00001000:000aafff me
Setting the AltMeDisable bit in PCHSTRP10 to disable Intel ME...
Checking the FTPR RSA signature... VALID
Done! Good luck!
```

<br>
#### Put modified bios image back
```
cd ../ 
flashrom -p linux_spi:dev=/dev/spidev0.0,spispeed=10000 -c EN25Q64 -w cleanbios.bin
```
```
flashrom v0.9.9-r1954 on Linux 4.14.71-v7+ (armv7l)
flashrom is free software, get the source code at https://flashrom.org

Calibrating delay loop... OK.
Found Eon flash chip "EN25Q64" (8192 kB, SPI) on linux_spi.
Reading old flash chip contents... done.
Erasing and writing flash chip... Erase/write done.
Verifying flash... VERIFIED.
```
Just like that now you're successfully clean intel me.

This before intel me was cleaned
```
Intel(R) MEInfo Version: 8.1.56.1541
Copyright(C) 2005 - 2014, Intel Corporation. All rights reserved.

GBE Region does not exist.
Intel(R) ME code versions:

BIOS Version:                           62CN97WW
MEBx Version:                           0.0.0.0000
Gbe Version:                            Unknown
VendorID:                               8086
PCH Version:                            4
FW Version:                             8.0.4.1441
UNS Version:                            Not Available
LMS Version:                            Not Available
MEI Driver Version:                     11.0.0.1157
Wireless Hardware Version:              Not Available
Wireless Driver Version:                Not Available

FW Capabilities:                        0x01101C60

    Intel(R) Anti-Theft Technology - PRESENT/ENABLED
    Intel(R) Capability Licensing Service - PRESENT/ENABLED
    Protect Audio Video Path - PRESENT/ENABLED
    Intel(R) Dynamic Application Loader - PRESENT/ENABLED

CPU Upgrade State:                      Upgrade Capable
Cryptography Support:                   Disabled
Last ME reset reason:                   Power up
Local FWUpdate:                         Enabled
BIOS Config Lock:                       Enabled
Host Read Access to ME:                 Disabled
Host Write Access to ME:                Disabled
SPI Flash ID #1:                        1C3017
SPI Flash ID VSCC #1:                   20052005
SPI Flash BIOS VSCC:                    20052005
BIOS boot State:                        Pre Boot
OEM Id:                                 00000000-0000-0000-0000-000000000000
Capability Licensing Service:           Enabled
Capability Licensing Service Status:    Permit info not available
OEM Tag:                                0x00000000
Localized Language:                     Unknown
Independent Firmware Recovery:          Enabled
```

this is after cleaning
```
Intel(R) MEInfo Version: 8.1.56.1541
Copyright(C) 2005 - 2014, Intel Corporation. All rights reserved.


Error 9458: Communication error between application and Intel(R) ME module (FW Update client)

Error 9459: Internal error (Could not determine FW features information)
```

<br>
#### Conclusion.
Cleaning intel me is relatively hard trivial but fun. I learn a lot from this experiment. Based on this project, even after cleaning intel me, i still can't remove 30 min barrier on replacing Pentium B960 with I5-2520M in HM70 motherboard. But i'm looking forward to other options and new finding in the future.

> [UPDATE 9/29/17] actually this project is half going, because it takes many hour and i haven't done yet and that's it for now.

> [UPDATE 11/4/18] THIS PROJECT IS ONGOING AGAIN!

> [UPDATE 11/11/18] THIS PROJECT IS COMPLETED!

<br>
#### More reading

[EN Wiki Intel AMT](https://en.wikipedia.org/wiki/Intel_Active_Management_Technology)

[Flashing BIOS with RPI](https://tomvanveen.eu/flashing-bios-chip-raspberry-pi)

[RPI FlashROM](https://www.flashrom.org/RaspberryPi)

[Embedsec.systems Neutralize ME Firmware](http://embedsec.systems/firmware/2016/11/17/neutralize_ME_firmware_on_sandybridge_and_ivybridge.html)

[Hackaday.com Neutralize intel ME](https://hackaday.com/2016/11/28/neutralizing-intels-management-engine/)

[ME_Cleaner issues 62](https://github.com/corna/me_cleaner/issues/62)

[ME_Cleaner issues 186](https://github.com/corna/me_cleaner/issues/186)

[ME_Cleaner wiki how to apply](https://github.com/corna/me_cleaner/wiki/How-to-apply-me_cleaner)

[Coreboot Mail disabling the ME on x230](https://mail.coreboot.org/pipermail/coreboot/2016-September/082016.html)

[Ptsecurity.com disabling intel ME](http://blog.ptsecurity.com/2017/08/disabling-intel-me.html)

[Learn about intel ME](https://puri.sm/learn/intel-me)

[Intel ME Secrets](https://recon.cx/2014/slides/Recon%202014%20Skochinsky.pdf)

[Libreboot RPI Setup](https://libreboot.org/docs/install/rpi_setup.html)

