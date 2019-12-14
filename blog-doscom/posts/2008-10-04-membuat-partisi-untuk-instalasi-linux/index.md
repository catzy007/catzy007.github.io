### Membuat Partisi Untuk Instalasi Linux
Diposkan oleh Eligio M. Do Rego di 02:32 . Sabtu, 2008 Oktober 04
<br>
Label: Tools Partisi, Tutorial

_**Catatan**: Artikel ini penulis ambil dari situs [linuxindo.web.id](http://linuxindo.web.id) tanpa merubah isi aslinya (tetapi hanya menambahkan sedikit kalimat hehehe)._

Hal yang harus diketahui sebelum menginstall Linux adalah dengan mengetahui seluk-beluk pemartisian terlebih dahulu, karena kegagalan atau kesalahan dalam mempartisi bisa berakibat fatal.

Partisi adalah ruangan di dalam sebuah hardisk. Sebuah partisi bisa di buat maksimal 4 partisi PRIMARY. Jika, salah satu partisi PRIMARY anda jadikan partisi EXTENDED (anda hanya bisa membuat maksimal 1 partisi EXTENDED), anda bisa membuat unlimited partisi logical.

_**Catatan**: Di Windows, anda hanya bisa membuat 2 partisi primer (win xp ke atas bisa membaca 4 (?) partisi) saja (coba tanya kenapa?), dan partisi logical dibatasi jumlah abjad yang tersisa (kenapa ya?)._

**Partisi Yang Diperlukan Linux**
Linux minimal membutuhkan satu partisi saja, partisi root (/). Di dalam partisi root, Linux akan membuat beberapa direktori-direktori yang dibutuhkan, seperti sistem ubuntu saya ini:

    1. /bin
    Linux meletakkan semua executable sistem internalnya disini

    2. /boot
    Linux meletakkan file-file untuk booting disini, seperti kernel, initrd, boot loader, dsb

    3. /cdrom -> media/cdrom
    Ini adalah symlink untuk mount point /media/cdrom (optional)

    4. /dev
    Semua perangkat keras dikomputer anda di-mount (di baca) di sini sebagai sebuah file. (Di Linux, segalanya adalah file). Misalkan, /dev/ram0, ini adalah mount point untuk ram anda.

    5. /etc
    Biasanya file-file konfigurasi linux anda dikumpulkan disini

    6. /home
    Semua user memiliki direktori pribadi di dalam home ini, kecuali root (dan user-user istimewa seperti gdm, www, dsb)

    7. /lib
    Library yang digunakan sistem anda, dikumpulkan disini

    8. /lost+found
    Semua file/direktori yang kehilangan induk dikumpulkan disini (optional)

    9. /media
    Semua removable device di mount di sini, misalnya USB Disk

    10. /mnt
    Ini juga mount point induk untuk device. Saat ini sudah jarang digunakan.

    11. /opt
    Anda bisa menggunakan direktori ini untuk apa saja, misalnya lampp, crossover, menggunakan ini untuk instalasi. Opt=optional=tidak terlalu penting

    12. /proc
    Semua resource yang saat ini digunakan sistem anda, terdaftar di sini

    13. /root
    Ini adalah home folder super user, pusat komando dan keramat di sistem anda

    14. /sbin
    Aplikasi-aplikasi yang berhubungan dengan sistem (non-internal) diletakkan disini. Misalnya, grub

    15. /srv
    Ini saya tidak tahu fungsinya apa, soalnya ini kosong

    16. /sys
    Ini mungkin berkaitan dengan sistem juga, saya kurang jelas soal ini

    17. /tmp
    Ini direktori sementara untuk segala yang memerlukan ruang temporer. Misalnya saat anda menginstal aplikasi, file instalasi akan diekstrak disini, kemudian dihapus setelah selesai.

    18. /usr
    Ini direktori penting. Aplikasi-aplikasi yang berhubungan dengan user diletakkan disini. Di sini juga letak manual, artwork, dan sebagainya.

    19. /var
    Seperti /usr, direktori ini penting juga. Buat apa ya … (mmm, www server, ftp server, apt-cache, wah banyak banget!)

Tetapi, dalam dunia nyata, adalah praktik yang bagus jika kita membuat partisi tersendiri untuk masing-masing direktori. Biasanya anda akan memerlukan dua partisi tambahan lagi, untuk memori swap dan direktori /home.
Partisi swap berfungsi untuk sistem yang kekurangan RAM atau RAM-nya tidak mencukupi, besarnya partisi swap 2x lebih besar dari RAM yang ada.

_**Contoh**: Apabila Anda memiliki RAM sebesar 256 MB, buat swap sebesar 512 MB._

Partisi /home dipakai untuk meletakkan data-data user selain root.
Manfaatnya adalah, saat sistem anda mengalami crash, anda hanya perlu memformat (jika diperlukan) partisi root saja (dalam solusi re-install!), tanpa perlu mem-format /home anda.

Jika Anda penasaran ingin mempraktekkan secara langsung cara membuat partisi, silakan merujuk pada artikel yang pernah penulis posting pada edisi yang lalu “Meresize dan Memartisi Harddisk dengan Menggunakan GParted“.

Cukup sekian....

