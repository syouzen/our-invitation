import {NextResponse} from 'next/server';
import {supabase} from '@/app/utils';

export async function DELETE(request: Request) {
  const {id, password} = await request.json();

  const {data: comment, error: fetchError} = await supabase
    .from('comment')
    .select('password')
    .eq('id', id)
    .single();

  if (fetchError) {
    return NextResponse.json({error: fetchError.message}, {status: 400});
  }

  // 비밀번호 검증
  if (comment?.password !== password) {
    return NextResponse.json({error: 'Invalid password'}, {status: 403});
  }

  // 삭제
  const {error} = await supabase.from('comment').delete().eq('id', id);
  if (error) return NextResponse.json({error: error.message}, {status: 400});
  return NextResponse.json(null, {status: 204});
}
