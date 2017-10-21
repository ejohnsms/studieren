// functional programming
// notes

// separate mutation from calculation

// pure functions are 
// functions that don't change anything
// testable
// portable
// memoizable
// parallelizable

// separate functions from rules

// every function has one input, one output

// separate arity from functions
//
// - functions are nouns

var get = curry(function(property, object) {
		return object[property];
});

var names = people.map(get('name'));

// check out ramda.js as an alternative to lodash and underscore
// - Problem: http://jsbin.com/romun
// - Solution: http://jsbin.com/mojusuyane


