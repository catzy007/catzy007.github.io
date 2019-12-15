### **SNMP**
_Chaerul Umam - 29/01/2012 - Leave your comment_

Simple Network Management Protocol (SNMP) adalah protokol standard industri yang digunakan untuk memonitor dan mengelola berbagai perangkat di jaringan Internet meliputi hub, router, switch, workstation dan sistem manajemen jaringan secara jarak jauh (remote). [id.wikipedia]

* Instalasi
    ```
    sudo apt-get install snmpd
    ```

* Konfigurasi
    <br>
    backup daulu default konfigurasi `/etc/snmp/snmpd.conf` menjadi `/etc/snmp/snmpd.conf.bck` dg cara :
    ```
    sudo mv /etc/snmp/snmpd.conf /etc/snmp/snmpd.conf.bck
    ```

    Buat konfigurasi baru `/etc/snmp/snmpd.conf` dengan isi konfigurasi dibawah ini
    ```
    rocommunity public
    syslocation “NOC, DOSCOM DataCenter”
    syscontact mazumam@doscom.org
    ```

    Buat agar snmpd dapat membaca semua interface jaringan pada server maka edit `/etc/default/snmpd`

    Ubah bagian:
    ```
    # snmpd options (use syslog, close stdin/out/err).
    SNMPDOPTS=’-Lsd -Lf /dev/null -u snmp -I -smux -p /var/run/snmpd.pid 127.0.0.1′
    ```

    jadi:
    ```
    # snmpd options (use syslog, close stdin/out/err).
    #SNMPDOPTS=’-Lsd -Lf /dev/null -u snmp -I -smux -p /var/run/snmpd.pid 127.0.0.1′ SNMPDOPTS=’-Lsd -Lf /dev/null -u snmp -I -smux -p /var/run/snmpd.pid -c /etc/snmp/snmpd.conf’
    ```

    kemudian restart snmpd
    ```
    /etc/init.d/snmpd restart
    ```

* Testing
    <br>
    untuk mengetest apakah snmp sudah aktif apa belom, gunakan snmpwalk
    ```
    snmpwalk -Os -c public -v 1 localhost system
    ```

    akan tampak hasil seperti dibawah ini
    <p align="center">
        <img src="./posts/2012-01-29-snmp/snmp1.png" height="250px" alt="img">
    </p> 

untuk memonitor jaringan dengan snmp, akan lebih manusiawi kalau kita menggunakan [CACTI](http://www.mazumam.web.id/2012/01/cacti-di-ubuntu-server.html). :)

tutorial diatas dijalankan pada ubuntu server 10.04

<br>
sumber : <http://www.mazumam.web.id/2012/01/snmp.html>
