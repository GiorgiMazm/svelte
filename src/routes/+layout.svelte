<script>
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import { goto } from '$app/navigation';

	export let data;
	$: ({ session, supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		} else {
			await goto('/');
		}
	};

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="app">
	<Header {logout}></Header>

	<main>
		<slot></slot>
	</main>

	<footer></footer>
</div>
