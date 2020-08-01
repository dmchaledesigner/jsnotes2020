//while loop

// while the condition is true, echo the code block and increment

var i = 0;
while (i < 10) { 
    document.getElementById("demo").innerHTML += i + "<br>";
    i++;
}






// write 10 random numbers to a page


function randomNumber(upper){
	return Math.floor(Math.random() * upper) + 1;
}

counter = 0; // counter variable

while(counter < 10){

	var randomNum = randomNumber(6); //this is the fuction assigne to the variable
	document.write(randomNum + " ");
	counter ++; //incrementor
}








// How to use different test conditions to run and exit a loop. How to avoid endless loops.
// We'll first make the computer come up with a random number from 1 to 10,000.
// Then, we'll see how many times it takes the computer to randomly guess that number.


var upper = 1000; // change the variable instead of changing the function parameter
var randomNumber = randomNumber(upper);
var guess;
var attempts = 0; //


function getRandomNumber(upper){
	return Math.floor(Math.random() * upper) + 1; // +1 for index value from zero.
}

while (guess !== randomNumber) {

		guess = getRandomNumber(upper);
		attempts += 1;
}


document.write("<p>The randomn number was " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " to get it right</p>");









// do while loop - remember

do{
		guess = parseInt( prompt('I am thinking of a number between 1 and 10. What is it?') ); // answer from string to integer and to a var.
		guess += 1; //increment the guess count by one everytime the user makes a guess.

			if(guess === randomNumber){
				correctGuess = true; // if the user guesses the correct number, break out of the loop.
			}


}while( ! correctGuess ) // Turns a boolean value to its opposite, So we are saying even though the correctGuess var is declared as false, make it true. As long as the condition is true, loop again.

// write an answer when the right number is guessed
document.write('<h2>You guess the right number</h2>');
document.write('<h2>it took you " + guessCount + " tries to guess the number</h2>');






