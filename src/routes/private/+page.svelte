<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ user } = data);
</script>

<h1>Private page for user: {user?.email}</h1>
<h1>Private page for user: {user?.user_metadata.full_name}</h1>
