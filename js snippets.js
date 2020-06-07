// Opertators

// <= Less than or equal to
// >= Greater than or euqal to
// === Equal to
// !== Not Equal to
// ! Opposite of what the condition is
// && Contidition AND condition
// || Either condition
// % Remainder of when divided





// Random Number

// Math.floor();   Rounds a number off from a decimal
// Math.random();  Random number from 0 to 1

// Use Math.floor() and Math.random(); together to get a full random number ie

var randomNumber = Math.floor(Math.random() * 100); // Get a random number from and multiply by 100;



// random number function

function randomNumber(upper){
   return Math.floor(Math.random() * upper + 1;
}


// print random number

counter = 0;
while(counter < 10){
  var randomNum = randomNumber(6); // print a random number between 1 and 6. 6 being the upper (maximum number)
  document.write( randomNum + '<br />');
  counter ++;
}







// compare two random numbers  using the random number function
//computer v computer



var upper = 10000; // the max amount we set the number limit
var randomNumber = getRandomNumber(upper); // the  number the computer has to guess
var guess; // the computer guess
var attempts = 0; // the amount of attempts the computer makes



function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper + 1;
}


while( guess !== randomNumber ){ // while guess is NOT equal to the randomNumber var, then run the loop

  guess = getRandomNumber(upper); // have the computer guess a number - store a number to the var guess
  attempts ++;

}


document.write("<p>The random number was " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " times to guess the number</p>");








// add a class to a var with html as a string
// esacping the double quotes with backslash we do the same inside a string to avoid confliction
// ie var string = "It\'s that time of the day again";

var htmlSnippet = "<h1 class = \"special\">Important Headline</h1>";
document.write(htmlSnippet);









//if statement

var moonPhase = 'full';


if(moonPhase === 'full'){
	console.log('Howwwwlll!!');

}else if(moonPhase === 'mostly full'){
	 console.log('Arms and legs are getting hairier');

}else if(moonPhase === 'mostly new'){
	 console.log('Back on two feet');

}else{
	console.log('Invalid moon phase');
}







// switch statement - change the var to whatever condition is needed as per case


var moonPhase = 'full';


switch(moonPhase){
    
   case'full':
   console.log('Howwwwlll!!');
   break;
   case 'mostly full':
   console.log('Arms and legs are getting hairier');
   break;
   case 'mostly new':
   console.log('Back on two feet');
   break;
   default:
   console.log('Invalid moon phase');
   break;
}



// functions - putting the if statment inside the function


var calculatorOn = false; // change to true to have the power on


function pressPowerButton() {

  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }

}

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.







// using a function

// store a message ans
var userName = function userName(){

			var name = prompt("What is your name");
			
			if(name === "David")
					alert("Please choose another name");
					name = prompt("What is your name");

					return name;
					
			

};

var result = userName(); // put the function inside a var and use this to print using doc.write();
document.write(result);







// A select option box from an array

var mySelectBox = function mySelectBox(){

		var list = ['item1', 'item2', 'item3', 'item4'];
		var box = "";

		box += "<select id=\"mySelect\">";

		for (var i = 0; i < list.length; i++) {
		box += "<option>" + list[i] + "</option>";
		}

		box += "</select>";

};


function print(message){
 var storeMe = document.getElementById('container');
  storeMe.innerHTML = message;
}


// print the output
print(mySelectBox);




// Remove option from a select box


//HTML

<form>

<select id="mySelect" size="4">
  <option>Apple</option>
  <option>Pear</option>
  <option>Banana</option>
  <option>Orange</option>
</select>
</form>


// <button onclick="myFunction()">Remove last option</button>



function myFunction() {
    var x = document.getElementById("mySelect");
    if (x.length > 0) {
        x.remove(x.length-1);
    }
}







// Return a prompt message

// create the prompt
var stringToShout = prompt("What to shout?");
var shoutBack = stringToShout.toUpperCase();
shoutBack += " !!!";
alert(shoutBack);






//innerHTML Print function

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

print(message);
print(whatever);








