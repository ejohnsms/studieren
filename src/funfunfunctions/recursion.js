let categories = [
  {id: 'animal', parent: null},
  {id: 'mamal', parent: 'animal'},
  {id: 'cat', parent: 'mamal'},
  {id: 'dog', parent: 'mamal'},
  {id: 'fish', parent: 'animal'},
  {id: 'shark', parent: 'fish'},
  {id: 'reptile', parent: 'animal'}
];

let makeTree = (categories, parent) => {
  let node = {};

  categories
    .filter(x => x.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
    // iterating of all of the categories that meet the criteria
    // the node.parent key is assigned a value
    // which is the object returned from makeTree 
  return node;
}

console.log(
  JSON.stringify(makeTree(categories, null), null, 2)
);
