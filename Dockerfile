FROM node:lts-alpine

WORKDIR /home/node

COPY --chown=node:node * ./

USER nodes

RUN npm install

EXPOSE 3000

CMD [ "node index.js" ]