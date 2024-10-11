import { DBClient } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const db = new DBClient();
  await db.client.connect();
  const query = "SELECT COUNT(*) FROM tasks";
  const data = await db.client.query(query);
  await db.client.end();

  console.log(data);
  return NextResponse.json(data.rows[0], { status: 200 });
}
