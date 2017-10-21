var myNS = myNS || {};

var myNS.Calculator = function(eq) {
	
	this.eqCtl = document.getElementById(eq);
};

Calculator.prototype = {
	// 
	add: function(x,y) {
		var val = x + y;
		this.eqCtl.innerHTML = val;
	} 
}

// extending the prototype
Calculator.prototype.add = function(x,y) {
	var val = x + (2 * y);
	this.eqCtl.innerHTML = val;
}

// usage
var calculator = new myNS.Calculator('eq');
calculator.add(2,2);

