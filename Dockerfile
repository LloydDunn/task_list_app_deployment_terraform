FROM node:12.4-alpine as node-server

WORKDIR /usr/src/app
COPY package.json .
RUN npm install

WORKDIR /usr/src/app/server
COPY server/package.json .
RUN apk --no-cache add --virtual builds-deps build-base python && \
  npm install --production --silent

WORKDIR /usr/src/app
COPY . .
RUN npm run build:prod

WORKDIR /usr/src/app/server
ENV NODE_ENV=prod
EXPOSE 80 443


ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]
