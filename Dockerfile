FROM node:22.7.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
