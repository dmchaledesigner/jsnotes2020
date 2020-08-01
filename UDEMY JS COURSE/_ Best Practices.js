
// Best Practices
//=================

// Global Vars
// executed outside functions only
var x  = 5;
function myFunction(){
	// do something
}




// Always declare local variables
// always declare variables at the top
var x  = 5;
function myFunction(){
	var x, y, age
	x = 15;
	// do something
}



// Initializing Variables
// instead of...
var name; age, list, house;
// do..

var name = '';
var age = 0;
var list = [];
var house = {};
var running = false;

// all we are doing here is declaring our vars to strings, numbers, arrays or an object, boolean etc for later use



