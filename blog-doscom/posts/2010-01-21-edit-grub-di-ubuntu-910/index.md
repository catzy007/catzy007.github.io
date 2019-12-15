### **Edit grub di ubuntu 9.10**
_Diposting oleh Mauren Fitri ID di 05.11 . Kamis, 21 Januari 2010_
<br>
Label: Boot Loader

Perbedaan GRUB dari ubuntu 9.10 dengan seri – seri sebelum nya adalah "`/boot/grub/menu.lst` diganti menjadi `/boot/grub/grub.cfg`".

File grub.cfg adalah file utama dari boot menu pada Ubuntu 9.10 Karmic Koala. File ini memang tidak dianjurkan untuk di edit langsung. Bahkan pada posisi “root”, file ini tidak bisa langsung di edit.

File grub.cfg akan di update saat user mengetikkan printah “sudo update-grub” diterminal.
Letak file grub nya : ==> `/etc/grub.d/` <==.
Sistem akan mengupdate grub.cfg melalui file ini saat user melakukan update grub.


File – file yang ada di folder grub yaitu "`/etc/grub.d/`"
- 00_header
- 05_debian_theme
- 10_linux
- 20_memtest86+
- 30_os-prober
- 40_custom

Langkah untuk meng-edit grub adalah :
1. masuk sebagai root lalu ketik gedit “/boot/grub/grub.cfg” (tanpa tanda petik)
2. Copy "menuentry" yang anda inginkan dari ke /etc/grub.d/40_custom. Menuentry dimulai dengan kata "menuentry" dan di akhiri dengan simbol "}".
3. Anda dapat mengganti tittle menuentry sesuka anda, title tersebut akan muncul saat boot. Misal “ubuntu 9.10 karmic”
4. Setiap menuentry selalu dimulai dengan kata “menuentry” dan di akhiri dengan “}” (kurung kurawal).
5. Hilangkan atribut executable dari /etc/grub.d/20_memtest86+ and /etc/grub.d/30_os-prober dengan menggunakan perintah :
“sudo chmod -x /etc/grub.d/20_memtest86+ /etc/grub.d/30_os-prober” tanpa tanda petik.
6. Jalankan perintah “sudo update-grub” tanpa tanda petik.
7. Reboot..

Langkah poin 5, adalah bila kita hanya menggunakan OS Ubuntu , bila kita mengunakan double OS atau lebih,

Hilangkan atribut executable dari /etc/grub.d/10_linux and /etc/grub.d/20_memtest86+ and /etc/grub.d/30_os-prober dengan menggunakan perintah :

“`sudo chmod -x /etc/grub.d/10_linux /etc/grub.d/20_memtest86+ /etc/grub.d/30_os-prober`” tanpa tanda petik.


Lalu jalankan perintah poin 6 dan 7 ,,

Selamat mencoba,

by : Sauqi,,,

[Referen](http://ddndz.blogspot.com/)