#### Apakah laptop anda thermal throttling
_Friday, October 23, 2020_

#### PC Troubleshooting 101 Series 

Sebelumnya perlu diketahui apa itu thermal throttling dan apa manfaatnya bagi anda dan laptop/pc anda. 
Thermal throttling merupakan bagian dari [Dynamic frequency scaling](https://en.wikipedia.org/wiki/Dynamic_frequency_scaling) 
yang merupakan proses untuk mengubah kecepatan (frekuensi) sebuah prosesor dapat berupa CPU / GPU. 
Thermal throttling dapat berupa positif (Overcloking/Boost) yang meningkatkan performa maupun negatif 
(Undercloking/Thermal Throttling). 

Pada [kondisi normal](https://en.wikipedia.org/wiki/Advanced_Configuration_and_Power_Interface#Power_states), 
CPU/GPU modern akan meningkatkan atau mengurangi frekuensi sesuai penggunaan. Misalnya pada saat idle (nganggur), 
prosesor akan berjalan (dibawah base clock) misal 1.2 Ghz untuk menghemat daya. Namun saat pengguna membuka aplikasi 
berat, semisal Adobe Premiere Pro atau Blender makan CPU/GPU akan berusaha menuju performa maksimal (diatas base 
clock) misal 3.5 Ghz hingga pendingin tak mampu lagi menjaga clock tersebut.

Pada [overclocking](https://en.wikipedia.org/wiki/Overclocking) biasanya voltase dan frekuensi lebih dari 
standar diberikan pada CPU/GPU yang didinginkan secara lebih dengan watercooling atau nitrogen cair untuk 
mendapat performa tambahan. Namun sebaliknya [underclocking](https://en.wikipedia.org/wiki/Underclocking#Graphics_cards) 
biasanya terjadi pada CPU/GPU yang mengurangi frekuensi karena tidak mampu menjaga base dan boost clock karena 
disebapkan oleh panas berlebih. Namun ada pula pengguna yang melakukan underclocking secara manual biasanya 
untuk menghemat energi.

Underclocking biasanya mempengaruhi kinerja beban berat berkelanjutan seperti editing video, rendering, gaming 
dan biasanya tidak mempengaruhi kinerja ringan seperti browsing, office. Pada artikel ini akan dibahas apakah 
CPU/GPU anda dapat menjaga minimal base clock pada saat melakukan kinerja berat berkelanjutan dan apa yang dapat 
dilakukan untuk menjaga clock tersebut.

Pengujian ini dilakukan pada laptop ASUS X550V dengan CPU I7-7700HQ, GPU Nvidia GTX 950M dan OS Windows 10 2004. 
Bila anda melakukan pengujian ini pastikan menggunakan OS minimal Windows 8 karena perbedaan versi `Task Manager`. 
Apabila memang menggunakan Windows 7 kebawah, gunakan aplikasi lain untuk menampilkan performa CPU/GPU. Pengujian 
juga dapat dilakukan di PC dengan sedikit perbedaan.

* Pertama download CPU-Z <https://www.cpuid.com/softwares/cpu-z.html> download versi setup classic lalu install.
* Kemudian download dan jalankan GPU-Z <https://www.techpowerup.com/gpuz/>.
* Selanjutnya buka Task Manager dan arahkan ke tab `Performance > CPU`
* Lalu sebisa mungkin tutup semua aplikasi lain karena dapat mempengaruhi hasil test.
![img](./posts/2020-10-23-apakah-laptop-anda-thermal-throttling/1.jpg)
* Kemudian buka tab `Bench` pada CPU-Z
* Lalu tekan tanda tanya `?` pada GPU-Z lalu akan muncul window `Render Test`
![img](./posts/2020-10-23-apakah-laptop-anda-thermal-throttling/2.jpg)
* Terakhir, tekan `Stress CPU` pada CPU-Z dan `Start Render Test` pada GPU-Z kemudian tunggu 10 hingga 20 menit.

> Jika anda melakukan test pada PC dengan sistem watercooling all in one (AIO), dapat melakukan test selama 30-40 menit. 
Jika anda menggunakan custom loop watercooling, waktu test dapat diperpanjang.

![img](./posts/2020-10-23-apakah-laptop-anda-thermal-throttling/3.jpg)

Pada bagian yang ditandai warna <span style="color:red;">merah</span> adalah base clock CPU, sedangkan bagian 
berwarna <span style="color:green;">hijau</span> adalah clock CPU anda saat ini. Seperti yang dapat dilihat 
pada test diatas bahwa CPU mengalami penurunan yang cukup signifikan dari 2.8 Ghz menjadi 2.6 Ghz hanya dalam 
beberapa detik.

![img](./posts/2020-10-23-apakah-laptop-anda-thermal-throttling/4.jpg)

Kemudian setelah sekitar 15 Menit, CPU stabil di 1.7 Ghz. Sangat jauh dari base clock 2.8 Ghz. Apa yang terjadi? 
pada dasarnya CPU mengalami underclocking karena CPU dan GPU menerima beban kerja berat secara berkelanjutan dan 
sistem pendingin laptop tidak dapat menjaga kecepatan base clock sehingga kecepatan CPU diturunkan untuk mencegah 
kerusakan CPU.

Apa yang dapat dilakukan agar CPU/GPU dapat menjaga base clock bakan boost?
1. Pastikan anda menaruh laptop di permukaan keras dan rata seperti meja kayu atau kaca. Permukaan lembut seperti kasur 
dan bantal dapat menghalangi ventilasi udara yang dibutuhkan laptop.
1. Periksa suhu ruangan anda. Udara sekitar yang panas dapat menyulitkan sistem pendingin laptop untuk 
mendinginkan CPU/GPU dan menyebabkan pendingin harus bekerja ekstra.
1. Ganti Pasta Thermal secara berkala (biasanya setiap 6 bulan hingga 1 tahun sekali). Pasta thermal berfungsi untuk 
menghantarkan panas dari CPU/GPU ke sistem pendingin. Pasta thermal dapat menjadi keras dan mengurangi daya hantar 
panas. Ganti pasta thermal secara hati - hati karena CPU/GPU pada laptop berwujud [kristal silikon](https://en.wikipedia.org/wiki/Wafer_(electronics)) 
dan dapat retak pada keadaan tertentu.
1. Beberapa laptop tidak memiliki sistem pendingin untuk beban berkelanjutan. Biasanya laptop berupa Ultrabook 
yang tipis memiliki pendingin dengan kapasitas 12 Watt untuk CPU 25 Watt. Hal ini menyebabkan CPU/GPU akan selalu 
underclock bila diberikan beban berkelanjutan.
