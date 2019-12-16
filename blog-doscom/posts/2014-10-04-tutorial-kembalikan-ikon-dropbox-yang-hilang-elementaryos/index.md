### **Tutorial: Kembalikan Ikon Dropbox yang Hilang (ElementaryOS)**
_October 4, 2014 - October 4, 2014 Reza Faiz A Rahman_

Pada pembaruan [Dropbox](http://dropbox.com/) yang terakhir tiba-tiba ikon Dropbox di wingpanel hilang. Padahal Dropbox tetap berjalan normal, masih bisa sinkronisasi dengan nautilus. Dilihat melalui terminalpun Dropbox berjalan dengan normal. Setelah cari tau sana sini, ternyata banyak yang mengalami hal serupa.

Permasalahannya terletak pada pustaka libappindicator. libappindicator merupakan pustaka yang dapat memuat menu pada wingpanel. Dan sepertinya secara bawaan Dropbox yang baru tidak mengaktifkan penggunaan libappindicator ini. Jadi yang harus kita lakukan adalah mengaktifkan kembali penggunaan libappindicator tersebut.

Gimana caranya ?

1. Ubah isi dari berkas `.xsessionrc`. Berkas `.xsessionrc` terletak di `/home/namauser/`. Sila gunakan penyunting teks kesukaan kamu.
    <br>
    ```
    $ nano /home/namauser/.xsessionrc
    ```
    <br>
    Kalau saya pakai nano biar nggak ribet. 😀
2. Isi berkas tersebut dengan:
    <br>
    ```
    export DROPBOX_USE_LIBAPPINDICATOR=1
    ```
    <br>
    Tentu tau kan kenapa menggunakan angka 1 ?. 1 = true. 😀
3. Nyalakan ulang mesin kamu.

Apabila setelah melakukan hal diatas ikon tetap tidak muncul, silahkan pasang ulang Dropbox kamu.

Sumber: <http://entornosgnulinux.com>