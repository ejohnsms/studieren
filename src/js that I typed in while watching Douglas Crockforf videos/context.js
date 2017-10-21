function foo(){
	console.log(this);  // window
}

var bee = {
	buzz : function(){
		console.log(this);
	}
}

var fish = {
	swim : function(){
		console.log(this);
		var output = this.walk();
		console.log()
	},
	walk : function(){
		return "mudder";
	}
}

console.log(this); // window

foo();

bee.buzz(); // dot notation sets context



var cat = {
	meow : function(volume){
		console.log(this);
		console.log(volume);
	}
}

var dog = {
	bark : function(){
		console.log(this);
	},
	collar : "red";
}

function hiss(){

}

cat.meow.call(this);
cat.meow.call(dog);
cat.meow.call(hiss());
cat.meow.call(cat, "loud");
cat.meow.apply(cat, ["loud"]);


//invocation of callback sets the context

//stored context


var dog = {
	bark : function(callback){
		callback();
	}
}

var coyote = {
	howl : function(){
		var that = this;
		dog.bark(function(){
			console.log(this);
			console.log(that);
			console.log(that.yelp);
		});
	},
	yelp : "yip yip"
}

coyote.howl();


// bound context
// see Crockford
// see underscore.js
function bind(func,context){
	return function(){
		var args = Array.prototype.slice.call(arguments);
		return func.apply(context, args);
	}
}

var wolf = {
	howl : function(){
		console.log(this);
		console.log(this.yelp);
	},
	yelp : "woooooooo"
}

var boundFunc = bind(wolf.howl, wolf);
//dog.bark(wolf.howl); does not work because context is set to the window and does not know about howl
dog.bark(boundFunc);


// look at jquery extend and underscore extend



