import {supabase} from '@/app/utils';
import {NextResponse} from 'next/server';

export async function GET() {
  const {data, error} = await supabase
    .from('comment')
    .select('id, created_at, name, content');

  if (error) return NextResponse.json({error: error.message}, {status: 400});
  return NextResponse.json(data, {status: 200});
}

export async function POST(request: Request) {
  const {name, password, contents} = await request.json();
  const {data, error} = await supabase
    .from('comment')
    .insert([{name, password, contents}]);

  if (error) return NextResponse.json({error: error.message}, {status: 400});
  return NextResponse.json(data, {status: 201});
}
