// simple sort 
//  insertion sort
//  selection sort

// insertion sort
var testData = [5,1,8,2,9,3,7,4,6];

function printData(data){
	console.log(data);
}

function insertionSort(data){
		for (var i = 1; i < data.length; i++){
		var x = data[i];
	    var j = i;
		while (j > 0 && data[j-1] > x) {
			data[j] = data[j-1]
			j = j - 1;
		}
		 data[j] = x;
	}
	return data;
}

printData(insertionSort(testData));
