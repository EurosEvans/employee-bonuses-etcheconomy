



#!/bin/bash

# Node.js APP in docker image

# Docker
sudo apt-get install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker

# ufw rules if needed
sudo ufw allow 3000/tcp
sudo ufw allow 3001/tcp

# add trevor to docker group
sudo useradd -G docker trevor

# Create Dockerfile in trevor home dir 

cat >Dockerfile <<CMD_EOF

FROM keymetrics/pm2:latest-stretch

# Bundle APP files
COPY etch/nameManager.js etch/nameManager.js
COPY etch/package-lock.json etch/package-lock.json
COPY etch/package-lock.json etch/package.json
COPY etch/server.js etch/server.js

# Workdir
WORKDIR /etch

RUN ls -al /etch
RUN id
RUN npm -v

# NPM
RUN npm install -g express
RUN npm link express
RUN npm i express
RUN npm i dotenv
RUN npm i body-parser
RUN npm i morgan
RUN npm i web3@0.20.0
RUN npm i ethereumjs-tx
#RUN npm install pm2@latest -g

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN pwd
RUN ls -la

CMD [ "pm2-runtime", "start", "server.js" ]

CMD_EOF

# Build Docker image 
docker build -t etch01 .

# Docker start image on port 3000
docker run -d -p 3000:3000 etch01

# Docker start image on port 3001
docker run -d -p 3001:3000 etch01



