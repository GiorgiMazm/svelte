import { WEBHOOK } from '$env/static/private';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { stripe } from '$lib/stripe';
import type Stripe from 'stripe';
import { supabase } from '$lib/db';

export const POST: RequestHandler = async ({ request }) => {
	const whSecret = WEBHOOK;
	const body = await request.text();

	const signature = request.headers.get('stripe-signature') ?? '';

	try {
		const event = stripe.webhooks.constructEvent(body, signature, whSecret);

		const eventType = event.type;

		if (eventType === 'checkout.session.completed') {
			const sessionWithCustomer = await stripe.checkout.sessions.retrieve(event.data.object.id, {
				expand: ['customer']
			});

			const customer = sessionWithCustomer.customer as Stripe.Customer;
			console.log('Customer:', customer.email);
			console.log('You did it Brock!!');
			supabase
				.from('users')
				.update({ stripe_customer_id: customer.id })
				.eq('email', customer.email);
		} else {
			console.log('you have lost!');
		}
	} catch (err) {
		console.log('Something went wrong.', err);
		error(500);
	}

	return json({ success: true });
};
