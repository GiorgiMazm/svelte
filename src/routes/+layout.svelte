<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	export let data;
	$: ({ session, supabase, isPaid } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div>
	<Header {isPaid} {supabase} {session}></Header>

	<main>
		<slot></slot>
	</main>

	<footer></footer>
</div>
