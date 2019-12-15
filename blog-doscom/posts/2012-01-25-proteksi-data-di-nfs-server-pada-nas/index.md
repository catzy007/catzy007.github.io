### **Proteksi data di NFS Server pada NAS**
_Posted by Masbudi.Net on Jan 25, 2012_
in File System, IP dan Subnetting, Review, Terminal, Tutorial, Ubuntu | 4 comments	

nuwun agan2 semua, ane hanya mau berbagi tips’s dan trick sederhana mengenai NFS (Network File System) Server. Bermula ketika kantor ane punya NAS (Network-attached storage) WD MyBookLive, awalnya sih ane kira cuman HD external biasa,

<p align="center">
	<img src="./posts/2012-01-25-proteksi-data-di-nfs-server-pada-nas/1.png" height="250px" alt="img1">
</p> 

eh ternyata gak ada colokan buat usb yang ngarah ke kompi. yang ada hanya sebuah port untuk power dan NIC (Port LAN). awalnya sih ane kira sudah ada IP staticnya la kok badala… ternyata kok PC gak dapet2 IP. cari2 di inet ternyata pake dynamic IP (DHCP client).

tanpa pikir panjang langsung saja ane colokin ke Port LAN yg ane arahin ke switch yg nyambung ke Mikrotik router yg sudah ada DHCP Servernya. lalu setelah itu ane scan dah.. jadinya keliatan dah. tuh NAS dapet IP berapa. setelah di oprek lagi dan otak-atik-otak ternyata punya masalah. ada 1 folder yang ke share secara default, namane folder “public” (yo mesti…)

hanya saja ane selaku admin khawatir kalo folder ini aktip, takutnya disalah gunakan oleh oknum2 tertentu. makanya ane pingin mati’in nih folder. cuman di pengaturan bawaanya fasilitas ini tidak tersedia. dari sinilah ane2 otak-atik-otak lagi pelajari NAS ini. setelah2 cari kesana-kesini-kesana ternyata oh ternyata NAS ini punya fasilitas ssh, untuk mengaktifkannya dari `http://[ip_NAS]/UI/ssh` , dan dari sinilah semangat ane untuk pelajari ini NAS berkobar.. bahasa jawanya “on the fire”.. :D

setelah ssh aktip lalu ane masuk ke systemnya  untuk meliat versi linuxnya (`uname -a`), versi OS (`cat /etc/debian_version`), dan spesifikasi NAS (`cat /proc/cpuinfo`) maka muncul semua jenis2 seperti yg dibutuhkan..

<p align="center">
	<img src="./posts/2012-01-25-proteksi-data-di-nfs-server-pada-nas/2.png" height="250px" alt="img2">
</p> 

wah lumayan nih, tinggal edit dikit2 `/etc/apt/sources.lst` nya bisa jadi portable server nih, lengkap dengan database, webserver, dan NFS server. ato mungkin server2 yang lain. Alhamdulillahh lumayannn.. tapi eitss.. inti pokok permasalahan utama belum ketemu solusi ntu. setelah ane telusri dalemanya. ternyata folder share terletak di /NFS/nama_folder_share.

disitu terlihat nama2 folder yang dibuat dengan menggunakan konfigurasi dari NASnya. dengan menambah perintah untuk mengganti `chattr +i` menjadi immutable (bhs kedokteranya imunisasi) trus hilang deh ntu masalah.. jadi file tersebut bisa di di buka orang tapi tidak bisa dihapus atapun di ganti. berikut cara menggantinya
```
chattr +i namafile.txt
```

jika ingin mengganti attribut directory beserta subdirectory tinggal nambahin -R menjadi
```
chattr +i -R NamaFolder
```

untuk memastikan apakah sudah terproteksi bisa dilihat melalui perintah
```
lsattr
```

maka akan terlihat
```
—-i————– ./namafolder
```

untuk fungsi2 yang lain seperti commpresed (c), secure deletion (s), atau yang lain2nya dapat diliat di perintah
```
man chattr
```

tadinya ane coba dengan perintah chmod, tapi tetep saja bisa di hapus. keliatanya sih. gara di akses melalui jaringan. jadi fungsi chmodnya tidak berfungsi.. padahal kalo gak salah chmod juga berfungsi memberikan hak akses pada suatu file seperti write, read, or execute. mungkin bisa ditanyakan kepada simbah dulu bedanya. yang penting masalahnya dapat teratasi dulu.. CMIIW