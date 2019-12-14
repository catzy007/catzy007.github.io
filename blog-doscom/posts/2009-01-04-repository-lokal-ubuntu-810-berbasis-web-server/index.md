### **Repository Lokal Ubuntu 8.10 Berbasis Web Server**
_Diposkan oleh Eligio M. Do Rego di 23:24 . Minggu, 2009 Januari 04_
<br>
Label: Repository, Tutorial, Ubuntu

Artikel penulis kali ini, masih tetap berkaitan dengan Repository Ubuntu 8.10. Intrepid Ibex. Dimana sebelumnnya penulis sudah pernah menulis artikel tentang “Repository Lokal Ubuntu 8.10 Menggunakan file ISO”.
Dan masih tetap menggunakan repository dari image DVD yang masih berbentuk file ISO, penulis akan menunjukkan cara membangun sebuah server repository lokal berbasis web server.
Sehingga apabila server repository lokal tersebut terhubung dengan LAN (Local Area Network) di rumah, kantor atau kost atau etc, rekan-rekan yang membutuhkan paket-paket Ubuntu 8.10 tinggal download saja langsung dari server.

Langkah-langkahnya sebagai berikut :

<br>
**A. INSTALASI WEBSERVER**

Install apache agar komputer Anda siap menjadi web server. Gunakan Synaptic Package Manager dan search untuk menginstall Apache2.

Setelah Apache2 terinstall, maka webserver Anda berada dalam folder /var/www.

<br>
**B. MENEMPATKAN FILE ISO**

Simpan file iso repository Ubuntu 8.10 Intrepid Ibex di folder yang Anda inginkan, dalam praktek ini penulis menyimpan file iso tersebut di /home/repository/ubuntu

<br>
**C. MOUNTING FILE ISO**

Buat folder-folder untuk me-mount file-file iso tersebut dengan perintah (login sebagai root dengan perintah sudo su):
```
Code:

mkdir -p  /var/www/repository/ubuntu/repo1
mkdir   /var/www/repository/ubuntu/repo2
mkdir   /var/www/repository/ubuntu/repo3
mkdir   /var/www/repository/ubuntu/repo4
mkdir   /var/www/repository/ubuntu/repo5
mkdir   /var/www/repository/ubuntu/repo6
```

**Penjelasan:**
Opsi -p digunakan untuk membuat direktori beserta sub direktorinya. Dalam praktek ini ada tiga direktori yang dibuat antara lain direktori repository berserta sub direktori ubuntu dan `repo[1-6]`. Sedangkan /var/www merupakan direktor webserver.

Tetap sebagai root, mount file iso Repository Ubuntu 8.10 kedalam
direktori yang sudah dibuat tersebut dengan perintah seperti dibawah ini:
```
Code:

mount -o loop -t iso9660  /home/repository/ubuntu/repo1.iso  /var/www/repository/ubuntu/repo1
mount -o loop -t iso9660  /home/repository/ubuntu/repo2.iso  /var/www/repositor /ubuntu/repo2
mount -o loop -t iso9660  /home/repository/ubuntu/repo3.iso  /var/www/repository/ubuntu/repo3
mount -o loop -t iso9660  /home/repository/ubuntu/repo4.iso  /var/www/repository/ubuntu/repo4
mount -o loop -t iso9660  /home/repository/ubuntu/repo5.iso  /var/www/repository/ubuntu/repo5
mount -o loop -t iso9660  /home/repository/ubuntu/repo6.iso  /var/www/repository/ubuntu/repo6
```

**Penjelasan:**
Jika ingin file iso tersebut dapat dimount secara otomatis pada saat sistem linux dijalankan, tambahkan ke /etc/fstab (di terminal ketikkan sudo gedit /etc/fstab) perintah berikut:
```
Code:

/home/repository/ubuntu/repo1.iso  /var/www/repo1  iso9660  ro,loop,auto  0 0
/home/repository/ubuntu/repo2.iso  /var/www/repo2  iso9660  ro,loop,auto  0 0
/home/repository/ubuntu/repo3.iso  /var/www/repo3  iso9660  ro,loop,auto  0 0
/home/repository/ubuntu/repo4.iso  /var/www/repo4  iso9660  ro,loop,auto  0 0
/home/repository/ubuntu/repo5.iso  /var/www/repo5  iso9660  ro,loop,auto  0 0
/home/repository/ubuntu/repo6.iso  /var/www/repo5  iso9660  ro,loop,auto  0 0
```

<br>
**D. MEMBANGUN SOURCE LIST**

* Menggunakan Synaptic Package Manager:
    1. Buka `System -> Administration -> Synaptic Package Manager`
    2. Pilih `Settings -> Repositories`
    3. Pilih tab `“Third-Party Software”`
    4. Hilangkan centangan untuk sumber-sumber repository dari internet dan CD-ROM pada Tab Third-Party Software.
    5. Pilih `“Add”`
    6. Masukkan baris dibawah ini:
        ```
        Code:

        deb  http://192.168.1.2/repository/ubuntu/repo1  intrepid main restricted
        deb  http://192.168.1.2/repository/ubuntu/repo2  intrepid main restricted multiverse
        deb  http://192.168.1.2/repository/ubuntu/repo3  intrepid universe
        deb  http://192.168.1.2/repository/ubuntu/repo4  intrepid universe
        deb  http://192.168.1.2/repository/ubuntu/repo5  intrepid universe
        deb  http://192.168.1.2/repository/ubuntu/repo6  intrepid universe
        ```
    7. Klik `“Add”` lagi, lalu isikan baris berikutnya. Lakukan langkah ini hingga semua baris tersebut selesai anda masukkan.
    8. Klik `“Close”`
    9. Klik `“Reload”` pada ikon di sebelah kiri atas

    **Penjelasan:**
    http://192.168.1.2 adalah alamat webserver lokal dalam jaringan penulis. Sedangkan 192.168.1.2 merupakan alamat server lokal penulis.

* Menggunakan Terminal
    1. Buka terminal lalu login sebagai root
        ```
        Code:

        sudo su
        ```

    2. Sebelumnya backup dulu source.list dan buat dengan yang baru.
        ```
        Code:

        mv /etc/apt/sources.list /etc/apt/source.list-backup
        touch /etc/apt/source.list
        ```

    3. Tambahkan baris berikut di /etc/apt/sources.list
        ```
        Code:

        gedit /etc/apt/sources.list
        
        #Ketikkan semua baris dibawah ini:

        deb  http://192.168.1.2/repository/ubuntu/repo1  intrepid main restricted
        deb  http://192.168.1.2/repository/ubuntu/repo2  intrepid main restricted multiverse
        deb  http://192.168.1.2/repository/ubuntu/repo3  intrepid universe
        deb  http://192.168.1.2/repository/ubuntu/repo4  intrepid universe
        deb  http://192.168.1.2/repository/ubuntu/repo5  intrepid universe
        deb  http://192.168.1.2/repository/ubuntu/repo6  intrepid universe
        ```

<br>
**E. PENGUJIAN**

Reboot komputer Anda
Bukalah web browser dan ketik http://192.168.1.240/repository/ubuntu

Jika dalam browser muncul struktur folder repository, berarti anda telah sukses membangun repository lokal Ubuntu 8.10 Intrepid Ibex dengan web server apache.

Good Luck...!!!

<br>
**Referensi :**

<http://wiki.ubuntu.id.org/DokumentasiKomunitas/TutorialRepositoriLokal>

<http://abrassia.wordpress.com/2008/08/08/local-repository-ubuntu-804/>
