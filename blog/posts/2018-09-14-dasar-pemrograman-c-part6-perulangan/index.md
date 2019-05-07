### **Dasar Pemrograman C Part6 : Perulangan**
Adakalanya dalam pemrograman diperlukan beberapa proses yang sama. 
daripada menuliskan program tersebut berulang ulang, loop atau 
perulangan dapat digunakan.

**misal**
```
printf("0");
printf("1");
printf("2");
printf("3");
printf("4");
```

**sama dengan**
```
int i;
for(i=0;i<5;i++){
    printf("%d",i);
}
```

**Terdapat 3 macam perulangan dasar dalam bahasa C. antara lain**
1. for(){}
2. while(){}
3. do{}while()

**Contoh `for(){}`**
```
int i;
for(i=0;i<100;i++){
    task();
}
```

`int i;` adalah variable yang akan diproses selama loop berlangsung.

`for` pemanggilan for

`i=0` set variable i sebagai nilai awal

`i<100` selama i kurang dari 100, tetap jalankan loop

`i++` pembaruan nilai

`task()` perintah yang akan diulang

<br>
**Contoh `while(){}`**
```
int i=0;
while(i<100){
    task();
    i++;
}
```

`int i;` deklarasi variable sekaligus set nilai awal

`while` pemanggilan while

`i<100` selama i kurang dari 100, tetap jalankan loop

`task()` perintah yang akan diulang

`i++` pembaruan nilai

<br>
**contoh `do{}while()`**
```
int i;
i=0;
do{
    task();
    i++;
}while(i<100);
```

`int i;` deklarasi variable

`i=0;` set nilai awal

`do` lakukan pemanggilan do..while

`task()` lakukan perintah selama loop berlangsung

`i++` pembaruan nilai

`while` penutup do..while

`i<100` lakukan loop selama i kurang dari 100

<br>
#### **Pembaruan nilai dapat berupa**
```
i++
j--
i+=2
j-=3
i=i+5
j=j-9
a*=2
b/=3
%=2
```

**Contoh**
```
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int ipt;

    //loop using for
    for(ipt=0;ipt<=31;ipt++){
        fprintf(stdout, "ASCII %d is %c\n", ipt, ipt);
    }

    //loop using while
    ipt=32;
    while(ipt<=47){
        ipt++;
        fprintf(stdout, "ASCII %d is %c\n", ipt, ipt);
    }

    //loop using do while
    ipt=48;
    do{
        fprintf(stdout, "ASCII %d is %c\n", ipt, ipt);
    ipt++;
    }while(ipt<=57);

    //random loop
    for(ipt=58;ipt<=127;ipt++){
        fprintf(stdout, "ASCII %d is %c\n", ipt, ipt);
    }

    //compiled with gcc (Ubuntu 6.3.0-12ubuntu2) 6.3.0 20170406
    //please consider to rebuild to avoid something happen
    return 0;
}
```

<br>
#### Materi selanjutnya nested loop

<br>
#### **Sumber**
<https://www.tutorialspoint.com/cprogramming/c_loops.htm>

<https://www.programiz.com/c-programming/c-for-loop>
