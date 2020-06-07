// COMPARING ARRYS - MATCHING ITEMS
//=================================


// compare places you want to visit with a friends places

// Write the first array
var myPlaces = ['Dublin', 'london', 'paris', 'new york'];

// Write the second array
var friendPlaces =  ['Dublin', 'sydney', 'paris', 'barcelona'];




// Run the first array through a for loop to print the objects
for(var i = 0; i < myPlaces.length; i++){
	// print the array to test it works
	// console.log(myPlaces[i]);




	// inner array (friendsPlaces)
	for(var j = 0; j < friendPlaces.length; j++){


		// NOW TO COMPARE THE TWO WE USE....THE COMPARISON OPERATOR OF COURSE!
		if(myPlaces[i] === friendPlaces[j]){

			console.log('Match: ' + myPlaces[i])

		} // end if statement





	}// end of seccond inner loop


} // end of first outer loop








// CONVERTING ARRAYS TO STRINGS Pt 1 - toString();
//=============================

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());  //use the  to.String() as a method.
// Result : Banana,Orange,Apple,Mango




// CONVERTING ARRAYS TO STRINGS Pt 2 - .join();
// Notice with the toString() we get no space between each item
// WE can use join() to add a character or use the function to add blank space to separate each item

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(", "));  //use the to.String() as a method.
// Result : Banana, Orange, Apple, Mango






// CONVERTING STRING TO ARRAY
//=============================

var fruitsString = "Apple, Banana, Kiwi, Orange, Pears";
var fruitsArray = fruitsString.split(', ');
console. log(fruitsArray);






// FOR LOOPS - BACKWARDS
//=======================

myArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

for(var i >= 10; var i = myArray.length - 1;  i--){
	console.log(myArray[i]);
}






// FOR LOOPS - FOREWARD and INSIDE A UL LIST ITEM
//===================================================


myArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
var text = "";


	text += "<ul>"; //open the UL element

	//Run the loop with the List Items
	for(var i = 0; i <= myArray.length; i++){

		text += "<li>" + myArray[i] + "</li>";

	}

	text += "</ul>"; // close the UL element







// FLIP A CARD PROGRAMME
//=======================

// Create the cards array
var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

// Create a var of Current card and assign a item from the array
var currentCard = 'Heart';

// while loop with a condition 'if card is not...'
while(currentCard !== 'Spade'){

		// print the current card
		console.log(currentCard);


		// Now create a random number to flip through the cards. Math.floor() will round off a number from a decimal. Math.random() will create a random number
		var randomNumber = Math.floor(Math.random() * 4);

		// assign the cards array with the parameter randomNumber to the currentCard variable
		currentCard = cards[randomNumber];

}

// outside the while loop where all out calculation is done, we print a message to the console when the Spade is found
// Run the code a few times until a 'Spade' is found
console.log('We found a Spade');




























