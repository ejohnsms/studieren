function assert(condition, message) {
  result = condition == true ? 'succeeded' : 'failed';
  console.log(`test ${result}: ${message}`);
}


let myNumbers = [1,2,3];
assert(myNumbers.length === 3, "array should have a length of 3");
