### **Pesan “Assuming drive cache: write through” Saat Startup di Linux**
_Posted by Tan138 on Aug 5, 2013_
<br>
in Blogs, File System, Kernel, News, TeaLinuxOS, Tutorial | 0 comments	

Terkadang pesan berikut muncul saat startup Linux, dengan waktu kemunculan beberapa detik saja. Kemudian pesan tersebut menghilang, dilanjutkan dengan plymouth dan sistem dapat masuk ke desktop dengan normal. Tapi apa maksud dari pesan di bawah?
```
[ 841.204] sd 6:0:0:0: [sdb] No Caching mode page present
[ 841.204] sd 6:0:0:0: [sdb] Assuming drive cache: write through
[ 843.469] sd 6:0:0:0: [sdb] No Caching mode page present
[ 843.469] sd 6:0:0:0: [sdb] Assuming drive cache: write through
[ 848.394] sd 6:0:0:0: [sdb] No Caching mode page present
[ 848.394] sd 6:0:0:0: [sdb] Assuming drive cache: write through
```

Di sini yang berperan sebagai ‘penghalang’ adalah partisi `[sdb]`. Ketikkan perintah tersebut di terminal untuk mengidentifikasi partisi [sdb] :
```
sudo fdisk -l
```

Akan muncul informasi seperti di bawah ini :
```
root@dharma-desktop:/home/dharma# fdisk -l

Disk /dev/sda: 500.1 GB, 500107862016 bytes
255 heads, 63 sectors/track, 60801 cylinders, total 976773168 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x198ed4cb

Device Boot      Start         End      Blocks   Id  System
/dev/sda1            2048      206847      102400    7  HPFS/NTFS/exFAT
/dev/sda2          206848   144386047    72089600    7  HPFS/NTFS/exFAT
/dev/sda3   *   573442048   976773119   201665536    7  HPFS/NTFS/exFAT
/dev/sda4       144392286   573441719   214524717    f  W95 Ext’d (LBA)
/dev/sda5       144392288   441353744   148480728+   7  HPFS/NTFS/exFAT
/dev/sda6       441353808   449742847     4194520   82  Linux swap / Solaris
/dev/sda7       531414198   573440174    21012988+  83  Linux
/dev/sda8       449744896   531412991    40834048   83  Linux

Partition table entries are not in disk order

Disk /dev/sdb: 7776 MB, 7776239616 bytes
104 heads, 54 sectors/track, 2704 cylinders, total 15187968 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0xc3072e18

Device Boot      Start         End      Blocks   Id  System
/dev/sdb1              63    15187967     7593952+  83  Linux
```


Setelah dicocokkan melalui `Disk Utility`, ternyata partisi [sdb] tersebut merupakan USB flashdrive yang masih menancap di PC saya. Rupanya saya lupa mencabut media tersebut ketika mematikan OS sebelah, kemudian langsung me-restart PC untuk masuk ke Linux. Namun apa hubungannya flashdrive dengan metode “`Write Through`” pada OS? _Quite suprising, right_?

Rupanya pesan tersebut muncul karena sistem gagal ‘meminta’ cache pada media tersebut. Nah lo, kok bisa sistem minta cache ke flashdrive?

_Technically_ speaking, pesan “Assuming drive cache: write through” muncul dari kernel saat akan mengecek suatu perangkat. Tipe caching pada flashdrive tidak dapat dikenali oleh kernel, sehingga kernel menganggap perangkat tersebut memiliki dukungan terhadap fungsi Write Through, untuk kemudian ditampilkan melalui pesan tersebut.

Masih belum paham? Oke, balik lagi ke matakuliah Sistem Operasi dan Organisasi dan Arsitektur Komputer. Pada metode “`Write Back`”, penulisan hanya dilakukan pada “RAM Cache” saja. Di sini Harddisk mempunyai alokasi sebagian RAM Cache tersebut untuk mempercepat operasi, sistem dapat menuliskan data pada “disk cache” tanpa harus menunggu penulisan sesungguhnya pada harddisk. Namun, jika perangkat tersebut tidak memiliki cache, data dituliskan secara langsung ke dalamnya, metode ini disebut Write Through.

Masih bingung juga? Begini penyederhanaannya, flashdrive menampakkan diri ke sistem sebagai `SCSI devices (sdX)`. Maka sistem pun bertanya kepada perangkat, “Apakah kamu punya cache?” Tapi, perangkat tersebut tidak memberikan jawaban apapun, sehingga sistem berasumsi perangkat tersebut tidak memiliki cache, dan karenanya diterapkanlah metode Write Through.

That’s it! Sekian penjelasan saya mengenai pesan peringatan di atas, semoga posting ini dapat membantu teman-teman semua. :D

Regards,