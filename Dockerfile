# pull official base image
FROM node:latest

RUN mkdir -p /usr/src/app
# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]