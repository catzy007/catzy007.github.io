### **Install LAN Card dan Wifi Toshiba L640 di Ubuntu 10.04**
_Posted by nafis on Dec 12, 2010_
<br>
in Driver, News, Tutorial, Ubuntu | 3 comments	

<p align="center">
	<img src="./posts/2010-12-12-install-lan-card-dan-wifi-toshiba-l640-di-ubuntu-10-04/Toshiba_Satellite_L640-1040U_2091.jpg" height="250px" alt="img1">
</p> 
Panduan ini ditujukan pada teman-teman yang mempunyai kendala dalam menginstall LAN Card dan Wireless untuk laptop toshiba satellite L640. Pertama kita lihat dulu jenis ethernet pada laptop kita. Dengan cara ketikan lspci pada terminal. Nanti akan terlihat tampilan seperti berikut:
<p align="center">
	<img src="./posts/2010-12-12-install-lan-card-dan-wifi-toshiba-l640-di-ubuntu-10-04/lspci.png" height="250px" alt="img2">
</p> 

Perhatikan:
02:00.0 Network controller: Broadcom Corporation Device 4727 (rev 01)
03:00.0 Ethernet controller: Atheros Communications AR8152 v1.1 Fast Ethernet (rev c1)
Jenis LAN Card laptop ini adalah Atheros Communications AR8152 v1.1 Fast Ethernet (rev c1) dan Wirelessnya Broadcom Corporation Device 4727 (rev 01) .

Langsung saja ke proses installasi.
Pertama kita install dulu LAN Cardnya(eth0), caranya sebagai berikut.

1. download dulu compat-wireless-2.6.tar.bz2 [disini](http://linuxwireless.org/download/compat-wireless-2.6/)
2. Kemudian copy paste file tersebut ke Desktop anda(bisa selain desktop tapi perintahnya akan berbeda)
3. Setelah itu buka terminal, pindah direktori ke desktop.
<p align="center">
	<img src="./posts/2010-12-12-install-lan-card-dan-wifi-toshiba-l640-di-ubuntu-10-04/cd.png" height="250px" alt="img3">
</p> 

4. kemudian ekstrak file compat-wireless-2.6.tar.bz2, dengan cara klik kanan, pilih Extract here.
5. Kembali lagi ke terminal, pindah direktori ke compat-wireless-2010-12-07.
<p align="center">
	<img src="./posts/2010-12-12-install-lan-card-dan-wifi-toshiba-l640-di-ubuntu-10-04/cd+compat.png" height="250px" alt="img4">
</p> 

6. Kemudian ketikan ./scripts/driver-select atl1c pada terminal.
<p align="center">
	<img src="./posts/2010-12-12-install-lan-card-dan-wifi-toshiba-l640-di-ubuntu-10-04/script.png" height="250px" alt="img5">
</p> 

7. Langkah berikutnya ketik make pada terminal.
8. Setelah itu install drivernya dengan mengetik sudo make install.
9. Terakhir ketikan modprobe atl1c dan reboot laptop anda.

Setelah LAN Cardnya(eth0) terinstall kita lanjutkan dengan menginstall Wirelessnya(eth1). Pastikan laptop anda terhubung dengan internet.

1. Pertama kita masuk ke terminal.
2. Kemudian ketikan sudo apt-get install bcmwl-kernel-source.
3. Setelah itu laptop anda akan mendownload bcmwl-kernel-source, itu sebabnya laptop anda harus terhubung dengan internet.
4. Langkah terakhir reboot kembali laptop anda.

Setelah keduanya sudah terinstall kita bisa mengecekya dengan cara ketikan ifconfig diterminal. Akan muncul tampilan seperti berikut pada terminal.
<p align="center">
	<img src="./posts/2010-12-12-install-lan-card-dan-wifi-toshiba-l640-di-ubuntu-10-04/ifconfig.png" height="250px" alt="img6">
</p> 

SEKIAN DAN SELAMAT MENCOBA..!!!