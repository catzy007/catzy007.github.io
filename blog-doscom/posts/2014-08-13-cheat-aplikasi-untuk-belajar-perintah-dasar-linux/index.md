### **Cheat, Aplikasi untuk Belajar Perintah Dasar Linux**
_August 13, 2014 - August 12, 2014 Reza Faiz A Rahman_	

<p align="center">
	<img src="./posts/2014-08-13-cheat-aplikasi-untuk-belajar-perintah-dasar-linux/1908357_665487453530106_5918562791147088105_n.jpg" height="250px" alt="img">
</p> 

Sering lupa sama perintah-perintah di terminal Linux ?. Mungkin kamu perlu aplikasi ini, Cheat namanya. Iya, jadi ngga cuma game yang bisa di-cheat. Terminal Linux juga. Selain itu aplikasi ini bisa digunakan untuk membantu kamu yang lagi belajar perintah-perintah pada terminal Linux. Cara kerja cheat itu memberi penjelasan tentang perintah-perintah di Linux. Penasaran gimana cara kerjanya ?, yuk dipasang dulu :).

1. Pasang python, pip (Python Package Installer) & git // Biasanya kalo kamu pakai ubuntu atau turunannya, python sudah terpasang secara default.
    <br>
    ```
    sudo apt-get install python python-pip git
    ```
1. Pasang ketergantungan paket (dependencies) dari aplikasi Cheat.
    <br>
    ```
    sudo pip install docopt pygments
    ```
1. Clone repository Cheat dari github.
    <br>
    ```
    git clone https://github.com/chrisallenlane/cheat.git
    ```
1. Masuk ke direktori Cheat, lalu pasang.
    <br>
    ```
    cd cheat
    sudo python setup.py install
    ```
1. Setelah dipasang, coba cek dulu versi dari Cheat.
    <br>
    ```
    cheat -v
    cheat 2.1.0
    ```

Trus kalo udah kepasang gimana cara pakainya ?

Misalnya aja kamu abis download file kulit manggis 200 MB dengan ekstensi tar.gz lalu kamu bingung gimana cara nge-ekstraknya, dengan cheat bisa jadi kamu nggak akan bingung.

<br>
Coba jalankan perintah ini
```
$ cheat tar
```

Nanti akan keluar seperti ini
```
# To extract an uncompressed archive:
tar -xvf /path/to/foo.tar

# To create an uncompressed archive:
tar -cvf /path/to/foo.tar /path/to/foo/
```

Jadi, udah ngga ada alesan lagi buat bingung belajar perintah-perintah dasar Linux, kan ? :))

Gambar dipinjam dari [sini](https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t1.0-9/1908357_665487453530106_5918562791147088105_n.jpg)
