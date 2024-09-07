import { supabase } from '$lib/db';
export const ssr = true; // Forces server-side rendering

export async function load() {
	const { data } = await supabase.from('todolist').select();
	return {
		todoList: data || []
	};
}
