### **Instalisasi Mikrotik di Virtual BOX dan WinBox pada Wine**
_Diposting oleh Dinus Open Source Community di 09.30 . Rabu, 27 Januari 2010_
<br>
Label: Linux, Mikrotik, Networking, Tutorial, Ubuntu, Wine

<p align="center">
	<img src="./posts/2010-01-27-instalisasi-mikrotik-di-virtual-box-dan/about.virtual.jpg" height="250px" alt="img1">
</p> 

Langsung saja gan, berikut tutorial install mikrotik 3.20 di virtual box, pada ubuntu 9.10 karmic koalaku... Simak ya... :D

**Pengaturan Virtual Box**

1. Buka VirtualBox melalui `Applications → accessories → VirtualBox Ose`

2. klik tombol `New`, sehingga akan keluar jendela baru lalu klik `Next`

3. Beri nama OS yang dinstall (semisal : Mikrotik), dan juga pilihan OS typenya. Lalu klik `Next`

4. Beri ukuran memori yang akan digunakan, pilih default yaitu 256 Mb,, lalu klik `next`

5. Pada pilihan hardisk beri tanda centang pada boot hardisk, dan create new disk lalu klik `Next`

6. Akan keluar tampilan baru untuk pengaturan virtual hardisk, lalu klik `Next`

7. Pilih Dynamic expanding lalu klik `Next`

8. pada location biarkan default, lalu pada size bisa diberikan 500 Mb (biasanya mikrotik hanya memerlukan 400Mb'an) klik `next`, lalu klik `finish`, lalu klik `finish` lagi

9. klik profile mikrotik, lalu klik setting pada tombol diatasnya..

10. Pilih Cd/DVD-ROM lalu beri tanda centang Mount CD / DVD drive, lalu pilih Iso Image File (bisa didunlud di http://mikrotik.co.id / atau minta' di simbah untuk versi cracknya ), lalu klik gambar file isonya.

11. Klik `add` lalu pilih iso mikrotik yang telah di dunlud.. setelah itu klik `Select`.

12. Pilih Network untuk pengaturan jaringan, pada pilihan Attached to ganti denga Host-only Adapter.

13. Klik `Ok` dan virtual Mikrotikpun siap di jalankan..


**Instalisasi Mikrotik**

1. Double Klik profil Mikrotik sehingga akan keluar layara baru

3. Tunggu sebentar hingga proses bootin selesai,

4. klik `A` untuk menginstall semua Software. Sedangkan `Xen` jangan di install, seperti gambar dibawah.

5. Klik `I` , klik `N` dan `Y` untuk mulai menginstall

6. Klik `Enter` untuk reboot dan Mikrotikpun siap digunakan

<p align="center">
	<img src="./posts/2010-01-27-instalisasi-mikrotik-di-virtual-box-dan/install.jpg" height="250px" alt="img2">
</p> 

**Menjalankan mikrotik**

1. masuk ke Virtual Box, lalu klik `setting`

2. unmount CD pada pilihan CD / DVD-ROM agar system mau booting lewat virtual hardisk. Klik OK

3. double klik mikrotik untuk memulai menjalankan mikrotik.

4. Login menggunakann user : admin, dan passwod : (langsung enteer), sehingga anda pun masuk kedalam terminal mikrotik..

<p align="center">
	<img src="./posts/2010-01-27-instalisasi-mikrotik-di-virtual-box-dan/mikrotik.jpg" height="250px" alt="img3">
</p> 

**Menjalankan WinBox**

1. Oleh karena winbox merupakan aplikasi di windows, maka kita perlu menggunakan emulator windows menggunakan wine.

2. Setelah instal wine andapun dapat langsung menggunakan Winbox.

3. Sebelum winbox dapat digunakan, terlebih dahulu kita harus menyetting IP pada mikrotik dan virtual network pada Linux kita agar dapat saling terkoneksi.

* Setting IP pada Mikrotik

    * interface print = melihat kartu jaringan, biasanya terdeteksi sebagai etherX

    * #ip address add address=192.168.1.1/29 interface

* Setting IP pada Ubuntu

    * ifconfig = melihat kartu jaringan, klo menggunakan virtual box biasa terdeteksi sebagai vboxnet0

    * #sudo ifconfig vboxnet0 192.168.1.2/29

untuk melihat apakah pengaturan sudah dapat berjaan anda dapat ping ke masing2 system.

4. Jalankan WinBox.exe, pada pilihan “Connect to” beri IP mikrotik yaitu 192.168.1.1, Login menggunakan “admin” dan password dikosongi, lalu klik Connect. Dan WINBOX pun siap dikonfigurasikann...
<p align="center">
	<img src="./posts/2010-01-27-instalisasi-mikrotik-di-virtual-box-dan/winbox.jpg" height="250px" alt="img4">
    <br>
    <img src="./posts/2010-01-27-instalisasi-mikrotik-di-virtual-box-dan/mikrotik+3.28+on+Virtual+Box+and+winbox+on+wine.jpg" height="250px" alt="img5">
</p> 


Semoga dapat bermanfaat .. klo ad kekurangan mohon dikumpliti ya..

Salam OpenSource by : tr4ck3r