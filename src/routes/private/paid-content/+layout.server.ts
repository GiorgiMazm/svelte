import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { user, supabase, session } = locals;

	const { data } = await supabase.from('users').select('plan').eq('id', user?.id);

	if (!data || !data[0].plan) {
		throw redirect(303, '/private/payment');
	}

	return { session };
};
