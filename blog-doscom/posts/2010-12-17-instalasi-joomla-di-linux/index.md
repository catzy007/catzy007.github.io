### **Instalasi joomla di Linux**
_Posted by ulilupil on Dec 17, 2010_
in Joomla, News, Tutorial | 3 comments	

Penggunaan aplikasi joomla bagi programmer web biasanya sangat penting. Namun orang yang masih awam untuk sistem operasi linux begitu kebingungan untuk instalasi aplikasi ini. Untuk instalasi joomla biasanya juga diperlukan aplikasi web server. Salah satu aplikasi web server yang familiar adalah XAMPP yang mempunyai banyak kelebihan dibanding aplikasi web server yg lain. Aplikasi XAMPP untuk Linux ato biasa disebut LAMPP bisa di download disini. Kemudian jgn sampe amnesia untuk download joomlana juga  disini.

Untuk memudahkan dalam instalasi, letakkan XAMPP dan Joomla yg uda di download  di desktop aja,,

Kemudian untuk proses instalasinya bisa mengikuti petuah dari saya,,

Ok,, lets play,,

    Masuk ke gnome-terminal,, kalo yg gak tau bs di pandu kok, kalo yang make ubuntu bisa lewat Applications –> Accesories –> Terminal
    ketikkan “sudo su” (tanpa petik) untuk masuk sebagai root
    menuju ke directory dimana lampp dan joomla diletakkan yaitu di desktop dengan mengetikkan perintah “cd Desktop” (tanpa tanda petik)
    install lampp dengan perintah “tar xvfz xampp-linux-1.7.3a.tar.gz -C /opt” (nonton gambar di bawah ini kalo gag jelas)

    Setelah selesai install lampp, ubah permission lampp secara keseluruhan  dengan perintah “chmod 775 -R /opt/lampp”

ubah permission lampp

    Untuk menjalankan lampp menggunakan perintah “/opt/lampp/lampp start”
    Untuk menghentikan lampp menggunakan perintah “/opt/lampp/lampp/stop”
    buka browser dan ketikkan “http://localhost”

lampp

Jika muncul keterangan seperti gambar diatas, berarti lampp sudah berjalan dengan baik.,

    edit file “php.ini” yang berada pada posisi /opt/lampp/etc/php.ini untuk menonaktifkan “display error” saat instalasi joomla nantinya. Caranya masih di terminal dengan mengetikkan “gedit /opt/lampp/etc/php.ini”
    Setelah Muncul tampilan tex yg banyak, cari baris ini “display_errors = On”(langsung search aja pake ctrl+F), ubah posisi “On” menjadi “Off” lalu langsung di save

    restart lampp dengan perintah “/opt/lampp/lampp restart”

Langkah selanjutnya yaitu yg kita tunggu2, instalasi joomla

    kembali lagi kita masuk ke dunia text yaitu terminal, hehe
    buat direktori untuk tempat dmana joomla akan diletakkan yaitu di /opt/lampp/htdocs/ misalnya kita beri nama “joomla” caranya dengan perintah lagi yaitu “mkdir /opt/lampp/htdocs/joomla”
    manuver kita selanjutnya yaitu meletakkan seluruh file joomla yang telah kita download tadi menuju ke direktori yg sudah kita buat tadi yaitu /opt/lampp/htdocs/joomla caranya dengan cara perintah “unzip Joomla_1.5.22-Stable-Full_Package.zip -d /opt/htdocs/joomla/”
    jangan lupa mengubah permission folder htdocs dan subfoldernya agar mudah kita edit. caranya “chmod 777 -R /opt/lampp/htdocs/”
    Selesai sudah pemindahan joomla di web server kita, untuk menguji buka browser dan masukkan alamat “localhost/joomla” kalo berhasil gambarnya kyak di bawah ini ni,,

masuk joomla

pilih bahasa (next):

pemeriksaan sebelum instalasi (next)

License (next)

Database Configuration

di isi begini saja

Host Name : localhost
Username : root
Password : (dikosongin aja)
Database Name : diisi terserah aja (sesuaikan) (next)

FTP Config (next)


Main Config

Site Name : isi buat nama sitenya

Your E-mail : diisi alamat email

Admin Password: isi buat login ke Back-End Joomla.

jika membutuhkan sampel buat belajar, klik “install sample data” (next)
Finish

baca baik-baik keterangan tersebut, hapus direktori instalasi menggunakan perintah “rm -rf /opt/lampp/htdocs/joomla”
tampilan joomla setelah diinstall


Administration Login
masukan

Username : admin

Password : password yg telah di buat untuk masuk Back-End tadi trus login

ini Tampilan Back-End joomla

Oke,, sekian dulu tutorial dari saya,, Keep Sharing and Trying
