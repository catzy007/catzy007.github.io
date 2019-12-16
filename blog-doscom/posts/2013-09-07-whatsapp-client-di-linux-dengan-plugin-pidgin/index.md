### **Whatsapp Client di Linux dengan Plugin Pidgin**
_Posted by Reza Faiz A Rahman on Sep 7, 2013_
<br>
in DOSCOM, Internet, Terminal, Tutorial | 0 comments	

<p align="center">
	<img src="./posts/2013-09-07-whatsapp-client-di-linux-dengan-plugin-pidgin/WhatsApp-Messenger-for-Symbian-Updated-to-2-8-22.jpg" height="250px" alt="img">
</p> 

Malem Mblo! Sabtu malam pada ngoprek apa ? Galau Ngoprek bareng yuuk!.

Ngomong-ngomong, biarpun jomblo, pada punya whatsapp kan ?. Pernah kepikiran chatting sama gebetan pakai WhatsApp di Linux ?

Pegel juga kan ngetik gombalan beribu karakter pake keyboard ponsel. Nah, kebetulan tadi sore, saya nemu plugin Pidgin supaya kita bisa WhatsApp-an di Linux. Caranya gampang ko, ngga percaya ? yuk langsung di coba.

<br>
**1. Pidgin**

Karena kita pakai plugin Pidgin, jadi hal pertama kita harus unduh pidgin dulu. Kalo kamu udah punya, bisa skip tahap ini.

Install seperti biasa ya, di `Software Center` ada ko. tinggal di cari aja. Atau yang masih hobi pakai terminal bisa ketik
```
sudo apt-get install pidgin
```

<br>
**2. Whatsapp Purple**

Ini plugin supaya kita bisa WhatsApp-an dengan Pidgin. Yang mau ngompile bisa unduh kode sumbernya di sini <https://github.com/davidgfnet/whatsapp-purple/>

Tapi kalo kamu ngga mau repot ngompile bisa unduh yang udah jadi di sini <http://web.davidgf.net/nightly/whatsapp-purple/>

Tinggal pilih sesuai yang sesuai dengan komputer kamu. Selesai mengunduh, salin plugin pidgin ke
```
/home/namauser/.purple/plugins/
```

Coba jalankan aplikasi Pidgin. `Add user` baru, lalu dipilihan `protocol`, pilih `WhatsApp`. Pasti ngga bisa di add kan ?.

Yup, karena kita butuh `username` sama `password`. Gimana cara dapetnya. Lanjut ke langkah selanjutnya.

<br>
**3. Yowsup**
> “Yowsup is a python library that allows you to do all the previous in your own app. Yowsup allows you to login and use the Whatsapp service and provides you with all capabilities of an official Whatsapp client, allowing you to create a full-fledged custom Whatsapp client.” - (Lebih lengkap tentang Yowsup main ke sini <https://github.com/tgalal/yowsup/>)

Yowsup ini yang bakal kita pakai buat dapetin username sama password.

Sebelum dapet password, kita harus request code dulu ke WhatsApp. Ada dua cara sebenarnya, cuma cara pertama saya selalu gagal, entah kenapa. Jadi kita langsung ke cara kedua ya.

<br>
**- Konfigurasi Yowsup**

Unduh Yowsup.
```
wget https://github.com/tgalal/yowsup/archive/master.zip
```

Extract Yowsup.
```
unzip master.zip
```

Masuk ke direktori Yowsup.
```
cd yowsup-master/src
```

Ubah nama konfigurasi Yowsup.
```
cp config.example yowsup-cli.config
```

Ubah konfigurasi Yowsup.
```
nano yowsup-cli.config
```

Ubah di bagian
```
cc=62
phone=6281234567890
id=
password=
```

cc= diisi kode nomer negara, untuk indonesia 62

phone= di isi nomer kita masing-masing

Konfigurasi yang lain, di biarin aja :D.

Lalu, ubah perijinan berkas
```
chmod +x yowsup-cli
```

<br>
**- Request Code**

Sila mampir ke sini <http://whitesoft.dyndns.org:2222/whatsapp_sms>

Lalu isikan nomer kita di form yang sudah tersedia dengan format sama seperti di konfigurasi tadi. Dalam contoh ini 6281234567890

Kemudian tunggu sms dari WhatsApp. Kalo udah dapet jangan di bales. Ngabisin pulsa nanti.

<br>
**- Minta Password**

Setelah dapet code dari WhatsApp, yang harus kita lakukan, Jalankan Yowsup. Caranya.
```
./yowsup-cli --register 123-456 --config yowsup-cli.config
```

`123-456` itu kode yang di smsin WhatsApp tadi. Nanti setelah di jalankan akan keluar banyak tulisan. Cari aja yang depannya “pw”. Lalu di salin.

<br>
**4. Kolaborasi Pidgin, WhatsApp Purple dan Yowsup**

Balik ke Pidgin. Isikan username dengan nomor ponsel kamu. dan Password dengan “pw” yang sudah kita dapat tadi. Tinggal tekan Add. Tunggu reaksinya. :))

Coba cek ponsel kamu. WhatsApp pasti akan minta reverify. Jadi saran saya, kalo mau menggunakan whatsapp di Linux. WhatsApp di ponsel di matikan dulu. Kalo mau di pakai lagi, WhatsApp yang di Linux ganti di matikan. Soalnya WhatsApp cuma bisa di pakai di satu perangkat. Untuk cara alternatif bisa gunakan nomor berbeda biar ngga konflik.

Gampang kan WhatsApp-an di Linux :3. Oh iya, saya belum nemu cara untuk sinkronisasi kontak ponsel dengan destop. Jadi kalo WhatsApp-an yang kelihatan hanya nomor ponsel, bukan nama pemilik.
<p align="center">
	<img src="./posts/2013-09-07-whatsapp-client-di-linux-dengan-plugin-pidgin/rect3117.png" height="250px" alt="Mohon di maklumi,">
</p> 

 
Sekian…

<br>
**referensi:**

<https://github.com/davidgfnet/whatsapp-purple/>

<https://github.com/tgalal/yowsup/>

<http://web.davidgf.net/>

<http://whitesoft.dyndns.org:2222/whatsapp_sms>