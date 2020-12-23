# Resume with NextJS
Resume website with NextJS
## Demo on Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/4b0c9bf5-0b9c-4d2b-a04f-9ea2e5b14a93/deploy-status)](https://app.netlify.com/sites/check-my-resume/deploys)

## Docker
Docker is a containerization tool used to speed up the development and deployment processes. If you’re working with microservices, Docker makes it much easier to link together small, independent services. It also helps to eliminate environment-specific bugs since you can replicate your production environment locally. The following steps demonstrate how to Dockerize a Nextjs app.
### Development environment

This will create the dev image and pull in the necessary dependencies. Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 3000 of the Docker 

```sh
$ docker build -f Dockerfile -t devimage .
$ docker run -p 8000:3000 --name trynextjsbuildcontainer devimage
```

### Build environment
At this point, as we’ve not copied over any files from our host machine to create the image. This is where the Volumes come in. In the client app, the Volumes are defined as C:/Users/Khouloud/Downloads/next-resume-master/next-resume-master/:/usr/src/app/. This means that from our host machine at the location C:/Users/Khouloud/Downloads/next-resume-master/next-resume-master/, we want to mount this directory in our container at the directory /usr/src/app/.
In this step, you need to specify your current project directory. In our case, it was C:/Users/Khouloud/Downloads/next-resume-master/next-resume-master/
```sh
$  docker build -f DockerfileBuild -t buildnextjsimage .
$ docker run -p 8000:3000 -v C:/Users/Khouloud/Downloads/next-resume-master/next-resume-master/:/usr/src/app/ --name trynextjsbuildcontainer buildnextjsimage 
```
### Production environment
Here, we take advantage of the multistage build pattern to create a temporary image used for building the artifact – the production-ready NextJs static files – that is then copied over to the production image. The temporary build image is discarded along with the original files and folders associated with the image. This produces a lean, production-ready image.

```sh
$ docker build -f DockerfileProduction -t productionimage .
$ docker run -p 80:80 productionimage
```
Navigate to http://localhost:80/ in your browser to view the app.












