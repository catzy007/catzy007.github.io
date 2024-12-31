#### Dasar Pemrograman C Part3 : Input dan Operator
##### *Monday, April 23, 2018*
Dalam bahasa C terdapat Operand dan Operator. Operand merupakan 
nilai yang akan diproses nilai dapat berupa angka ataupun variabel, 
dan Operator adalah instruksi yang dilakukan terhadap operand agar 
mendapat nilai.

misal `2 + 3 = 5`

`2` dan `3` adalah `operand`

`+` adalah `operator`

`= 5` adalah seperti yang anda tebak. hasil 

Dalam bahasa C terdapat beberapa jenis operator. beberapa diantaranya adalah
  1. Arithmetic Operators
  2. Relational Operators
  3. Logical Operators
  4. Bitwise Operators
  5. Assignment Operators
  6. Misc Operators

#### `1.) Operator Aritmatika.`

sesuai namanya berguna untuk melakukan proses perhitungan matematika sederhana.

contoh
```
#include <stdio.h>
#include <stdlib.h>

int main(){
  int a=5;
  int b=6;
  int jumlah = a+b;    //ini adalah operasi penjumlahan
  int kurang = a-b;    //ini adalah operasi pengurangan
  int kali = a*b;      //ini adalah operasi perkalian
  float bagi = (float)a/(float)b;    //ini adalah operasi pembagian
  //diperlukan operand yang setipe jadi int dikonversi menjadi float baru diproses
  int modulo = kali%4; //ini adalah modulo "sisa hasil bagi"
  printf("%d %d %d %.2f %d\n",jumlah,kurang,kali,bagi,modulo);
  return 0;
}
```

dapatkah anda menebak isi dari variabel mumet berdasarkan contoh diatas?
```
float mumet = (float)a/(b+jumlah)*kali/6;
```

#### `2.) Operator Relasional.` 
operator ini digunakan untuk membandingkan nilai. 
hasilnya dapat berupa benar atau salah

disini kita menggunakan `if`. 

contoh
```
#include <stdio.h>
#include <stdlib.h>

int main(){
  //jika 2 lebih besar dari 3
  if(2 > 3){
    printf("Benar\n");
  }else{
    printf("Salah\n");
  }

  //jika 2 lebih kecil dari 3
  if(2 < 3){
    printf("Benar\n");
  }else{
    printf("Salah\n");
  }

  //jika 2 lebih besar atau sama dengan 3
  if(2 >= 3){
    printf("Benar\n");
  }else{
    printf("Salah\n");
  }

  //jika 2 lebih kecil atau sama dengan 3
  if(2 <= 3){
    printf("Benar\n");
  }else{
    printf("Salah\n");
  }

  //jika 2 sama dengan 3
  if(2 == 3){
    printf("Benar\n");
  }else{
    printf("Salah\n");
  }

  //jika 2 tidak sama dengan 3
  if(2 != 3){
    printf("Benar\n");
  }else{
    printf("Salah\n");
  }

return 0;
}
```

#### `3.) Operator Logika.` 
sesuai namanya input dan outputnya adalah logika.

contoh
```
#include <stdio.h>
#include <stdlib.h>

int main(){
  //jika 4 lebih besar dari 2 DAN 3 lebih besar dari 4
  //&& perlu kedua operator operand bersifat benar
  //operand disini adalah hasil dari 4>2 dan 3>4
  if( 4 > 2 && 3 < 4)
    printf("keduanya benar\n");
  else
    printf("salahsatu atau keduanya salah\n");

  //jika 4 lebih besar dari 2 ATAU 3 lebih besar dari 4
  //|| hanya perlu salah satu operand bernilai benar
  //apabila salah satu salah, masih dianggap benar
  if( 4 > 2 || 2 > 4)
    printf("salahsatu atau keduanya benar\n");
  else
    printf("keduanya salah\n");

  //jika kebalikan dari 4 lebih besar dari 2
  //anggap saja seperti kebalikan dari yang sebenarnya
  //misal 4 lebih besar dari 2.. yang mana sebenarnya bernilai benar
  //maka dengan ini menjadi salah
  if( !(4 > 2) )
    printf("benar\n");
  else
    printf("salah\n");
}
```

#### `4.) Operator Assignment.` 
atau Penugasan berfungsi untuk memberikan suatu nilai ke dalam 
variable atau operand lain dari arah kanan ke kiri.

