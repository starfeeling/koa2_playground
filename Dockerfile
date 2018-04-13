FROM node:8 as build
WORKDIR /app

COPY . ./
RUN npm install
FROM node:8-alpine

COPY --from=build /app /
EXPOSE 3000

CMD [ "npm", "start" ]
