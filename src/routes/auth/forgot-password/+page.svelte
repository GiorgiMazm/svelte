<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';
	import { EnvelopeSolid } from 'flowbite-svelte-icons';
	import Loader from '$lib/components/Loader.svelte';

	export let data;
	$: ({ supabase } = data);
	let email = '';
	let loading = false;
	let showNotification = false;

	async function sentEmail() {
		loading = true;
		const { error } = await supabase.auth.resetPasswordForEmail(email);

		if (error) {
			console.log(error.message);
		} else showNotification = true;
		loading = false;
	}

	function closeNotification() {
		showNotification = false;
	}
</script>

<div
	class="mx-auto mt-16 flex w-full max-w-md flex-col space-y-6 rounded-lg border border-gray-300 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
>
	<h1 class="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
		Reset Your Password
	</h1>

	<Label class="text-gray-700 dark:text-gray-300">
		Your Email
		<Input
			name="email"
			type="email"
			bind:value={email}
			class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
		>
			<EnvelopeSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
		</Input>
	</Label>

	{#if showNotification}
		<div
			class=" mb-4 flex items-center justify-between rounded-lg bg-blue-50 p-4 text-sm text-blue-800 opacity-100 transition-opacity duration-300 dark:bg-gray-700 dark:text-blue-400"
			role="alert"
		>
			<span>Email to reset your password was sent. Check your email!</span>
			<button
				on:click={closeNotification}
				class="ml-2 text-blue-800 focus:outline-none dark:text-blue-400"
			>
				&times;
			</button>
		</div>
	{/if}

	<Button
		type="submit"
		disabled={loading}
		class="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
		on:click={sentEmail}
	>
		{#if loading}
			<Loader />
			Sending email...
		{:else}
			Sent email to reset password
		{/if}
	</Button>

	<p class="text-center text-sm text-gray-600 dark:text-gray-400">
		Remembered your password? <a
			href="/auth"
			class="text-blue-600 hover:underline dark:text-blue-400">Login</a
		>
	</p>
</div>
