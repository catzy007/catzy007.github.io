### **TRIPLE BOOT Windows 8, Android, dan TeaLinuxOS/Ubuntu**
_August 19, 2014 mazumam_

<p align="center">
	<img src="./posts/2014-08-19-triple-boot-windows-8-android-dan-tealinuxosubuntu/IMG_20140819_124056.jpg" height="250px" alt="img">
</p> 

Adakalanya kita pengen menginstall android di laptop dan dibuat dualboot atau tripleboot dengan OS lain. Android yang saya pakai adalah Android-4.4-R1 bisa di download di <http://pinguin.dinus.ac.id/iso/android/android-x86-4.4-r1.iso>, jika hanya ingin dibuat dualboot dengan

windows, tidak akan menemukan masalah yg cukup rumit, karena android sudah mampu mengenali windows dan langsung terdeteksi di grub boot loadernya Android. masalah baru ditemukan saat kita menyandingkan Android dengan TealinuxOS ataupun ubuntu. karena grub tealinuxos ataupun ubuntu tidak dapat mendeteksi Android secara otomatis.
Jadi, untuk membuat tripleboot, saran urutan instalasi adalah pertama Install Windows, kedua install Android dan langkah yang terakhir baru kita menginstall ubuntu/ TealinuxOS.
Disini saya tidak akan membahas langkah instalasi dari ketiga OS tersebut. saya anggap sudah bisa. Instalasi androidpun cukup mudah, yang penting siapkan partisi kosong sebelum menginstallnya. :p .
Agar Android muncul pada Grub Boot loader TeaLinuxOS, kita harus mengedit manual grub boot loader pada tealinuxos, caranya :

buka **Terminal**

edit grup
<br>
```
sudo nano /boot/grub/grub.cfg
```

cari baris yang terdapat text berikut :
<br>
```
menuentry ‘TeaLinuxOS GNU/Linux’ –class tealinuxos –class gnu-linux –class gnu –class os $menuentry_id_option ‘gnulinux-simple-49c0c953-8847-48e1-bdee-34e27aa3d025′ {
```

setelah ketemu, tambahkan baris konfigurasi boot berikut diatasnya
<br>
```
menuentry ‘Android-x86 4.4-R1′ {set root='(hd0,7)’linux /android-4.4-r1/kernel quiet root=/dev/ram0 androidboot.hardware=android_x86 video=-16 SRC=/android-4.4-r1initrd /android-4.4-r1/initrd.img}

menuentry ‘Android-x86 4.4-R1 (Debug mode)’ {
set root='(hd0,7)’
linux /android-4.4-r1/kernel root=/dev/ram0 androidboot.hardware=android_x86 video=-16 DEBUG=2 SRC=/android-4.4-r1
initrd /android-4.4-r1/initrd.img
}
```

Perhatikan text yang saya beri warna merah di konfigurasi diatas **(hd0,7)**, angka **7** tersebut adalah partisi lokasi instalasi androidnya. jadi saya menginstall Android di **sda7**, jika anda menginstal di partisi lain, angka 7 tersebut diganti sesuai dengan lokasi dimana anda menginstall androidnya.
simpan dan keluar.

restart dan Android akan muncul di grub boot loader.

kurang lebih tampilan Android di laptop seperti ini
<p align="center">
	<img src="./posts/2014-08-19-triple-boot-windows-8-android-dan-tealinuxosubuntu/IMG_20140819_140744.jpg" height="250px" alt="img">
</p> 

sumber <http://blog.mazumam.com/2014/08/triple-boot-windows-8-android-dan.html>