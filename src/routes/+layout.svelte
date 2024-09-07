<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot></slot>
	</main>

	<footer></footer>
</div>
