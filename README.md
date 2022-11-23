# Docker-basics

<br>

In this project, I have created two docker images one for node.js and one for flask. you can find both in docker hub from given links.

-   [uttam1712/hey-nodejs 🖇️](https://hub.docker.com/repository/docker/uttam1712/hey-nodejs)
-   [uttam1712/hey-python-flask 🖇️](https://hub.docker.com/repository/docker/uttam1712/hey-python-flask)

<br>

# Basic Docker Commands

Before starting you should have basic understanding and knowledge of docker containers.

<br>

-   ### pull image from docker hub

```
docker pull <image_name>
```

<br>

-   ### Run a container with image name

```
docker run <image_name>
```

<br>

-   ### Run container with name & deattachment options (-d used to free your terminal & running container in background)

```
docker run --name my-db -d <image_name>
```

<br>

-   ### list all contaienrs

```
docker ps
docker ps -a # list all containers (stopped also)

#or

docker container ls
docker container ls -a # list all containers (stopped also)
```

<br>

-   ### stop a contaienr

```
docker stop <container_id or container_name>
```

<br>

-   ### start stopped container

```
docker start <container_id or container_name>
```

<br>

-   ### display all volumes

```
docker volume ls
```

<br>

-   ### display all local images

```
docker image ls
```

<br>

-   ### port mapping

```
docker run --name <your_container_name> -p <host_port:container_port> -d <service_name>

# mongodb exapmle

docker run --name my-mongodb -p 5002:27017 -d mongo
```

<br>

-   ### display all logs of container

```
docker logs <container_id or container_name>
```
