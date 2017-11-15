

//
// NEW QUESTION
//

// Fix the following code so that the counter increments
// appropriately while keeping the setTimeout and for
// loop intact.

// here are two solutions
// the es6 solution
const createTimeoutLoop = () => {

  // use let to ensure a unique instance
  for (let i = 0; i < 3 ; i++) {
    setTimeout(function() {
      console.log('The value is: ' + i);
    }, 500);
  }
}

createTimeoutLoop();

// and the closure solution
function createTimeoutLoop2() {
  var i = 0;

  for (i = 0; i < 3 ; i++) {
    (function(index) {
      setTimeout(function() {
        console.log('The value is: ' + index);
      }, 500);
    })(i);
  }
}

createTimeoutLoop2();

// call the function, which should print 0, 1, 2 to the console.
// createTimeoutLoop();

//
// NEW QUESTION
//

// Create a Person object with 2 methods, "setName" and "printName"
// that can be chained so that the code below can be run successfully.

// test out our new person obj
// return "this" for the setName and test it out
// do the same for printName
function Person(name) {
  this.name = name;
}

Person.prototype.setName = function(newName) {
  this.name = newName;

  return this;
}

Person.prototype.printName = function() {
  console.log(this.name);

  return this;
}

// Uncomment this code when you are ready:
var person = new Person("Jill");
person.printName().setName("Tom").printName();
// This should output "Jill" and then "Tom" in the console.

// we can do this using a class
class Robot {
  constructor(name) {
    this._name = name;
  }
  setName(newName) {
    this._name = newName;
    return this;
  }
  printName() {
    console.log(this._name);
    return this;
  }
}

var robot = new Robot("Jill");
robot.printName().setName("Tom").printName();

//
// NEW QUESTION
//

// Array with Odd Numbers
// Write a program that returns an array that contains all the odd numbers
// of the array argument.

const getOddNumbers = (numbers) => {
  let odds = numbers.filter((num) => {
    // apply the filter test
    return (num % 2 !== 0);
  });

  // return the result
  return odds;
}

// Example:
const oddNumbers = getOddNumbers([1,2,3,4,5,6,7]);
console.log(oddNumbers);
// should return [1,3,5,7];


// where is the "done" button - lol
