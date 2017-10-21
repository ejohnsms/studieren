// identity monad
// macroid
function MONAD() {
	return function unit(value){
		var monad = Object.create(null);
		monad.bind = function(func){
			return func(value);
		};
		return monad;
	};
}

// calling the monad
var unit = MONAD();
var monad = unit("hello world");
monad.bind(console.log);
