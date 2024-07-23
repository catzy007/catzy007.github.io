#### OpenVPN via Ngrok
_Saturday, August 15, 2020_

For quite sometimes, i don't always stay at home. When i need some files from my workstation, 
make some change to my project, or perform basic monitoring in my local network i can't just do 
a 45-Min trip to my home. Instead, i just connect to my local home network using VPN and do all 
that. System i use for this is basic 2 core computer running Ubuntu Server inside Proxmox VM. 
You can use almost anything, even Raspberry Pi would work, as long as it stays connected to 
internet.

Before proceed, make sure you have a [ngrok account](https://dashboard.ngrok.com/signup)

#### Installing dependencies
* Install curl and openvpn

    ```
    sudo apt update
    sudo apt install curl openvpn
    ```

#### Setting up OpenVPN
* Get and install openvpn using [openvpn-install script](https://github.com/angristan/openvpn-install)

    ```
    curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
    chmod +x openvpn-install.sh
    sudo ./openvpn-install.sh
    ```
* Here is my basic config. You can follow exact or customize to fill your need.

    ```
    IP Address: 192.168.0.1                             (your local static ip address)
    Public IPv4 address or hostname: 0.tcp.ngrok.io     (or 1.tcp.ngrok.io)
    Do you want to enable IPv6 support (NAT)? [y/n]: n
    Port choice [1-3]: 1                                (Port 1194)
    Protocol [1-2]: 2                                   (TCP) (Ngrok only support TCP by default)
    DNS [1-12]: 9                                       (Google or anything for your taste)
    Enable compression? [y/n]: n
    Customize encryption settings? [y/n]: n             (default should suffice)
    Client name: nana                                   (anything suffice)
    Select an option [1-2]: 1                           (passwordless or password)
    ```
* Then you should receive file with `.ovpn` extension. Copy this file and keep it private
* In this case my file is `nana.ovpn` your filename might be different

#### Setting up Ngrok
* Download Ngrok binary from [ngrok.com](https://ngrok.com/download)
* Unzip downloaded file to `/home/nana`
* Create new dir `/home/nana/.ngrok2`
* Create `ngrok.yml` file inside `/home/nana/.ngrok2/`

    ```
    authtoken: <YOUR AUTHTOKEN>
    tunnels:
        openvpn:
            addr: 1194
            proto: tcp
    ```
* Change `<YOUR AUTHTOKEN>` to your [ngrok authtoken](https://dashboard.ngrok.com/auth/your-authtoken)
> `KEEP YOUR AUTHTOKEN PRIVATE!`

#### Setting up Ngrok-Service
* Create service file called `ngrok.service` and place it in `/etc/systemd/system/`

    ```
    [Unit]
    Description=ngrok
    After=network.target

    [Service]
    ExecStart=/home/nana/ngrok start --all --config /home/nana/.ngrok2/ngrok.yml
    ExecReload=/bin/kill -HUP $MAINPID
    KillMode=process
    Restart=on-failure
    Type=simple

    [Install]
    WantedBy=multi-user.target
    ```
* Enable and start ngrok.service

    ```
    sudo systemctl enable ngrok.service
    sudo systemctl start ngrok.service
    ```
* To test if everything work correctly, do

    ```
    sudo systemctl status ngrok.service
    ```
    it should output something like
    ```
    ● ngrok.service - ngrok
        Loaded: loaded (/etc/systemd/system/ngrok.service; enabled; vendor enabled)
        Active: active (running) since Mon 2020-08-24 04:35:22 UTC; 5 days ago
        Main PID: 682 (ngrok)
        Tasks: 11 (limit: 1677)
        Memory: 33.3M
        CGroup: /system.slice/ngrok.service
                └─682 /home/nana/ngrok start --all --config /home/nana/.ngrok2/ngrok.yml
    ```

#### Connecting to your VPN
* Install openvpn in your device (it could be your laptop or anything)
* Copy `nana.ovpn` file to device (obtained from step Setting up OpenVPN)
* Open `nana.ovpn` file using your favorite text editor
* Find line `remote 0.tcp.ngrok.io 1194`
* Change line to match [tunnels url](https://dashboard.ngrok.com/status/tunnels)

    ```
    for example if your tunnel url is
        tcp://1.tcp.ngrok.io:15342
    then change line to
        remote 1.tcp.ngrok.io 15342
    ```
* Then connect to vpn by doing `sudo openvpn nana.ovpn`
* Then wait a little and if nothing goes wrong, you should get a message `Initialization Sequence Completed`
* And that's it, now you're connected to your VPN

If you're using [free tier](https://ngrok.com/pricing) from ngrok, the tunnel URL and port will always change. 
Make sure you set it to the correct one.