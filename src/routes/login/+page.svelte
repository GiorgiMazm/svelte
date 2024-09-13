<script lang="ts">
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
</script>

<div class="m-auto mt-40 w-2/5 border p-4">
	<h1 class="text-center text-3xl">Login</h1>
	<form class="flex flex-col space-y-6" action="/">
		<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">Change Password</h3>
		<Label class="space-y-2">
			<span>Your email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
				>Forgot password?</a
			>
		</div>
		<Button type="submit" class="w-full1">Sign in</Button>
		<p class="text-sm font-light text-gray-500 dark:text-gray-400">
			Don’t have an account yet? <a
				href="/"
				class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Sign up</a
			>
		</p>
	</form>
</div>
