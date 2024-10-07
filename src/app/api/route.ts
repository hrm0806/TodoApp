import { DBClient } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const db = new DBClient(); //DBClientクラスのインスタンスを生成する
  await db.client.connect(); //DB接続を開始する
  const query = "SELECT * FROM tasks"; //クエリを定義
  const data = await db.client.query(query); //クエリを実行
  await db.client.end(); //DB接続を終了する
  return NextResponse.json(data.rows, { status: 200 });
}

//タスク追加
export async function POST(req: NextRequest) {
  const db = new DBClient(); //DBClientクラスのインスタンスを生成する
  await db.client.connect(); //DB接続を開始する

  const { title, status, content } = await req.json();
  //ここまでOK
  const query = `
      INSERT INTO tasks( title, status, content)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
  const values = [title, status, content];
  const data = await db.client.query(query, values);

  await db.client.end(); //DB接続を終了する
  return NextResponse.json(data.rows[0], { status: 201 });
}
