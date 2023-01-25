#### Secure Android Development With Local Certificate Authority (CA)
_Thursday, November 10, 2022_

Current software paradigm require data transfer between server and client and one of 
the way to accomplish this is to use Representational State Transfer (REST). REST is 
originally based on HTTP protocol which mean that you basically sent the data unencrypted 
over the internet. This is obviously unsafe, which is why some form of encryption is 
needed. You can create your own "obfuscation/encryption" method using basic base64 or AES, 
but you can also use HTTPS (TLS) or combine both. To set up a proper TLS, you need a pair of 
keys which consist of private key and public key. A latter is embedded in a digital 
certificate while the former is used to verify if public key is valid. For local 
development you can use self-signed certificate this is usually fine for web development, 
but if you want to do mobile development, you need Certificate Authority (CA). As for 
production environment, it is strongly advised that you're using TLS certificate from 
proper ACME provider.

In this post, we're going to set up local Certificate Authority (CA) generate development 
credentials and install the certificate in Android User Trust Store. Android 7 onward is 
required to access android trust store.

<br>
Here I'm using mkcert inside Ubuntu docker container, you can modify and adapt this to your 
specific needs. Change `IPADDR` and `HOSTNAME` to match yours.

```
version: '3.3'

services:
  ca-generator:
    image: ubuntu:latest
	environment:
	  IPADDR: '127.0.0.1'
	  HOSTNAME: 'development.local'
    entrypoint: ["/bin/sh", "-c"]
    command: >
      "if [ ! -f /usr/local/bin/mkcert ]; then
        apt-get update && apt-get install curl ca-certificates -y
        curl -fsSL https://dl.filippo.io/mkcert/latest?for=linux/amd64 -o /usr/local/bin/mkcert
        chmod +x /usr/local/bin/mkcert
      fi; 
      if [ ! -f /ssl/key.pem ]; then
        mkcert -install
        update-ca-certificates
        mkcert -cert-file /ssl/certs.pem -key-file /ssl/key.pem $${HOSTNAME} $${IPADDR}
        openssl verify -verbose -CAfile ~/.local/share/mkcert/rootCA.pem /ssl/certs.pem
      fi"
    volumes:
      - ./mkcert-root:/root/.local/share/mkcert/
      - ./mkcert-cert:/ssl/
```

Save it as `docker-compose.yml` and run it. If nothing goes wrong, you should see 
`rootCA.pem` and `rootCA-key.pem` inside `mkcert-root` directory. You should also see 
`certs.pem` and `key.pem` inside `mkcert-cert` directory.

<br>
Next, we need to install `rootCA.pem` in android trust store. 
* To do this, first copy `rootCA.pem` to your android device. 
* Then go to `Settings > Security > Encryption & credentials > Install from SD card`. 
* Next browse and select `rootCA.pem` and follow the on-screen instructions. 
* If nothing goes wrong, go to `Trusted credentials > User` you will 
see `mkcert development CA`.

<br>
As for `certs.pem` and `key.pem`, you need to include both file in your API/Frontend config. 
For example [HTTPS | Node.js v19.0.1 Documentation](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener) 

After proper set-up, you should get something similar.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2022-11-10-secure-android-development-with-local-certificate-authority-ca/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Other options are using Caddy internal TLS, but it requires you to set up local DNS (pi-hole or similar) 
and point the local domain to your development machine IP address. 