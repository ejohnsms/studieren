'use strict'

// recovering this file
// grep -rni --include "*.js" "bootupMsg" ~/dev
// got a hit: aa9c5c485598e1e3aa8a5f4f127cda644b9db47f
// git show aa9c5c485598e1e3aa8a5f4f127cda644b9db47f > recovered.js
// find /dir \( -name node_modules -prune \) -o -name "*.css" -exec grep --color -Hn "first-child" {} 2>/dev/null \;

Object.getOwnPropertyNames(b.children).forEach(function(val, ar, idx){console.log(b.children[val])})


// arrays


// call, apply, and bind


// create a new array
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]


// this does the same thing as array.from


Array.of(7) // [7]

Array.from('foo') // ['f', 'o', 'o']


// merge two or more arrays
var fruit = ['apple', 'orange', 'banana'];
var veg = ['potato', 'kale', 'carrot'];

var fruitAndVeg = fruit.concat(veg);

// splice and slice
// splice modifies the original arrays and returns the removed items
// slice creates a new array from an existing array
// it's used to get function arguments which are an array like structure
function sortArguments() {
  var args = Array.prototype.slice.call(arguments);
  var sortedArgs = args.sort();
  return sortedArgs;
}
// a better way of doing this is whith rest params

// Array.copyWithin is an interesting one.
var pizza = []

// every - test every element in the array and returns true or false
function isBiggerThanOneHundred(element, index, array) {
  return element > 100;
}

[200, 140, 70].every(isBiggerThanOneHundred)

// fill - fills every element with the specified value
Array.fill(value, start, end)

// filter - returns a new array with all elements that pass the test
const myNumbers = [80, 99, 200, 140, 70];
let isBiggerThanOneHundred = element => element > 100;

var greaterThenOneHundred = myNumbers.filter(isBiggerThanOneHundred)

// find - returns the first occurence of the value or undefined
const myNumbers = [80, 99, 200, 140, 70];
let findCriteria = {
  min: 10,
  max: 100
}

let isBiggerThanOneHundred = element => element > findCriteria.max;
myNumbers.find(isBiggerThanOneHundred, findCriteria)


// findIndex - returns the index of the first element that meets the criteria or -1
Array.findIndex(callback, thisArg) // callback(element, index, Array)

// forEach - executes a callback for every item in the Array
// it returns undefined and usually used to mutate an array
Array.forEach()

// includes - returns true or false to indicate if value is in the Array
// can use an optional start index
Array.includes()

// indexOf - returns index or -1
Array.indexOf(value)
// find alll occurences of value in Array
let indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
const idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

// join - concatenates all of the values in an array to a string
Array.join('-') // optional seperator

// keys - returns an array iterator
const myNumbers = [80, 99, 200, 140, 70];
let interator = myNumbers.keys() // this is an object with index and done status
// {value: 1, done: false}

// lastIndexOf - the last index of the element or -1
Array.lastIndexOf()

// map - iterates over every element in array and returns a new array for all items
Array.map(callback, thisArg) // callback(element, index, Array


// pop - removes the last element of the array and returns it or undefined

// push - adds one or more items to the end of an array and returns the length

// reduce - iterates over an array with current value and accumulator
let maxChar = 'this is not my car'.split('')
                                  .map(c => c.charCodeAt(0))
                                  .reduce((m, c) => {
                             		     return Math.max(m, c);
                                  }, 0)

console.log(maxChar)
console.log(String.fromCharCode(maxChar))

console.assert(maxChar === 121, 'character code for letter y')

// more reduce
Array.reduce(callback, initialValue) // callback(accumulator, currentValue, currentIndex)
// this is usually used in conjunction with Array.map()
const allOrders = [{'date':'2018-10-10', 'distance':10, 'OrderId':111},
{'date':'2018-10-11', 'distance':20, 'OrderId':112},
{'date':'2018-10-10', 'distance':5, 'OrderId':113},
{'date':'2018-10-12', 'distance':30, 'OrderId':114},
{'date':'2018-10-12', 'distance':7, 'OrderId':115}];

