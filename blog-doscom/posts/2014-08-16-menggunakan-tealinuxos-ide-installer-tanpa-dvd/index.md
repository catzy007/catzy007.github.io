### **Menggunakan TeaLinuxOS IDE Installer tanpa DVD**
_August 16, 2014August 16, 2014 Reza Faiz A Rahman_

<p align="center">
	<img src="./posts/2014-08-16-menggunakan-tealinuxos-ide-installer-tanpa-dvd/Program-TeaLinuxOS-IDE-Installer-Splash.png" height="250px" alt="img">
</p> 

TeaLinuxOS IDE Installer (Tea IDE) merupakan aplikasi untuk memudahkan pengguna TeaLinuxOS dalam memasang [IDE (Integrated development environment)](http://id.wikipedia.org/wiki/Lingkungan_pengembangan_terpadu) dan melepaskan IDE secara offline (luring).

Karena seluruh berkas (Tea IDE) yang dibutuhkan ada di dalam DVD. Ketika kita menggunakannya harus memasukkan DVD terlebih dahulu. Padahal, belum tentu perangkat kita memiliki DVD-Drive.

Terus, gimana dong caranya kalo ngga punya DVD-Drive ?

Gini caranya…

Sebetulnya, cara ini hanya me-_mount_ iso TeaLinuxOS sebagai pengganti DVD. Jadi, ketika Tea IDE akan mengakses berkas di DVD, bisa dialihkan ke iso yang sudah kita mount. Sederhananya kita seakan-akan memasukkan DVD, padahal hanya secara virtual.
mount

1. Langkah pertama, menyiapkan berkas iso TeaLinuxOS. Untuk yang belum punya, silahkan unduh di Web [TeaLinuxOS](http://tealinuxos.org/2014/05/tealinuxos-6-0-jasmine-tea/). Untuk yang memiliki DVD TeaLinuxOS bisa menggunakan tutorial [ini](http://marisharingilmu.wordpress.com/2013/10/13/brasero-membuat-file-iso-dari-dvd-cd/) untuk membuatnya menjadi berkas iso.
1. Buat sebuah folder di /media/user bernama tealinux untuk tempat menyimpan sementara berkas iso yang akan di-mount. Ganti user dengan nama user kamu.
    <br>
    ```
    $ sudo mkdir /media/user/tealinux
    ```
1. Sekarang saatnya me-mount berkas iso di folder tealinux tadi.
    <br>
    ```
    $ sudo mount /home/user/Downloads/TeaLinuxOS-6.0-i386.iso /media/user/tealinux
    ```
1. Ganti `/home/user/Downloads/TeaLinuxOS-6.0-i386.iso` dengan lokasi menyimpan berkas iso TeaLinuxOS.

Untuk uji coba, silahkan buka Tea IDE nya. `Tea Menu -> System Tools -> TeaLinuxOS IDE Installer`. Jika tidak keluar peringatan “Please Insert TeaLinux DVD” maka Tea IDE siap digunakan. Untuk mencobanya silahkan pasang salah satu aplikasi yang tersedia.

Oh, iya. Ada yang mau bikin skrip biar lebih ringkas ? Boleh lho ya di bagi ke kita :3