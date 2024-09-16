<script lang="ts">
	import { createClient } from '@supabase/supabase-js';
	const supabase = createClient(
		'https://mpcemobnlplubbplrcjk.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wY2Vtb2JubHBsdWJicGxyY2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMzAwMzIsImV4cCI6MjA0MTcwNjAzMn0.zxuBX_ah4iefRw_euUGNTEprj0t-XRwC0dFUn0wtMn0'
	);
	let email = 'ggg';
	let password = 'ddd';
	async function signIn() {
		await supabase.auth.signInWithPassword({ email, password });
	}
	async function signUp() {
		await supabase.auth.signUp({ email, password });
	}
	async function lol() {
		const session = await supabase.auth.getSession();
		console.log('Current session:', session);
	}
	lol();

	async function signInGoogle() {
		await supabase.auth.signInWithOAuth({
			provider: 'google'
		});
	}

	async function signOut() {
		await supabase.auth.signOut();
	}

	async function kek() {
		const kk = await supabase.auth.getUser();

		console.log(kk.data.user, 'kk');
	}

	kek();
</script>

<div class="flex h-screen items-center justify-center">
	<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
		<h2 class="mb-6 text-2xl font-bold">Login</h2>
		<form>
			<div class="mb-4">
				<label for="email" class="mb-2 block font-bold text-gray-700"> Email </label>
				<input
					bind:value={email}
					type="email"
					id="email"
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					placeholder="Enter your email"
				/>
			</div>
			<div class="mb-6">
				<label for="password" class="mb-2 block font-bold text-gray-700"> Password </label>
				<input
					bind:value={password}
					type="password"
					id="password"
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					placeholder="Enter your password"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					on:click={signIn}
					type="submit"
					class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				>
					Sign In
				</button>

				<button
					on:click={signInGoogle}
					type="submit"
					class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				>
					Sign In with Google
				</button>

				<button
					on:click={signOut}
					type="submit"
					class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				>
					Sign out
				</button>
			</div>
		</form>
	</div>
</div>
