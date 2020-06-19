FROM  node:14.4.0 as builder

# Install tools
RUN apt-get update
RUN apt-get install -y vim curl git

# 작업 폴더를 만들기
RUN mkdir /app
WORKDIR /app

RUN git clone https://github.com/minmoo/type-react-redux.git /app
RUN npm install

