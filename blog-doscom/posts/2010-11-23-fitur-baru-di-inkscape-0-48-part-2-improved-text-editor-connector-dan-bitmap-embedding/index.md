### **Fitur Baru di Inkscape 0.48 Part 2. Improved Text Editor, Connector, dan Bitmap Embedding**
_masasdani | 23/11/2010 | Leave your comment_

<br>
Tulisan ini merupakan lanjutan dari tulisan sebelumnya tentang fitur spray tool dan node editing di inkscape 0.48 [disini](http://mexez.wordpress.com/2010/11/19/fitur-baru-di-inkscape-0-48-spray-tool-dan-multipath-editing/). Karena ada beberapa fitur baru yang menarik yang sepertinya perlu juga saya bahas, maka dalam kesempatan ini saya kan bahas tentang pemingkatan yang ada di text editing, connector, dan fitur baru embedding bitmap.

<br>
**Improved Text Editor**

Fitur ini digarap ulang oleh Tavmjong Bah yang banyak dikenal sebagai pembuat user manual inkscape. Fitur baru yang ditambahkan adalah numeric control untuk leading, huruf, dan ruang kata (word space), horizontal dan vertikal baseline shift dan glyph rotation.
<p align="center">
	<img src="./posts/2010-11-23-fitur-baru-di-inkscape-0-48-part-2-improved-text-editor-connector-dan-bitmap-embedding/numeric-inputs.png" height="65px" alt="img1">
</p> 

Tav juga menambahkan fitur subscript dan superscript untuk penulisan rumus fisika seperti :
<p align="center">
	<img src="./posts/2010-11-23-fitur-baru-di-inkscape-0-48-part-2-improved-text-editor-connector-dan-bitmap-embedding/emc.png" height="30px" alt="img2">
</p> 

atau Kimia seperti :
<p align="center">
	<img src="./posts/2010-11-23-fitur-baru-di-inkscape-0-48-part-2-improved-text-editor-connector-dan-bitmap-embedding/ch2.png" height="30px" alt="img3">
</p> 

namun ada beberapa ketidaksempurnaan di fitu ini, apabila anda melakukan perubahan style text yang merubah font, maka format subscrip dan superscrip akan hilang. :’(

Ini adalah contoh secreenshot dari <inkscape.org> :
<p align="center">
	<img src="./posts/2010-11-23-fitur-baru-di-inkscape-0-48-part-2-improved-text-editor-connector-dan-bitmap-embedding/inkscape-0.48-webdesign-text-th.png" height="250px" alt="img4">
</p> 

Dan yang terahir adalah glyphs, fitur yang ditambahkan oleh Jon Cruz ini memudahkan kita untuk meng-insert-kan karakter spesial.
<p align="center">
	<img src="./posts/2010-11-23-fitur-baru-di-inkscape-0-48-part-2-improved-text-editor-connector-dan-bitmap-embedding/glyphs-dialog-en.png" height="200px" alt="img5">
</p> 

<br>
**Connector**

Saya sendiri hampir tidak pernah menggunakan fitu ini. ini adalah fitur untuk desain project, meskipun jauh dari apa yang dapat dilakukan oleh [DIA](http://projects.gnome.org/dia/). Ah iya, mungkin jika anda belum mengenal DIA, ini adalah program seperti Ms Visio.

Sepanjang Summer Code of Google 2009, Arcady Cracan memperbaiki beberapa fungsi dan inilah versi terbarunya.
<p align="center">
	<img src="./posts/2010-11-23-fitur-baru-di-inkscape-0-48-part-2-improved-text-editor-connector-dan-bitmap-embedding/connectors-after.png" height="150px" alt="img6">
</p> 

Ketika kita membuat garis dari vertikal dan horizontal, maka dapat secara otomatis dilihat sebagai ortogonal. Untuk melihatnya, arahkan mouse anda ke gambar.

<br>
**Bitmaps Embedding**

Sebelum versi 0.48, apabila kita mendrag and drop gambar ke dalam layar kerja inkscape, maka sebetulnya gambar itu hanya link ke file gambar di partisi kita, jadi, apabila lokasi gambar kita pindahkan atau kita kopikan file SVG inkscape ke teman, maka akan muncul tulisan “image linked not found” di layar kerja. Hal itu disebabkan karena file gambar bitmap yang kita import ke layar kerja inkscape hanya link. Berbeda jika kita meng import gambar ke layar kerja cor**l* draw, gambar tersebut akan langsung embedded ke file .cdr nya, sehingga file vector corel akan berukuran sangat jauh lebih besar. Nah, fitur di inkscape ini memberi kita pilihan untuk memasukkan gambar sebagai embedded bitmap atao hanya link. Fitur yang bahkan tidak tersedia di cor*l draw.
<p align="center">
	<img src="./posts/2010-11-23-fitur-baru-di-inkscape-0-48-part-2-improved-text-editor-connector-dan-bitmap-embedding/bitmap-import-en.png" height="200px" alt="img7">
</p> 

Tapi ini hanya sebuah langkah awal dari penanganan bitmap yang lebih baik. Musim semi ini, beberapa mahasiswa di Lyon Politechnique mengerjakan dialog image properties. (wew, fitur baru lagi nih..) Kode ini dibuat terpisah, namun diharapkan dapat menjadi bagian dari inkscape versi 0.49. jika anda tertarik, anda bisa mengambil [source codenya disini](https://code.launchpad.net/~centralelyon2010/inkscape/imagelinks2) dan ikut mengembangkannya, atau anda juga dapat melihat report dari apa yang sudah di kembangkan komunitas mahasiswa open source di politeknik Lyon tersebut [disini](http://wiki.inkscape.org/wiki/images/Centrale_Lyon_2010.pdf).

<br>
**Last but not least,**

inilah yang membuat saya mencintai open source, inovasinya yang bersumber dari keterbukaan software benar-benar tidak dapat dihentikan pada akhirnya. Bayangkan, ada berapa komunitas di dunia yang menggunakan product open source dan berusaha membuat softwarenya tersebut bisa mencukupi -setidaknya- kebutuhannya sendiri. Sehingga (dengan konsep keragaman kebutuhan manusia) membuatnya benar-benar berkembang dengan pesat. Jauh dari apa yang bisa di bayangkan oleh software propietary. Karena tidak bisa dibayangkan juga berapa orang yang punya kebutuhan tertentu, berapa orang yang ikut campur didalamnya. Berapa komunitas yang tidak sekedar menggunakan, namun juga mendukung dan mengembangkan. Inilah open source, sebuah konsep keterbukaan. Dan saya suka. Ayo terus dukung perkembanganya, atau turut serta mengembangkannya. Open source sudah memberi tawaran menarik. Mengajari kita untuk tidak manja, mengajari kita untuk memberikan solusi bagi diri kita sendiri, mengajarkan kita untuk bermanfaat kepada orang lain, mengajarkan konsep keikhlasan. “and finally, the glory will follow“. :)

<br>
Sumber asli tulisan ==>
#### [fitur baru di inkscape 0.48 part 2. improved text editing, connector, dan bitmap embedding](http://mexez.wordpress.com/2010/11/21/fitur-baru-di-inkscape-0-48-part-2-improved-text-editing-connector-dan-bitmap-embedding/)