### **Kembalikan indikator sound di TeaLinux 7 / Xubuntu 14.04**
_July 26, 2015 M. Nurul Irfan_

Beberapa waktu yang lalu ada seorang doscomer yang melaporkan bahwa indikator sound di TeaLinux 7 menghilang. Saya juga baru sadar akan hal itu setelah dia berkata demikian. Padahal indikator sound terbilang cukup penting karena biasanya kita mengontrol volume suara dari situ (selain dengan tombol keyboard) dan bisa melihat berapa persen kerasnya suara yang dihasilkan speaker.

Sebenarnya hal ini adalah masalah yang sangat mudah untuk diselesaikan, namun karena kemarin bertepatan dengan diadakannya UAS di Universitas Dian Nuswantoro dan juga lebaran, hal yang mudah ini pun, katakanlah terbengkalai. Namun akhirnya semua itu telah berlalu. Tidak usah ditanya UASnya gimana. Tidak usah ditanya dapat THR apa tidak. Mari kita selesaikan ini.

Untuk menampilkan kembali indikator sound yang hilang, The Lost Indicator: Sound, cukup dengan menginstall paket yang bernama xfce4-mixer

Buka terminal, lalu ketikkan: `sudo apt-get install xfce4-mixer`

tekan Enter.

Setelah itu klik kanan pada `panel > Panel > Add New Items…` lalu tambahkan applet bernama Audio Mixer. Dengan tanpa menggunakan sulap ataupun sihir, indikator sound telah kembali muncul.

<p align="center">
	<img src="./posts/2015-07-26-kembalikan-indikator-sound-di-tealinux-7-xubuntu-14-04/fixed.png" height="150px" alt="Fixed :)">
</p> 

Jika indikator sudah muncul tetapi masih belum bisa mengontrol volume sound, buka pengaturan Audio Mixer dengan klik kanan icon sound di panel > Properties, Lalu pilih mana sound card yang sesuai.

<p align="center">
	<img src="./posts/2015-07-26-kembalikan-indikator-sound-di-tealinux-7-xubuntu-14-04/pref.png" height="250px" alt="Audio Mixer Configuration">
</p> 

Selamat mencoba.

Salam Open Source