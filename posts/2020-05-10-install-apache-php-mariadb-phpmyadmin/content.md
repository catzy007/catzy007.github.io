#### Install Apache PHP Mariadb phpMyAdmin
_Sunday, May 10, 2020_

For quite some time, i have been asked by my colleague about how to setup 
LAMP (Linux, Apache, Mariadb (mysql), PHP, and phpMyAdmin). Especially from 
people who start to learn web programming in PHP. In this article, i'm 
going to show you how to install LAMP stack. In this article i'm using 
Fresh install of `Ubuntu 20.04` and latest LAMP package at the time 
`php 7.4`. If you already had old installation of LAMP stack, then remove 
or purge it first!

`WARNING : Because of some security risks, this article should not be used 
in `*Production Environment*` and only meant to be used in `
*Development and Learning Environment*` keep that in mind!`

First update and upgrade your system
```
sudo apt update
sudo apt upgrade -y
```

Then install necessary package
```
sudo apt install apache2 mariadb-server php php-mysqli
```

Next, download phpmyadmin from <https://www.phpmyadmin.net/>. Here i'm using 
`phpMyAdmin-5.0.2-all-languages` the current version might be different. Then 
unzip the downloaded package, rename to pma, and move pma to /var/www/html
```
unzip phpMyAdmin-5.0.2-all-languages.zip
mv phpMyAdmin-5.0.2-all-languages pma
sudo mv pma /var/www/html
```

Then enable mysqli extension. Here the current version of php is `7.4` you 
might need to adjust it to your version. To check php version, do `php --version`
```
sudo nano /etc/php/7.4/cli/php.ini
```
find `;extension=mysqli` and change to `extension=mysqli`

To apply the extension, do
```
sudo apt install --reinstall php apache2
```

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

Last, open web browser and fill with `localhost/pma` and type username password you create last time.

And that's it. Now you should able to use LAMP stack and phpmyadmin.

#### Some Sauce
<https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql>

<https://www.phpmyadmin.net/>

<https://stackoverflow.com/questions/7250356/how-to-install-mysqli>

<https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04>