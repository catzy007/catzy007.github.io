### **Tutorial Workshop Ionic dengan Angular JS**
_November 11, 2014 - November 11, 2015 nurul anisa_

<br>
Tutor : [Muhammad Faisal Rahman](http://www.facebook.com/fzlrhmn)

Ditulis : [Nurul Anisa Sri Winarsih](http://facebook.com/anisa.lola.54)

Hari,Tanggal : Sabtu, 25 Oktober 2014

Tempat : Lab HW UDINUS

OS : TeaLinux OS 6.0 – Jasmine Tea

<br>
Kenapa harus Web Apps?
* Development yang cepat,
* Cross platform (iOS, Android, Firefox, etc), dapat bekerja di berbagai platform
* Tidak memakan waktu lama dan lebih efisien
* Bahasa pemrograman lebih mudah
* Based on HTML5, CSS3, JS
* Device native API yang sudah banyak tersedia.
Kekurangan Web Apps:
* Lebih berat
* Fragmented

<br>
**Let’s start workshop 😀**

Ini pemanasan yaa..
* Buka alamat [Angular JS](http://angularjs.org/). Buka tab developer lalu download – pilih yang versi 1.3.0 karena ini versi paling baru dan stabil

* Masuk **1.3.0** lalu pilih **angular.js**

* Isi dari Angular JS sebagai berikut:

* Copy semua alamatnya
* Buka sublime : klik logo teaLinux – Programming – Sublime
* Untuk sementara, buat 1 folder di dekstop dan buat file **index.html** di dalamnya. Ketik seperti yang dibawah ini:

* Tulisan yang ada di box akan dicetak ulang secara realtime oleh tulisan yang ada dibawahnya, baik itu menambah atau menghapus huruf juga akan mengikuti.
* Buat 1 file bernama **app.js** di folder yang sama. Untuk tahap pertama tuliskan sebagai berikut:
    `var app = angular.module('workshop',['appControllers']);`
* Perbaharui index.html seperti di bawah ini:

* Buat file **controller,js**, rombak codingan seperti dibawah ini:

* Buat objek baru yaitu employee di controller.js seperti ini:

<br>
**Hasilnya sebagai berikut:**


Objek yang kita buat berupa array (kumpulan dari objek-objek), berawal dari index ke – 0 dan seterusnya.

**Intermezzo**: cara untuk mengecek apakah json yang kita tulis itu benar atau tidak, silahkan copy-paste codingan Anda di alamat ini [JSON LINT](http://jsonlint.com/)

<br>
**Ayo Kita Mainan sama IONIC :3**

Ionic adalah framework untuk membuat aplikasi mobile dengan HTML5. Untuk lebih lengkap link nya di sini “<http://ionicframework.com/>”. Let’s play baby :*

* Gunakan komputer yang sudah terinstall **node.js, cordova, ionic command-line tools**
* Buka terminal. Ketik “ionic”, lalu ketik “ionic start workshop tabs”
* Otomatis akan download dari ionic, akan muncul seperti ini:

* Kalau sudah terdownload, ketik “cd workshop”, lalu ketik “ionic serve”

* Akan ada pilihan no 1. ada angka-angka dan no 2. localhost, lalu pilih localhost
* Dengan otomatis dashboard akan terbuka di web browser masing-masing dengan alamat
* localhost:8100/#/tab/dash , seperti iniiii..

* Kalo lama download nya ngopy punya’e temen yaa… lalu ulangi langkah nomor 4 sampai 6 😀
* Sekarang kita edit-edit yuk, seperti gambar di bawah ini :

* Dan tampilan akan berubah seperti ini

* Yuuuuk, edit lagi
    * controller.js
    * tab-friends.js
    * Pada **jsonp**, kita menggunakan html sebagai berikut : <http://public-api.wordpress.com/rest/v1/freshly-pressed>, tetapi ditambah **?callback=JSON_CALLBACK** untuk memanggil. Sesungguhnya data yang kita ambil dari alamat berikut ini <https://wordpress.com/fresh>, konten yang berisi halaman artikel-artikel wordpress.
    * Tadaa, hasilnya seperti ini
* Edit untuk bagian detail friend
    * controller.js
    * tab-friends.js
    * app.js
* Cara membuat aplikasi
* buka terminal lagi, ketik “ionic platform add android”
* Tunggu proses yang sedang berjalan
* Cara membangun project, ketik “ionic build android”

<br>
**Share folder dari tentor, mas Faisal:**

<https://dl.dropboxusercontent.com/u/38370071/workshop.zip>

twitter : @fzlrhmn_

fb : faizal rahman

email : faizal.rahman@gmail.com

hp : 081328305756

<br>
**Daftar Isi**

* [Tutorial Workshop Ionic dengan Angular JS](http://doscom.org/blog/tutorial-workshop-ionic-dengan-angular-js-3/#tutorial-workshop-ionic-dengan-angular-js)
    * [Let’s start workshop 😀](http://doscom.org/blog/tutorial-workshop-ionic-dengan-angular-js-3/#tutorial-workshop-ionic-dengan-angular-js)
        * [Ini pemanasan yaa..](http://doscom.org/blog/tutorial-workshop-ionic-dengan-angular-js-3/#lets-start-workshop-d)
    * [Ayo Kita Mainan sama IONIC :3](http://doscom.org/blog/tutorial-workshop-ionic-dengan-angular-js-3/#ayo-kita-mainan-sama-ionic-3)
        * [Daftar Isi](http://doscom.org/blog/tutorial-workshop-ionic-dengan-angular-js-3/#daftar-isi)

* Written with [StackEdit.](https://stackedit.io/)