#### Updating Docker Image From Portainer
_Monday, May 9, 2022_

If you just get into Docker, have you ever wonder how to update a docker image. 
Or do you know that updating docker image is even a thing? Well you come to right 
place. Here I'm using [Portainer](https://www.portainer.io/) it is a web interface 
to manage multiple containers. 

There are specific requirements that your container need to have if you want to 
update them easily. One of them is your container need to store data in 
[Persistent storage](https://docs.docker.com/storage/) one example is using 
[Volumes](https://docs.docker.com/storage/volumes/). The process of updating 
docker image require the active container to be removed and then recreated using 
updated image, so any non-persistent data will be deleted. To avoid this, you can 
migrate the data manually. The second requirement is using `latest` tag. This is not 
strictly necessary, you can get away with specific version tag, but you may need to 
modify the `docker-compose.yml` file and recreate the entire stack or manually destroy 
the specific container and recreate them.

With that out of the way, let's do this.

First, log in to your Portainer console and select your Environment. 
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-05-09-updating-docker-image-from-portainer/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then go to `Container list` tab and make sure that your container is using `latest` tag, 
you may get away with this, but this post does not cover such scenario.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-05-09-updating-docker-image-from-portainer/02.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Next, go to `Image list` tab, in `Images` section, copy `Docker Tags` you want to update, 
then in `Pull image` section paste your docker tags to red marked section. Then press 
`Pull the image` button. This process will take a while depending on the image size and 
your connection speed.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-05-09-updating-docker-image-from-portainer/03.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Once it finished and nothing goes wrong, you will see new latest images marked as `Unused` 
this is the image you just downloaded, and you can see the old image as `<none>`.
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-05-09-updating-docker-image-from-portainer/04.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>