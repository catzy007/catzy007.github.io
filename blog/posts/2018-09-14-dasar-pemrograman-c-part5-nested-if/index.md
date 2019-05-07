### **Dasar Pemrograman C Part5 : Nested If**
#### Friday, September 14, 2018
Terkadang dalam hidup terdapat beberapa syarat yang harus 
dipenuhi. dalam program kita dapat menyelesaikannya dengan nested if.

**misal**
```
 jika ada makanan, saya mau makan.
    jika makan mie, saya jadi makan.
    jika tak makan mie, saya tak jadi makan.
jika tak ada makanan, saya tidak makan.
```

**misal dalam program**
```
if(makanan==1){
    if(mie==1){
        printf("saya makan mie\n");
    }else{
        printf("saya tak jadi makan\n");
    }
}else{
    printf("saya tidak makan\n");
}
```

**contoh**
```
#include <stdio.h>
#include <stdlib.h>

int main(int argc,char *argv[]){
    int pilihan=0;
    int opsi=0;
    int level=0;
    printf(" Waroeng Stacks\n");
    printf("1. Kopi\n");
    printf("2. Mie\n");
    printf("Masukkan Pilihan Anda : ");
    scanf("%d",&pilihan);
    switch(pilihan){
    case 1:
        printf("anda memilih Kopi.\n");
        printf("mau 1.dingin atau 2.panas? : ");
        scanf("%d",&opsi);
        if(opsi==1){
            printf("Kopi Dingin\n");
        }else{
            printf("Kopi Panas\n");
        }
        break;
    case 2:
        printf("anda memilih mie.\n");
        printf("mau 1.mie level atau 2.normal? : ");
        scanf("%d",&opsi);
        if(opsi==1){
            printf("mau level berapa? : ");
            scanf("%d",&level);
            if(level>3){
                printf("Mie Super Hot Level %d\n",level);
            }else{
                printf("Mie Level %d\n",level);
            }
        }else{
            printf("Mie Biasa\n");
        }
        break;
```

<br>
#### materi selanjutnya Perulangan

<br>
#### **Sumber :**
powerpoint kampus

<https://www.tutorialspoint.com/cprogramming/nested_if_statements_in_c.htm>
