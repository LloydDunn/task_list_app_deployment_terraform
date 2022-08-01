FROM node:12.4-alpine as node-server

COPY / /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm run build:prod

WORKDIR /usr/src/app/server
ENV NODE_ENV=prod
RUN apk --no-cache add --virtual builds-deps build-base python && \
  npm install --production --silent
EXPOSE 80 443

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]
CMD ["node", "server.js"]
