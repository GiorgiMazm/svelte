<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
	$: ({ user } = data);
</script>

<h1>Paid content! {user?.email}</h1>
