### **Fitur Baru InkScape, Spray Tool dan Multipath Editing – Part 1**
_Posted by masasdani on Nov 22, 2010_
<br>
in Blogs, Grafik, Inkscape | 5 comments	

<br>
Sebagai orang yang berkecimpung di dunia teknis, kurang lengkap jika saya tidak menulis hal hal yang berbau teknis. Ini adalah salah satu konsentrasi ilmu saya di dunia teknik informatika, khususnya dunia open source. Yeah, saya cinta open source.

Baru 3 hari yang lalu saya menginstall [inkscape 0.48]() di [fedora 14]() saya. Ada beberapa fitur baru di InkScape 0.48 yang saya rasakan saat pertama kali menggunakan inkscape baru saya. Inkscape fersi terbaru ini akhirnya dirilis dengan sejumlah perubahan besar dan clean-up di beberapa bagian. Untuk lebih lengkap sebaiknya anda baca [release note nya]().

<p align="center">
	<img src="./posts/2010-11-22-fitur-baru-inkscape-spray-tool-dan-multipath-editing-part-1/inkscape-all.jpg" height="250px" alt="Tampilan Baru InkScape 0.48">
</p> 

berikut adalah sebagian yang merupakan fitur baru dari inkscape 0.48 :

* spray tool
* multipath editing
* peningkatan pengeditan node selection
* peningkatan connector tool
* perubahan krusial di text tool
* snapping yang jauh lebih baik
* perubahan di bagian bitmap handling
* extensi extensi baru

Kali ini saya akan bahas lebih jelas tentang spray tool dan apa saja yang ditambahkan pada multiple node editing.

<br>
**Spray Tool**

Tool ini dikembangkan oleh sejumlah mahasiswa di Centrale Lyon, dipimpin oleh Cedric Gemy (wew, saya jadi malu sebagai mahasiswa juga. :-( ). Apa yang dilakukan adalah lukisan dengan salinan atau klon dari objek yang sedang dipilih di atas kanvas. alat ini hampir sama dengan symbol sprayer di adobe ilustrator. namun, meskipun mempunyai fungsi dan hasil yang serupa, namun alat ini dibangun dengan cara yang berbeda dengan symbol sprayer di adobe ilustrator tersebut.
<p align="center">
	<img src="./posts/2010-11-22-fitur-baru-inkscape-spray-tool-dan-multipath-editing-part-1/spray.gif" height="250px" alt="img1">
</p> 

Ada tiga mode dalam alat: membuat salinan, menciptakan kloning dan penggabungan salinan menjadi jalur tunggal. Anda dapat membuat spray dari objek bitmap juga, baik sebagai klon atau salinan. Anda dapat memberitahu spray tool untuk menjadi tekanan stylus sensitif ketika datang ke lebar relatif dari area lingkaran, Anda dapat menentukan berapa banyak benda (nilai non-absolut) Anda ingin setelah satu klik, berapa banyak rotasi dan skala dari seleksi harus bervariasi, bagaimana terfokus salinan disemprot atau klon seharusnya. sungguh mudah bukan? ;)

<br>
**Multipath Editing**

node tool yang baru ini di tulis ulang oleh Krzysztof Kosinski selama Summer of Code-nya Google 2009 proyek. Selain internal yang porting ke lib2geom memiliki dua fitur baru utama: mengedit multipath dan pengeditan lanjutan dari node yang dipilih.

Akhirnya anda dapat memilih berbagai path dan mengedit node nya. Sekarang, karena Anda bisa mengedit gradien dengan Node tool, itu berarti Anda juga dapat mengedit beberapa gradien fill. Anda hanya tekan N untuk beralih ke, alat tekan ShiftNode dan terus klik pada path untuk menambahkannya ke seleksi. dan ahirnya akan tampak seperti gambar :
<p align="center">
	<img src="./posts/2010-11-22-fitur-baru-inkscape-spray-tool-dan-multipath-editing-part-1/multiple-path-editing.png" height="200px" alt="img2">
</p> 

sehingga dengan demikian anda bisa mengedit beberapa node path secara langsung, maupun beberapa gradient. :-)

selain iti anda juga bisa menggabungkan 2 node yang pada asalnya terpisah secara langsung yaitu dengan cara memilih kedua nod tersebut, kemudian kita pilih join selected node di bagian tool bar.
<p align="center">
	<img src="./posts/2010-11-22-fitur-baru-inkscape-spray-tool-dan-multipath-editing-part-1/multiple-path-join-en.gif" height="200px" alt="img3">
</p> 

fitur besar lainya adalah kita bisa mengedit selection node seperti selection kepada object : scale (merubah ukuran), rotate (memutar), dan skew (pencondongan).
<p align="center">
	<img src="./posts/2010-11-22-fitur-baru-inkscape-spray-tool-dan-multipath-editing-part-1/nodes-selection.png" height="200px" alt="img4">
</p> 

anda juga dapat mengaktifkan path direction pada outline dengan cara memilih _(“File > Inkscape Preferences… > Tools > Node > Show path directions on outlines”)_. maka apabila path direction yang anda lakukan tidak benar, FontForge akan memperbaikinya untuk anda.

Nah, inilah fitur yang saya bahas pada kesempatan kali ini. kalo kebanyakan tulisan bakalan males bacanya juga tho. salah satu alasan saya menggunakan product open source adalah karena dukungan yang besar oleh komunitas, seperti fitur2 baru pada inkscape ini yang dikembangkan oleh komunitas open source juga. yak, sampe ketemu lagi di tulisan lanjutan saya. 