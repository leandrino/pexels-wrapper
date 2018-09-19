FROM node:latest

WORKDIR /usr/src/app/

RUN npm install -g concurrently typescript

COPY package*.json ./

RUN yarn install

COPY . .

#CMD [ "npm", "bundle" ]
