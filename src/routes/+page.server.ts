import { supabase } from '$lib/db';

export async function load({ params }) {
	const { data } = await supabase.from('todolist').select();
	return {
		todoList: data || []
	};
}
