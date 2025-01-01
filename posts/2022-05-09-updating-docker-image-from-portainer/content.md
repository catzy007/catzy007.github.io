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

![img](./posts/2022-05-09-updating-docker-image-from-portainer/01.png)

Then go to `Container list` tab and make sure that your container is using `latest` tag, 
you may get away with this, but this post does not cover such scenario.

![img](./posts/2022-05-09-updating-docker-image-from-portainer/02.png)

Next, go to `Image list` tab, in `Images` section, copy `Docker Tags` you want to update, 
then in `Pull image` section paste your docker tags to red marked section. Then press 
`Pull the image` button. This process will take a while depending on the image size and 
your connection speed.

![img](./posts/2022-05-09-updating-docker-image-from-portainer/03.png)

Once it finished and nothing goes wrong, you will see new latest images marked as `Unused` 
this is the image you just downloaded, and you can see the old image as `<none>`.

![img](./posts/2022-05-09-updating-docker-image-from-portainer/04.png)

Then go to `Container list` tab, click on container you want to update, then 
press on `Recreate` button.

![img](./posts/2022-05-09-updating-docker-image-from-portainer/05.png)

A pop-up will appear and continue by pressing `Recreate` button.

![img](./posts/2022-05-09-updating-docker-image-from-portainer/06.png)

If everything went smoothly, your container will be recreated and started 
immediately with all the persistent data intact.

![img](./posts/2022-05-09-updating-docker-image-from-portainer/07.png)

Next we need to remove the old image, go to `Image list` tab 
and as you can see the old image is marked `Unused` now. Put a `Checkmark` 
on the old image followed by pressing `Remove` button.

![img](./posts/2022-05-09-updating-docker-image-from-portainer/08.png)

The step above is my safest way of doing things. If you want the simple way, 
go to `Container list` then click on your container, click `Recreate` button. 
When the pop-up appear, click on `Pull latest image` and press `Recreate`. 
This is the easiest way of doing things, but I have to warn you that I have 
lost entire stack because of random error in the middle of update. 

![img](./posts/2022-05-09-updating-docker-image-from-portainer/09.png)