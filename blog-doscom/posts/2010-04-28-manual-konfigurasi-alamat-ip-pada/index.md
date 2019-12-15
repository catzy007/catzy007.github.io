### **Manual Konfigurasi Alamat IP Pada GNU/Linux**
_Diposting oleh Eligio Moniz do Rego di 18.22 . Rabu, 28 April 2010_
<br>
Label: Linux, Networking, Tool Networking, Tutorial

Memberikan alamat IP di Linux tidaklah susah, ada 2 cara yang bisa digunakan dalam memberikan alamat IP yaitu, menggunakan cara manual melalui [Command Line Interface](http://en.wikipedia.org/wiki/Command_line_interface) (CLI) atau menggunakan cara [Graphical User Interface](http://en.wikipedia.org/wiki/Graphical_user_interface) (GUI).

Artikel ini, penulis hanya membahas cara yang pertama. Asumsi penulis, dengan memahami cara manual memberikan IP address dengan CLI tersebut, dapat memudahkan rekan-rekan untuk menyetting IP address dikala suatu saat berkutak dengan server Linux yang tidak ada tampilan grafisnya sama sekali.

> Info:
> Penulis mempraktekkan cara setting alamat IP secara manual ini pada distro Linux [Debian](http://www.debian.org/), [Fedora](http://fedoraproject.org/), [Slackware](http://www.slackware.com/), dan [Gentoo](http://www.gentoo.org/). Untuk mengedit file script yang ada pada setiap distro GNU/Linux, penulis menggunakan teks editor [nano](http://www.nano-editor.org/) (Panduannya disini).

Simak langkah-langkahnya berikut ini:

<br>
* Menggunakan Ifconfig
    <br>
    [Ifconfig](http://en.wikipedia.org/wiki/Ifconfig) merupakan perintah pada CLI yang digunakan untuk menampilkan device kartu jaringan dan alamat IP, sekaligus dapat digunakan untuk menyetting alamat IP secara tidak permanen, artinya settingan alamat IP akan kembali hilang ketika komputer direboot. Perintah ifconfig sudah tersedia pada semua distribusi Linux yang ada.

    bentuk umum:
    ```
    ifconfig eth0 [IP] netmask [netmask] broadcast [broadcast]
    ```

    contoh:
    ```
    # ifconfig eth0 192.168.10.1 netmask 255.255.255.0 broadcast 192.168.10.255
    ```

    Untuk menampilkan alamat IP yang sudah di setting, ketikkan perintah berikut:
    ```
    # ifconfig eth0
    ```

    output:
    ```
    eth0   Link encap:Ethernet  HWaddr 00:1a:80:7e:9a:40
    inet addr:192.168.10.1  Bcast:192.168.10.255  Mask:255.255.255.0
    UP BROADCAST MULTICAST  MTU:1500  Metric:1
    RX packets:0 errors:0 dropped:0 overruns:0 frame:0
    TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
    collisions:0 txqueuelen:1000
    RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
    Interrupt:28 Base address:0xc000 
    ```

<br>
* Mengedit file script
    <br>
    Pada setiap distro GNU/Linux, sudah terdapat sebuah file script yang fungsinya membuat alamat IP menjadi permanen. Isi dan letak dari file script pada distro GNU/Linux yang telah disebutkan penulis tersebut berbeda-beda antara satu distro dengan yang lainnya.

    Berikut cara mengedit file script pada distro Linux Debian, Fedora, Slackware, dan Gentoo:

    1. Debian
        ```
        sudo nano /etc/network/interfaces
        ```
        Setelah itu, masukkan alamat IP sesuai dengan yang dibutuhkan
        ```
        auto eth0
        iface eth0 inet static
        address 192.168.10.1 netmask 255.255.255.0
        network 192.168.10.0
        broadcast 192.168.10.255
        ```
        Simpan dengan menekan tombol CTRL+O
        Keluar dari editor nano dengan menekan tombol CTRL+X

        Untuk mengaktifkan settingan alamat IP yang telah dibuat, restart jaringan pada komputer kita dengan perintah berikut:
        ```
        /etc/init.d/networking restart
        ```

    2. Fedora
        ```
        # nano /etc/sysconfig/network-scripts/ifcfg-eth0
        ```
        Masukkan alamat IP sesuai dengan yang dibutuhkan:
        ```
        DEVICE=eth0
        ONBOOT=yes
        BOOTPROTO=static
        IPADDR=192.168.10.1
        NETMASK=255.255.255.0
        NETWORK=192.168.10.0
        BROADCAST=192.168.10.255
        ```
        Simpan dan keluar dari editor nano.

        Untuk mengaktifkan settingan alamat IP yang telah dibuat, restart jaringan pada komputer kita dengan perintah berikut:
        ```
        # /etc/init.d/network restart
        ```
        atau
        ```
        # service network restart
        ```

    3. Slackware
        ```
        # nano /etc/rc.d/rc.inet1.conf
        ```
        Masukkan alamat IP sesuai dengan yang dibutuhkan:

        Perhatikan bagian berikut :
        ```
        # Config information for eth0:

        IPADDR[0]="192.168.10.1"
        NETMASK[0]="255.255.255.0"
        USE_DHCP[0]=""
        DHCP_HOSTNAME[0]=""
        ```
        Simpan dan keluar dari editor.

        Untuk mengaktifkan settingan alamat IP yang telah dibuat, restart jaringan pada komputer kita dengan perintah berikut:
        ```
        # /etc/rc.d/rc.inet1 restart
        ```

    4. Gentoo
        ```
        # nano /etc/conf.d/net
        ```
        Masukkan alamat IP sesuai dengan yang dibutuhkan:
        ```
        config_eth0=("10.0.0.1 netmask 255.255.255.0 brd 10.0.0.255" )
        ```
        Simpan dan keluar dari editor.

        Untuk mengaktifkan settingan alamat IP yang telah dibuat, restart jaringan pada komputer kita dengan perintah berikut:
        ```
        # /etc/init.d/net.eth0 restart
        ```
Semoga artikel ini dapat membantu rekan-rekan yang ingin mengetahui cara mengkonfigurasi alamat IP secara manual di GNU/Linux.

Good Luck!

Referensi: <http://avancalinux.blogspot.com>