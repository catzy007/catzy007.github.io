### **Dasar Pemrograman C Part7 : Array**
#### Friday, September 14, 2018
Array adalah kumpulan data yang bertipe sama. Contohnya array of 
int, array of char. Membaca array menggunakan index. index array 
dalam bahasa C dimulai dari 0.

<br>
#### **inisialisasi array**
inisialisasi array of int dengan nama arr dan ukuran 10
```
int arr[10];
```

<br>
#### **mengisikan data ke array**
mengisi data 255 ke array index ke 0 sampai 2
```
arr[0]=255;
arr[1]=255;
arr[2]=255;
```

> jika array tak diisi, array akan diberi nilai random

> jika mengisikan nilai ke array yang tidak di inisialisasi akan terjadi error 

> *** stack smashing detected ***: <unknown> terminated

<br>
#### **membaca data array**
membaca isi dari array index ke 2
```
printf("%d",arr[2]);
```
> apabila anda mengakses array yang tidak di inisialisasi maka akan mendapat nilai random

<br>
#### **mengisi dan mengakses array menggunakan loop**
misal
```
int arr[10];
int i;
for(i=0;i<10;i++){
    arr[i]=i; //mengisi array dengan nilai i
}
for(i=0;i<10;i++){
    printf("%d ",arr[i]); //membaca array
}
```

<br>
#### **operasi numerik array**
misal menambahkan nilai array a dan b dan disimpan di array c
```
int a[5],b[5],c[5],i;

for(i=0;i<5;i++){
    a[i]=i;
    printf("%d ",a[i]);
}
puts("");
for(i=0;i<5;i++){
    b[i]=i;
    printf("%d ",b[i]);
}
puts("");
for(i=0;i<5;i++){
    c[i]=a[i]+b[i];
    printf("%d ",c[i]);
}
```

<br>
#### **array of char (string)**
string adalah kumpulan tipe data char dalam bentuk array dan dapat diakses satu persatu
```
char kata[]="halo";
```

**Sama dengan**

```
char kata[4];
kata[0]='h';
kata[1]='a';
kata[2]='l';
kata[3]='o';
kata[4]='\0';
```
pada dasarnya untuk mengakhiri string dibutuhkan karakter khusus yang disebut nul character `'\0'` "baca:backslash nol"

contoh penggunaan
```
int i=0;
char kalimat[]="halo dunia, saya sedang belajar bahasa c";
while(kalimat[i]!='\0'){
    printf("%c ",kalimat[i]);
}
```

selama kalimat ke-i tidak sama dengan nul character, print karakter dalam kalimat

<br>
#### Sekian materi dasar pemrograman bahasa C dari saya. apabila ada kesalahan atau saran dapat hubungi saya

<br>
#### **Sumber**
<https://en.wikipedia.org/wiki/Array_data_structure>

<https://www.tutorialspoint.com/cprogramming/c_arrays.htm>

<http://www.cplusplus.com/doc/tutorial/ntcs/>
