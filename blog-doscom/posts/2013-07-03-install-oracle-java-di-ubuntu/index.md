### **Install Oracle Java di Ubuntu**
_Posted by Ghulam Maulana on Jul 3, 2013_
<br>
in Java, Tutorial | 0 comments	

<p align="center">
	<img src="./posts/2013-07-03-install-oracle-java-di-ubuntu/Oracle-Java.jpg" height="200px" alt="Oracle-Java">
</p> 

Halo rekan [@doscomedia](https://twitter.com/doscomedia) semua :D….
Apa kabar? Semoga baik dan tetap semangat ngoprek.
Oke pada kesempatan ini saya akan membagi sedikit tutorial untuk menginstal oracle java di Ubuntu..

Untuk para pengembang aplikasi java ataupun untuk menjalankan program yang berbasis java, haruslah pada sistem operasi tersebut tersedia Java. Oleh karena itu saya sedikit membagi tutorial ini.

Tanpa basa basi lagi kita mulai saja :D

Tutorial ini berguna untuk ubuntu 32-bit ataupun yang 64-bit. Selain itu tutorial ini juga bisa dilakukan di OS turunan Ubuntu atau Debian.

1. Cek arsitektur OS Ubuntu yang anda gunakan, apakah 32-bit atau 64-bit. Pengecekan dapat dilakukan menggunakan Terminal dengan menggunakan perintah ini :
    <br>
    ```
    geje@localhost ~$  file /sbin/init
    ```

2. Cek apakah sudah ada Java yang terinstal di OS anda dengan menggunakan perintah ini :
    <br>
    ```
    geje@localhost ~$  java -version
    ```
    Jika OpenJDK sudah default terinstal di OS anda maka akan keluar tampilan seperti ini :
    ```
    java version “1.7.0_15″
    OpenJDK Runtime Environment (IcedTea6 1.10pre) (7b15~pre1-0lucid1)
    OpenJDK 64-Bit Server VM (build 19.0-b09, mixed mode)
    ```

3. Hapus default OpenJDK yang sudah terinstal dengan mengetikan perintah ini :
    <br>
    ```
    geje@localhost ~$ sudo apt-get purge openjdk-\*
    ```
    Lalu buat direktori untuk Oracle JDK dan JRE binary dengan perintah :
    ```
    geje@localhost ~$ sudo mkdir -p /usr/local/java
    ```

4. [Download Oracle Java JDK/JRE untuk Linux.](http://www.oracle.com/technetwork/java/javase/downloads/index.html) Pilih sesuai arsitektur Ubuntu anda apakah 32-bit atau 64-bit (pilih yang extensi filenya .tar.gz)

5. Salin Oracle Java binaries yang sudah didownload ke /usr/local/java. Pada contoh yang saya (geje) berikan saya menggunakan Ubuntu 32-bit, maka perintah yang saya jalankan adalah :
    <br>
    ```
    geje@localhost ~$ cd /home/geje/Downloads
    geje@localhost ~$ sudo mkdir /usr/local/java
    geje@localhost ~$ sudo cp -r jdk-7u25-linux-i586.tar.gz /usr/local/java
    geje@localhost ~$ sudo cp -r jre-7u25-linux-i586.tar.gz /usr/local/java
    geje@localhost ~$ cd /usr/local/java
    ```

6. Ekstrak kompresan Java binaries ke folder `/usr/local/java`
    ```
    sudo tar xvzf jdk-7u25-linux-i586.tar.gz
    sudo tar xvzf jre-7u25-linux-i586.tar.gz
    ```

7. Cek apakah sudah ada direktori JDK dan JRE di `/usr/local/java`  dengan perintah :
    ```
    ls -a
    jdk1.7.0_25
    jre1.7.0_25
    ```

8. Edit system `PATH` file `/etc/profile` dan tambahkan variabel ke system PATH tersebut. Bisa menggunakan editor nano ataupun gedit. Masuk sebagai `root`
    <br>
    ```
    geje@localhost ~$ sudo gedit /etc/profile
    ```
    Tambahkan script ini :
    ```
    JAVA_HOME=/usr/local/java/jdk1.7.0_25
    PATH=$PATH:$HOME/bin:$JAVA_HOME/bin
    JRE_HOME=/usr/local/java/jdk1.7.0_25/jre
    PATH=$PATH:$HOME/bin:$JRE_HOME/bin
    export JAVA_HOME
    export JRE_HOME
    export PATH
    ```
    Save /etc/profile file dan exit

9. Informasikan pada Ubuntu anda dimana Oracle Java JDK/JRE berada dengan perintah :
    <br>
    ```
    geje@localhost ~$ sudo update-alternatives –install “/usr/bin/java” “java” “/usr/local/java/jre1.7.0_25/bin/java” 1

    geje@localhost ~$ sudo update-alternatives –install “/usr/bin/javac” “javac” “/usr/local/java/jdk1.7.0_25/bin/javac” 1

    geje@localhost ~$ sudo update-alternatives –install “/usr/bin/javaws” “javaws” “/usr/local/java/jre1.7.0_25/bin/javaws” 1
    ```

10. Informasikan Ubuntu anda default Oracle Java JDK/JRE yang digunakan dengan perintah :
    <br>
    ```
    geje@localhost ~$ sudo update-alternatives –set java /usr/local/java/jre1.7.0_25/bin/java

    geje@localhost ~$ sudo update-alternatives –set javac /usr/local/java/jdk1.7.0_25/bin/javac

    geje@localhost ~$ sudo update-alternatives –set javaws /usr/local/java/jre1.7.0_25/bin/javaws
    ```

11. Reload system PATH dengan perintah :
    <br>
    ```
    geje@localhost ~$ . /etc/profile
    ```

12. Jika instalasi berhasil maka ketika anda mengetikan perintah berikut :
    <br>
    ```
    geje@localhost ~$ java -version
    ```

    Akan Tampil :
    ```
    java version “1.7.0_25″
    Java(TM) SE Runtime Environment (build 1.7.0_25-b25)
    Java HotSpot(TM) 32-Bit Server VM (build 23.6-b04, mixed mode)
    ```
    ```
    geje@localhost ~$ javac -version
    ```
    Akan Tampil :
    ```
    javac 1.7.0_25
    ```

Selamat anda telah berhasil menginstal Oracle Java JDK/JRE di Ubuntu anda :D

Sekian tutorial singkat dari saya. Sumber saya dapatkan dari sini <http://www.wikihow.com/Install-Oracle-Java-on-Ubuntu-Linux>

Regards

[@GhulamMrizqi](http://twitter.com/GhulamMrizqi)