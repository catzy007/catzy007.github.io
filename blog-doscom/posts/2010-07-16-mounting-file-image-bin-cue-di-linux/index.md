### **Mounting file image bin / cue di Linux**
_Diposting oleh Eligio Moniz do Rego di 21.21 . Jumat, 16 Juli 2010_
<br>
Label: blacktea, File System, Networking, Tutorial

Membuka file image .bin / .cue di linux sangatlah gampang, yang harus dilakukan adalah konversi terlebih  dahulu ke format .iso kemudian baru di mounting, namun proses ini cukup sederhana, tetapi membutuhkan aplikasi kecil yang disebut [bchunk](http://he.fi/bchunk/).

> Catatan:
> Penulis menjalankan bchunk di atas distro [TeaLinuxOS 2.0 “Black Tea”](http://tealinuxos.doscom.org/), silakan download paket bchunk sesuai dengan distro Linux yg digunakan.

Berikut langkah-langkahnya:

Install paket bchunk
```
sudo apt-get install bchunk   
```

Untuk mengkonversi suatu file image .bin / .cue gunakan perintah berikut:
```
bchunk image.bin image.cue image.iso
```

Kemudian mount iso image hasil konversi dengan perintah:
```
mount  -o  loop  -t  iso9660  image.iso  /mnt/
```

Sekarang coba buka nautilus dan masuk ke folder /mnt untuk melihat hasilnya. 

Good luck :)

