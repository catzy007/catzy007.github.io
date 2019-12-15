### **Perintah Dasar Teks Editor Nano**
_Diposting oleh Eligio Moniz do Rego di 18.15 . Selasa, 27 April 2010_
<br>
Label: Linux, Tool Teks Editor, Tutorial

Panduan ini dibuat untuk memberikan pemahaman menggunakan nano dalam membuat atau mengedit sebuah file dalam sistem Unix-like.

1. Tentang Nano
    <br>
    Nano merupakan sebuah aplikasi editor berbasis teks untuk Unix dan sistem Unix-like. Ini adalah tiruan dari Pico, editor dari klien email Pine. Tujuan nano dikembangkan adalah untuk meniru Pico sebaik mungkin dan mungkin mencakup fungsionalitas tambahan.

    Nano merupakan perangkat lunak bebas yang dirilis di bawah bendera GNU General Public License (lisensi GPLv3).

2. Perintah Dasar Nano
    <br>
    * Membuka dan menciptakan sebuah file di nano
        ```
        # nano namafile
        ```
        contoh:
        ```
        # nano latihan
        ```
        > Catatan:
        > Anda juga dapat lansung memberikan format ekstensi pada file teks yang dibuat tersebut, seperti `latihan.txt` atau `latihan.odt`

    * Mengedit file di nano
        ```
        # nano /etc/issue
        ```

    * Simpan dan Keluar
        <br>
        Menyimpan file, tekan `Ctrl+O` (tahan tombol Ctrl lalu tekan O).
        <br>
        Keluar dari nano, tekan `Ctrl+X`.

    * Cut dan Paste
        <br>
        cut sebuah baris, tekan `Ctrl+K`.
        paste, tekan `Ctrl+U`.

    * Mencari Teks
        <br>
        Tekan `Ctrl+W`, ketikkan string yang ingin Anda cari, kemudian tekan Enter.
        Tekan `Alt+W`, untuk mencari kembali string yang sama.

3. Penutup
    <br>
    Dengan memahami operasi-operasi dasar pada nano tersebut, nantinya rekan-rekan tidak akan bingung lagi jika mengedit atau membuat sebuah file teks di dalam sebuah Command Line Interface.

<br>
Terima kasih.

Referensi:
<br>
<http://www.nano-editor.org>
<br>
<http://en.wikipedia.org/wiki/Nano_(text_editor)>
<br>
<http://avancalinux.blogspot.com>