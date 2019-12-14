### Firewall di Mikrotik UNtuk Mencegah Port Scanning
_Posted by mazumam on Dec 17, 2010_
<br>
in Mikrotik, News, Tutorial | 2 comments	

<p align="center">
	<img src="./posts/2010-12-17-firewallmikrotik/mikrotik.jpg" height="150px" alt="img1">
</p> 
Firewall merupakan salah satu bagian yang penting dalam membangun sebuah jaringan. Begitu pula saat kita menggunakan Mikrotik Sebagai router, maka tidak menutup kemungkinan akan ada user-user yang iseng untuk mencoba masuk ke dalam system mikrotik kita. biasanya untuk bisa menjebol sebuah system langkah awal yang dilakukan user-user nakal tersebut adalah mencari port-port yang terbuka di system kita. Banyak tool-tool yang bisa digunakan untuk scanning port, misalnya [NMAP](http://www.mazumam.web.id/2010/12/firewall-di-mikrotik-untuk-mencegah.html).

Jadi, langkah awal untuk membuat firewall alangkah baiknya fokus pada port scanning itu. di mikrotik, kita bisa membuat firewall untuk mengeblok ip user yang melakukan port scanning ke system [mikrotik](http://www.mazumam.web.id/2010/12/firewall-di-mikrotik-untuk-mencegah.html). Cara untuk membuat firewall port scanning adalah sebagai berikut:

* Masuk dulu ke terminal mikrotik, terserah mau pakai winbox, ssh, ataupun telnet
* kemudian masuk ke direktori filter.
```
/ip firewall filter
```
* kemudian masukkan konfigurasi berikut :
```
add chain=input protocol=tcp psd=21,3s,3,1 action=add-src-to-address-list address-list=”port scanners” address-list-timeout=2w comment=”Port scanners to list ” disabled=no

add chain=input protocol=tcp tcp-flags=fin,!syn,!rst,!psh,!ack,!urg action=add-src-to-address-list address-list=”port scanners” address-list-timeout=2w comment=”NMAP FIN Stealth scan”

add chain=input protocol=tcp tcp-flags=fin,syn action=add-src-to-address-list address-list=”port scanners” address-list-timeout=2w comment=”SYN/FIN scan”

add chain=input protocol=tcp tcp-flags=syn,rst action=add-src-to-address-list address-list=”port scanners” address-list-timeout=2w comment=”SYN/RST scan”

add chain=input protocol=tcp tcp-flags=fin,psh,urg,!syn,!rst,!ack action=add-src-to-address-list address-list=”port scanners” address-list-timeout=2w comment=”FIN/PSH/URG scan”

add chain=input protocol=tcp tcp-flags=fin,syn,rst,psh,ack,urg action=add-src-to-address-list address-list=”port scanners” address-list-timeout=2w comment=”ALL/ALL scan”

add chain=input protocol=tcp tcp-flags=!fin,!syn,!rst,!psh,!ack,!urg action=add-src-to-address-list address-list=”port scanners” address-list-timeout=2w comment=”NMAP NULL scan”

add chain=input src-address-list=”port scanners” action=drop comment=”dropping port scanners” disabled=no
```
* selesai.

tips ini mungkin bisa dipake untuk standar firewall saja, namun sekali lagi saya ingatkan, [tidak ada sebuah system yang 100% aman](http://www.mazumam.web.id/2010/12/firewall-di-mikrotik-untuk-mencegah.html), karena ilmu pengetahuan semakin berkembang. Apalagi sekarang banyak teknik firewall evasion untuk bisa melakukan scanning tanpa terbaca oleh firewall.