<script lang="ts">
	import { Input, Label, Button } from 'flowbite-svelte';

	export let data;
	let toDoItem = '';
	async function loadData() {
		const res = await fetch('/api');
		const loadedData = await res.json();
		data.todoList = loadedData.data;
	}
	async function addToList() {
		await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: toDoItem
			})
		});
		await loadData();
		toDoItem = '';
	}

	async function deleteItem(id: number) {
		await fetch(`/api/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: toDoItem
			})
		});

		await loadData();
	}
</script>

<section>
	<div class="container m-auto">
		<h1 class="text-center text-5xl">Home</h1>
		<div>
			<Label for="toDoItem">What you want to do?</Label>
			<Input class="inline w-1/3" bind:value={toDoItem} name="toDoItem" type="text" />

			<Button color="dark" on:click={addToList}>Add</Button>
			<div>
				<ul>
					{#each data.todoList as toDoItem}
						<li class="p-4">
							{toDoItem.name}
							<Button color="dark" on:click={() => deleteItem(toDoItem.id)}>delete</Button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