const sortByDate = (a, b) => {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  } else {
    return 0;
  }
}

const ordersSortedByDate = allOrders.sort(sortByDate);

const shippingCriteria = {'shipDate': '2018-10-10',
                          'maxDistance': 50}
// const or let for function variable
let areShipping = order => order.date === shippingCriteria.shipDate;

let shouldProcessShipping = allOrders.some(areShipping)

if (shouldProcessShipping) {
  const todaysOrders = allOrders.filter(areShipping);

  const assignDriver = order => {
    if (order.distance < 5) {
      order.driver = 'Tom';
    } else {
      order.driver = 'Mike';
    }

    return order;
  }

  let allShippingInfo = (orderInfo, order) => {
    orderInfo.totalMiles += order.distance;
    if (orderInfo.driver !== order.driver) {
      orderInfo.totalDrivers += 1;
      orderInfo.curDriver = order.driver;
    }
    return orderInfo;
  }

  const shippingOverview = todaysOrders.map(assignDriver).reduce(allShippingInfo, {'totalMiles':0, 'totalDrivers':0});
  console.log(shippingOverview);
}

// pop - removes the last element from the array and returns it
Array.pop()

// push - adds an element to the end of an array and returns the new length
Array.push(item...)

// reverse - returns a reversed array
Array.reverse()

// shift - removes first element of the array and returns it
Array.shift()

// unshift - adds one or more items to the front an array
Array.unshift(item...)

// slice - returns a portion of an array
Array.slice(begin, end); // end is not included

// some - tests if any of the items in the array pass the tests
// returns true or false
Array.some()

// sort - sort an array in place and return the sorted array
Array.sort()
Array.sort(compareFunction)

// splice - modify an array by adding or removing items
// the deleted items or returned
Array.splice(start, deleteCount, item...)

// toLocaleString - to string
Array.toLocaleString()

// toString - to string
Array.toString()

// iterators
const myNumbers = [80, 99, 200, 140, 70];
// keys - returns an array iterator
let keyIter = myNumbers.keys();
// values - returns an iterator that conatains the values in the array
let valIter = myNumbers.values();
// entries
let entryIter = myNumbers.entries();
for (let e of entryIter) {
  console.log(e); // [0, 80]
}

// symbol iterator
let symIter = myNumbers[Symbol.iterator]();
for (let e of symIter) {
  console.log(e); // 80
}

// for of loops for collections that are iterable
for (const e of myNumbers) {
  console.log(e);
}

// a generator function that changes the internal index
// based on a argument value
function* strGen(str) {
  for (let i=0; i < str.length; i += 1) {
      const idx = yield str[i];

      if (typeof idx !== 'undefined') {
          console.log(idx);
          i = (idx - 1);
      }
  }
}

// generator function
function* randNum(){
  var array = new Uint32Array(10);
  window.crypto.getRandomValues(array);

  for (const e of array) {
    yield e;
  }
}

let gen = randNum();

gen.next().value;


// fibonacci
// The Rule is xn = xn-1 + xn-2
const fib = n => {
    if ( n <= 1 ) {
      return n;
    }
    return fib(n-1) + fib(n-2);
}

fib(9)


const fib2 = n => {
    /* Declare an array to store fibonacci numbers. */
    let f = [];
    f[n + 1]; // resize the array

    /* 0th and 1st number of the series are 0 and 1*/
    f.push(0);
    f.push(1);

    for (let i = 2; i <= n; i += 1)
    {
     /* Add the previous 2 numbers in the series
      and store it */
      f[i] = f[i-1] + f[i-2];
    }

    return f[n];
}

const fib3 = n => {
  let a = 0, b = 1, c;

  if( n == 0){
    return a;
  }

  for (let i = 2; i <= n; i += 1) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// sets
var mySet = new Set();
mySet.add(5); // Set { 1, 5 }
mySet.has(5);
mySet.size;
mySet.delete(5);

let arrayFromSet = [...mySet];


// maps
var myMap = new Map();
myMap.set(keyString, "value associated with 'a string'");
myMap.get(keyString);

for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}



