### **Blokir Konten Pornografi Dengan DNS Nawala di Linux**
_By doscom - August 26, 2010_
<br>
Posted in: Internet, Networking

<p align="center">
	<img src="./posts/2010-08-26-blokir-konten-pornografi-dengan-dns-nawala-di-linux/logo.nawala.final.150x170.png" height="100px" alt="img1">
</p> 

DNS Nawala adalah sebuah layanan DNS Filter yang bebas digunakan oleh pengguna internet yang membutuhkan saringan situs internet negatif. DNS Nawala membantu pengguna internet menyaring jenis konten negatif yang tidak sesuai dengan peraturan perundangan, nilai dan norma sosial, adat istiadat dan kesusilaan bangsa Indonesia seperti situs-situs yang berisi konten pornografi dan perjudian. Selain kedua jenis situs negatif di atas, DNS Nawala juga akan menyaring situs Internet yang mengandung konten berbahaya seperti seperti malware, situs phising (penyesatan) dan sejenisnya. Layanan DNS Nawala sepenuhnya Gratis, DNS Nawala dibiayai dari donasi yang diberikan oleh pihak- pihak yang peduli tentang pentingnya Internet yang bersih dan aman.

sumber: <http://www.nawala.org/>

Berikut merupakan petunjuk gampang bagaimana menggunakan DNS Nawala di Linux:

1. Buka Terminal atau Konsol, lalu login sebagai root.
2. Edit file `/etc/resolv.conf` dengan editor favorit Anda: `# gedit /etc/resolv.conf`
    ```
    kemudian isikan sintaks berikut ini:

    nameserver 180.131.144.144
    nameserver 180.131.145.145
    ```
    Simpan dan keluar dari editor gedit.
3. Buka aplikasi browser dan coba akses ke situs porno favorit anda (just kidding hehe), jika situs yang diakses masuk dalam daftar blokir, kemungkinan akan tampil halaman seperti pada gambar di bawah ini:
<p align="center">
    <img src="./posts/2010-08-26-blokir-konten-pornografi-dengan-dns-nawala-di-linux/Screenshot-5.png" height="250px" alt="img2">
</p> 

Jika anda menemukan situs porno yang lolos dari pemblokiran, anda dapat melaporkan situs tersebut ke website <http://www.nawala.org>.

Selamat mencoba!

Eligio Moniz do Rego
<http://avancalinux.blogspot.com/>