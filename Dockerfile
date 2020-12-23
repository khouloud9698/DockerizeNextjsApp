FROM node:alpine
#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Installing dependencies
COPY package*.json  /usr/src/app/
RUN npm install

#Copying source files
COPY . /usr/src/app

#Building app
EXPOSE 3000

#Running the app
CMD "npm" "run" "dev"