//nice tip for formatting JSON
//JSON.stringify({}, null, 2)

// currying
let cats = [
  {type: 'tiger', name: 'Gunter'},
  {type: 'cheetah', name: 'Andre'},
  {type: 'lion', name: 'Lafcadio'},
  {type: 'tiger', name: 'Yann'},
  {type: 'house', name: 'Tabby'},
]

let isCatType = (type) =>
  (cat) => type === cat.type
  // this function takes a type
  // and returns a function that takes a cat
  // we get a cat from the cats collection
  // and return true or false for the condition


// the call is isCatType('tiger')(cat)
let tigers = cats.filter(isCatType('tiger'))


console.log(JSON.stringify(tigers, null, 2))
