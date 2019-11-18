// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		ingredients: ['chocolat', 'banane', 'fraise'],
		persons: [
			{ name: 'David', age: 35, color: 'red' },
			{ name: 'Elza', age: 31, color: 'yellow' }
		]
	}
})