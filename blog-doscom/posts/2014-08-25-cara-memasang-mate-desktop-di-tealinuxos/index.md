### **Cara Memasang Mate Desktop di TeaLinuxOS**
_August 25, 2014 Reza Faiz A Rahman_

<br>
MATE is a desktop environment forked from the now-unmaintained code base of GNOME 2. (Wikipedia)

Dulu, waktu awal-awal pengembangan GNOME 3 banyak komunitas yang menentang karena tampilan antarmukanya sangat berbeda dengan GNOME 2. Di satu sisi pengembang GNOME 3 punya alasan yang kuat untuk mengubah tampilan. Di sisi lain, pengguna sudah nyaman dengan tampilan GNOME 2. Pada akhirnya, ada beberapa orang yang meneruskan pengembangan GNOME 2 dengan nama “Mate”.

Seru ya, ketika satu produk open source udah nggak didukung oleh pengembang, tapi karena keterbukaannya, pengembang lain bisa meneruskan produk tersebut. Beda banget sama produk closed source, ketika udah nggak didukung, yasudah. Paling cuma bisa lambai tangan ucap salam perpisahan. Atau mungkin tetap dipakai dengan resiko rentan kerusakan. Ya nggak pak ? :p

Udah, cukup. Terus cara pasangnya gimana dong ?

Begini…

Oh, iya karena TeaLinuxOS 6.0 merupakan turunan Ubuntu 13.10. Jadi (sampai saat ini) Mate yang bisa terpasang mentok di 1.6 (walau pengembangannya sudah sampai 1.8).

1. Tambah repository Mate Desktop.
    ```
    $ sudo add-apt-repository "deb http://packages.mate-desktop.org/repo/ubuntu precise main"
    ```
2. Perbarui daftar repository.
    ```
    $ sudo apt-get update
    ```
3. Pasti keluar galat, kan ?. Kalo iya, jalankan perintah berikut
    ```
    $ sudo apt-get --yes --quiet --allow-unauthenticated install mate-archive-keyring
    ```
4. Perbarui lagi daftar repository-nya.
    ```
    $ sudo apt-get update
    ```
5. Untuk memasang paket Mate secara lengkap bisa jalankan perintah berikut
    ```
    $ sudo apt-get install mate-desktop-environment
    ```
    kalo ngga mau lengkap bisa pakai yang ini
    ```
    $ sudo apt-get install mate-core
    ```
6. Klik Tea Menu > Logout
7. Kemudian masuk lagi, tapi pada pilihan lingkungan desktop, silahkan pilih Mate.

Nah, setelah masuk, bagi yang pernah merasakan GNOME 2 pasti berasa mengenang masa lalu sama gebetan. Tapi tenang aja, kamu nggak sendirian.

Yang kangen sama Compiz, katanya Mate juga cocok sama Compiz. Cuma saya sendiri belum mencobanya. Mungkin besok lagi.

Berikut beberapa tangkapan layar TeaLinuxOS Jasmine rasa White Tea:

<p align="center">
	<img src="./posts/2014-08-25-cara-memasang-mate-desktop-di-tealinuxos/2H23rcQ.png" height="250px" alt="img1">
    <br>
    <img src="./posts/2014-08-25-cara-memasang-mate-desktop-di-tealinuxos/E44ayi8.png" height="250px" alt="img2">
    <br>
    <img src="./posts/2014-08-25-cara-memasang-mate-desktop-di-tealinuxos/Hd3YpoX.png" height="250px" alt="img3">
    <br>
</p> 

Suka banget sama wallpaper “Anteapiracy” ini. Kalo tidak salah ingat, ini wallpaper default di TeaLinuxOS 1.0 tapi tetap disertakan pada rilis White Tea.

“The opensource has come true. This is the time to revenge” :’)

P.S. : Saya iseng ngecek penggunaan memori Mate sama LXDE (tealinux-light) di Jasmine. Ternyata nggak beda jauh, sekitar 170 MB. Kalo gini, kira-kira TeaLinuxOS versi selanjutnya pake desktop apa ya ?. Kalo Mate, bearti CLBK dong, tapi beda orang~ #halah

<p align="center">
	<img src="./posts/2014-08-25-cara-memasang-mate-desktop-di-tealinuxos/QKeNUbb.png" height="250px" alt="img4">
</p> 