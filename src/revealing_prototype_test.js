var myNS = myNS || {};

var myNS.Calculator = function(eq) {
	
	this.eqCtl = document.getElementById(eq);
};

// we use new keyword
myNS.Calculator.prototype = function() {
	// when a function calls another function this changes context 
	// use functionB.call('this', value)
	var add = function(x,y) {
		var val = x + y;
		this.eqCtl.innerHTML = val;
	}

	return {
		add : add
	};

}(); //self envoing makes functions available after newing up object

// extending the prototype
Calculator.prototype.add = function(x,y) {
	var val = x + (2 * y);
	this.eqCtl.innerHTML = val;
}

// usage
var calculator = new myNS.Calculator('eq');
calculator.add(2,2);

