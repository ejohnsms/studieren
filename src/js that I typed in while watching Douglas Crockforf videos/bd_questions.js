

var first = [ "a", "b", "c" ];
var second = [ "d", "e", "f" ];
var third = $.merge( $.merge( [], first ), second );

var count = {};
$.each(third, function(){
    var num = this[0]; // Get number
    count[" + num + "]+=1 || 1; // Increment counter for each value
});

function bump_count(word) {
    if (typeof word_count[word] ===
            'number') {
        word_count[word] += 1;
    } else {
        word_count[word] = 1;
} }


console.log(first);
console.log(second);
console.log(third);
console.log(count);



// Take two pointers *p1 and *p2 pointing to the head of linked list
// Start a loop and increment *p2, 2 times (with null checks)
// If *p2 is not null then increment *p1 1 time
// When *p2 reaches null; you have got the *p1 at the center
// [Note: You can use iterators instead of pointer if you deal with container type linked list]