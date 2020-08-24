FROM  node:14.4.0 as builder

# Install tools
RUN apt-get update
RUN apt-get install -y vim curl git
RUN apt-get install -y nginx --fix-missing

EXPOSE 7077 7078 7079

# 작업 폴더를 만들기
RUN mkdir /app
WORKDIR /app
ADD . /app/
RUN npm install

# client
RUN cd client; npm install
RUN cd client; npm build

# server
RUN cd server; npm install


