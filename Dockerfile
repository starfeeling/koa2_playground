FROM node:8 as build
WORKDIR /root/koa2_docker

COPY package*.json ./
RUN npm install

FROM node:8-alpine
COPY --from=build /root/koa2_docker /

EXPOSE 3000

CMD [ "npm", "start" ]
