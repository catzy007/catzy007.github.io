#### Secure Android Development With Local Certificate Authority (CA)
_Thursday, November 10, 2022_

Current software paradigm require data transfer between server and client and one of 
the way to accomplish this is to use Representational State Transfer (REST). REST is 
originally based on HTTP protocol which mean that you basically sent the data unencrypted 
over the internet. This is obviously unsafe, which is why some form of encryption is 
needed. You can create your own "encryption" method using basic base64 or AES, but 
you can also use HTTPS (TLS). 

<!-- <div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-11-10-secure-android-development-with-local-certificate-authority-ca/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div> -->