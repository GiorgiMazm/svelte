import { writable } from 'svelte/store';

export const numberStore = writable({
	name: 'john',
	age: 22
});
