import { Client } from "pg"; //pgパッケージからClientクラスをインポートする

export class DBClient {
  //DBClientクラスをエクスポートする
  client: Client; //clientプロパティを定義する

  constructor() {
    //コンストラクタを定義する
    this.client = new Client({
      //clientプロパティに新しいClientインスタンスを代入する
      user: "postgres_training",
      host: "localhost", //localhostに変更
      database: "postgres_training",
      password: "postgres_training",
      port: 5432,
    });
  }
}
