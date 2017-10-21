let categories = [
	{id: 'animals', 'parent': null},
	{id: 'mamals', 'parent': 'animals'},
	{id: 'cats', 'parent': 'mamals'},
	{id: 'birman', 'parent': 'cats'}
]

let makeTree = (categories, parent) => {
	    let node = {};

		categories
			.filter(c => c.parent === parent)
			.foreach(c =>
				node[c.id] = makeTree(categories, c.id))

		return node;
	}

console.log(
	JSON.stringify(
		makeTree(categories, null)
		, null, 2)
)
