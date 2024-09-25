import { WEBHOOK } from '$env/static/private';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { stripe } from '$lib/stripe';
import { supabase } from '$lib/db';
import Stripe from 'stripe';

export const POST: RequestHandler = async ({ request }) => {
	const whSecret = WEBHOOK;
	const body = await request.text();
	const signature = request.headers.get('stripe-signature') ?? '';

	try {
		const event = stripe.webhooks.constructEvent(body, signature, whSecret);

		const eventType = event.type;

		if (eventType === 'checkout.session.completed') {
			const session = event.data.object as Stripe.Checkout.Session;
			const userId = session.metadata?.userId;
			await supabase.from('users').update({ plan: 'PRO' }).eq('id', userId);
		} else {
			console.log('Unhandled event type:', eventType);
		}
	} catch (err) {
		console.error('Error processing webhook:', err);
		error(500, 'Webhook error');
	}

	return json({ success: true });
};
