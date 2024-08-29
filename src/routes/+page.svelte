<script lang="ts">
	import MyComp from './MyComp.svelte';

	let fullList: string[] = ['item 1'];
	for (let i = 2; i <= 100; i++) {
		fullList = [...fullList, `item ${i}`];
	}
	let toDoList = fullList.slice(0, 5);
	let toDoItem = '';
	function addToList() {
		toDoList = [...toDoList, toDoItem];
		toDoItem = '';
	}

	function showNext(currentIndex: number) {
		if (currentIndex === 100) return;
		toDoList = fullList.slice(currentIndex, currentIndex + 5);
	}

	function showPrevious(currentIndex: number) {
		if (currentIndex === 0) return;
		toDoList = fullList.slice(currentIndex - 5, currentIndex);
	}
	function deleteItem(index: number) {
		toDoList = toDoList.filter((_, i) => i !== index);
	}

	function handleNext() {
		showNext(parseInt(toDoList[4].split(' ')[1]));
	}

	function handlePrevious() {
		showPrevious(parseInt(toDoList[0].split(' ')[1]) - 1);
	}
</script>

<section>
	<h1>Home</h1>
	<div>
		<input bind:value={toDoItem} name="toDoItem" type="text" />
		<label for="toDoItem">toDo</label>
		<button on:click={addToList}>Add</button>
		<div>
			<ul>
				{#each toDoList as toDoItem, index}
					<li>{toDoItem} <button on:click={() => deleteItem(index)}>delete</button></li>
				{/each}
			</ul>
		</div>
		<button on:click={handleNext}>Next 5</button>
		<button on:click={handlePrevious}>Previous 5</button>
	</div>
	<MyComp />
</section>