contoh
```
#include <stdio.h>
#include <stdlib.h>

int main(){
  int n;

  n=5; //mengisi/mengubah nilai n menjadi 5

  n+=4; //sama dengan n=n+4 atau n=5+4
  printf("%d ",n);

  n-=2; //sama dengan n=n-2
  printf("%d ",n);

  n*=3; //sama dengan n=n*3
  printf("%d ",n);

  n/=2; //sama dengan n=n/2
  printf("%d ",n);

  n%=4; //sama dengan n=n%2
  printf("%d\n",n);

  return 0;
}
```

> `selain itu diperlukan pula input agar program dapat digunakan 
dengan lebih mudah tanpa recompile setiap kali penggunaan.`

Beberapa fungsi input yang cukup sering digunakan adalah `scanf()` dan `gets()`

#### `1.) Scanf`
```
scanf("%d",&ipt);
```

`scanf` memanggil fungsi scanf

`"%d"` tipe data yang di inginkan.. `%d=int`, `%f=float`, `%c=char` dsb...

`&ipt` variable penyimpan. jangan lupakan `&`

contoh
```
#include <stdio.h>
#include <stdlib.h>

int main(){
  int ipt; //variabel penyimpan

  printf("program ini akan menambahkan 5 pada input dan menampilkannya\n");

  printf("inputkan angka : "); //teks bantu
  scanf("%d",&ipt); //inputan

  ipt+=5; //variabel ditambah 5
  printf("hasilnya adalah %d\n",ipt); //output

  return 0;
}
```
![img](./posts/2018-04-24-dasar-pemrograman-c-part3-input-dan-operator/1.jpg)

#### `2.) Gets`
sebenarnya gets adalah cara termudah untuk menginputkan string yang 
memerlukan karakter spasi. namun karena gets memiliki [Masalah Keamanan](https://stackoverflow.com/questions/1694036/why-is-the-gets-function-so-dangerous-that-it-should-not-be-used), maka sebaiknya tidak digunakan. 
```
gets(ipt);
```

`gets` memanggil fungsi gets

`ipt` variabel penyimpan

contoh
```
#include <stdio.h>
#include <stdlib.h>

int main(){
  char ipt[255]; //variabel penyimpan dengan ukuran maksimal 255 karakter
  printf("Inputkan Nama Lengkap Anda : ");
  gets(ipt); //gets
  printf("%s\n",ipt);
  return 0;
}
```

![img](./posts/2018-04-24-dasar-pemrograman-c-part3-input-dan-operator/2.jpg)
> `seperti yang dapat dilihat, program dapat dicompile dan dijalankan, 
namun mendapat banyak peringatan seperti diatas.`

#### `3.) fgets`
seperti yang anda baca diatas, gets sebaiknya tidak digunakan, 
maka harus ada pengganti untuk itu. perkenalkan fgets

```
fgets(ipt, sizeof(ipt), stdin);
```

`fgets` pemanggil fungsi fgets

`ipt` variabel penyimpan

`sizeof(ipt)` sizeof diikuti variabel penyimpan || isi dengan ukuran maksimal variabel penyimpan misal 255

`stdin` asal ikuti saja lah

contoh
```
#include <stdio.h>
#include <stdlib.h>

int main(){
  char ipt[255];
  printf("inputkan nama lengkap anda : ");
  fgets(ipt, sizeof(ipt), stdin);
  printf("nama anda adalah : %s\n",ipt);
  return 0;
}
```
![img](./posts/2018-04-24-dasar-pemrograman-c-part3-input-dan-operator/3.jpg)

#### `Latihan`
Buat program dengan bahasa C untuk menampilkan Informasi Toko dan Struk Pembayaran dengan menggunakan input dan operator matematika.
![img](./posts/2018-04-24-dasar-pemrograman-c-part3-input-dan-operator/4.jpg" alt="img">
            <a href="https://simple.wikipedia.org/wiki/Receipt">simple.wikipedia.org</a>
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

*Materi selanjutnya if else switch*

#### `Sumber Bacaan`

<https://stackoverflow.com/questions/1694036/why-is-the-gets-function-so-dangerous-that-it-should-not-be-used>

<https://www.tutorialspoint.com/cprogramming/c_operators.htm>