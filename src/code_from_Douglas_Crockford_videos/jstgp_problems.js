function funky(o){
	o = null;
}

var x = [];
funky(x);
console.log(x);
//////////////////////////////


// function statement
function identity(x){
	return x; 
}

// function expression
var identity = function identity(x){
	return x; 
}

function add(x,y) {
	return (x + y);
}

function mul(x,y) {
	return (x * y);
}

function identity(x){
	return function(){
		return x;
	}; 
}

function addf(x) {
	return function(y){
		return x + y;
	};
}



function applyf(binary){
	return function(x){
		return function(y) {
			return binary(x,y);
		};
	};
}

// applyf(addf)(5)(6) 

//currying
//schonfinkelisation
function curry(func, first){
	return function(second){
		return func(first,second);
	};
}


//without writing any new functions, show three ways to create the inc function.
// inc(5) // 6
//inc(inc(5)) // 7

inc = addf(1);
console.log(inc);

inc = applyf(add)(1);
console.log(inc);

inc = curry(add, 1);
console.log(inc);


// write methodize, a function that converts a binary function to a method
// Number.prototype.add = methodize(add);
// (3).add(4) // 7
function methodize(func){
	return function(y){
		return func(this,y);
	};
}

// write demethodize, a function that converts a method to a binary function
// demethodize(Number.prototype.add)(5)(6); // 11
function demethodize(func){
	return function(that, y){
		return func.call(that,y);
	};
}

// write a function twice that takes a binary function and returns a unary function 
// that passes its argument to the binary function twice
// var double = twice(add);
// double(11) // 22
function twice(binary){
	return function(x){
		return binary(x,x);
	};
}

// write a function composeu that takes two unary functions and returns
// a unary function that calls them both.
// composeu(double,square)(3)  //36
function composeu(f, g){
	return function(x){
		return g(f(x));
	};
}

// write a function composeb that takes two binary functions and returns
// a function that calls them both.
// composeb(add,mul)(2, 3, 5)  // 25
function composeb(f, g){
	return function(x, y, z){
		return g(f(x,y), z);
	};
}

// write a function that allows another function to be called only once
// add_once = once(add);
// add_once(3,4) // 7
// add_once(3,4) // throw!
function once(func){
	return function() {
		var f = func;
		func = null;
		return f.apply(this, arguments);
	};
}

function thrice(func){
	loopCount = 3;
	return function() {
		var f = func;
		if (loopCount < 1){
			func = null;
		} else {
		  loopCount -= 1;
		  return f.apply(this, arguments);
        }
	};
}


// write a factory function that returns two functions that
// implement an up down counter
function counterf(x){
	return {
		inc: function() {
			x += 1;
			return x;
		},
		dec: function() {
			x -= 1;
			return x;
		}
	};
}


// make a revocable function that takes a nice function, and returns a
// revoke function that denies access to the nice function, and a invoke
// function that can invoke the nice function until it is revoked
//  use with set timeout
function revocable(func){
	return {
		invoke: function(){
			return func.apply(this, arguments);
		},
		revoke: function(){
			func = null;
		}
	};
}

