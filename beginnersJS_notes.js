// story .js page
// =================

// add a random word into the story sentence below...

//  There was once a [adjective] programmer who wanted to use javascript to [verb] the [noun]

var adjective = prompt("Tell me an adjective");
var sentence = "There was once a " + adjective;
var noun = prompt("Tell me a noun");
sentence += " programmer who wanted to use javascript to " + noun;
var verb = prompt("Tell me a verb");
sentence += " the " + noun

document.write(sentence);





// Seconds Alive
// ==============

var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPeryear = 52;
var monthsPerYear = 12;

var age = 39;

var secondsAlive =  secondsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPeryear * monthsPerYear * age;

document.write(secondsAlive);





//Check if a field has an empty value and return an alert box ..within a function
//=============================================================================


function isMailEmpty(){

	// get the field inside a var
	var field  = getElementById('email');

	// test is the field is empty or not
	if(field.value === ''){
		return true;

	}else{
		return false;
	}

} // END  FUNCTION


var fieldTest = isMailEmpty(); // assign the function to a variable
if(fieldTest === true){ // if the field is empty...
	alert('Please provide your email address'); // alert the user
	}






// function to call a random number
//=================================

// remember: 0 based index starts at 0 so we need to add 1!

function getRandomNumber(upper){ // use the upper param as a number when calling the function

	var randomNumber = Math.floor(Math.random() * upper ) + 1; // we use +1 to start from 1 and not 0 (index)!
	//Math.random returns a decimal between 0 and 1. Math.floor returns a whole number so we place .random inside .floor for a random whole number
	return randomNumber; // return the var to the function
}

getRandomNumber(7); // call the function





// call a random number with 2 params & TEST that both arguments are numbers, not strings
//=========================================================================================
function getRandomNumber(upper, lower){

	// create the conditional statement to make sure both upper and lower are numbers using isNan();
	if (isNan(upper) || isNan(lower) ){ // if upper or lower is not a number...
		throw new error("Both arguments must be numbers"); // ... throw the error
	}

	// create the formula for random numbers
	var randomNumber = Math.floor(Math.random(upper - lower)) + lower;
	return randomNumber;
}


console.log( getRandomNumber(5, 7) );
console.log( getRandomNumber('nine', 'twelve') );






// function with 3 params
//=================================

function getArea(width, length, unit){

	var area = width * length;
	return area + " " + unit;

}


console.log( getArea(10, 20, 'sq ft') );




//Tutorial - alert a user and ask for two number. Print those numbers and do some maths which are also printed to the webpage
//============================================================================================================================

// create the alert
alert("Let's do some math!");

// first number prompt and use parseInt / parseFloat to convert to a number
var firstQuestion = prompt("Enter a number!");
     firstQuestion = parseFloat(firstQuestion);

// first number prompt and use parseInt / parseFloat to convert to a number
var secondQuestion = prompt("Enter a second number!");
    secondQuestion = parseFloat(secondQuestion);


var message = "<h1>Math  with the numbers " + firstQuestion + " and " + secondQuestion + "</h1>";
    
    message += firstQuestion + " + "  + secondQuestion  + " = " + (firstQuestion + secondQuestion);

    message += "<br>";

    message += firstQuestion + " - "  + secondQuestion  + " = " + (firstQuestion - secondQuestion);

    message += "<br>";

    message += firstQuestion + " * "  + secondQuestion  + " = " + (firstQuestion * secondQuestion);

    message += "<br>";

    message += firstQuestion + " / "  + secondQuestion  + " = " + (firstQuestion / secondQuestion);

// 8. Add a linebreak tag -- <br> -- to the message variable

// 9. Continue to add to the message variable to include strings
//    demonstrating multiplication, division and subtraction
//    For example:
//    "3 * 4 = 12"
//    "3 / 4 = 0.75"
//    "3 - 4 = -1"

// 10. Use the document.write() method to print the message variable 
//     to the web page. Open the finished.png file in this workspace
//     to see what the completed output should look like


      document.write(message);









// following on from the above tutorial
//===================
// if an inout is 0 or a string is used as a value alert the user, else{ run the message}




// declare program variables
var num1;
var num2;
var message;

// announce the program
alert("Let's do some math!");



// collect numeric input
num1 = prompt("Please type a number");
num1 += parseFloat(num1);
num2 = prompt("Please type another number");
num2 += parseFloat(num2);


// conditional statement
if(num2 === 0){
 alert("The second number is 0. You can't divide by zero. Reload and try again.");
}else if(isNaN(num1) || isNaN(num2)){
   alert("At least one of the values you typed is not a number. Reload and try again.");
}else{

// build an HTML message
message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
  
// write message to web page
document.write(message);



} // end conditional








