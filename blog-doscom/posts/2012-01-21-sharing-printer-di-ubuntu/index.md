### **Sharing Printer di Ubuntu**
_Posted by Patrick Nugros on Jan 21, 2012_
<br>
in Tutorial | 0 comments	

<p align="center">
	<img src="./posts/2012-01-21-sharing-printer-di-ubuntu/1.gif" height="250px" alt="img1">
</p> 

Posting kali ini akan membahas sharing printer dengan memanfaatkan paket CUPS yang sudah ikut terinstall ketika kita menginstall sistem operasi Ubuntu Desktop.
Sistem operasi yang digunakan untuk uji coba sharing printer ini adalah TealinuxOS 3 sebagai server dan Blackbuntu 0.3 sebagai client. Sedangkan printer yang digunakan adalah Epson Stylus T13.

Ada dua macam konfigurasi yang akan kita lakukan:

<br>
**Konfigurasi pada server (komputer yang terhubung langsung dengan printer):**
Linux (uji coba dengan TealinuxOS 3 (based ubuntu 10.10))

Buka Internet browser.

Pada address bar ketikkan `http://localhost:631`.

Setelah tampil halaman local CUPS, klik pada link Administration.

<p align="center">
	<img src="./posts/2012-01-21-sharing-printer-di-ubuntu/2.png" height="250px" alt="img2">
</p> 

Pada bagian Basic Server Settings, klik pada pilihan “`Share published printers connected to this system`” kemudian klik pada tombol “`Change Setting`”. Ini akan me-restart server printernya.

Langkah selanjutnya adalah mempublish printer yang akan di sharing dengan masuk pada halaman Printers.

Kemudian Klik tombol Publish Printer pada printer yang akan disharing. Pada tahap ini biasanya user akan diminta memasukkan user dan password. Masukkan user dan password yang memiliki hak akses sebagai root. Sampai tahap ini konfigurasi pada server printer sudah cukup.

<br>
**Konfigurasi pada Client (Komputer yang akan ikut menggunakan printer):**

Linux (uji coba dengan Blackbuntu 0.3 (based ubuntu 10.10)):

Pastikan driver printer yang akan kita gunakan sudah terinstall, untuk driver printer Epson di Linux bisa dicari disini : <http://avasys.jp/eng/linux_driver/download/lsb/epson-inkjet/escp/>

Masuk `System–>Administration–>Printing`

Klik “`Add printer`” / “`Add`”.

<p align="center">
	<img src="./posts/2012-01-21-sharing-printer-di-ubuntu/3.png" height="250px" alt="img3">
</p> 

Di Window `New Printer` kolom `Select Device pilih Network Printer`, dan pilih `Find Network Printer`
<p align="center">
	<img src="./posts/2012-01-21-sharing-printer-di-ubuntu/4.png" height="250px" alt="img4">
</p> 

Isikan `Host`, Host yaitu IP komputer server yang terhubung dengan printer, kemudian klik `find`
Jika printer ditemukan secara otomatis port dan nama printer akan terisi sendiri.
<p align="center">
	<img src="./posts/2012-01-21-sharing-printer-di-ubuntu/5.png" height="250px" alt="img5">
</p> 

Klik `Forward`, dan akan ada kotak dialog untuk pilihan ingin mengetes print atau tidak.
<p align="center">
	<img src="./posts/2012-01-21-sharing-printer-di-ubuntu/6.png" height="250px" alt="img6">
</p> 

Sampai tahap ini printer sudah siap digunakan dari komputer Client. Semoga bermanfaat.