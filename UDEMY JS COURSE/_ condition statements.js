

// conditional statements
//========================

 // Logical AND &&
 // checks BOTH conditions to be true

 	if( 5 < 6 && 4 < 5 ){
 		//do something
 	}


 // Logical OR ||
 // checks either OR condition to be true

 	if( 5 > 4 || 10 > 5){
 		//do something
 	}

 // Logical NOT !

 	if( !(5 !== 5)){ // ! reverses the condition, so if 5 isnt equal to 5 ( which it is), is false - reverse that and its true
 		// so something
 	}

 
/*

if(){
 code block	
} else if{
	code block
}else{
	code block	
}

ie

*/

var hours = 16;

if(hours < 10){
console.log('Good morning');
	}else if(hours < 15){
		console.log('Good afternoon');
		}else if(hours < 18){
			console.log('Good Evening');
			}else{
				console.log('Good Night');
			}




/* The HTML 

<p id="demo">Display the result here.</p>

*/


var timeOfDay = new Date(); // js date function
var hours = timeOfDay.getHours(); // gets the hours and adds to the timeOfDay var
var mins = timeOfDay.getMinutes(); // gets the mins and adds to the timeOfDay var
var greeting ='';

if(timeOfDay < 10){
	greeting = "Good morning, the correct time is " + hours + " " + mins;
}else if(timeOfDay < 18){
	greeting = "Good evening, the correct time is " + hours + " " + mins;
}else{
	greeting = "Good night, the correct time is " + hours + " " + mins;
}








// Switch Statement
//=================



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






//eg Enter a name into an input field and output a message into a div

/*
	1. Create the input Field to enter the message
	2. Create the button
	3. Create the div to hold the message when the button is clicked

*/

<input type="text" value="Choose a Manufacturer" id="inputField">
<button onclick="carCheck()">Check Car</button>
<p id="valueHolder"></p>


{/*
	Now lets break down the js

	1. Create a function to hold the switch statement

	2. get the value of the input field

	2. create a switch statement which will...
			execute a message into the <p> tag depending on what car is checked in the input field
	

	3.inside the switch we need to say, when this car is chosen, to this multiple times

	4 then assign the function to the button

	*/


	function carCheck(){

		var favCarValue = document.getElementById('inputField').value; // get the value of the input field
		var text = ''; // declare a var with a string value to show what message to display

		// var holder = document.getElementById('valueHolder'); // get the holder of the <p> 
		

		switch(favCarValue){

				case "BMW": // remember to use colon on the case return
					text = 'This manufacturer is german';
					break;

				case "FIAT": // remember to use colon on the case return
					text = 'This manufacturer is italian';
					break;

				case "Ford": // remember to use colon on the case return
					text = 'This manufacturer is american';
					break;

				default:
				text = "unknown manufacturer";

		}

		// output the text string to the valueHolder 
		holder('valueHolder').innerHTML = text;

	}





/// TIME

var timeOfDay = new Date(2017, 9, 12, 19);
// Above: The date() arguments are a way to control & test your application.
// The last number is the hour.
// If you add more arguments, they will be minutes & seconds.
// Use no arguments to get the actual time (based on your computer's clock).
// You need more code to make 0 be 00, or 1, to be 01, and so on.
// You need more code to make an AM/PM clock.
    // Or else, use toLocaleTimeString(). See below the =========== (below).
var hours = timeOfDay.getHours();
var mins = timeOfDay.getMinutes();
var greeting ='';
if(hours >= 0 && hours < 12){
    greeting = "Good morning, the correct time is " + hours + ": " + mins;
} else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon, the correct time is " + hours + ": " + mins;
} else if (hours >= 18 && hours < 21) {
    greeting = "Good evening, the correct time is " + hours + ": " + mins;
} else {
    greeting = "Good night, the correct time is " + hours + ": " + mins;
}
document.getElementById("demo").innerHTML = greeting + "<hr>";
//=============================================================================== 
var clockAutoFormat = new Date(2017, 9, 12, 13, 9, 55);// remove the arguments to get the time.
document.getElementById("demo").innerHTML += "Using toLocaleTimeString()<br>"
    + clockAutoFormat.toLocaleTimeString();
// Note: toLocaleTimeString() formats the date (object) into am AM/PM clock.










