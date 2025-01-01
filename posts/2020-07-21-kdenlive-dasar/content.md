#### Kdenlive Dasar
_Tuesday, July 21, 2020_

#### Download dan Install
Kdenlive mendukung berbagai macam sistem operasi, download sesuai dengan sistem operasi anda <https://kdenlive.org/en/download/>
![img_xl](./posts/2020-07-21-kdenlive-dasar/0.png)

::br

#### Pengenalan Tampilan

![img_xl](./posts/2020-07-21-kdenlive-dasar/1.png)

::br

Ini adalah tampilan awal `Kdenlive` terdapat 4 bagian utama yaitu `Projek Bin`, `Effect`, `Preview`, dan `Timeline`

<https://userbase.kde.org/Kdenlive/Manual>

![img](./posts/2020-07-21-kdenlive-dasar/2.png)

::br

Projek Bin adalah tempat `Clip` atau file yang akan diedit. File yang didukung dapat berupa video (mp4, mkv, wmv), 
audio (mp3, m4a), bahkan gambar (jpeg, png). Untuk menambahkan Clip, dapat dilakukan dengan `Drag and Drop` file 
langsung kedalam `projek bin` atau dengan `klik kanan pada projek bin` dan pilih `Add clip or folder`

<https://userbase.kde.org/Kdenlive/Manual/Projects_and_Files/Project_Tree>

![img_lg](./posts/2020-07-21-kdenlive-dasar/3.png)

::br

Effect adalah bagian dimana pengguna dapat melakukan koreksi dan modifikasi pada sumber audio atau video. Misal 
audio suaranya kecil, maka dapat menggunakan effect `Gain` untuk memperbesar suara. Lalu semisal video gambarnya 
kurang jelas, maka dapat menggunakan `Denoiser` dan sebagainya.

<https://userbase.kde.org/Kdenlive/Manual/Effects>

![img_xl](./posts/2020-07-21-kdenlive-dasar/4.png)

::br

Preview atau secara official bernama `Monitor` adalah bagian seperti video player mini dimana pengguna dapat 
melihat hasil editing secara langsung.

<https://userbase.kde.org/Kdenlive/Manual/Monitors>

![img_lg](./posts/2020-07-21-kdenlive-dasar/5.png)

::br

Timeline adalah bagian dimana pengguna dapat memilih waktu video untuk diubah. Dalam timeline juga terdapat 
`V2, V1, A1, A2` V1,2 Adalah video, sedangkan A1,2 adalah audio. Ini ditujukan untuk prioritas video atau 
audio mana yang akan muncul pada hasil akhir. 

<https://userbase.kde.org/Kdenlive/Manual/Timeline>

Pada timeline juga terdapat beberapa tools, ada tiga tools utama 
yang harus dipahami.

![img](./posts/2020-07-21-kdenlive-dasar/5-1.png)

::br

Pada bagian yang berwarna <span style="color:red">merah</span> adalah `select tool` gunanya untuk memilih bagian clip mana yang akan diproses pada timeline. Dapat pula digunakan untuk menggeser clip dengan cara klik select tool, tekan dan tarik clip yang ingin digeser.

Pada bagian yang berwarna <span style="color:green">hijau</span> adalah cut atau secara official bernama `razor tool`, berfungsi untuk memotong clip yang terdapat pada timeline. Untuk menggunakan, click tombol cut, arahkan ke bagian clip pada timeline lalu click lagi untuk memotong.

Pada bagian yang berwarna <span style="color:blue">biru</span> adalah `timeline cursor`. Pada bagian ini akan ditunjukkan bagian mana yang muncul pada layar. Untuk menggerakan timeline cursor, tekan dan tarik cursor.

<https://userbase.kde.org/Kdenlive/Manual/Timeline/Editing>

#### Basic Workflow

![img](./posts/2020-07-21-kdenlive-dasar/6.png)

::br

Pertama buat folder baru, copykan semua clip,video,gambar kedalam folder tersebut

`Sebisa mungkin untuk tidak memindah dan merubah nama file dalam folder! untuk mencegah data corrupt`

![img](./posts/2020-07-21-kdenlive-dasar/7.png)

Kemudian buka kdenlive dan masukkan clip kedalam projek bin dengan cara `drag and drop` 
atau dengan `klik kanan pada projek bin > add clip or folder`

![img_xl](./posts/2020-07-21-kdenlive-dasar/8.png)
![img_xl](./posts/2020-07-21-kdenlive-dasar/9.png)

::br

Selanjutnya masukkan clip kedalam timeline dengan cara `drag and drop`

![img](./posts/2020-07-21-kdenlive-dasar/10.png)

::br

Sebelum melakukan apapun, pastikan lakukan save dan simpan file dalam folder yang sama dengan clip

![img](./posts/2020-07-21-kdenlive-dasar/11.png)

::br

Semisal ingin memotong clip pada detik ke 13, maka click cut atau razor tools


![img_lg](./posts/2020-07-21-kdenlive-dasar/12.png)

::br

lalu saat cursor berwarna merah, arahkan pada detik ke 13 di timeline

![img_lg](./posts/2020-07-21-kdenlive-dasar/13.png)

::br

kemudian clip akan terpisah menjadi 2 bagian

![img_lg](./posts/2020-07-21-kdenlive-dasar/14.png)

::br

selanjutnya disini saya akan membuang clip dengan cara click select tool, lalu click pada clip yang ingin dibuang, klik kanan, delete selected item.

![img_lg](./posts/2020-07-21-kdenlive-dasar/15.png)

::br

lalu clip akan hilang

![img_xl](./posts/2020-07-21-kdenlive-dasar/16.png)

::br

kemudian saya akan tambahkan clip baru pada projek bin, lalu drag and drop clip baru ke timeline

![img](./posts/2020-07-21-kdenlive-dasar/17.png)

::br

untuk mendapatkan hasil video yang telah diedit, lakukan proses render dengan cara click project menu > render

![img](./posts/2020-07-21-kdenlive-dasar/18.png)

::br

lalu arahkan output file ke tempat yang diinginkan, pilih MP4 (atau format lain sesuaikan), lalu render to file.

kemudian tunggu proses render, proses ini membutuhkan waktu sesuai dengan kapasitas CPU/GPU juga panjang video dan kualitas video.

> Pastikan untuk melakukan save setiap melakukan editing untuk mencegah data corrupt

Untuk informasi lebih lanjut dan akurat dapat menuju ke <https://userbase.kde.org/Kdenlive/Manual>