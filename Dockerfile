#this is the base image
FROM ubuntu

# author name
MAINTAINER Abhishek_rai

#update command
RUN apt update

# comnd taht will be printed
CMD [ "echo","this is my first image" ]
