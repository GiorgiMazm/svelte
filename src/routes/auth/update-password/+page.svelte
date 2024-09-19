<script>
	import { Button } from 'flowbite-svelte';

	export let data;
	$: ({ supabase } = data);
	async function kek() {
		const { error } = await supabase.auth.updateUser({ password: '111111' });

		if (error) {
			console.log(error.message);
		}
	}
</script>

<Button color="dark" on:click={kek}>click</Button>
