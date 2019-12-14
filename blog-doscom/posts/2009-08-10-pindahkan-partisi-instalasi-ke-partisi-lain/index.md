### Pindahkan Partisi Instalasi Ke Partisi Lain
Diposkan oleh ahmad SAIFULmuhajir di 17:40 . Senin, 2009 Agustus 10
<br>
Label: File System, Linux, Tools Partisi, Tutorial

<p align="center">
	<img src="./posts/2009-08-10-pindahkan-partisi-instalasi-ke-partisi-lain/linux_on_ps3.jpg" height="150px" alt="img1">
</p> 

Pernahkah anda berpikir untuk memindahkan instalasi Linux anda ke partisi atau hard drive yang lain dan membuatnya tetap dapat dijalankan?! Jika ya, anda tidak perlu khawatir karena Linux bisa melakukan itu. Artinya, anda dapat memindahkan seluruh isi hard drive berupa instalasi Linux ke hard drive lain dan anda pakai kembali dengan baik.
Dengan demikian, logikanya anda dapat melakukan copy sebuah sistem Linux dari komputer satu ke komputer yang lain atau dalam bahasa JAWA-nya disebut **CLONE**.


* Sebelum memulai prosesnya, sediakan sebuah Live CD Linux untuk digunakan sebagai senjata ampuh. Anda bisa gunakan distro apa saja, namun disarankan anda memakai distro yang memiliki Gparted untuk memudahkan pekerjaan.
* Setelah anda menyiapkan Live CD Linux, gunakan CD tersebut untuk booting sehingga komputer bekerja melalui Live CD tersebut.
* Sebelum melakukan copying isi hard drive, tentu saja anda harus melakukan mounting hard drive sumber dan hard drive tujuan.
* Masih melalui Live CD, copy isi disk sumber ke disk tujuan melalui terminal dengan perintah:

```
$ sudo cp –afv /path/drive/sumber/* /path/drive/tujuan
```

* Pastikan anda memberikan simbol asterisk (*) pada akhir drive sumber
* Proses copying akan dilakukan, dan saya yakin anda harus menunggu beberapa lama tergantung besarnya memori yang anda gunakan. Jadi, sabarlah untuk menunggu proses copying. Setelah proses copy selesai, silakan matikan komputer anda dan anda bisa melepaskan drive sumber copy.
* Setelah anda melepaskan drive sumber, silakan boot kembali komputer masih dengan Live CD, saya ulangi, Live CD.
* Setelah kembali ke X window, silakan mount kembali drive/partisi yang tadi menjadi tujuan copy.
* Jalankan pada terminal `“gksu gedit”` atau `“nano”` ataupun `“vi”` untuk membuka teks editor sesuka anda.
* Lakukan editing pada file yang ada pada `/etc/fstab`. Pada file tersebut, ganti `UUID` atau device entry dengan mount point berupa / atau partisi root ke arah hard drive baru anda. Untuk menemukan `UUID` drive baru, anda bisa gunakan perintah:

```
$ ls –l /dev/disk/by-uuid/
```

* Setelah itu, edit file `/boot/grub/menu.lst`. Ganti entry `UUID` yang berada di bagian paling akhir file dengan entry yang benar.
* Langkah selanjutnya adalah melakukan instalasi grub. Jalankan perintah `sudo grub` ataupun `su grub` untuk menjadi root dan membuka grub.
* Pada prompt grub, ketikkan find `/boot/grub/menu.lst`. Perintah ini akan menghasilkan keterangan tentang partisi dan nomor partisi, seperti `hd(0,0)` atau semacamnya.
* Ketikkan: `root hd(0,0)` dengan catatan, ganti `hd(0,0)` dengan partisi teratas hard drive yang anda miliki.
* Selanjutnya adalah melakukan setup grub dengan perintah: `setup hd(0)` dengan ketentuan bahwa hd(0) anda ganti dengan nomor drive teratas yang anda miliki. Sebagai catatan, anda tidak perlu menambahkan koma dan nomor setelah koma.
* Langkah terakhir adalah reboot, dan silakan boot dari hard drive. Jika anda mengikuti langkah ini dengan baik, maka anda dapat menggunakan sistem yang anda telah copy.

<br>
* Catatan terakhir sebelum anda copy sistem ini, jangan pernah menyimpan data anda pada drive sistem untuk menghindari hal-hal yang tidak diinginkan. Selamat mencoba dan semoga sukses.

Disadur dari Linux.com