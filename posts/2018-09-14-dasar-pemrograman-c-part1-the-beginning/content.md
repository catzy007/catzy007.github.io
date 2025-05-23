#### Dasar Pemrograman C Part1 : The Beginning
##### *Friday, September 14, 2018*

Bahasa pemrograman C merupakan salah satu bahasa pemrograman komputer. Dibuat pada tahun 1972 oleh Dennis Ritchie untuk Sistem Operasi Unix di Bell Telephone 
Laboratories.Meskipun C dibuat untuk memprogram sistem dan jaringan komputer 
namun bahasa ini juga sering digunakan dalam mengembangkan software aplikasi. 
C juga banyak dipakai oleh berbagai jenis platform sistem operasi dan arsitektur 
komputer, bahkan terdapat beberepa compiler yang sangat populer telah tersedia. 
C secara luar biasa memengaruhi bahasa populer lainnya, terutama C++ yang 
merupakan extensi dari C.

#### *Sekilas Tentang Dasar Pemrograman*
Program merupakan bagian dari komputer rangkaian perintah yang ditulis oleh 
`Programmer` menggunakan `Bahasa Pemprograman` yang kemudian dapat diterjemahkan 
oleh komputer untuk selanjutkan dijalankan oleh komputer untuk mencapai tujuan 
tertentu. Program ditulis dalam bentuk `Kode Sumber` yang dapat dipahami oleh 
manusia, kemduian diterjemahkan oleh `Compiler` menjadi `Bahasa Mesin` yang dapat 
dipahami oleh CPU. Program komputer terdiri dari `sintaks` dan algoritma 
matematis yang disusun dalam urutan tertentu.

#### *Apa Yang Saya Butuhkan Sebelum Menulis Program?*
Persiapkan komputer dengan Prosesor dengan jumlah inti/core minimal 2 dengan 
memori/ram sebesar 2 GB. Jika Anda Pengguna Microsoft Windows silahkan download 
program [Code:Blocks](https://www.codeblocks.org/downloads), kemudian masuk ke 
bagian `"Download the binary release"` dan pilih versi dengan tulisan 
`"mingw-setup.exe"` semisal `codeblocks-20.03mingw-setup.exe`. kemudian install dan anda siap untuk menulis program. 

Apabila anda pengguna linux, buka `terminal` lalu ketikkan 
`gcc --version` apabila outputnya kurang lebih 
`"gcc (Ubuntu 7.4.0-1ubuntu1~18.04) 7.4.0"` maka anda sudah siap untuk menulis 
program. Atau lakukan installasi codeblocks dengan perintah 
`sudo apt-get install codeblocks`

#### *Mulai Coding*
pertama buka aplikasi Codeblocks melalui start menu atau icon desktop.

* Pertama buka codeblocks
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/1.jpg)

* lalu tekan `file > new > Project`
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/2.jpg)

* Lalu Pilih `"Console Application"`
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/3.jpg)

* Tekan Next
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/4.jpg)

* Pilih `"C"` paling atas lalu tekan next
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/5.jpg)

* Masukkan nama project yang anda inginkan.. disini saya mengisi coba1. lalu tekan next
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/6.jpg)

* lalu finish
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/7.jpg)

* next tekan segitiga yang saya tandai dalam kotak merah
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/8.jpg)

* tekan `"main.c"`
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/9.jpg)
 
* lalu tekan `icon build and run` atau tekan F9 pada keyboard. kemudian tunggu sebentar
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/10.jpg)

* lalu akan muncul program dengan text "Hello World". Selamat anda mulai menjadi programmer level 1.
![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/11.jpg)

#### *Penjelasan*
Header `#include <stdio.h>` dan `#include <stdlib.h>`

Header merupakan `library` yang berisi kumpulan fungsi dan logika yang 
dapat digunakan untuk mempermudah pembuatan program tanpa sepenuhnya 
membuat dari nol. Terdapat beberapa macam library, salah satunya adalah 
standard library yang tersedia langsung setelah melakukan installasi 
compiler pemrograman C, dan library yang dapat didownload dan digunakan 
secara manual.

`int main()`

Merupakan `fungsi` utama pada program, dimana fungsi ini akan dilakukan `call` 
dan segala perintah didalamnya akan dijalankan.

`printf("Hello World\n");`

Merupakan perintah untuk mencetak teks yang berada didalam tanda kutip. dan 
`\n` adalah karakter spesial yang berarti `1x enter` pada program.

#### *Tambahan*
selain printf, adapula perintah lain untuk menampilkan teks yaitu `puts("");` 
untuk menggunakannya caranya mirip dengan printf namun puts tak memerlukan `\n` 
untuk tambahan enter. Sebagai contoh.

```
printf("Ini adalah teks menggunakan printf");
printf("ini adalah teks menggunakan printf\n");
puts("Ini adalah teks menggunakan puts");
```

Setelah melakukan perubahan, untuk recompile program. Apabila terdapat error, 
perhatikan penempatan titik, koma dan semicolon. 

> `Silahkan coba mengeksplor program dengan mengganti teks Hello World dengan kata2 yang anda inginkan seperti nama ttl dsb`

#### *Tambahan bagi anda pengguna Linux*
Bagi anda yang sudah lumayan familiar dengan linux terminal dan tak mau menggunakan IDE seperti codeblocks dll, anda dapat mengikuti tutorial ini.

* Pertama buka `terminal`

* Kemudian ketikkan `nano program.c`

* selanjutnya isikan program yang anda inginkan

* lalu save program yang anda buat
	```
	Ctrl + X
	Y
	Enter
	```

![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/12.jpg)

* Lakukan compile program dengan cara `gcc -o program program.c` pastikan tak ada error

* terakhir jalankan program `./program`

* selamat anda telah compile program tanpa menggunakan IDE

![img_lg](./posts/2018-09-14-dasar-pemrograman-c-part1-the-beginning/13.jpg)

#### *Selanjutnya materi tentang Tipe Data.*

<https://learn.sparkfun.com/tutorials/digital-logic>

<https://en.wikipedia.org/wiki/C_(programming_language)>

<https://en.wikipedia.org/wiki/Programming_language>

<https://gcc.gnu.org/onlinedocs/cpp/Header-Files.html>

<https://www.quora.com/What-is-the-int-main>

