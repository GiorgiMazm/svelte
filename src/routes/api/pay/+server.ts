import { stripe } from '$lib/stripe';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals, url }) => {
	const user = locals.user;
	const data = await request.json();
	if (!user) {
		redirect(401, '/login');
	}
	const session = await stripe.checkout.sessions.create({
		line_items: [{ price: data.paymentId, quantity: 1 }],
		payment_method_types: ['card', 'paypal'],
		metadata: {
			userId: user.id
		},
		customer_email: user.email,
		allow_promotion_codes: true,
		mode: 'payment',
		customer_creation: 'always',
		success_url: `${url.origin}/`,
		cancel_url: `${url.origin}/private`
	});

	return new Response(JSON.stringify({ url: session.url, status: 200 }));
};
