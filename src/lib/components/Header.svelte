<script>
	import { Navbar } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';
	import { A } from 'flowbite-svelte';

	export let logout;
</script>

<Navbar class="mb-4 bg-gray-300 p-4">
	<A
		href="/"
		class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
		>Home</A
	>
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

	<div class="flex md:order-2">
		<Button color="blue" class="mr-3">
			<A href="/auth">Login</A></Button
		>

		<Button on:click={logout}>logout</Button>
	</div>
</Navbar>
