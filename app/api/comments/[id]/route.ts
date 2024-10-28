import {NextResponse} from 'next/server';
import {supabase} from '@/app/utils';

export async function DELETE(
  request: Request,
  context: {params: Promise<{id: string}>},
) {
  const {id} = await context.params;
  const {password} = await request.json();

  const {data} = await supabase
    .from('comment')
    .select('password')
    .eq('id', id)
    .single();

  if (data && data.password === password) {
    const {error} = await supabase.from('comment').delete().eq('id', id);

    if (error) return NextResponse.json({error: error.message}, {status: 400});
    return new NextResponse(null, {status: 204});
  } else {
    return NextResponse.json({error: 'invalid password'}, {status: 400});
  }
}
