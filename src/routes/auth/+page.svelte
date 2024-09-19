<script>
	import { Button, Input, Label } from 'flowbite-svelte';
	import { EnvelopeSolid, GoogleSolid, LockSolid, UserSolid } from 'flowbite-svelte-icons';
	export let data;
	$: ({ supabase } = data);
	let fromType = 'login';
	function toggleLogin() {
		fromType = fromType === 'login' ? 'signup' : 'login';
	}

	let email = '';
	async function kek() {
		const { error } = await supabase.auth.resetPasswordForEmail(email);

		if (error) {
			console.log(error.message);
		}
	}
</script>

<form
	class="mx-auto mt-10 flex w-full max-w-lg flex-col space-y-4 rounded-lg border p-6 text-gray-200 shadow-lg dark:bg-gray-800"
	method="POST"
	action="?/login"
>
	<h1 class="mb-6 text-center text-4xl font-bold dark:text-white">
		{fromType === 'login' ? 'Login' : 'Sign up'}
	</h1>

	{#if fromType === 'login'}
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
				type="password"
				class="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
			>
				<LockSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
			</Input>
		</Label>

		<div class="mt-4 flex justify-between">
			<Button
				type="submit"
				class="w-full rounded-lg bg-blue-600 py-2 font-semibold transition-colors duration-300 hover:bg-blue-700"
				>Login</Button
			>
			<Button
				type="submit"
				class="ml-2 flex w-full items-center justify-center rounded-lg border border-gray-500 bg-gray-800 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
				formaction="?/google"
			>
				<GoogleSolid class="mr-2 h-5 w-5 text-white" /> Login with Google
			</Button>
		</div>

		<hr class="my-4 border-t border-gray-300" />
		<p class="text-center dark:text-white">
			Don't have an account? <Button on:click={toggleLogin} color="alternative">Sign up</Button>
		</p>
	{:else}
		<Label class="text-gray-300">
			Display Name
			<Input
				name="displayName"
				type="text"
				placeholder="JohnDoe2005"
				class="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
			>
				<UserSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
			</Input>
		</Label>

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
				type="password"
				class="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
			>
				<LockSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
			</Input>
		</Label>

		<Button
			type="submit"
			class="w-full rounded-lg bg-blue-600 py-2 font-semibold transition-colors duration-300 hover:bg-blue-700"
			formaction="?/signup">Sign up</Button
		>

		<hr class="my-4 border-t border-gray-300" />
		<p class="text-center dark:text-white">
			Already have an account? <Button on:click={toggleLogin} color="dark">Sign in</Button>
		</p>
	{/if}
</form>

<div>
	<Label class="text-gray-300">
		forgot password
		<Input
			name="email"
			type="email"
			class="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
			bind:value={email}
		>
			<LockSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
		</Input>
	</Label>

	<Button color="dark" on:click={kek}>reset</Button>
</div>
