
// Notes on arrays: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// NOTE: Associative arrays using key => value pairs are in PHP, not in JS
// with JS with use an object where an asssociative array would suffice.





// basic array
var cars = ['Ferrari', 'BMW', 'Mercedes', 'Audi'];
conole.log(cars);

cars.push('Lambo');
console.log(cars); // ['Ferrari', 'BMW', 'Mercedes', 'Audi', 'Lambo'];


// or we can add to the array by index

cars[3] = 'McLaren';
console.log(car);




//addin to an empty array
var mixedArray = [];

mixedArray[0] = new Date('12/31/2016');
mixedArray[1] = function myFunction() { /* Do Something*/ };
mixedArray[2] = cars; // add an array to an array





// to test if an array is an array
console.log(Array.isArray(cars)); // The result will be true





// using the push() method = add to the end of an array
mixedArray.push('new-item');




// using the pop() method = removes the last item of the array
mixedArray.pop();




// using the shift() method - removes the first item of the array
mixedArray.shift();




// adds items to the start of an array
mixedArray.unshift('item 1', 'item 2');


var bucketList = ['trainspotting', 'skydiving', 'racing'];
var listItem = bucketList[2]; // call the 2nd item

var hello = "hello World!"; // assign a string to a var
bucketList[3] = hello; // add the var string to the array as the 3rd item


console.log(bucketList);
console.log(listItem);
console.log(bucketList);





//sorting
console.log(cars.sort());


// length
console.log(cars.length);



//looping through an array
for (var i = 0; i <= cars.length; i++) {
  console.log(cars[i]);
}






// basic loop with array (forward)
var vacationSpots = ['germany', 'italy', 'norway'];

for (var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}







// basic loop with array (reverse)
var vacationSpots = ['germany', 'italy', 'norway'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}





// array with a while loop

var days = ['Sunday' 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
counter = 0;

while (counter < days.length) {

  document.write('The current day of the week is ' + days[counter]);
  counter++;
}



// array methods - array to string
var fruits = ['banana', 'apple', 'orange', 'mango'];
var fruitString = fruits.toString();
console.log(fruitString); // result: banana, apple, orange, mango

// or we can use the join() method to add something between the array items
var fruitJoin = fruits.join(' | ');
console.log(fruitJoin); // result: banana | apple | orange | mango




// string to an array split();
var myString = "Ferrari, BMW, Mercedes, Audi";
var myArray = myString.split(", ");
console.log(myArray);







// Compare two arrays and print the items if they match
var myPlaces = ['Dublin', 'Berlin', 'Amsterdam', 'Bratislava']; // array 1

var friendPlaces = ['Dublin', 'Paris', 'Amsterdam', 'Budapest']; // array 2


for (var i = 0; i < myPlaces.length; i++) { // 1st loop through myPlaces


  for (var j = 0; j < friendPlaces.length; j++) { // 2nd loop friendPlaces inside myPlaces

    if (myPlaces[i] === friendPlaces[j]) // if either item match
      console.log(friendPlaces[j]);	// print them
  }

}







//Splice - Add items to the array by means of index position

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish.splice(2, 0, 'drum');
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown","mandarin", "sturgeon"]


var removed = myFish.splice(2); //Remove all elements after index 2 (incl.)
// myFish is ["angel", "clown"] 






// Sorting - sorts the array in alphabetical order

var fruits = ['banana', 'apple', 'orange', 'mango'];
console.log(fruits.sort()); // apple banana mango orange

//reverse sorting
console.log(fruits.reverse()); // orange mango banana apple


// numberic sorting - we have to use a function for this
var points = [30, 100, 50, 54, 70, 20];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);


// numberic sorting in reverse- simply change to b - a
var points = [30, 100, 50, 54, 70, 20];
points.sort(function (a, b) {
  return b - a;
});
console.log(points);



// an array with an object inside
var cars = [

  { name: 'volvo', year: 2015 },
  { name: 'bmw', year: 2012 },
  { name: 'merc', year: 2001 }

];


cars.sort(function (a, b) {
  return a.year - b.year;
});

console.log(cars);







// show current day using an array


var d = new Date(); // get the date function
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // create a new array

var n = weekday[d.getDay()]; // weekday array with the getDay function assigned to the new date function
document.getElementById("demo").innerHTML = n;








function myFunction() {

  var d = new Date();

  var hours = d.getHours();
  var today = d.getDay();




}

myFuntion();












// while loop in array exercice
// create a card flip game with an array of cards. while the currentcard isnt a spade...do something

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  // console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);
  currentCard = cards[randomNumber];
}

console.log('We found a spade!');


































