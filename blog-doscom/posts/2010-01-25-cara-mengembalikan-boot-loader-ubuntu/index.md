### **Cara Mengembalikan Boot Loader Ubuntu 9.10**
_Diposting oleh Dinus Open Source Community di 13.03 . Senin, 25 Januari 2010_
<br>
Label: Boot Loader, Linux, Tutorial, Ubuntu

Langsung aja gan,, kemarin saya punya masalah dengan grub laptop saya setelah saya install windows7, grub ubuntu saya tertutup.
Brikut ini adalah cara2 mengembalikan grub ubuntu 9.10 yng tertutup:

1. Nyalakan PC/laptop dan booting dari LiveCD Ubuntu atau flashdisk (yang sudah terisi OS Ubuntu 9.10)
2. Masukkan LiveCD Ubuntu ke dalam CD-ROM (atau flashdisk, tergantung mana yang ingin digunakan).
3. Pilih Try Ubuntu without any changes to your computer. Tunggu sampai Ubuntu tampil dengan sempurna.
4. Mount partisi linux yang tertutup melalui nautilus
<p align="center">
    <img src="./posts/2010-01-25-cara-mengembalikan-boot-loader-ubuntu/upload1.jpg" height="250px" alt="img1">
</p> 

5. Buka terminal (klik `Applications > Accessories > Terminal`, atau tekan kombinasi tombol Ctrl+Alt+F2).
6. Ketik `sudo su` ubuntu kemudian ketik `grub-install --root-directory=/media/`a61e5dcf-7ae6-4484-ba9a-d23dac894100` /dev/sda` (yang bergari bawah adalah pratisi linux saya, setiap laptop atau PC biasanya mempinyai lokasi yang berbeda-beda) Jika sudah maka hasilnya akan seperti ini.
<p align="center">
	<img src="./posts/2010-01-25-cara-mengembalikan-boot-loader-ubuntu/upload2.jpg" height="150px" alt="img2">
</p> 

7. Ketik reboot pada terminal untuk merestar . Hasilnya, bootloader akan kembali seperti semula.

Jika setelah di reboot windows belum muncul. tenang saja, masuk kembali ke linux anda, lalu buka terminal di Linux kemudian ketik perintah di terminal
```
#update-grub
```

lalu akan muncul update grub anda. tutup terminal, reboot kembali komputer Anda dan di grub pilihan akan muncul Windows.

Selamat mencoba......................

by : Tuwo (Devriyan Bayu)