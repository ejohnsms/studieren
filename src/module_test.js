var myNS = myNS || {};

var myNS.Calculator = function(eq) {
	//private member
	var eqCtl = document.getElementById(eq);

	return {
		// expose public member
		add: function(x,y) {
			var val = x + y;
			eqCtl.innerHTML = val;
		} 
	};
};

// each obj creates new copies of functions in memory
// using the module pattern
var calculator = new myNS.Calculator('eq');
calculator.add(2,2);