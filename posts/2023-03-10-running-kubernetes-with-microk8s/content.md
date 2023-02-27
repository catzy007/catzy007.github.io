#### Running Kubernetes With MicroK8s
_Friday, February 24, 2023_

##### Install Docker
```
sudo apt update
sudo apt install docker.io docker-compose
```

##### Install microk8s
<https://github.com/canonical/microk8s>
```
snap install microk8s --classic
sudo usermod -a -G microk8s <username>
newgrp microk8s
sudo microk8s kubectl config view --raw > $HOME/.kube/config
```

##### Install Kubectl
```
echo "alias kubectl='microk8s kubectl'" >> ~/.bashrc
source ~/.bashrc
```

<https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/>

```
snap install kubectl --classic
kubectl version --client
```

##### Add worker node to cluster
<https://microk8s.io/docs/clustering>

First add worker node IP address and hostname in `/etc/hosts`

```
microk8s add-node
```

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

```
kubectl get node
```

