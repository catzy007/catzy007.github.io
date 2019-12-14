### Mengembalikan boot loader LILO sehabis install ulang OS Windows
Diposkan oleh Dinus Open Source Community di 20:43 . Selasa, 2008 Juli 29
<br>
Label: Boot Loader

Seperti janji saya pada artikel sebelumnya "Mengembalikan boot loader GRUB sehabis install ulang OS Windows" kali ini saya akan menepati janji dengan menyajikan trik bagaimana "Mengembalikan boot loader LILO sehabis install ulang OS Windows"
langkah-langkahnya sebagai berikut:

-> Bootinglah sistem komputer anda dengan menggunakan distro live cd GNU/Linux.
Penulis menggunakan distro SystemRescueCd 1.0.3 (SRC). Dengan distro ini, pengguna dapat pula membuat dan mengedit partisi dalam harddisk. Dan telah mendukung full read write pada file system NTFS.

-> pada shell SRC,
```
# mkdir /mnt/hda1 (jika belum ada)
# mount /dev/hda1 /mnt/hda1 (hda1 disini adalah nama direktori mount point pada praktek penulis, akan berbeda jika calon linuxer memberi nama lain)
# mount -t devpts none /mnt/hda1/dev
# mount -t proc none /mnt/hda1/proc
# chroot /mnt/hda1
# /sbin/lilo -b /dev/hda
```

-> setelah itu reboot komputer dan keluarkan cd linux SystemRescueCdnya.