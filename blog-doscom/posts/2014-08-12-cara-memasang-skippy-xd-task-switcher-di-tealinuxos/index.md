### **Cara memasang Skippy-XD, Task Switcher di TeaLinuxOS**
_August 12, 2014 Reza Faiz A Rahman_

Skippy-XD is a program that provides Exposé-like features found on the [Mac OS X](http://en.wikipedia.org/wiki/OS_X) operating system. It is a standalone application for providing a window.

Yup, Biasanya di TeaLinuxOS kita lebih mengenal _task switcher_ dalam bentuk daftar (_list_) berupa taskbar list pada panel.

Kebetulan, TeaLinuxOS versi terbaru, 6.0 (Jasmine) pada sesi default menggunakan dock di bagian bawah tanpa menggunakan taskbar list. Mungkin, yang belum biasa menggunakan sesi ini akan kebingungan ketika berpindah-pindah antar jendela yang masih satu aplikasi. Karena kedua jendela akan terbuka bersamaan. Untuk memilih salah satu sebetulnya mudah, bisa dengan cara klik kanan lalu pilih jendela yang diinginkan. Namun cara ini kurang efisien.

Ada cara yang lebih efisien, yaitu menggunakan Skippy-XD. Skippy-XD merupakan salah satu task switcher yang ada pada [Linux](http://en.wikipedia.org/wiki/Linux). Skippy-XD ini berfungsi untuk memudahkan perpindahan antar window dalam mode grafis.

Untuk lebih jelas bisa lihat video berikut:
<p align="center">
1. <iframe src="http://www.youtube.com/embed/gVRPCd7OS38" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</p>

Lalu, gimana cara memasangnya di TeaLinuxOS ?

Gini nih caranya:

<br>
**Skippy-XD**

1. Karena Skippy-XD tidak ada di repositori Ubuntu, jadi kita harus menambahkan PPA-nya terlebih dulu.
    <br>
    ```
    $ sudo add-apt-repository ppa:landronimirc/skippy-xd-daily
    ```

1. Update (perbarui) lalu pasang.
    <br>
    ```
    $ sudo apt-get update
    $ sudo apt-get install skippy-xd
    ```

1. Jalankan Skippy-XD dengan perintah
    <br>
    ```
    $ skippy-xd --start-daemon &
    ```

1. Panggil dengan perintah
    <br>
    ```
    $ skippy-xd --activate-window-picker

    ```

Tapi, bakal repot juga kalo manggilnya harus lewat terminal. Terus gimana, dong ?

Kita bisa pakai Hot Corner. Iya, biasanya ada yang panas-panas dipojokan. Jadi, ketika kita mengarahkan mouse ke pojok yang panas kita bisa otomatis manggil Skippy-XD tadi.

<br>
**Brightside**

Untuk mengaktifkan Hot Corner kita bisa menggunakan aplikasi Brightside. Cara pasang dan pengaturannya seperti ini:

1. Kalo Brightside ini udah ada di repositori Ubuntu, jadi pasangnya seperti biasa
    <br>
    ```
    $ sudo apt-get install brightside
    ```

1. Panggil brightside dengan cara tekan tombol
    <br>
    ```
    ALT+F2
    ```

1. Pada kotak dialog Run, masukkan perintah
    <br>
    ```
    brightside-properties
    ```

1. Setelah muncul brightside properties, silahkan pilih pojokan yang paling panas menurut kamu. Centang, lalu pilih Custom Action. Kemudian masukkan perintah skippy-xd. Kalo pojok sebelah kanan saya kasih perintah Toggle Showing Desktop fungsinya untuk minimise all window. Satu lagi, dibagian Delay geser ke paling kiri supaya Skippy-XD bisa langsung jalan ketika mouse diarahkan.

Klik close, klik close lagi.

Coba arahkan mouse kepojokan panas tadi, bisa kan ? :)).

<br>
**Autostart**

Oh, iya. Skippy-XD & Brightside ini belum bisa berjalan otomatis ketika komputer di restart karena itu, kita harus memasangnya dibagian autostart. Caranya gini:

1. Klik `Tea menu –> Preferences –> Default applications for LXSession`
1. Pilih menu `Autostart` di sebelah kiri.
1. Dibagian bawah isi dengan `@brightside` lalu klik `Add`
1. Untuk menambahkan Skippy-XD isi dengan `@skippy-xd --start-daemon` lalu klik `Add`

<p align="center">
	<img src="./posts/2014-08-12-cara-memasang-skippy-xd-task-switcher-di-tealinuxos/desktop_1_003.png" height="250px" alt="MXMG address">
</p> 

Tutup jendela Lxsession Default Apps.

Buat kamu yang mau ikut kontribusi pengembangan Skippy-XD, bisa langsung ke halaman Github-nya di [sini](https://github.com/richardgv/skippy-xd).

Sekarang, TeaLinuxOS kamu makin nyaman dipakai kan ? :*