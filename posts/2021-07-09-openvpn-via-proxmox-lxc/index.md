### **OpenVPN via Proxmox LXC**
_Friday, July 9, 2021_

Recently, i'm trying to run most service on my home server using 
container instead of virtual machine to cram as much service as i can. 
The reason why is that i don't have much resource in my server because 
i need to reduce the power bill and i haven't fortunate enough to have 
the latest, fastest, and most efficient system available.

Next, why i even create posts for this? Because OpenVPN can't simply run 
inside LXC. As far as i can remember, OpenVPN needs to access special driver 
called [TUN/TAP](https://www.kernel.org/doc/Documentation/networking/tuntap.txt), 
so it needs more permission access than regular container. In this tutorial, 
i'm using Ubuntu 20.04 LXC template and [openvpn-install](https://github.com/angristan/openvpn-install) script.

Alright, now how to run OpenVPN inside LXC?
* In this case, i assume that you already know how to add LXC image to Proxmox 
and how to create LXC container.
* First, create new container as usual but with one catch, Uncheck `Unprivileged container`
    <p align="center">
        <img src="./posts/2021-07-09-openvpn-via-proxmox-lxc/01.png" height="250em" alt="img">
    </p>

* Next, boot the container and do update/upgrade.
* Then, power off the container then open Proxmox `shell`.
* After that, type `nano /etc/pve/lxc/100.conf` change `100` to your container id.
* Add line below
    ```
    lxc.cgroup.devices.allow: c 10:200 rwm
    lxc.mount.entry: /dev/net/tun dev/net/tun none bind,create=file
    ```

* Then do save, exit `ctrl+x, ctrl+y, enter` and start the container back up.
* Next, install OpenVPN
    ```
    curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
    chmod +x openvpn-install.sh
    sudo ./openvpn-install.sh
    ```

* Set it up according to your preferences.
* After that, make `openvpn` directory in `/root`.
    ```
    mkdir /root/openvpn
    ```

* Then, `nano /etc/systemd/system/openvpn@.service`.
* Change all `/run/openvpn` occurrence to `/root/openvpn`.
* Save, exit and restart daemon `systemctl daemon-reload`.
* If any error happen, check using.
    ```
    sytemctl status openvpn@server
    journalctl -xe
    ```

And that's it. Have fun, good luck!