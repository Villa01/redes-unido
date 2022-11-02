FROM node:16.15.1 as build
# set working directoryRUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

COPY . .
EXPOSE 3000
CMD ["npm", "start"]