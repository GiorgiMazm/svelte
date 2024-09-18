import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { session } = locals;

	if (!session) {
		throw redirect(303, '/auth');
	}

	return { session };
};
