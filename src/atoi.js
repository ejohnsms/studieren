// this is a Lawrence problem

const atoi = (str) => {
    if (typeof str !== 'string') {
      return false;
    }

    if (str.length === 0) {
      return false;
    }

    let nums = [];
    let charCode = null;

    str.split('').forEach((char) => {
        charCode = char.charCodeAt(0);

        if (charCode >= 48 && charCode <= 57) {
            nums.push(char);
        }
    });

    return parseInt(nums.join('')); // this could return NAN if Infinity
}

let number = atoi('12Z6');

console.log(number);
console.assert(typeof number === 'number', 'number is not type number');
console.assert(number === 126, 'problem parsing number');
