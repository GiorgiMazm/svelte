import { supabase } from '$lib/db';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const data = await request.json();
	await supabase.from('todolist').insert([data]);
	return json({ status: 200, message: 'Task created successfully' });
}
