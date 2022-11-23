# base image
FROM node:slim

# define work directory
WORKDIR /app

# copy contect from current directory to /app directory
COPY . /app

# install application dependencies
RUN npm install

# to run application expose specific port
EXPOSE 3000

# command to start the application
CMD node app.js