<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul class="m-auto flex w-1/5 justify-between text-3xl">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>
