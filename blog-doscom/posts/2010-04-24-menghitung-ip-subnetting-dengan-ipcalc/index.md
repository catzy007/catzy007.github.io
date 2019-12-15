### **Menghitung IP Subnetting dengan Ipcalc**
_Diposting oleh Eligio Moniz do Rego di 08.44 . Sabtu, 24 April 2010_
<br>
Label: Linux, Networking, tealinuxos, Tool Networking, Tutorial

Seorang administrator yang mengelola jaringan sering merasa perlu membagi jaringan mereka menjadi bagian lebih kecil (disebut subnetwork) dalam rangka memberikan fleksibilitas addressing dan optimalisasi jaringan.

Melalui subnetting, sebuah address jaringan (network address) tunggal dipecah mejadi banyak subnetwork atau disingkat subnet.

Untuk menerapkan subnetting pada jaringan, perlu melakukan perhitungan subnet berserta host didalamnya.

> Info: 
> Bagi yang belum paham betul tentang konsep subnetting, silakan baca artikel dari pak **Romi Satria Wahono** [disini](http://romisatriawahono.net/2006/02/10/memahami-konsep-subnetting-dengan-mudah/)

Artikel kali ini, penulis akan menujukkan cara yang lebih mudah dalam menghitung subnet beserta host dengan menggunakan aplikasi [ipcalc](http://sourceforge.net/projects/ipcalc/), dengan menggunakan aplikasi tersebut, kita tidak perlu lagi melakukan perhitungan manual dalam menentukan ip address dan broadcast untuk masing-masing subnet yang ada. Ipcalc mengambil alamat IP dan netmask dan dikalkulasi untuk mendapatkan hasil broadcast, network, Cisco wildcard mask, dan ketersediaan host.

> Catatan: 
> Penulis menjalankan ipcalc di atas distro [TeaLinuxOS 2.0 “Black Tea”](http://tealinuxos.doscom.org/), silakan download paket ipcalc sesuai dengan distro Linux yg digunakan.

Berikut ini cara penggunaan aplikasi ipcalc:

Untuk melihat penjelasan opsi yang terdapat di ipcalc perintahnya sebagai berikut:
```
$ ipcalc -h
```

Penjelasannya:
* b : tidak manampilkan nilai binari dari suatu alamat ip.
* s : menampilkan hasil hitung nilai subnet sesuai dengan masukkan jumlah host.
* r : menampilkan network yang ada sesuai range ip yang dimasukkan.

<br>
#### **Latihan 1:**
Untuk mengetahui range ip address jaringan `192.168.10.0/24`, ketikkan perintah berikut:
```
$ ipcalc 192.168.10.0/24
```

Output:
```
Address:   192.168.10.0       11000000.10101000.00001010.00000000
Netmask:   255.255.255.0 = 24 11111111.11111111.11111111.00000000
Wildcard:  0.0.0.255          00000000.00000000.00000000.11111111
=>
Network:   192.168.10.0/24    11000000.10101000.00001010.00000000
HostMin:   192.168.10.1       11000000.10101000.00001010.00000001
HostMax:   192.168.10.254     11000000.10101000.00001010.11111110
Broadcast: 192.168.10.255     11000000.10101000.00001010.11111111
Hosts/Net: 254                Class C, Private Internet
```

Jika tidak ingin outputnya menampilkan nilai binari alamat ip tambahkan opsi -b.

Contoh:
```
$ ipcalc -b 192.168.10.0/24
```

Ouput:
```
Address:     192.168.10.0
Netmask:     255.255.255.0 = 24
Wildcard:    0.0.0.255   
=>
Network:     192.168.10.0/24
HostMin:     192.168.10.1
HostMax:     192.168.10.254
Broadcast:   192.168.10.255
Hosts/Net:   254 Class C, Private Internet
```

Penjelasan:
Dari output di atas, dapat dilihat range ip address yag bisa digunakan dimulai dari 192.168.10.1 sampai 192.168.10.254, broadcast 192.168.10.255 dan jumlah host yang tersedia sebanyak 254 host.

<br>
#### **Latihan 2:**
Sebuah jaringan dengan alamat jaringan 192.168.15.0 ingin dibagi menjadi 2 subnet, dimana kedua subnet tersebut masing-masing memiliki host sebanyak 30. Untuk mendapatkan solusinya, ketikkan perintah berikut:
```
$ ipcalc -bs 30 30 192.168.15.0
```
Output:
```
Address:   192.168.15.0
Netmask:   255.255.255.0 = 24
Wildcard:  0.0.0.255   
=>
Network:   192.168.15.0/24
HostMin:   192.168.15.1
HostMax:   192.168.15.254
Broadcast: 192.168.15.255
Hosts/Net: 254                   Class C, Private Internet

1. Requested size: 30 hosts
Netmask:   255.255.255.224 = 27
Network:   192.168.15.0/27
HostMin:   192.168.15.1
HostMax:   192.168.15.30
Broadcast: 192.168.15.31
Hosts/Net: 30                    Class C, Private Internet

2. Requested size: 30 hosts
Netmask:   255.255.255.224 = 27
Network:   192.168.15.32/27
HostMin:   192.168.15.33
HostMax:   192.168.15.62
Broadcast: 192.168.15.63
Hosts/Net: 30                    Class C, Private Internet

Needed size:  64 addresses.
Used network: 192.168.15.0/26
Unused:
192.168.15.64/26
192.168.15.128/25 
```

Penjelasan:
* Request size pertama, ip dimulai dari 192.168.15.1 sampai dengan 192.168.15.30, dan ip broadcast adalah 192.168.15.31.

* Request size kedua, ip dimulai dari 192.168.15.33 sampai dengan 192.168.15.62, dan ip broadcast 192.168.15.63.

* Mengapa ip 192.168.15.32 dilewatkan, dan bukan dijadikan ip pertama dari subnet kedua? karena ip 192.168.15.32 dijadikan alamat jaringan untuk subnet kedua.

Demikian contoh cara menghitung ip subnetting dengan menggunakan aplikasi ipcalc, silakan Anda ekplorasi sendiri. agar lebih mahir dalam melakukan perhitungan ip subnetting, cobalah dengan contoh kasus yang lebih menantang lagi.

<br>
Good luck..!!!

Referensi:
<br>
<http://sourceforge.net/projects/ipcalc/>
<br>
<http://romisatriawahono.net/2006/02/10/memahami-konsep-subnetting-dengan-mudah/>
<br>
<http://www.infolinux.co.id>
<br>
<http://avancalinux.blogspot.com>