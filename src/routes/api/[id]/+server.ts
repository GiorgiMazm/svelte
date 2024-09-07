import { supabase } from '$lib/db';
import { json } from '@sveltejs/kit';

export async function DELETE({ params }) {
	const id = params.id;
	await supabase.from('todolist').delete().eq('id', id);
	return json({ status: 200, message: 'Task deleted successfully' });
}
