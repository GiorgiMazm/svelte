import { supabase } from '$lib/db';
export const ssr = true; // Forces server-side rendering

export async function load({ setHeaders }) {
	setHeaders({
		'Cache-Control': 'max-age=0, s-maxage=10'
	});
	const { data } = await supabase.from('todolist').select();
	return {
		todoList: data || []
	};
}
