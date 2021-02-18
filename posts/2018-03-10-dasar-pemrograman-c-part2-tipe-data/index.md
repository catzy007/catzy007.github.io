### **Dasar Pemrograman C Part2 : Tipe Data**
#### Saturday, March 10, 2018

Dalam Bahasa C, Tipe data adalah deklarasi untuk lokasi memori atau 
variabel yang menentukan karakteristik dari data yang akan disimpan 
dan cara proses yang dibutuhkan untuk memproses data tersebut.

Bahasa C mempunyai tipe data dasar yaitu

<br>
#### 1.) Char
tipe data char digunakan untuk deklarasi karakter memiliki ukuran 
memori sebesar 1 Byte dengan jangkauan nilai sebesar -128 hingga 
127 atau 0 sampai 255. deklarasi char dapat dilakukan dengan 
mengetikkan char lalu diikuti nama variabel. untuk membaca char 
menggunakan %c

contoh
```
char varchar = 'a';
printf("Value dari varchar adalah %c",varchar);  
```

<br>
#### 2.) Short
Tipe data short atau short int memiliki ukuran memori sebesar 2 Byte 
dengan jangkauan nilai sebesar −32,767 hingga +32,767. untuk 
mendeklarasikan short dapat dilakukan dengan mengetik short lalu 
diikuti nama variabel. untuk membaca short dapat dilakukan 
menggunakan %hi

contoh
```
short varshort=1234;
printf("value dari varshort adalah %d,varshort);
```

<br>
#### 3.) Int       
Tipe data integer sesuai namanya integer yang berati "bilangan bulat" 
memiliki ukuran memori sebesar 2 Byte atau 4 Byte "tergantung 
compiler" dengan jangkauan nilai sebesar -32768 hingga 32767 
atau -2,147,483,648 hingga 2,147,483,647. Untuk mendeklarasikan 
integer perlu diketikkan int dan diikuti nama variabel. dan untuk 
membaca integer menggunakan %d

contoh
```
int varint=1234;
printf("value dari varint adalah %d",varint);
```

<br>
#### 4.) Long
Tipe data long memiliki ukuran memori sebesar 4 Byte dengan jangkauan 
nilai sebesar −2,147,483,647 hingga +2,147,483,647. untuk 
mendeklarasikan long dilakukan dengan long diikuti dengan nama 
variabel. untuk membaca menggunakan %li

contoh
```
long varlong=1234;
printf("value dari varlong adalah %li",varlong);
```

<br>
#### 5.) Float
Tipe data float atau "single-precision floating-point type" adalah 
tipe data yang mendukung perhitungan desimal. jangkauan nilai 
sebenarnya tidak terspesifikasi namun kebanyakan kompiler ukuran 
memori float sebesar 4 Byte dengan jangkauan nilai sebesar 1.2*10^-38 
hingga 3.4*10^+38. untuk mendeklarasi float dapat dilakukan dengan f
loat diikuti nama variabel. untuk membaca float dapat menggunakan %f

contoh
```
//bukan value pi sebenarnya
float pi=3.14
printf("value dari pi adalah %f",pi);
```

<br>
#### 6.) Double
Tipe data double atau "double-precision floating-point type" memiliki 
properti yang mirip2 dengan float atau single presisi. jangkauan nilai 
pada compiler standar 2.3*10^-308 to 1.7*10^+308 dan ukuran memori 8 
Byte. deklarasi double dilakukan dengan double diikuti nama variabel 
dan untuk membaca double menggunakan %lf

contoh
```
//bukan value pi sebenarnya
double pi=3.14
printf("value dari pi adalah %lf",pi);
```

#### info lebih lanjut
```
#include <stdio.h>
#include <limits.h>

int main() {
   printf("Storage size for char\t  : %d \n", sizeof(char));
   printf("Storage size for short\t  : %d \n", sizeof(short));
   printf("Storage size for integer  : %d \n", sizeof(int));
   printf("Storage size for long\t  : %d \n", sizeof(long));
   printf("Storage size for float\t  : %d \n", sizeof(float));
   printf("Storage size for double\t  : %d \n", sizeof(double));

   return 0;
}
```
<p align="center">
	<img src="./posts/2018-03-10-dasar-pemrograman-c-part2-tipe-data/1.jpg" height="250px" alt="img1">
</p> 

informasi mengenai float dari <https://www.tutorialspoint.com/cprogramming/c_data_types.htm>

```
#include <stdio.h>
#include <float.h>

int main() {
   printf("Storage size for float : %d \n", sizeof(float));
   printf("Minimum float positive value: %E\n", FLT_MIN );
   printf("Maximum float positive value: %E\n", FLT_MAX );
   printf("Precision value: %d\n", FLT_DIG );
  
   return 0;
}
```

perbedaan float dan double <https://www.geeksforgeeks.org/difference-float-double-c-cpp/>

```
// C program to demonstrate
// double and float precision values

#include <stdio.h>
#include <math.h>

// utility function which calculate roots of
// quadratic equation using double values
void double_solve(double a, double b, double c){
    double d = b*b - 4.0*a*c;
    double sd = sqrt(d);
    double r1 = (-b + sd) / (2.0*a);
    double r2 = (-b - sd) / (2.0*a);
    printf("%.5f\t%.5f\n", r1, r2);
}

// utility function which calculate roots of
// quadratic equation using float values
void float_solve(float a, float b, float c){
    float d = b*b - 4.0f*a*c;
    float sd = sqrtf(d);
    float r1 = (-b + sd) / (2.0f*a);
    float r2 = (-b - sd) / (2.0f*a);
    printf("%.5f\t%.5f\n", r1, r2);
}  

// driver program
int main(){
    float fa = 1.0f;
    float fb = -4.0000000f;
    float fc = 3.9999999f;
    double da = 1.0;
    double db = -4.0000000;
    double dc = 3.9999999;

    printf("roots of equation x2 ? 4.0000000 x + 3.9999999 = 0 are : \n");
    printf("for float values: \n");
    float_solve(fa, fb, fc);

    printf("for double values: \n");
    double_solve(da, db, dc);
    return 0;
}
```

<br>
#### 7.) String
sebenarnya ada lagi tipe data lain yaitu string. string adalah 
kumpulan dari char yang membentuk suatu kata / kalimat.

contoh kata
> aku sayang dia

maka kita buat variabel string dengan ukuran minimal 14 karakter, 
dapat lebih.. spasi dihitung.
```
char string[14]="aku sayang dia";
printf("%s\n",string);
```

<br>
#### materi selanjutnya Input dan Operator

<br>
#### Informasi lebih lanjut dapat membaca artikel dibawah ini
<https://en.wikipedia.org/wiki/C_data_types>

<https://www.tutorialspoint.com/cprogramming/c_data_types.htm>

<https://stackoverflow.com/questions/11438794/is-the-size-of-c-int-2-bytes-or-4-bytes>

<https://www.programiz.com/c-programming/c-data-type>

<https://www.geeksforgeeks.org/difference-float-double-c-cpp/>

