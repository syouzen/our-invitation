import {NextResponse} from 'next/server';
import {supabase} from '@/app/utils';

export async function DELETE(
  request: Request,
  {params}: {params: {id: string}},
) {
  const {id} = await params;
  const {password} = await request.json();

  const {error} = await supabase
    .from('comment')
    .delete()
    .eq('id', id)
    .eq('password', password);

  if (error) return NextResponse.json({error: error.message}, {status: 400});
  return new NextResponse(null, {status: 204});
}
