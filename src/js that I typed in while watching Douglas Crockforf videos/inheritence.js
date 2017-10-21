function doSomething(){
	console.log("doing something");

	if (!doSomething.callCount) {
		doSomething.callCount = 0;
	}
	doSomething.callCount+=1;
	console.log("call count" + doSomething.callCount);
};

var tob = {};
tob.name = "test object";
tob.doThat = doSomething;

tob.doThat();


var key = "name";
var objectName = tob[key];
var funky = tob["doThat"];

console.log(name);
console.log(funky());

if (!Object.create || !typeof Object.create === "function"){

}


var animal = {
	speak: function(){
		console.log(this.species);
	}
}

var mamal = Object.create(animal);
mamal.species = "i am a mamal";

var cat = Object.create(mamal);
cat.species = "i am a cat";

animal.speak();
mamal.speak();
cat.speak();

var bug = function(phylum){
	this.phylum = phylum;
	this.speak = function(msg){
		console.log(this.phylum + "says " + msg);
	}
}

bug.prototype.crawl = function() {
	console.log("six legs");
}

var beetle = new bug("beetle");
beetle.crawl();
beetle.speak("meep meep ");



var fish = {
	swim: function() {
		console.log("four fins");
	}
}

// pass in dependencies
// export global
var ZooModule = (function(global){
	var keeperCount = 0,
		keepers = function() {
			var fieldCount = 0,
				deskCount = 0;

			this.fieldAgents = function(){
				keeperCount += 1;
				fieldCount += 1;
				return "keepers " + keeperCount + ". In the field " + fieldCount + " at this location.";
			};
			
			this.deskJockies = function(){
				keeperCount += 1;
				deskCount += 5;
				return "keepers " + keeperCount + ". At their desks " + deskCount + " at this location.";
			};
		};

	return keepers;
})(this);

var ob1 = new ZooModule();
var ob2 = new ZooModule();

console.log(ob1.fieldAgents());
console.log(ob1.deskJockies());
console.log(ob2.fieldAgents());
console.log(ob2.deskJockies());


