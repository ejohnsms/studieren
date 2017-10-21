// ajax monad
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


