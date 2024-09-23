<script lang="ts">
	import Loader from '$lib/components/Loader.svelte';
	import { Button } from 'flowbite-svelte';

	let loading = false;
	async function handlePayment(paymentId: string) {
		loading = true;
		const data = await fetch('/api/pay/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ paymentId })
		});
		const obj = await data.json();
		window.location = obj.url;
		loading = false;
	}
</script>

<div>
	<h2>Choose :</h2>
	<div id="card-element"></div>
	<Button
		class="m-4"
		disabled={loading}
		color="dark"
		on:click={() => handlePayment('price_1Q10IIBCKo7pYt9RgSVwr1Ce')}
	>
		{#if loading}
			<Loader />
			Processing payment...
		{:else}
			Pay 25
		{/if}
	</Button>
	<br />
	<Button
		class="m-4"
		disabled={loading}
		color="dark"
		on:click={() => handlePayment('price_1Q10ajBCKo7pYt9RUjKkQ5OH')}
	>
		{#if loading}
			<Loader />
			Processing payment...
		{:else}
			Pay 40
		{/if}</Button
	>
	<br />
	<Button
		class="m-4"
		disabled={loading}
		color="dark"
		on:click={() => handlePayment('price_1Q1QGjBCKo7pYt9RRrjpIETu')}
	>
		{#if loading}
			<Loader />
			Processing payment...
		{:else}
			Pay 50
		{/if}</Button
	>
</div>
