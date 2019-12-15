### **Cacti Network Monitoring**
_Posted by mazumam on Jan 29, 2012_
<br>
in Networking, Tutorial | 0 comments	

<p align="center">
	<img src="http://2.bp.blogspot.com/-bxB9Apvjafw/TyQ5j68K09I/AAAAAAAAAa0/bgUHoBF5cdo/s320/Figure6.17.jpg" height="250px" alt="img1">
</p> 
Cacti adalah sebuah front-end untuk RRDtool. Ia menyimpan seluruh informasi yang diperlukan untuk membuat grafik di sebuah database MySQL. Front-end ditulis di PHP. Cacti yang memelihara grafik, sumber data, dan mengatur pengumpulan data sebenarnya. Ada dukungann untuk tool SNMP, dan script yang di kustomisasi dengan mudah bisa ditulis untuk poll peristiwa jaringan apapun pun.

Cacti bisa agak membingungkan untuk dikonfigurasi, tetapi setelah anda menyelesaikan membaca dokumentasi dan contoh, ia bisa memberikan grafik yang sangat mengesankan. Ada ratusan template untuk berbagai sistem yang ada di website cacti, dan program Cacti sedang di kembangkan dengan pesat.

[source](http://opensource.telkomspeedy.com/wiki/index.php/WNDW:_Trending_tools#MRTG)

**Instalasi**

Untuk syarat instalasi, server harus sudah terinstall webserver apache dan database server mysql.kalo belum maka install dulu apache dan mysql dg cara :
```
sudo apt-get install apache2 mysql-server
```

selanjutnya install cacti, masuk ke terminal dan jalankan perintah berikut :
```
sudo apt-get install cacti-cactid
```

Konfigurasi dbase cacti dengan dbconfig-common, jawab “YES”
<p align="center">
	<img src="http://2.bp.blogspot.com/-qJn7iGObv0E/TyQ6WTSl9aI/AAAAAAAAAa8/cVliS0InjVE/s320/1.png" height="250px" alt="img2">
</p> 

Isikan password root sql
<p align="center">
	<img src="http://4.bp.blogspot.com/-q0MSu2JK7eA/TyQ7AWxSftI/AAAAAAAAAbE/FWR_Fzs78XQ/s320/2.png" height="250px" alt="img3">
</p> 

Isikan password root sql untuk cacti
<p align="center">
	<img src="http://3.bp.blogspot.com/-STbXZH8zBzE/TyQ7MToaVUI/AAAAAAAAAbM/w2_sKLGpU1E/s320/3.png" height="250px" alt="img4">
</p> 

confirim cacti sql password
<p align="center">
	<img src="http://1.bp.blogspot.com/-CH-rTTbpJE8/TyQ7XFap6CI/AAAAAAAAAbU/AHa4D_5nj3A/s320/4.png" height="250px" alt="img5">
</p> 

Pemilihan aplikasi webserver, pilih sesuai dengan webserver yg anda gunakan, karena saya memakai apache2 maka saya pilih apache2
<p align="center">
	<img src="http://2.bp.blogspot.com/-trj_hg2Qll8/TyQ7ow87tFI/AAAAAAAAAbc/Dd0tS9KnKiI/s320/5.png" height="250px" alt="img6">
</p> 

Setelah langkah diatas selesai, proses Installasi akan berjalan di shell (terminal)

jika instalasi telah selesai, akses ip cacti dengan alamat http://ip_server/cacti di browser anda. pilih Next
<p align="center">
	<img src="http://3.bp.blogspot.com/-fHH9MJWxG84/TyQ8N0xnOLI/AAAAAAAAAbk/eRkLgQx1hJs/s320/6.png" height="250px" alt="img7">
</p> 

Pilih new installation, kemudian tekan NEXT
<p align="center">
	<img src="http://2.bp.blogspot.com/-9LgUHsVxzqA/TyQ8pPRbrPI/AAAAAAAAAbs/89efZASRU4I/s320/7.png" height="250px" alt="img8">
</p> 

Klik Finish
<p align="center">
	<img src="http://3.bp.blogspot.com/-DEBYqvMJeYs/TyQ82kHxVuI/AAAAAAAAAb0/blktAgyVpkg/s320/8.png" height="250px" alt="img9">
</p> 

**Login Cacti**

login ke cati dengan username `admin` dan password `admin`
<p align="center">
	<img src="http://4.bp.blogspot.com/-sxhgewiZ7h0/TyQ9HFkJIXI/AAAAAAAAAb8/KRmDlTc-2co/s320/9.png" height="250px" alt="img10">
</p> 

Ganti password admin cacti dengan password baru
<p align="center">
	<img src="http://1.bp.blogspot.com/-YC_uRSr6ACQ/TyQ9aEq1kmI/AAAAAAAAAcM/0-a0rsRq3SE/s320/10.png" height="250px" alt="img11">
</p> 

maka akan muncul menu konfigurasi cacti
<p align="center">
	<img src="http://3.bp.blogspot.com/-83K6MZcbhCo/TyQ9U4nVcWI/AAAAAAAAAcE/bBL_bqMle9A/s320/11.png" height="250px" alt="img12">
</p> 

<br>
sumber : <http://www.mazumam.web.id/2012/01/cacti-di-ubuntu-server.html>