import { DBClient } from "@/db";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
  const db = new DBClient(); //DBClientクラスのインスタンスを生成する
  await db.client.connect(); //DB接続を開始する

  const id = req.url.split("/api/")[1];

  const query = `
        SELECT * FROM tasks WHERE id = \$1`;
  const values = [id];
  const data = await db.client.query(query, values);
  await db.client.end(); //DB接続を終了する

  if (data.rows.length === 0) {
    notFound();
  }

  return NextResponse.json(data.rows[0], { status: 200 });
}

export async function PUT(req: Request) {
  const db = new DBClient(); //DBClientクラスのインスタンスを生成する
  await db.client.connect(); //DB接続を開始する

  const id = req.url.split("/api/")[1];
  const { title, status, content } = await req.json();

  const query = `
        UPDATE tasks 
        SET title = \$1, content = \$2, status = \$3 
        WHERE id = \$4
        RETURNING *`;

  const values = [title, content, status, id];
  const data = await db.client.query(query, values);
  await db.client.end(); //DB接続を終了する

  if (data.rows.length === 0) {
    notFound();
  }

  return NextResponse.json(data.rows[0], { status: 200 });
}
