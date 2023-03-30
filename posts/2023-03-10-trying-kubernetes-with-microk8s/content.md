#### Trying Kubernetes With MicroK8s
_Friday, March 10, 2023_

Kubernetes is an open-source container orchestration for deploying, 
managing and scaling cloud software. Kubernetes originally developed 
by Google and now maintained by CNCF. In this post I'm going to 
use [MicroK8s](https://microk8s.io/) which is single package Kubernetes 
developed by [Canonical](https://canonical.com/). My test system consists 
of two nodes one as a master node and other as worker node as for 
containerization system, I use Docker.

-----------------------------
##### **Development Machine**

* Install [Docker](https://docs.docker.com/get-docker/)

    ```
    sudo apt update
    sudo apt install docker.io docker-compose
    sudo usermod -a -G docker $(whoami)
    newgrp docker
    ```

* [Build and Push Image](https://docs.docker.com/engine/reference/commandline/push/)

    ```
    docker run -d -p 5000:5000 --restart=always --name registry -v /data/registry:/var/lib/registry registry:2
    docker pull ubuntu:20.04
    docker tag ubuntu:20.04 localhost:5000/my-ubuntu
    docker push localhost:5000/my-ubuntu
    ```

------------------------------------
##### **Master Node (Ubuntu 22.04)**

* Install MicroK8s [canonical/microk8s](https://github.com/canonical/microk8s)

    ```
    snap install microk8s --classic
    sudo usermod -a -G microk8s $(whoami)
    newgrp microk8s
    sudo microk8s kubectl config view --raw > $HOME/.kube/config
    ```

* Install Kubectl
    ```
    echo "alias kubectl='microk8s kubectl'" >> ~/.bashrc
    source ~/.bashrc
    ```

    You can also use [other kubectl build](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).

    ```
    snap install kubectl --classic
    kubectl version --client
    ```

* Add worker node to [Kubernetes cluster](https://microk8s.io/docs/clustering)

    First add worker node IP address and hostname in `/etc/hosts`.

    ```
    microk8s add-node
    ```

    Copy and run the join command from target node. You need to re-run 
    `add-node` command every time you want to add new node.

    ```
    From the node you wish to join to this cluster, run the following:
    microk8s join 192.168.10.1:25000/abcdefghijklmnopqrstuvwxyz123456/abcdefghijkl

    Use the '--worker' flag to join a node as a worker not running the control plane, eg:
    microk8s join 192.168.10.1:25000/abcdefghijklmnopqrstuvwxyz123456/abcdefghijkl --worker

    If the node you are adding is not reachable through the default interface you can use one of the following:
    microk8s join 192.168.10.1:25000/abcdefghijklmnopqrstuvwxyz123456/abcdefghijkl
    microk8s join 10.10.10.1:25000/abcdefghijklmnopqrstuvwxyz123456/abcdefghijkl
    microk8s join 172.10.10.1:25000/abcdefghijklmnopqrstuvwxyz123456/abcdefghijkl
    ```

* Check if newly added node is listed and working properly

    ```
    kubectl get node
    ```

-----------------------------------
##### **Worker Node (Ubuntu 22.04)**

* Install MicroK8s [canonical/microk8s](https://github.com/canonical/microk8s)

    ```
    snap install microk8s --classic
    sudo usermod -a -G microk8s $(whoami)
    newgrp microk8s
    sudo microk8s kubectl config view --raw > $HOME/.kube/config
    ```

* Join Kubernetes cluster
    
    ```
    microk8s join 192.168.10.1:25000/abcdefghijklmnopqrstuvwxyz123456/abcdefghijkl
    ```