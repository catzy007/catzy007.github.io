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

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="thumbnail">
			<img class="img-responsive" src="./posts/2022-05-09-updating-docker-image-from-portainer/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>