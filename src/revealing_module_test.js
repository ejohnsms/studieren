var myNS = myNS || {};

//lower case becauese we don't use new keyword
var myNS.calculator = function(eq) {
	//private member
	var eqCtl = document.getElementById(eq),
		// use init and pass output div
		add = function(x,y) {
			var val = x + y;
			eqCtl.innerHTML = val;
		};


	return {
		// expose public member
		add: add
	}:
}('eqCtl');  // this is the id of the actual output div. this should be passed in during init

// each obj creates new copies of functions in memory
// using the module pattern
calculator.add(2,2);