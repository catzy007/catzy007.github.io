#### Better Internet With DNSCrypt Proxy And Pi-hole
_Saturday, July 30, 2022_

Kementerian Komunikasi dan Informatika or Kominfo for short effectively 
blocked multiple applications and web services in Indonesia. This causes 
massive attention from "netizen" expressing their discomfort and confusion 
in social media. The main causes of this issue appears to be Indonesian 
Goverment want to regulate such applications and web services and the first 
step is to register their organization into Kominfo website or face a sanction.

The sanction they're talking about seems to be a simple 
[Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) or 
[DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) 
for short. But first, what is DNS? The way DNS works is basically 
similar to your phone contact. You get a contact name and phone number 
if you want to call someone, you search for a person name instead of their 
phone number. So instead of contact name and phone number, with DNS we got 
Domain name which is `www.something.com` and IP Address which is something 
like `127.0.0.1` if you open a web pages, you type www.something.com and 
your computer ask the DNS for IP Address and your computer ask the destination 
server a web page to load and that's it. If your DNS set to block certain 
services then it will tell you that the destination you're looking for is 
not exist and you got an error. Or even worse, the DNS is lying to you 
and forward you to a custom page `Sorry this site is blocked by blah blah`.

The fix for this is quite simple. You just need to change your DNS server to 
`1.1.1.1`, `1.0.0.1` or `8.8.8.8`, `8.8.4.4` or you can even use an app like 
[Cloudflare 1.1.1.1](https://1.1.1.1/).

But for some who already uses above method but still not working and do not 
want a extra latency from a VPN, you can use [DNSCrypt](https://dnscrypt.info/). 
The way this works is that instead of using plain DNS, it 
[encrypt your DNS traffic](https://en.wikipedia.org/wiki/DNS_over_HTTPS) 
and then sent them using HTTPS connection. It also has other features like 
anonymizing your data and other stuff.

Fortunately i have use this system for more than 6 Months now. When everyone 
having a connection issues, i have not affected at all.
<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-07-30-better-internet-with-dnscrypt-proxy-and-pi-hole/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>

To get started you need a local server, a simple and humble RaspberryPI 3B 
is more than enough. You also need to have Docker and Docker-Compose installed 
and configured with local static IP.

Next create new directory and create new `docker-compose.yml` file
```
version: "3.4"
networks:
  brnet101:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 172.101.0.0/24
services:
  dnscrypt:
    container_name: doh-dnscrypt
    image: klutchell/dnscrypt-proxy:latest
    restart: always
    ports:
      - '5053:5053/udp'
      - '5053:5053/tcp'
    networks:
      brnet101:
        ipv4_address: 172.101.0.3
    environment:
      TZ: 'Asia/Jakarta'
      server_names: 'cloudflare'
  pihole:
    container_name: doh-pihole
    image: pihole/pihole:latest
    restart: always
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "67:67/udp"
      - "80:80/tcp"
      - "443:443"
    networks:
      brnet101:
        ipv4_address: 172.101.0.2
    environment:
      TZ: 'Asia/Jakarta'
      PIHOLE_DNS_: '172.101.0.3#5053'
    volumes:
      - './doh-pihole/:/etc/pihole/'
      - './doh-dnsmasq/:/etc/dnsmasq.d/'
    cap_add:
      - NET_ADMIN
```

Then build and run it using `docker-compose up`

Last but not least, change your router DNS config to your newly 
configured DNS server and that's it.
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-07-30-better-internet-with-dnscrypt-proxy-and-pi-hole/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>