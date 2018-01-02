FROM node:9

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i -g sails@beta

ADD package.json /usr/src/app/
RUN npm install --quiet

# # Bundle app source
ADD . /usr/src/app

EXPOSE 1338
