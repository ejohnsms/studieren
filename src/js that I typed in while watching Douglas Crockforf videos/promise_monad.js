// promise monad
// excellent mechanism for handling asynchronicity
// a promise is an object that represent a possible future value
// every promise has a corresponding resolver that ultimately assigns a value to the promise
// a promise can have one of three states: 'kept', 'broken', or 'pending'
// a promise is an event generator - it fires it's event when the value of the promise is ultimately known
// at any time after the making of a promise, event handling functions can be registered with the promise,
// which will be called in the order with the promises value when it is known.

// a promise can accept functions that will be called with the value once the promise has been kept or broken.

//promise.when(success, failure) returns another promise for the result of your success function


// macroid
function MONAD() {
	var prototype = Object.create(null);
	function unit(value){
		var monad = Object.create(prototype);
		monad.bind = function(func,args){
			return func.apply(undefined,
				[value].concat(Array.prototype.slice.apply(args || [])));
		};
		return monad;
	};

	unit.lift = function(name, func){
		prototype[name] = function(args){
			return unit(this.bind(func, Array.prototype.slice.apply(args || [])));
		};
		return unit;
	};

	return unit;
}


// calling the monad
var ajax = MONAD().lift('log',console.log);
var monad = ajax("hello world");
monad.bind(console.log);
monad.log();