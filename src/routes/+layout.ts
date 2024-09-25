import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, depends, fetch }) => {
	/**
	 * Declare a dependency so the layout can be invalidated, for example, on
	 * session refresh.
	 */
	depends('supabase:auth');

	const supabase = isBrowser()
		? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
				global: {
					fetch
				}
			})
		: createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
				global: {
					fetch
				},
				cookies: {
					getAll() {
						return data.cookies;
					}
				}
			});

	// Use `getSession` to get the current session.

	const { data: sessionData } = await supabase.auth.getSession();
	const session = sessionData?.session;

	//Fetch the authenticated user.
	const { data: userData } = await supabase.auth.getUser();
	const user = userData?.user;

	/**
	 * Check if the user has a plan in the database.
	 */
	let isPaid = false;
	if (session?.user?.id) {
		const { data, error } = await supabase.from('users').select('plan').eq('id', session.user.id);
		if (error) {
			console.error(error);
		} else if (data && data.length > 0) {
			isPaid = Boolean(data[0]?.plan); // Set the isPaid flag based on user's plan
		}
	}

	/**
	 * Return the session, supabase client, user, and isPaid status as an object.
	 */
	return { session, supabase, user, isPaid };
};
