<script lang="ts">
	import { Input, Label, Button } from 'flowbite-svelte';

	//export let data;
	let data = {
		todoList: []
	};
	let toDoItem = '';
	async function loadData() {
		const res = await fetch(String(import.meta.env.VITE_BACKEND_URL));
		const loadedData = await res.json();
		data.todoList = loadedData.data;
	}
	async function addToList() {
		await fetch(String(import.meta.env.VITE_BACKEND_URL), {
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
		await fetch(`${import.meta.env.VITE_BACKEND_URL}${id}`, {
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
		<h1>Home</h1>
		<div>
			<Label for="toDoItem">toDo</Label>
			<Input class="w-1/3" bind:value={toDoItem} name="toDoItem" type="text" />

			<Button color="dark" on:click={addToList}>Add</Button>
			<div>
				<ul>
					{#each data.todoList as toDoItem}
						<li>
							{toDoItem?.name}
							<Button on:click={() => deleteItem(toDoItem?.id)}>delete</Button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
