### **Install Apache PHP Mariadb Phpmyadmin**
_Sunday, May 10, 2020_


First update and upgrade your system
```
sudo apt update
sudo apt upgrade
```

Then install necessary package
```
sudo apt install apache2 mariadb-server php php-mysqli
```
<br>

Next, download phpmyadmin from <https://www.phpmyadmin.net/>
```
unzip phpMyAdmin*.zip
mv phpMyAdmin* pma
sudo mv pma /var/www/html
```
<br>

Then enable mysqli extension
```
sudo nano /etc/php/7.4/cli/php.ini

;extension=mysqli
```

To apply the extension, do
```
sudo apt install --reinstall php apache2
```
<br>

Then add user to mysql. Change `newuser` and `password` as you need. 
```
sudo mysql -u root
```
then do
```
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
\q
```
<br>

Last, open web browser and fill with `localhost/pma` and type username password you create last time