// spread operator
const ar1 = [1,2,3];
let ar2 = [...ar1]; // this is like array.slice or array.concat

let funky = (a, b, c) => a + b + c;
const iterableParams = [1, 2, 3];
funky(...iterableParams){
  // do something with those params
}

// rest params
// or in the function definition
function tooFunky(...args[a, b, c]) {
  return a + b + c;
}


let car = {
  'model': 'honda',
  'year': '1999',
  'engine': {
    'type': 'v-twin',
    'capacity': '2L'
  }
}

let financing = {
  'type': 'lease',
  'length': '24MM'
}

// Note that Object.assign() triggers setters whereas spread syntax doesn't.
// shallow copy of car object
let newCar = {...car}
// or merge two objects
let newFinancedCar = {...car, ...financing}

car.engine.capacity = '2.5L'


var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.unshift.apply(arr1, arr2) // this line and the next
arr1 = [...arr2, ...arr1]; // do the same thing


// destructuring
var a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50]; // array
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}); // object
// or
var {a, b} = {a: 10, b: 20};


// use a default value, value for b would be undefined
[a=1,b=2] = [1];

// swaping values
var a = 1;
var b = 3;
[a, b] = [b, a];

// the following function returns an array
// ignore some return values
[a,,b] = f();
// or all return values
[,,] = f();

