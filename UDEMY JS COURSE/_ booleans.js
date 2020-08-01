


//WILL RETURN TRUE
//====================

// All that have real values will return true
console.log(Boolean(100)); // return true
console.log(100 < 1001); // return true
console.log(Boolean(2+3+5)); // returns true 




//WILL RETURN FALSE
//====================

// All non real values ie anything without a value like 'x' or '0' or empty strings
var x = 0;
console.log(Boolean(x)); // 0 or x will return false

x = -0;
console.log(Boolean(x)); // minus integer return false

console.log(""); // emtpy string return false

var y;
console.log(Boolean(y)) // var with no value will return false

console.log(null); // null returns false

console.log(10 * "hello"); // number mulitplied by a string will return false


