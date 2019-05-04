### **Dasar Pemrograman Bahasa C**
#### Friday, September 14, 2018

> First, i would like to apologize to some viewer in this blog because this post isn't in 
english.. at least most of it. as you can see some of this post contain indonesian 
languange so yeah. ~('-'~)

Bahasa pemrograman C merupakan salah satu bahasa pemrograman komputer. Dibuat pada tahun 1972 
oleh Dennis Ritchie untuk Sistem Operasi Unix di Bell Telephone Laboratories.

Meskipun C dibuat untuk memprogram sistem dan jaringan komputer namun bahasa ini juga sering 
digunakan dalam mengembangkan software aplikasi. C juga banyak dipakai oleh berbagai jenis 
platform sistem operasi dan arsitektur komputer, bahkan terdapat beberepa compiler yang sangat 
populer telah tersedia. C secara luar biasa memengaruhi bahasa populer lainnya, terutama C++ 
yang merupakan extensi dari C.

<br>
### **Dasar Pemrograman C Part1 : The Beginning**
#### **Sekilas Tentang Dasar Pemrograman**
Hemm pertama aku cukup yakin orang indo itu malas membaca.. jadi apabila anda tak tertarik 
dengan pembukaan ini, langsung skip ke bagian selanjutnya (~'-')~ ok kenapa ada bahasa 
pemrograman? alasannya adalah karena manusia menciptakan komputer. ya bahasa pemrograman adalah 
bahasa yang digunakan untuk menerjemahkan perintah yang diinginkan oleh manusia agar dapat 
diproses oleh komputer. karena komputer sebenarnya hanya mampu memproses data biner. yaitu 1 
dan 0, on dan off, benar dan salah. ga percaya? jal bukakno kwi laptopmu delok isine prosesor, 
opo iki woco. next bahasa c adalah salahsatu bahsa pemrograman yang cukup populer dan termasuk 
bahasa middle level. hemm gampang'e ngene. komputer kan hanya memahami 1 dan 0. nah agar manusia 
dapat memberi perintah ke komputer, manusia harus membuat bahasa yang dapat menerjemahkan 1 dan 
0 tsb. salahsatu bahasa yang diciptakan adalah bahasa assembly. yang mana masih sangat rumit 
untuk dipahami oleh manusia.. lucu ya gawe2 dewe binggung2 dewe.. nah karena itu diciptakanlah 
bahasa yang lebih mudah dipahami manusia yaitu bahasa middle level. dan salahsatunya adalah 
bahasa c. mau tau lebih banyak. cek wikipedia 

<br>
#### **Apa Yang Saya Butuhkan Sebelum Menulis Program?**
Wokeh.. pertama **"Jika Anda Pengguna Microsoft Windows Versi Apapun atau jika anda tak paham 
apa yang saya katakan maka anda mungkin pengguna microsoft windows."** saya sangat rekomendasi 
download program Code:Blocks di <http://www.codeblocks.org/downloads> terus pilih `"Download 
the binary release"` terus download yang ada tulisan `"blablabla-12.34mingw-setup.exe"` lalu 
install dan anda siap coding. apabila anda pengguna linux, buka terminal, ketikkan 
`$ gcc --version` apabila outputnya kurang lebih `"gcc (Ubuntu 7.4.0-1ubuntu1~18.04) 7.4.0"` maka anda sudah siap coding (~'-')~ 
atau anda juga dapat install codeblock dengan `$ sudo apt-get install codeblocks`

<br>
#### **Mulai Coding**
pertama buka codeblocks. buat linux user buka text editor macam nano, leafpad dll. Klik kanan pada gambar > view untuk memperbesar!

* pertama buka codeblocks
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/1.png" height="250px" alt="codeblocks 1">
</p>

* lalu tekan `file > new > Project`
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/2.png" height="250px" alt="codeblocks 2">
</p>

