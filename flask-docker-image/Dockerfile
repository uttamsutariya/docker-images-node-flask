# base image
FROM python:3-alpine3.15

# define work directory
WORKDIR /app

# copy contect from current directory to /app directory
COPY . /app

# install application dependencies
RUN pip install -r requirements.txt

# to run application expose specific port
EXPOSE 3000

# command to start the application
CMD python ./index.py