### **Install Nautilus Terminal di Ubuntu**
_Posted by Chaerul Umam on 04/11/2010_

<p align="center">
	<img src="./posts/2010-11-04-install-nautilus-terminal-di-ubuntu/banner.png" height="100px" alt="img1">
</p> 
Nautilus Terminal adalah Terminal yang tertanam di nautilus (file browsernya ubuntu). jadi kita dapat langsung dari nautilus kita. nautlus terminal akan selalu melakukan perintah “cd” mengikuti direktori yang kita buka (lihat gambar dibawah).
<p align="center">
	<img src="./posts/2010-11-04-install-nautilus-terminal-di-ubuntu/Screenshot-1.png" height="250px" alt="img2">
</p> 

Fitur yang ada pada Nautilus Terminal antara lain :

* terminal akan mengikuti navigasi pada folder anda
* mendukung drag & drop dari file dan folder
* terminal dapat disembunyikan (tekan ctr+shift+t)

Cara install nautilus terminal
tambahkan repository dulu.
```
sudo add-apt-repository ppa:flozz/flozz
```
update paket repositorynya
```
sudo apt-get update
```
install dengan cara
```
sudo apt-get install nautilus-terminal
```
Nah, selamat mencoba ya :)
