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

<!-- <div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-11-10-secure-android-development-with-local-certificate-authority-ca/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div> -->