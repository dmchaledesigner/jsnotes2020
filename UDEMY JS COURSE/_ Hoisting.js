// Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top


//eg1
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;                     // Display x in the element

// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.




//eg2

var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y


//This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
//Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.



//To avoid bugs, always declare all variables at the beginning of every scope!
//Since this is how JavaScript interprets the code, it is always a good rule.