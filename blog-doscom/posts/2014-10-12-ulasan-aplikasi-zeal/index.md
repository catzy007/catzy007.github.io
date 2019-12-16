### **Ulasan Aplikasi: Zeal**
_October 12, 2014 Reza Faiz A Rahman_

**Nama Aplikasi** : Zeal

**Pembuat** : Jerzy Kozera

**Situs** : http://zealdocs.org/

**Kode Sumber** : https://github.com/jkozera/zeal/

<br>
**API**

Dari [Wikipedia](http://www.wikiwand.com/id/Antarmuka_pemrograman_aplikasi), API (Application Programming Interface) adalah sekumpulan perintah, fungsi, serta protokol yang dapat digunakan oleh programmer saat membangun perangkat lunak untuk sistem operasi tertentu. API memungkinkan programmer untuk menggunakan fungsi standar untuk berinteraksi dengan sistem operasi.

Bagi seorang penebar kode, dokumentasi mengenai API ini sangat penting. Biasanya, bahasa pemrograman tertentu menyediakan dokumentasi API lengkap di situs resminya. Buat yang punya koneksi melimpah tentu bukan masalah. Tapi, gimana kalo lagi nggak ada koneksi ?. Contoh kasus, lagi koding dihutan tanpa sinyal misalkan.

<br>
**Zeal**

Solusinya, kita bisa pakai Zeal. Zeal dapat membantu kita menghasilkan dokumentasi lengkap suatu API yang dapat diakses secara luring. Zeal ini terinspirasi dari aplikasi bernama Dash yang hanya tersedia untuk sistem operasi Mac.

Zeal menyediakan lebih dari 140 docsets (istilah untuk satu paket dokumentasi API) yang dapat diunduh secara terpisah. Iya, jadi ketika kita memasang Zeal, belum ada docsets didalamnya.

<br>
**Fitur**

1. Pencarian Cepat 
    <br>
    Setelah pertama kali menjalankan Zeal. Zeal dapat dengan mudah dipanggil melalui pintasan papan ketik `ALT + SPACE`.
2. Pencarian Ganda
    <br>
    Adakalanya kita mendapati satu fungsi API pada beberapa dokumentasi. Dengan Zeal, kita dapat dengan mudah mecarinya pada beberapa docsets sekaligus.
3. Luring (Offline)
    <br>
    Seperti yang sudah dibahas diatas, Zeal dapat mengunduh satu paket dokumentasi API. Sehingga dapat diakses secara luring.
4. Terintegrasi dengan Editor Kode
    <br>
    Yang paling seru Zeal dapat terintegrasi dengan beberapa editor kode. Seperti Emacs, Vim dan Sublime Text. Jadi ketika kita tidak paham dengan satu fungsi API, tinggal pilih fungsinya lalu tekan F1 maka Zeal akan mencarinya secara otomatis.

<br>
**Pemasangan**

Untuk pemasangan cukup mudah karena Zeal sudah tersedia di PPA Ubuntu. Seperti biasa, tambahkan PPA ke daftar repositori kita, perbarui, lalu pasang.

```
$ sudo add-apt-repository ppa:jerzy-kozera/zeal-ppa
$ sudo apt-get update
$ sudo apt-get install zeal
```

<br>
**Kesimpulan**

Zeal mempunyai banyak kelebihan dibandingkan aplikasi sejenis. Misalnya dibandingkan dengan DevHelp yang (setau saya) tidak bisa menambahkan docsets baru. Atau dengan Devdocs.io yang cukup sulit untuk digunakan secara luring.

 

Jadi, nggak kesulitan lagi buat nebar kode, kan ? :))

 