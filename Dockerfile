FROM node:12.0-alpine as node-server

# WORKDIR /usr/src/app
# RUN ls
# RUN npm run build:prod
# COPY /server /usr/src/app/server
# WORKDIR /usr/src/app/server

COPY / /usr/src/app
WORKDIR /usr/src/app
RUN ls
RUN npm install
RUN npm run build:prod
WORKDIR /usr/src/app/server
RUN ls

ENV NODE_ENV=prod
RUN apk --no-cache add --virtual builds-deps build-base python && \
  npm install --production --silent
EXPOSE 80 443

CMD ["node", "server.js"]
