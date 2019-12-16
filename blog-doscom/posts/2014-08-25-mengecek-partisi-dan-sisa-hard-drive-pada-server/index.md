### **Mengecek partisi dan sisa hard drive pada server**
_August 25, 2014 Ghulam Maulana_

<p align="center">
	<img src="./posts/2014-08-25-mengecek-partisi-dan-sisa-hard-drive-pada-server/hardisk.jpg" height="250px" alt="hardisk">
</p> 


Seperti yang kita tahu, hard drive a.k.a hardisk merupakan perangkat keras penting dalam sistem komputer yang berguna sebagai tempat penyimpanan data sekaligus tempat penginstalan OS maupun software.

Untuk mengecek informasi dalam hardisk (misal kapasitas, path dll) sudah tersedia banyak aplikasi yang tersedia. Contoh saja Gparted, OSFMount, Parted Magic dll. Aplikasi tersebut menggunakan GUI yang artinya atau bahasa simpelnya diterapkan pada personal komputer.

Lalu bagaimana mengecek informasi hardisk pada sistem hitam-putih (baca:server) 😀 ? okedeh pada dasarnya sama saja. Perbedaannya pada server tidak menggunakan DE (Dekstop Enviroment) yang artinya hanya text-base (hitam putih XD). Jadi pengecekan informasi hardisk tersebut juga berupa tulisan saja.

Langsung saja, pada postingan ini saya menggunakan Ubuntu server 12.04 LTS
<p align="center">
	<img src="./posts/2014-08-25-mengecek-partisi-dan-sisa-hard-drive-pada-server/server.png" height="250px" alt="server">
</p> 


Yups itu merupakan terminal, sama halnya kalau memakai linux dekstop

Untuk mengecek informasi hardisk, gunakan perintah “**df**” .

> Ketik “**df --help**” untuk melihat informasi option pada perintah df
<p align="center">
	<img src="./posts/2014-08-25-mengecek-partisi-dan-sisa-hard-drive-pada-server/df-help.png" height="250px" alt="df-help">
</p> 


Lalu gunakan perintah df dengan optional -h yang artinya “human readable” atau simpelnya menampilkan infomasi data di hardisk dengan format manusiawi (K, G, M)

> df -h
<p align="center">
	<img src="./posts/2014-08-25-mengecek-partisi-dan-sisa-hard-drive-pada-server/df-a.png" height="250px" alt="df-a">
</p> 
 

Oke dari gambar diatas bisa dilihat infomasi hardisk yang terdapat pada server.

Sekian postingan sederhana dari saya, tunggu postingan-postingan lainnya 😀 hiihihi

Salam Open Source

Sumber <http://www.cyberciti.biz/faq/linux-command-space-left-on-hard-disk-drive/>