var metadata = {
    title: 'Scratchpad',
    translations: [
       {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
       },
	{
        locale: 'fr',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/fr/docs/Tools/Scratchpad',
        title: 'JavaScript-alentours'
       }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

var {title: englishTitle, translations: [{title: localeTitle}, {title: otherLocale}]} = metadata;

// destructuring can be used with for of loops
let allTranslations = [];
[allTranslations] = metadata.translations;

for ({locale:l, url:u} of allTranslations) {
  console.log('location: ' + 'l' + ' site: ' + u)
}


// if you have function params with defaults the whole thing can be
// assigned to {} so the function can be called without passing any params
// more examples of function params
var user = {
  'id': '123'
}

function getUserId({id}){
  return id;
}

console.log(getUserId(user))

// object literal and computed object properties
let key = 'z';
let {[key]: foo} = {z: 'bar'};
// or
let {['root' + 10]: foo} = {root10: 'bar'}

// call and apply
// apply takes a thisArg and an array like structure of arguments
// call takes a thisArg and a comma delimeted list of arguments
// the return is the result of calling the function

// warning if using apply with a built in function on a large array
// split the array up into sections
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null,
                                arr.slice(i, Math.min(i+QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);


function helloMy(){
  console.log(['hello, my ', this.title, '!'].join(''));
}

var gem = {
  'title': 'yellow diamond',
  'type': 'diamond',
  'rank': 1
}

helloMy.call(gem)

// an anonymous function that takes a gem object and a parameter
(function(msg){
  this.print = function(){
    console.log(msg + ' ' + gem.title);
  }

  this.print();
}).call(gem,  'it is time for dinner');


function Widget(id) {
  this.id = id;
}

function Robot(id, name) {
  Widget.call(this, id);
  this.name = name;
}

Robot.length // 2 - the number of params that the function takes

function Car(id, model) {
  Widget.call(this, id);
  this.model = model;
}

Robot.prototype.bootupMsg = function(msg = 'booting up...') {
  console.log('rebuilt');
  console.log(this.id + ' ', this.name);
  console.log(msg);
}

Robot.prototype.rebuild = function() {
  //var args = Array.prototype.slice.call(arguments);
  // var args = [...arguments]; // this is much nicer
  this.volume = 0;
  [this.id, this.name, this.volume] = [...arguments];
  let [, , , addMsg] = [...arguments];

  window.setTimeout(this.bootupMsg.bind(this, addMsg), 1000);
}

var robby = new Robot(123, 'Robby');
var honda = new Car(344, 'Civic');

var max = Robot.prototype.rebuild.bind(robby, 456, 'max', 7);
max();
max('fully operational');

// bind
var smallRobot = {
  id: 454,
  getId: function() {
    return this.id;
  }
}

var getSmallRobotsId = smallRobot.getId.bind(smallRobot); // binding it to the smallRobot context for this
getSmallRobotsId();

var askSmallRobotForId = smallRobot.getId;
askSmallRobotForId.call(smallRobot); // the context for this is smallRobot

// the bound arguments will preceide the functions arguments
// bind can be used in a context where this is the global window object
// to set the correct context for the object
smallRobot.prototype.shoutId = function() {
  window.setTimeout(this.getId.bind(this))
}

var r2 = new smallRobot();
r2.shoutId();


// objects
var android = {
  _theme:'everybody loves android',
  _name: '',
  _id: -1,
  get name () { return this._name; },
  set name (value) { this._name = value; },
  testBattery() { return '50%'; },
  powerPlant: {type:"cyberdine 2x"},
  *gId() {
    let index = 0;

    while (true) {
      yield index += 1;
    }
  }
}

// do a shallow copy of all enumerable own properties
let marvin = Object.create(android);
let rosie = {...android};

let obj3 = Object.assign({}, obj1, obj2);
let obj3 = {...obj1, ...obj2};

// marvin, rosie, eve, molly, llia, wall-e, kitt

// Deep Clone
 obj1 = { a: 0 , b: { c: 0}};
 let obj3 = JSON.parse(JSON.stringify(obj1));

// functions






// Object.Assign


// string literals
let person = 'Mike';
let age = 28;

var myTag = (strings, ...exps) => {

  const [str0, str1] = [...strings]; // "that ", // " is a "
  const [personExp, ageExp] = [...exps];
  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (9ª""), so disregard.
  // var str2 = strings[2];
  // and the values in brackets can be nested

  let ageStr = 'youngster';
  if (ageExp > 99) {
    ageStr = 'centenarian';
  }

  return str0 + personExp + str1 + ageStr;
}

var output = myTag`that ${ person } is a ${ age }`;

console.log(output);

// adding a function to a native string Object
String.prototype.strVals = function() {
	Object.keys(this).forEach(function(key){
		console.log(this[key]);
	}, this)
}

// this is an example of what Crockford calls parasitic inheritence.
function Robot(id) {
    return {
        type: 'robot',
        getId: function() {
            return id;
        }
    }
}

function Android(id, name) {
    var that = Robot(id);
    that.type = 'android';
    that.name = name;
    that.getName = function() {
        return name;
    }
    return that;
}

var roy = (function Replicant(name) {
  var parentsNames = {
    'mom':'rose quartz',
    'dad': 'greg'
  }, happinessLevel = 5;

  function change() {
    fakeMemories.model = 'nexus 6';
    fakeMemories.theInfo = nameOfDad;
    happinessLevel = 3;
  }

  function nameOfMom() {
    console.log('mother\'s name: ' + parentsNames['mom']);
    console.log('happiness level: ' + happinessLevel);
  }

  function nameOfDad() {
    console.log('father\'s name: ' + parentsNames['dad']);
  }

  var fakeMemories = {
    'model': 'human',
    theInfo: nameOfMom,
    change: change
  }

  return fakeMemories;
})(name);




console.log(roy.model);
roy.theInfo();
roy.change();
console.log(roy.model);
roy.theInfo();



var robby = Robot(122);
console.log(robby.getId());

var kryten = Android(772, 'Kryten');
console.log(kryten.getId());
console.log(kryten.getName());

var arr = [1,7,5,3,4,6];
var max = arr.reduce(function(a, b) {
	console.log(b);
    return Math.max(a, b);
});

// using string split and array join to replace a substring in a string
"it is a green world and a small world after all".split("world").join('planet')
// "it is a green planet and a small planet after all"
