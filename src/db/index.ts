import { Client } from "pg"; //pgパッケージからClientクラスをインポートする

export class DBClient {
  //DBClientクラスをエクスポートする
  client: Client; //clientプロパティを定義する

  constructor() {
    //コンストラクタを定義する
    this.client = new Client({
      //clientプロパティに新しいClientインスタンスを代入する
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    });
  }
}
