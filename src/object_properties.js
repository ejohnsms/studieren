var myObject = {};

Object.defineProperty(
	myObject,
	'a',
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	'b',
	{ enumerable: false, value: 3 }
);

console.log(myObject.propertyIsEnumerable('a'));
console.log(myObject.propertyIsEnumerable('b'));

console.log(Object.keys(myObject));
console.log(Object.getOwnPropertyNames(myObject));

console.log('has own property of non-enumerable');
console.log(myObject.hasOwnProperty('b'));