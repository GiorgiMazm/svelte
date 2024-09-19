<script>
	import { Navbar } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';
	import { A } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

	export let session;
	export let supabase;
	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		} else {
			await goto('/');
		}
	};
</script>

<Navbar class="mb-4 bg-gray-300 p-4">
	<A
		href="/"
		class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
		>Home</A
	>
	{#if session}
		<A
			href="/private"
			class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
			>Private</A
		>

		<A
			href="/private/payment"
			class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
			>Payment</A
		>
	{/if}
	<div class="flex md:order-2">
		{#if session}
			<Button color="blue" on:click={logout}>Logout</Button>
		{:else}
			<Button color="blue" class="mr-3">
				<A href="/auth">Login</A></Button
			>
		{/if}
	</div>
</Navbar>
