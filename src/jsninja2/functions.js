// adding property to a function

var store = {
  nextId: 1,
  cach: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = this.nextId += 1;
      this.cache[fn.id] = fn;
      return true;
    }
  }
}

function ninja() {};

store.add(ninja);


// memoization

function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }

  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
  }
  var prime = value !== 1;
  for (var i=2; i < value; i += 1) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;
}

function sum(...nums) {
	let sum = 0;
	nums.forEach((num) => sum += num));
	return sum;
}

// using strict mode turns off parameter aliasing using
// the functions arguments property

// function context and this
