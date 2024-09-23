import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			console.error(error);
		} else {
			redirect(303, '/private');
		}
	},
	google: async ({ request, locals: { supabase } }) => {
		console.log('google');
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${new URL(request.url).origin}/auth/callback`
			}
		});

		if (error) {
			console.error(error);
		} else if (data.url) {
			redirect(303, data.url);
		}
	}
};
