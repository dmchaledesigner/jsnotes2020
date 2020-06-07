// Check MDN - Mozilla Developer Network for all docs on Javascript references


// Loops arrays and Objects


//while loop basic
var name = 'dave';

	while(name === 'dave'){
	alert('welcome dave');
	}


// Function with a random number with a while loop printing out 10 variations of random number
function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}


counter = 0; // var with a counter starting at 0
while(counter < 10){ // condition
    var randNum = randomNumber(6); // function inside a variable
  	document.write(randNum + " "); // write to the document
    counter += 1; // counter incrementor
}




// Ask for a password

var ask = prompt('What is the password?');

count = 0;

while(ask !== 'sesame'){
	ask += prompt('incorrect! Try again!');

		if( count === 3 ){
			ask += "sorry you have no more attempts";
		}


	count ++;
}

document.write("The password you entered is correct");










// Guess a random number no more than 10,000 and see if the computer can guess the same number. Print the attempts and what the number was.

// Function with a random number with a while loop printing out 10 variations of random number


var upper = 10000; // max number
var randomNumber = getRandomNumber(upper); // assign the below function to a variable
var guess; // the number the computer guesses.
var attempts = 0; // amount of times it takes the computer to guess the random number


// The random number function
function getRandomNumber(upper){
	return Math.floor(Math.random() * 6) + 1;
}


while( guess !== randomNumber){ // while guess is NOT equal to the randomNumber, run the block

	guess  = getRandomNumber(upper);
	attempts += 1;

}

document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right <p>");








// FOR Loops

// Print 10 divs to a page from within a for loop

var html = "";

for(var i = 0; i <= 10; i++){
  html += "<div>" + i + "</div>"; // dont forget to add the += operand to allow the loop to add to the html variable
}

document.write(html);






// Print 10 random coloured circles on a page that change color
// =========================================================


var html = '';
var red;
var green;
var blue;
var rgbColor;

for(var i = 1; i <= 10; i++){

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

} // end loop


document.write(html);



//.. Now lets refactor the code or remove the elements that are repeated
// we could use the Math.floor() block into a function, then assign that function to the color vars.
// Here is the result



var html = '';
//var red;
//var green;
//var blue;
var rgbColor;

// 1. create a function to remove the repeating block asigned to the red, green and blue variables
function RandomRgbNumber(){
	return Math.floor(Math.random() * 256 );
}

// in the loop we shoud get this... red = RandomRgbNumber();
// but wait, we can create another function that creates the RGB combination too

function rbgCombination(){ 
	var combo = 'rgb(';// open rgb - rgb(value, value, value) 
	combo += RandomRgbNumber() + ","; // value and include red
	combo += RandomRgbNumber() + ","; // green
	combo += RandomRgbNumber() + ","; // blue
	combo += ')'; // close rgb() parenthesis
}


// now we can remove the red, green and blue variables

for(var i = 1; i <= 10; i++){
	// now in our loop with have one function assigned to our var rgbColor that we can output
	rgbColor = rbgCombination();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}


document.write(html);




// ARRAYS
// ============


var numbers = [1, 3, 5, 6, 7, 8];

// Add items to the array
numbers.push(9); // push method - add to the END of the array
numbers.push(5, 7,8 );

numbers.unshift(-3, -5, -6); // unshift method - add to the START of an array



// Remove items from the array
// NOTE" Not only can we remove items from the begninng and end, but we can store these returned values inside a variable
var numbers = [1, 3, 5, 6, 7, 8];

var firstItem = numbers.shift(); // .shift() removes the first item and stores it inside the var firstItem
var lastItem = numbers.pop(); // .pop() removes the last items and stores it inside the var lastItem


printList(numbers); // prints the numbers on the page as <li>'s from an array
// console.log(numbers[]);



// .join() Method - Separates items in an array into a string using any character like a ','

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruitsString = fruits.join(', ');
document.write(daysString);


 





// ARRAY WITH FORLOOP
//======================
var students = ['alan', 'john', 'paul', 'dave'];

names = ""; // declare an emtpy variable to hold the ul run.


names += "<ul>"; 

for (var i = 0; i < students.length; i++) {
		names += "<li>" + students[i] + "</li>";
}

names += "</ul>"; // 

console.log(names);








// BUILD A QUIZ CHALLENGE 2-DIMENSIONAL ARRAY (AN ARRAY WITHIN AN ARRAY)
//=======================================================================


// build the 2-D array to hold the question AND the answer.

var questions = [
	
				['how many state are there in the US?', 50],
				['how many continents are there in the world?', 7],
				['how many legs does an insect have?', 6]
				
				];


// decalre our vars ALWAYS at the beginning of our programmes

var correctQuestions = 0; //counter for the amount of correct questions answerwed
var question; // to hold the questions
var answer; // to hold the answers
var response; // holds the inut from the user
var html; 



// loop through the array and ask a questions
for(var i = 0; i < questions.length; i++){

		question = questions[i][0];     // stores the question from the 2D array into the var questions
		answer = questions[i][1];       // stores the answer from the array [1] which is the 2nd item inside the outer array [i]
		response = parseInt( prompt(question) );   // stores the answer from the user via a prompt message and converts the string to a number using parseInt
}




















// Object with a function
//=======================

//object


var person ={

		first_name: "Andrew",
		role: "Teacher"

}


 // function
 function personDescription(person){

 		var description = person.first_name;
 		if(person.role){
 			description += " is a " + person.role;
 		}
 		console.log(description);

 } // end function


 // call the function
 var thisPerson = personDescription(person);
 console.log(thisPerson);











