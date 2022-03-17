# base image
FROM node:alpine
# set dir
WORKDIR /app
# copy files
COPY package.json ./
COPY ./ ./
# expose port
EXPOSE 3000
# install dependencies
RUN npm install -g ts-node
RUN npm install
RUN npm run build
# start
CMD npm start
