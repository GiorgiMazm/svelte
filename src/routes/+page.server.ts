import { supabase } from '$lib/db';

export async function load() {
	const { data } = await supabase.from('todolist').select();
	return {
		todoList: data || []
	};
}
