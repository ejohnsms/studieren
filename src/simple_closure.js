var arrOfFunc = [];

arrOfFunc[0] = "who is fred?";
arrOfFunc[1] = function() {console.log('i am fred');}

for (var i=0; i<arrOfFunc.length; i+=1){
	if (typeof arrOfFunc[i] === 'function'){
		arrOfFunc[i]();
	} else {
		console.log(arrOfFunc[i]);
	}
}

var add = function(num){
	var num1 = num;
	console.log(num1);

	var addToNum1 = function(num2) {
		console.log(num1 + num2);
		return num1 + num2;
	};

	return addToNum1;
};

var add5 = add(5);
add5(2);

console.log('now as single call');

add(3)(4);

var groceryList = function() {
	var list = [];

	return {
		addItem: function(grocery) {
						list.push(grocery);
				 },
		removeItem: function() {
						list.pop();
				},
		printList: function() {
						console.log(list.join());
				}
	}
};

var myList = groceryList();
myList.addItem('spinach');
myList.addItem('cookies');
myList.removeItem();
myList.printList();
