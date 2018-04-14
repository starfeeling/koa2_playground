FROM node:8 as build
WORKDIR /root/koa2_playground

COPY . ./
RUN npm install
FROM node:8-alpine

COPY --from=build /root/koa2_playground /
EXPOSE 3000

CMD [ "npm", "start" ]
