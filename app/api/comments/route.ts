import {Comment} from '@/app/type';
import executeQuery from '@/app/utils/mysql-connection';
import {NextResponse} from 'next/server';

export async function GET() {
  try {
    const sql = 'select id, created_at, name, content from comment';
    const data = await executeQuery(sql, []);
    const queryData = JSON.parse(JSON.stringify(data)) as Comment[];

    return NextResponse.json(queryData, {status: 200});
  } catch (error) {
    return NextResponse.json({error: error}, {status: 400});
  }
}

export async function POST(request: Request) {
  try {
    const {name, password, content} = await request.json();
    const sql = `
      INSERT INTO comment (name, password, content)
      VALUES (?, ?, ?)
      RETURNING *;
    `;
    const data = await executeQuery(sql, [name, password, content]);

    return NextResponse.json(data, {status: 200});
  } catch (error) {
    return NextResponse.json({error: error}, {status: 400});
  }
}
