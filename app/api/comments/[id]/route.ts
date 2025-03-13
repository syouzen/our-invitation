import {NextResponse} from 'next/server';
import executeQuery from '@/app/utils/mysql-connection';
import {Comment} from '@/app/type';

export async function DELETE(
  request: Request,
  context: {params: Promise<{id: string}>},
) {
  try {
    const {id} = await context.params;
    const {password} = await request.json();

    // 비밀번호 검증
    const selectSql = 'SELECT password FROM comment WHERE id = ?';
    const selectData = (await executeQuery(selectSql, [id])) as Comment[];

    if (selectData.length > 0 && selectData[0].password === password) {
      // 댓글 삭제
      const deleteSql = 'DELETE FROM comment WHERE id = ?';
      await executeQuery(deleteSql, [id]);

      return new NextResponse(null, {status: 204});
    } else {
      return NextResponse.json({error: 'invalid password'}, {status: 400});
    }
  } catch (error) {
    return NextResponse.json({error: error}, {status: 400});
  }
}
