### **Tutorial Instalasi Spotify di Linux**
_March 4, 2017 Wahyu Asyari M_	

Spotify merupakan salah satu platform pilihan untuk mendengarkan Musik secara online yang kerap dipilih oleh sebagian orang. fitur favorit saya? pilihan track dari playlist bisa disesuaikan dengan mood suasana hati kita. Ah sedap! beberapa info Spotify bisa kalian baca pada Infografis di bawah ini.

<p align="center">
	<img src="./posts/2017-03-04-tutorial-instalasi-spotify-di-linux/all-about-spotify-and-ecosport_527a5b85c6af0_w1500.jpg" height="400px" alt="spotify infographic">
</p> 

Nah bagi pengguna Linux jangan khawatir, karena Aplikasi Spotify bisa diinstal dan dimainkan dengan baik oleh debian dan turunannya. Temasuk ubuntu dan Zorin OS yang saat ini saya pakai buat aktifitas sehari-hari :mrgreen:

Sebelum menjalankan Tutorial Instalasi Spotify di Linux ini, pastikan koneksi intenet stabil. karena total paket yang akan di download sekitar 75Mb.

1. Jalankan Terminal, Tambahkan Spotify repository untuk verivikasi paket

    ```
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886
    ```

2. Tambahkan repository

    ```
    echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list
    ```

3. Update paket yang telah ditambahkan 

    ```
    sudo apt-get update
    ```

4. Install Spotify

    ```
    sudo apt-get install spotify-client
    ```

Nah mudah bukan, jadi apa Playlist favorit kalian di Spotify? 😀