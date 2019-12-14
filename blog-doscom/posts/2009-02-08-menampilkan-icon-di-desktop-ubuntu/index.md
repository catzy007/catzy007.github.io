### **Menampilkan Icon di Desktop Ubuntu**
_Diposkan oleh Eligio M. Do Rego di 15:44 . Minggu, 2009 Februari 08_
<br>
Label: Tutorial, Ubuntu

Default desktop Ubuntu tidak menampilkan Icon apapun, entah itu icon computer, home, network ataupun trash. Untuk menampilkan icon-icon tersebut, kita mesti mengaktifkan secara manual dengan menggunakan tool **gconf-editor**.

Simak langkah-langkahnya berikut ini:

<br>
1. Aktifkan dulu **gconf-editor** agar bisa dibuka lewat menu: **Applications** melalui menu: **System -> Preferences -> Main Menu**
<p align="center">
    <img src="./posts/2009-02-08-menampilkan-icon-di-desktop-ubuntu/snapshot+0.png" height="250px" alt="Img1">
</p> 

Setelah jendela **Main Menu** terbuka, klik pada sub menu **System Tools** di menu **Applications**, kemudian aktifkan item **Configuration Editor**.
<p align="center">
    <img src="./posts/2009-02-08-menampilkan-icon-di-desktop-ubuntu/snapshot+2.png" height="250px" alt="Img2">
</p> 


> **Tips & Trik:**
Cara paling cepat untuk membuka **Main Menu** adalah dengan mengklik kanan pada menu: **Applications**, kemudian klik **Edit Menus**.

<br>
2. Jalankan tool **gconf-editor** melalui menu: **Applications -> System Tools -> Configuration Editor**
<p align="center">
    <img src="./posts/2009-02-08-menampilkan-icon-di-desktop-ubuntu/snapshot+3.png" height="250px" alt="Img3">
    <br>
    <img src="./posts/2009-02-08-menampilkan-icon-di-desktop-ubuntu/snapshot+4.png" height="250px" alt="Img4">
</p> 


<br>
3. Buka key **apps -> nautilus -> desktop**, kemudian beri tanda centang pada opsi checkbox **computer_icon_visible** di sebelah kanan jendela gconf-editor jika ingin memunculkan icon computer ke desktop. Begitupun juga kalau kita ingin memunculkan icon home, network dan trash cukup hanya memberi tanda centang pada masing-masing key yang ada saja.
<p align="center">
    <img src="./posts/2009-02-08-menampilkan-icon-di-desktop-ubuntu/Gconf-editor.png" height="250px" alt="Img5">
</p> 

Semoga trik ini bisa sedikit membantu rekan-rekan yang baru mempelajari sistem operasi linux Ubuntu.

good luck yo...!!!