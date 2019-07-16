FROM node:8-alpine
ENV PORT=3003
COPY yarn.lock /server/yarn.lock
COPY package.json /server/package.json
WORKDIR /server
COPY . .
EXPOSE $PORT
CMD [ "yarn", "start" ]