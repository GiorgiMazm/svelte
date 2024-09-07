import { supabase } from '$lib/db';

export async function load({ setHeaders }) {
	setHeaders({
		'Cache-Control': 'no-store'
	});
	const { data } = await supabase.from('todolist').select();
	return {
		todoList: data || []
	};
}
