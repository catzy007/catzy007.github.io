### **Dasar Pemrograman C Part4 : If Else Switch**
#### Friday, June 22, 2018

Dalam hidup kita selalu dihadapkan pada pilihan dan kita harus memiih 
salahsatu dari pilihan tersebut.. jodoh, tujuan, masadepan.. itulah 
yang biasanya menanti... nah sama halnya dengan pemrograman. suatu 
saat kita dihadapkan dengan pilihan. nah maka dari itu lah muncul 
if else switch.

**misal**
> nak, kalau konter pulsa buka, beli pulsa 50.000

**berarti**
```
if "konter pulsa buka"
then "beli pulsa 50.000"
```

<br>
**contoh lain**
> nak, kalau mie ayam buka, beli 2 porsi. kalau tidak, beli nasi goreng

**berarti**
```
if "mie ayam buka"
	then "beli 2 porsi"
else
	then "beli nasi goreng"
```

kira kira seperti itu

nah if dalam bahasa C kira-kira sebagai berikut

<br>
#### **1.) CONTOH IF SAJA**
```
if (TERJADI)
{
      LAKUKAN 1;
      LAKUKAN 2;
}
```
jika if terpenuhi, maka lakukan 1 dan lakukan 2 akan dijalankan. 
jika tidak terpenuhi maka tak lakukan apapun.

<br>
#### **2.) CONTOH IF DAN ELSE**
```
if (TERJADI LAGI)
{
      PERINTAH 1;
}
else
{
      PERINTAH 2;
}
```
jadi apabila if terpenuhi, program akan menjalankan perintah 1, 
apabila tak terpenuhi maka akan menjalankan perintah 2 
(APAPUN YANG TERJADI).

<br>
#### **3.) CONTOH IF ELSE IF**
```
if (TERJADI LAGI)
{
      PERINTAH 1;
}
else if (TERJADI LAGI DAN LAGI)
{
      PERINTAH 2;
}
```
apabila if terpenuhi maka program akan menjalankan perintah 1. 
apabila else if terpenuhi, maka akan menjalankan perintah 2. 
apabila if dan elseif tak ada yang terpenuhi, maka tak ada 
yang dilakukan.

<br>
#### **4.) CONTOH IF ELSE IF ELSE**
```
if (TERJADI LAGI)
{
      PERINTAH 1;
}
else if (TERJADI LAGI DAN LAGI)
{
      PERINTAH 2;
}
else
{
      PERINTAH 3;
}
```
jika if terpenuhi maka jalankan perintah 1 dan lupakan yang lain. 
jika if tak terpenuhi dan else if terpenuhi, jalankan perintah 2 
dan lupakan yang lain. dan jika if dan else if tak terpenuhi, 
jalankan perintah 3 dan lupakan yang lain.

> note : anda dapat membuat if else if else sebanyak yang anda 
inginkan... tentusaja itu adalah tindakan yang bodoh. cara yang 
lebih baik adalah menggunakan Switch Case.

<br>
#### **5.) CONTOH SWITCH CASE**
```
switch(pilihan){
      case 1:
            LAKUKAN1;
            break;
      case 2:
            LAKUKAN2;
      default:
            LAKUKAN SELAIN 1 DAN 2;
            break;
}
```
jika pilihan bernilai 1 maka LAKUKAN1, JIKA pilihan bernilai selain 
1 dan 2 maka LAKUKAN SELAIN 1 DAN 2. gunanya break adalah mencegah 
menu selanjutnya dijalankan

<br>
#### **Contoh if else**
```
#include <stdio.h>
#include <stdlib.h>

int main(){

//jika 1+1=2 print benar
if ( 1 + 1 == 2 )
{
    printf("benar\n");
}

//jika 120 adalah bilangan ganjil print ganjil
//jika tidak, print genap
if ( 120 % 2 != 0 )
{
    printf("ganjil\n");
}
else
{
    printf("genap\n");
}

//jika umur anda kurang dari 18, print masih sangat muda
//jika umur anda 18-25, print masa keemasan
//jika umur anda 25 keatas, saatnya anda memikirkan kehidupan
int temp;
printf("inputkan umur anda : ");
scanf("%d",&temp);

if(temp<18){
    printf("anda masih sangat muda ya\n");
}else if(temp>=18 && temp <=25){
    printf("nikmatnya masa masa keemasan\n");
}else{
    printf("sudah saatnya anda memikirkan kehidupan\n");
}

}
```
<br>
#### **Contoh swith case**
```
#include <stdio.h>
#include <stdlib.h>

int main(int argc,char *argv[]){
        int pilihan;
        printf("Masukkan Pilihan Anda : ");
        scanf("%d",&pilihan);
        switch(pilihan){
        case 1:
                printf("Tidak tahu\n");
                break;
        case 2:
                printf("Halo Dunia\n");
                //tanpa break case 3 juga ikut dijalankan
        case 3:
                printf("Ini Siapa Ya?\n");
                break;
        default:
                printf("Wkwkwkw\n");
                break;
        }
}
```

<br>
#### materi selanjutnya nested if

<br>
#### **Sumber :**
<https://www.tutorialspoint.com/cprogramming/if_else_statement_in_c.htm>

<https://www.tutorialspoint.com/cprogramming/switch_statement_in_c.htm>
