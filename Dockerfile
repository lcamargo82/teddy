FROM node:22-alpine

RUN apk add --no-cache shadow git bash

RUN usermod -u 1000 node && groupmod -g 1000 node

WORKDIR /app

COPY . .

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

RUN chown -R node:node /app

USER node

EXPOSE 3000 5173

ENTRYPOINT ["/bin/sh", "/app/entrypoint.sh"]
