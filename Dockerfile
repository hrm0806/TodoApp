FROM node:22.7.0

WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

RUN npm install

COPY . .

# アプリケーションをビルド
#RUN npm run build

# アプリケーションが使用するポートを指定
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