* Lalu Pilih `"Console Application"`
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/3.png" height="250px" alt="codeblocks 3">
</p>

* Tekan Next
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/4.png" height="250px" alt="codeblocks 4">
</p>

* Pilih `"C"` paling atas lalu tekan next
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/5.png" height="250px" alt="codeblocks 5">
</p>

* Masukkan nama project yang anda inginkan.. disini saya mengisi coba1. lalu tekan next
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/6.png" height="250px" alt="codeblocks 6">
</p>

* lalu finish
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/7.png" height="250px" alt="codeblocks 7">
</p>

* next tekan segitiga yang saya tandai dalam kotak merah
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/8.png" height="250px" alt="codeblocks 8">
</p>

* tekan `"main.c"`
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/9.png" height="250px" alt="codeblocks 9">
</p>
 
* lalu tekan `icon build and run` atau tekan F9 pada keyboard. kemudian tunggu sebentar
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/10.png" height="250px" alt="codeblocks 10">
</p>

* lalu akan muncul program dengan text "Hello World". Selamat anda mulai menjadi programmer level 1 lol....
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/11.png" height="250px" alt="codeblocks 11">
</p>

<br>
#### **Penjelasan**
**Header #include <stdio.h>  dan  #include <iostream.h>**
> "A header file is a file containing C declarations and macro definitions (see Macros) to be shared between 
several source files. You request the use of a header file in your program by including it, with the C 
preprocessing directive ‘#include’." gampang'e header iku kumpulan logika yang telah ditulis untuk mempermudah 
pekerjaan.

**int main()**
> adalah dimana segala yang ada didalam main tsb akan dijalankan

**printf("Hello World\n");**
> adalah perintah untuk mencetak text yang berada didalam tanda kutip. dan \n adalah "1x enter" pada program
> adalah perintah untuk mencetak text yang berada didalam tanda kutip. dan \n adalah "1x enter" pada program

<br>
#### **Tambahan**
selain printf, adapula perintah lain untuk menampilkan teks yaitu `puts("");` untuk menggunakannya caranya mirip 
dengan printf namun puts tak memerlukan `\n` untuk tambahan enter. sbg contoh.

```
printf("Ini adalah teks menggunakan printf");
printf("ini adalah teks menggunakan printf\n");
puts("Ini adalah teks menggunakan puts");
```

jangan lupa setelah melakukan perubahan, untuk recompile program.. dan apabila ada error, perhatikan penempatan 
titik koma dan semicolon. 

<br>
#### **Silahkan coba mengeksplor program dengan mengganti teks Hello World dengan kata2 yang anda inginkan seperti nama ttl dsb**

<br>
#### **Tambahan buat anda yang sudah pro!**
Bagi anda yang sudah lumayan familiar dengan linux terminal dan tak mau menggunakan IDE seperti codeblocks dll, anda dapat mengikuti tutorial ini.

* pertama buka terminal. yomesti '-')

* kedua ketikkan nano

* ketiga isikan program yang anda inginkan

* keempat save program yang anda buat (ctrl+x)(y)(isi nama file)(enter). misal program.c
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/12.png" height="250px" alt="codeblocks 12">
</p>

* kelima compile program dengan cara `gcc -o program program.c` pastikan tak ada error

* keenam jalankan program `./program`

* selamat anda telah compile program tanpa menggunakan IDE
<p align="center">
	<img src="./posts/2018-09-14-dasar-pemrograman-bahasa-c/13.png" height="250px" alt="codeblocks 13">
</p>

<br>
#### **Selanjutnya materi tentang Tipe Data.**

<https://learn.sparkfun.com/tutorials/digital-logic>

<https://en.wikipedia.org/wiki/C_(programming_language)>

<https://en.wikipedia.org/wiki/Programming_language>

<https://gcc.gnu.org/onlinedocs/cpp/Header-Files.html>

<https://www.quora.com/What-is-the-int-main>

