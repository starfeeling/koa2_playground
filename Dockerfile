FROM node:carbon
WORKDIR /root/koa2_docker

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
