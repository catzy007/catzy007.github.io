### **Membuat Aplikasi FirefoxOS**
_Posted by Reza Faiz A Rahman on Jul 29, 2013_
<br>
in Aplikasi, FirefoxOS, News, Operating System, Tutorial | 0 comments	

Hai! :).

Tepat setahun lalu saya menulis artikel tentang “Mencoba FirefoxOS di Linux”. Nah, kali ini saya ingin mengajak teman-teman semua belajar bareng membuat aplikasi untuk FirefoxOS! :).

Oh iya, nanti mencoba aplikasinya tidak pakai cara di artikel sebelumnya, karena cukup merepotkan. Dan sekarang, untuk mencoba ada cara yang lebih mudah. Dengan cara menginstall Add-on FirefoxOS Simulator di browser Mozilla Firefox. Kalo pakai devicenya langsung sih lebih afdhol ya :3

Membuat aplikasi di FirefoxOS ini menyenangkan menurut saya. Seperti di jelaskan [di sini](https://marketplace.firefox.com/developers/), alur membuat aplikasinya cukup sederhana.
```
Design > Build > Publish
```

Sederhana kan ? :D

Dalam membuat aplikasi FirefoxOS, kita cukup mengetahui HTML, CSS dan Javascript.

* **HTML**, untuk layout aplikasi yang akan kita buat nantinya.
* **CSS**, biar aplikasinya tambah cakep :)
* **Javascript**, untuk mengkoneksikan aplikasi ke system FirefoxOS.

Sebelum membuat, kita pasang add-on FirefoxOS Simulator nya dulu. Bisa langsung berkunjung [kesini](https://marketplace.firefox.com/developers/). Sekedar saran, untuk jaga-jaga apabila koneksi terputus. Sebaiknya mengunduh lewat browser lain, supaya kita dapet file .xpi -nya. Nanti tinggal kita pasang di Mozilla Firefox.

Setelah selesai dipasang, FirefoxOS Simulator kita coba dulu. Main-main sebentar gitu :p. Caranya, klik `Firefox menu > Web Developer > FirefoxOS Simulator`. Nanti keluar seperti gambar dibawah ini.
<p align="center">
	<img src="./posts/2013-07-29-membuat-aplikasi-firefoxos-part-1/1.jpg" height="250px" alt="FirefoxOS Simulator">
</p> 

Udah belum main-main sama FirefoxOS Simulatornya ?. Kalo sudah, sekarang waktunya kita coding!. ( ^^)9

Untuk membuat aplikasi FirefoxOS setidaknya kita perlu tiga alat.
* **Mozilla Firefox**
* **FirefoxOS Simulator**
* **Text Editor**, kalo saya disini pakai Sublime Text

Langsung aja ya, buka Sublime Text -nya lalu kita buat file index.html
<p align="center">
	<img src="./posts/2013-07-29-membuat-aplikasi-firefoxos-part-1/2.png" height="250px" alt="Index.html">
</p> 

Selesai bikin index.html, kita bikin manifest.webapp. Nantinya manifest ini berisi informasi tentang aplikasi kita.
<p align="center">
	<img src="./posts/2013-07-29-membuat-aplikasi-firefoxos-part-1/3.png" height="250px" alt="Manifest.webapp">
</p> 

Selesai membuat dua file tersebut, mari kita coba di FirefoxOS Simulator. Caranya, di FirefoxOS Simulator bagian kanan atas, klik `Add Directory`. Kemudian pilih `manifest.webapp` yang sudah kita buat tadi. Kemudian klik `open`. Nanti otomatis akan menjalankan aplikasi yang kita buat di FirefoxOS Simulator. Tampilannya seperti ini.
<p align="center">
	<img src="./posts/2013-07-29-membuat-aplikasi-firefoxos-part-1/4.png" height="250px" alt="Halo Kamu">
</p> 

Selamat! aplikasi FirefoxOS pertama kita udah jadi :)). Jadi, untuk membuat aplikasi di FirefoxOS itu ngga susah kan ? :3. Sila di oprek lebih lanjut yaa :D.

Di artikel berikutnya nanti, kita akan belajar bareng lagi gimana cara mempercantik tampilan aplikasi kita pakai beberapa framework yang sudah banyak tersedia di internet. Seperti Foundation, Bootstrap, Lungo.js dll.

Sekian artikel kali ini, sampai ketemu di artikel berikutnya ya.

Salam.

========

<br>
**Alat-alat:**

Mozilla Firefox: <http://www.mozilla.org/en-US/firefox/fx/>

FirefoxOS Simulator: <https://hacks.mozilla.org/2013/07/firefox-os-simulator-4-0-released/>

Sublime Text: <http://www.webupd8.org/2013/07/sublime-text-3-ubuntu-ppa-now-available.html>

<br>
**Referensi:**

<https://marketplace.firefox.com/developers/docs/quick_start>

<https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS>

 

23.45 28/07/13

[@rezafaiz_a](http://twitter.com/rezafaiz_a)