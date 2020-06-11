FROM  node:14.4.0 as builder

# Install tools
RUN apt-get update
RUN apt-get install -y vim curl git

# 작업 폴더를 만들기
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN git clone https://github.com/minmoo/type-react-redux.git /usr/src/app
RUN npm install
ENV PORT=8080

