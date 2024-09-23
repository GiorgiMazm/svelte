<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';
	import { EyeSlashSolid, EyeSolid, LockSolid } from 'flowbite-svelte-icons';
	import Loader from '$lib/components/Loader.svelte';

	export let data;
	$: ({ supabase } = data);
	let password = '';
	let loading = false;
	async function resetPassword() {
		loading = true;
		const { error } = await supabase.auth.updateUser({ password: password });

		if (error) {
			console.log(error.message);
		}
		loading = false;
	}

	let hidePassword = true;
</script>

<div
	class="mx-auto mt-16 flex w-full max-w-md flex-col space-y-6 rounded-lg border border-gray-300 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
>
	<h1 class="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
		Reset Your Password
	</h1>
	<Label class="text-gray-700 dark:text-gray-300">
		New Password
		<Input
			name="password"
			type={hidePassword ? 'password' : 'text'}
			bind:value={password}
			class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
		>
			<LockSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
			<button
				type="button"
				slot="right"
				on:click={() => (hidePassword = !hidePassword)}
				class="mr-4 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-400"
			>
				{#if hidePassword}
					<EyeSolid class="h-5 w-5" />
				{:else}
					<EyeSlashSolid class="h-5 w-5" />
				{/if}
			</button>
		</Input>
	</Label>

	<Button
		type="submit"
		disabled={loading}
		class="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
		on:click={resetPassword}
	>
		{#if loading}
			<Loader />
			Resetting password...
		{:else}
			Reset password
		{/if}
	</Button>

	<p class="text-center text-sm text-gray-600 dark:text-gray-400">
		Remembered your password? <a href="/" class="text-blue-600 hover:underline dark:text-blue-400"
			>Home page</a
		>
	</p>
</div>
