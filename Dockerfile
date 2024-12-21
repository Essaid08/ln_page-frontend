FROM node:20-alpine

WORKDIR /front_end

COPY package*.json ./

RUN npm install

COPY  . .

EXPOSE 3002

CMD [ "npm" , "run" , "dev" ]