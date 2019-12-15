### **Install Modem SPEED UP 6350U di UBUNTU**
_Diposting oleh mazumam di 22.59 . Sabtu, 08 Mei 2010_
<br>
Label: Tutorial

<p align="center">
	<img src="./posts/2010-05-08-install-modem-speed-up-6350u-di-ubuntu/974.jpg" height="150px" alt="img1">
</p> 

Berikut Tahapannya

1. Install Wvdial melalui, Repository Online / Offline ato bisa [donlod dimari](http://packages.ubuntu.com/lucid/comm/wvdial)

2. Buka Terminal, Login as Root

3. Ketikkan : nano /etc/wvdial.conf

4. Saya memakai ISP star*ne, maka setting wvdial.conf saya seperti ini

contoh settingan wvdialQ
```
[Dialer starone]
Init1 = ATZ
Init2 = ATQ0 V1 E1 S0=0 &C1 &D2 +FCLASS=0
Username = starone
Password = indosat
Stupid Mode = 1
Modem Type = Analog Modem
ISDN = 0
New PPPD = 1
Phone = #777
Modem = /dev/ttyUSB0
Baud = 9600
Auto DNS = 1
```

nah, untuk ISP yang lain tinggal ganti bagian yg saya beri tanda (*), ganti sesuai dengan ISP yang anda gunakan.
```
[Dialer ******]
Init1 = ATZ
Init2 = ATQ0 V1 E1 S0=0 &C1 &D2 +FCLASS=0
Username = ******
Password = ******
Stupid Mode = 1
Modem Type = Analog Modem
ISDN = 0
New PPPD = 1
Phone = ****
Modem = /dev/ttyUSB0
Baud = 9600
Auto DNS = 1
```

semoga membantu, bila berhasil, selamat ya...
salam...

source klik [disini](http://ahmadsauqhi.doscom.org/2010/05/setting-wvdial-di-modem-speed-up-su.html)