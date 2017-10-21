// create a function which takes a string as input and returns a bool indicating 
// true if the string is a palidrone, otherwise false

var isPal = function(phrase){
		if (typeof phrase !== 'string'){
				return false;
		}

		phrase = phrase.toLowerCase();
		console.log(phrase);

		if (phrase.length < 2) {
				return true;
		}

		var i = 0,
			j = 0,
			numChar = phrase.length - 1;

		for (i=0; i < numChar; i+=1){
			console.log(phrase.charAt(i));
			console.log(phrase.charAt(numChar - i));
			if (phrase.charAt(i) !== phrase.charAt(numChar - i)){
				return false;
			}
		}

		return true;
};


var p1 = isPal("tassle");
console.log(p1);

var p3 = isPal("madam");
console.log(p3);

var p2 = isPal("A car, a man, a maraca");
console.log(p2);
