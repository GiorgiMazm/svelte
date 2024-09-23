<script lang="ts">
	import { A, Button, Input, Label } from 'flowbite-svelte';
	import {
		EnvelopeSolid,
		GoogleSolid,
		LockSolid,
		EyeSolid,
		EyeSlashSolid
	} from 'flowbite-svelte-icons';
	import Loader from '$lib/components/Loader.svelte';
	import { enhance } from '$app/forms';
	let hidePassword = true;
	let loading = false;
</script>

<form
	class="mx-auto mt-10 flex w-full max-w-lg flex-col space-y-4 rounded-lg border p-6 text-gray-200 shadow-lg dark:bg-gray-800"
	method="POST"
	action="?/login"
	use:enhance={() => {
		loading = true;
		return ({ update }) => {
			update({ invalidateAll: true }).finally(async () => {
				loading = false;
			});
		};
	}}
>
	<h1 class="mb-6 text-center text-4xl font-bold dark:text-white">Login</h1>

	<Label class="text-gray-300">
		Email
		<Input
			name="email"
			type="email"
			placeholder="name@flowbite.com"
			class="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
		>
			<EnvelopeSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
		</Input>
	</Label>

	<Label class="text-gray-300">
		Password
		<Input
			name="password"
			type={hidePassword ? 'password' : 'text'}
			class="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
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

	<div class="mt-4 flex justify-between">
		<Button
			type="submit"
			disabled={loading}
			class="w-full rounded-lg bg-blue-600 py-2 font-semibold transition-colors duration-300 hover:bg-blue-700"
		>
			{#if loading}
				<Loader />
				Logining...
			{:else}
				Login
			{/if}</Button
		>
		<Button
			type="submit"
			class="ml-2 flex w-full items-center justify-center rounded-lg border border-gray-500 bg-gray-800 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
			formaction="?/google"
		>
			Sign in with Google
			<GoogleSolid class="ml-2 h-5 w-5 text-white" />
		</Button>
	</div>
	<span class="mt-2 block text-center text-sm dark:text-white">
		<a href="/auth/forgot-password" class="text-blue-500 hover:underline">Forgot password?</a>
	</span>

	<hr class="my-4 border-t border-gray-300" />
	<p class="text-center dark:text-white">
		Don't have an account? <A href="/auth/sign-up">Sign up</A>
	</p>
</form>
