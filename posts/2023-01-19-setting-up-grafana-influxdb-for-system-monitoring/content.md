#### Setting up Grafana InfluxDB for System Monitoring
_Thursday, January 19, 2023_

System monitoring is an essential tool for managing your infrastructure. 
Similar to an internal combustion engine found in a car if it sounds weird 
or smells weird it could indicate a sign of component failure. Instead of 
using physical sign, your pieces of infrastructure could tell symptoms 
of component failure in form of data anomaly. For example, frequent anomaly 
in I/O Delay could be symptoms for drive or SSD failure. 

In the past, i have used [SNMP](https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol) 
with [Observium](https://www.observium.org/) this 
works really well because SNMP is a defined standard for system monitoring. 
You can add server, router, firewall, etc. from multiple vendor, and it will 
automatically pick up any metrics and sensor data. This is fine and good until 
it is not. SNMP is notorious for attack vector especially device with SNMP v1/v2 
and apparently improper v3 implementation is also 
[vulnerable](https://quickview.cloudapps.cisco.com/quickview/bug/CSCtw74132). 
This is why an alternative such as Grafana is a nice addition.

Here i'm using docker and docker-compose to deploy and build Grafana stack. 
I'm also using the latest version of Grafana and specifically version 1.8 for 
InfluxDB wrapped in caddy reverse-proxy with internal TLS. You need to change 
`www.example.com` and `config.env` to match yours.
<details>
<summary>&#9432; Click to reveal `docker-compose.yml`</summary>
```
version: '3.6'
services:
  caddywebserver:
    image: caddy:latest
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"
    networks:
      monitoring-br:
        ipv4_address: 172.101.72.10
    command: /bin/sh -c "echo \"$$CADDYFILE\" > /etc/caddy/Caddyfile; caddy run --config /etc/caddy/Caddyfile --adapter caddyfile"
    environment:
      CADDYFILE: | 
          www.example.com {
            tls internal
            reverse_proxy http://172.101.72.11:3000
          }
    volumes:
      - ./caddy/data:/data
      - ./caddy/config:/config
     
  grafana:
    image: grafana/grafana:latest
    depends_on:
      - influxdb
    env_file: config.env
    links:
      - influxdb
    networks:
      monitoring-br:
        ipv4_address: 172.101.72.11
    volumes:
      - grafana_data:/var/lib/grafana
      - ./grafana/provisioning/:/etc/grafana/provisioning/
      - ./grafana/dashboards/:/var/lib/grafana/dashboards/
    
  influxdb:
    image: influxdb:1.8
    env_file: config.env
    networks:
      monitoring-br:
        ipv4_address: 172.101.72.12
    ports:
      - 8086:8086
    volumes:
      - ./:/imports
      - influxdb_data:/var/lib/influxdb

volumes:
  grafana_data: {}
  influxdb_data: {}
  
networks:
  monitoring-br:
      driver: bridge
      ipam:
        driver: default
        config:
          - subnet: 172.101.72.0/24
```
</details>

<details>
<summary>&#9432; Click to reveal `config.env`</summary>
```
# Grafana options
GF_SECURITY_ADMIN_USER=admin
GF_SECURITY_ADMIN_PASSWORD=admin
GF_INSTALL_PLUGINS=

# InfluxDB options
# INFLUXDB_HTTP_AUTH_ENABLED=true
INFLUXDB_DB=influx-tank
INFLUXDB_ADMIN_USER=influxdb-admin
INFLUXDB_ADMIN_PASSWORD=influxdb-passwd
```
</details>

<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2023-01-19-setting-up-grafana-influxdb-for-system-monitoring/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-4"></div>
</div>

Save the config file above and run docker-compose to build and deply the image. 
After everything is up and running, Login to Grafana dashboard and go to 
`Configuration > Data sources > Add data source`. In `HTTP` section, fill the 
URL as `http://influxdb:8086`. Then in `InfluxDB Details` fill the `Database, User, Password` 
according to `config.env`. If everything is working, you can create new 
[Dashboards](https://grafana.com/docs/grafana/latest/dashboards/) or analyze and visualize the 
data from [Explore](https://grafana.com/docs/grafana/latest/explore/).

You also need to set up Agent to collect and push data to InfluxDB. One of the options is 
[Telegraf](https://docs.influxdata.com/telegraf/v1.21/introduction/getting-started/).