if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
newObject = Object.create(oldObject);



someFunc = function() {
	console.log("a function was called");
}

var obj = {};

var keyname = "this is cr8zy"
obj[keyname] = "you can't do that!";
obj.doSomething = someFunc; // function pointer

var name = obj[keyname];
console.log(name);

function 	MyObject(){}
function AnotherObj(){}

myObj = new MyObject();
isMyObj= myObj instanceof MyObject;


//style
//thinking fast slow

//method form
thisObject.methodName(arguments)
thisObject[methodName](arguments)

//function form
functionObject(arguments) //bound to gloabl object

//constructor form
new functionObject(arguments)

//apply form
functionObject.apply(thisObject, arguments)
functionObject.call(thisObject, arguments...)


var digit_name = (function(){
	var names = ["bob","lob","rob"];

	return function(n) {
		return names[n];
	};
}());


//powerful way of creating objects
function myPowerConstructor(x){
	var that = otherMaker(x);
	var sercret = f(x);
	that.priv = function() {
		//secret x that ...
	};
	return that;
}

// secret is a parameter
// secret = secret || {};

var i,
function make_handler(div_id){
	return function(){
		alert(div_id);
	}
};

for (i...) {
	div_id = divs[i].id;
	divs[i].onclick = make_handler(div_id);
}

