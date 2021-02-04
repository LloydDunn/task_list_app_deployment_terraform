FROM node:8.11-alpine as node-server

WORKDIR /
RUN npm run build:prod

COPY /server /usr/src/app/server
WORKDIR /usr/src/app/server
ENV NODE_ENV=prod
RUN apk --no-cache add --virtual builds-deps build-base python && \
  npm install --production --silent
EXPOSE 80 443

CMD ["node", "server.js"]
