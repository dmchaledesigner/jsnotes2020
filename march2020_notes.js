

/*Outputting JS
===============*/


/* Writing into an HTML element, using innerHTML */  document.getElementById("demo").innerHTML = 5 + 6;
/* Writing into the HTML output using */ document.write(5 + 6);
/* Writing into an alert box, using */ window.alert(5 + 6);
/* Writing into the browser console, using */ console.log(5 + 6);








/* String Methods
===============*/

// The length property returns the length of a string:

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let number = text.length;

console.log(number);





// Both indexOf(), and lastIndexOf() return position of first and last numberic position of the string
var str = 'Please locate the are of the building on the left';
var startPosition = indexOf('locate');
var lastPosition = lastIndexOf('locate');





// The search() method returns the position of the first occurrence of a specified text in a string
var str = 'Please locate the are of the building on the left';
var position = str.search('locate');




// slicing
var str = 'Apple, Banana, Kiwi';
var res = str.slice(-12, -6); //banana - this is because minus counts from the end of the string with an end point and a starting point
var pos = str.slice(7) // banana, kiwi - this is because positive numbers start from the beginning of the string
var point = substring(7,13) //banana, same as slice but cannot insert negative numbers. provide start and end point




// replace()
var str = 'Please visit google';
var x = str.replace('google', 'yahoo'); // please visit yahoo




// upper and lowercase
 var n = 'Hello World';
 var x = n.toUpperCase() // HELLO WORLD
 var d = n.toLowerCase() // hello world


// split()
// If you want to work with a string spacing
var text = 'a,b,c,d';
text.split(' '); // a b c d split with space
text.split("|"); // a|b|c|d split on pipe



// Array.from() = Converting a string to an array
var text = 'a,b,c,d';
var myArray = Array.from(text);
console.log(myArray) //  ["a", ",", "b", ",", "c", ",", "d"]



// removing blank space
var str = '                     the secret to life is 42           ';
str.trim(' ');
console.log(str); 'the secret to life is 42'
















/*Number Methods
===============*/


// value of - returns a number as a number.
var x = 123
x.ValueOf(); // returns 123
(100+23).ValueOf(); // returns 123




// Convert variables into numbers
Number() //Returns a number, converted from its argument.
var x = "1234";
var y = Number(x);
console.log(y);

parseFloat() //Parses a string and returns a floating point (decimal) number
//eg
let value = 9.990000;
let newValue = parseFloat(value).toFixed(2)
// result 9.99 which is a string, to convert it to a number then e do this...
let lastValue = Number(newValue);
console.log(lastValue); // now we have a number
// check by console.log(typeof lastValue); // result Number



parseInt() //Parses a string and returns a number
//eg
var str = '120.25';
var number = parseInt(str);
console.log(number) // returns 120.25 (as a number)



// number or a string
var number = 12345;
console.log(typeOf number); // number

var str = number.toString();
console.log(typeOf str); // string


// to fixed will place demical place where needed
.toFixed(2); // will give 2 decimal places


var myNumber = 155;
.parseFloat("1.555").toFixed(2)// will still be a string




























/*functions
===============*/

function myFunction(a, b){
return a + b;
}

console.log(myFunction(2, 4));


// ES6 Arrow function
myFunction = (a, b) => {
return a + b;
}

console.log(myFunction(3, 4))


// arrow function assigned to an ES6 variable
const myFunction = (a, b) => {
return a + b;
}

console.log(myFunction(2, 4))




/* <p id="demo"></p> */

const x = myFunction(4, 3);   // Function is called, return value will end up in x
document.getElementById("demo").innerHTML = x;







/*Arrow functions
===============*/

 // normal function
 hello = function(){
  return 'Hello World';
 }

 // with arrow function
 hello = () => {
  return 'Hello World';
 }


//arrow function with parameter
hello = (name) => {
return `'Hello ${name}`;
}

// without return, one parameter and shorthand brought further with template literals
hello = name => (
  `Hello ${name}`;
)

console.log(hello(David));








/*Events
===============*/


// <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

/* In the example above, the JavaScript code changes the content of the element with id="demo".
   In the next example, the code changes the content of its own element (using this.innerHTML):*/

// <button onclick="this.innerHTML = Date()">The time is?</button>



/* JavaScript code is often several lines long. It is more common to see event attributes calling functions: */
// <button onclick="displayDate()">The time is?</button>


// Common Events

onchange() // An HTML element has been changed
onclick() // The user clicks an HTML element
onmouseover() //The user moves the mouse over an HTML element
onmouseout() //The user moves the mouse away from an HTML element
onkeydown() //The user pushes a keyboard key
onload() //The browser has finished loading the page












/*Arrays = remember arrays are also objects
===============*/


var myArray = ['banana', 'orange', 'apple'];



// accessing elements in an array (zero based index)
var myArray = ['banana', 'orange', 'apple'];
var x = myArray[2];
console.log(x) // apple

var firstElement = myArray[0]; // banana
var lastElement = myArray.length - 1; // apple



// changing array elements
var myArray = ['banana', 'orange', 'apple'];
myArray[2] = 'pear';
console.log(myArray);


// length
var myArray = ['banana', 'orange', 'apple'];
document.getElementById('root').innerHTML = myArray.length // 4




// Merging Arrays - concat() creates a new array from merging existing arrays
var girls = ['jane', 'alice', 'ciara'];
var boys = ['alan', 'jack', 'richard', 'peter'];
var allChildren = girls.concat(boys);

//merging 3 arrays or more
allchidren = girls.concat(boys, men, women);


// we can also use the spread operator like with objects
let arr = [1,2,3]; 
let arr2 = [4,5]; 
        
arr = [...arr, ...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5 ] 


//slicing() - slices out a part of an array
var fruits = ['apple', 'orange', 'pear', 'lemon'];
var choice = fruits.slice(1, 3);
console.log(choice); // orange, lemon



// if we use one parameter, the new array starts from that postiion
var fruits = ['apple', 'orange', 'pear', 'lemon'];
var half = fruits.slice(2) // pear, lemon




// changing elements
var fruits = ['apple', 'orange', 'pear', 'lemon'];
fruits[1] = 'strawberry'; // replace the first item in the array
var fruits = ['apple', 'strawberry', 'pear', 'lemon'];




// push(), pop(), shift() and unshift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.pop() // removes last element fron an array
fruits.push('kiwi'); // adds a new element to an array

fruits.shift(); // removes the first element from an array
fruits.unshift('lemon'); // adds a new element to an array


//joining arrays
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var veg = ['carrots', 'brocholli', 'peas'];
var list = fruits.concat(veg);


// looping through an array
var myArray = ['banana', 'orange', 'apple'];
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
} // banana, orange, apple



// using foreach()
var myArray = ['banana', 'orange', 'apple'];
myArray.forEach(item => console.log(item));




// indexOf();
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));

// expected output: 4
console.log(beasts.indexOf('giraffe'));
// expected output: -1











//Higher Order Functions and Arrays using ES6

// Associative Arrays
const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];



const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// old way of looping
for(var i = 0 ; i < companies.length; i++){
console.log(companies[i]);
}



// forEach() to iterate over an array
companies.forEach(function(company){
console.log(company.name);
})

// arrow function
companies.forEach(company => console.log(company));


// or another example
let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){
    console.log('I want to eat '+ foodItem);
});


// loop and push into a new array
var otherArray = [];
var fruits =  ["strawberry", "orange", "pear", "lemon"];
fruits.forEach(function(item){
otherArray.push(item);
});
console.log(otherArray);




//filter

// previous method - loop through the var and if the age is less or equal to 21 then show the answers using for loop and if statement
let canDrink = []; // new array
for(var i = 0; i < ages.length; i++){

if(ages[i] <= 21){
canDrink.push(ages[i])
}
}



// using filter() checks every element in an array to see if it meets a certain criteria
// and returns a new array with the elements that return truthy for the criteria.
const canDrink = ages.filter(function(age){
if(age >= 21){
return true
}
})

console.log(canDrink);
//or
const canDrink = ages.filter((age) => age < 21);


// filter retail companies

const retailCompanies = companies.filter(function(company){
if(company.category === 'Retail'){
return true;
}
})

console.log(retailCompanies);


//or using arrow function
var retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);



// filter companies start 1990 and end 2010
var dated = companies.filter((company) => company.start >= 1999 && company.end < 2010)
console.log(dated)






// map() executes the same code on every element in an array and returns a new array with the updated elements.

const ageTimesTwo = ages.map(function(age){ // when using {} we need to return the function
return age * 2
})

//shorthand of the above using arrow function
const ageTimesTwo = ages.map((age) => age * 2); // when we dont use {} we dont need to return
console.log(ageTimesTwo)


//using The Math.sqrt() function returns the square root of a number, that is
const squareAge = ages.map((age) => Math.sqrt(age));
console.log(squareAge)



// company name, then  minus end date from the start date
const selected = companies.map(function(company){
return `${company.name} [${company.start} - ${company.end}]`; // using template literals here as a string
});

//using arrow function
const selected = company.map((company) =>
'${company.name} [${company.start} - ${company.end}]');

console.log(selected);



// we can also get the data from an object using Object.values()

const object1 = {
  name: 'david',
  age: 42,
  address: 'sydney'
}

let x = Object.values(object1);
console.log(x);









/*Date
===============*/



// declare date object first
var d = new date();






// Get Date Methods - These methods can be used for getting information from a date object:
var d = new date();

var year = d.getFullYear(); // get the year as 4 digit (yyyy)
var month = d.getMonth(); // get the month as a number (0-11)
var date = d.getDate(); //get the day as a number 1-31
var mins = d.getMinutes(); //get the minutes
var hours = d.getHours(); // ger the hour (0 - 23)
var time = getTime(); //get the time // millisteconds since Jan 1970
var seconds = d.getMilliseconds();
var day = d.getDay(); // get the weekday as number (0 -6)
var now = d.Date.now(); // get the time ECMAScript 5



// Set Date Methods - Set Date methods let you set date values
var d = new Date();
var date = d.setDate() // set the day as a number














/*If / Else Statement
===============*/


if(condition 1){
 // if condition 1 is true, do this code
}else if(condition 2){
// if condition 1 is false and condition 2 is true, do this code
}else{
// if both conditions are false, then do this code
}


//eg
var d = new Date();
var hours = d.getHours();


if(hours < 10){
alert("Good morning");
}else if(hours > 10 && hours < 2){
alert('Happy lunchtime');
}else{
alert('back to work');
}



// Terneray Operator - statement assigned to a variable
 // IF older than 21 say 'Old enough to Vote', if not say 'Not old enough';

var age = 21;
var voteable = (age > 18) ? 'Old enough to Vote' : 'Not old enough';
console.log(voteable);
















/*Switch Statement - best ued instead of an if statement with multiple conditions
===============*/


const fruit = 'Papayas';

switch(fruit){

case 'Oranges':
console.log('Oranges are $0.59 per pound');
break;

case 'Mangoes':
console.log('Mangoes are out of stock');
break;

case 'Papayas':
console.log('Papayas are $2.79 per pound and in stock'); // once this condition is run the statement will print and stop.
break;

default:
console.log('sorry but that fruit we do not sell in our shop');

}
















/*Looping
===============*/


 // for loop

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for(var i = 0; i < cars.length; i++){
console.log(cars[i])
}





// while loop

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var i = 0;
var txt = '';

while(cars[i]){
txt += cars[i] + '<br>';
i++;
}












/*Math / Math.random
===============*/

Math.round(4.7) //returns 5
Math.round(4.3) // returns 4

Math.sqrt(64); // square root of 64 equals 8


Math.ceil(4.7) // rounds up to 5
Math.floor(4.3); //rounds down to 4


Math.random(); //returns a random number between 0 and 1.
var x = Math.random();
console.log(x); // 0.8425698745

Math.floor(Math.random() * 10); //returns a number between 0 to 9

Math.floor(Math.random() * 9) + 1; // returns a number 0 t o 10

// a random function

function getRndInteger(min, max){
return Math.floor(Math.random() * (min - max + 1)) + 1;
}

console.log(getRndInteger(1,15));










/*ES6
===============
JavaScript let
JavaScript const
JavaScript Arrow Functions
JavaScript Classes
Default parameter values
Array.find()
Array.findIndex()
Exponentiation (**) (EcmaScript 2016)
*/


// let
var x = 10 // here x equals 10
let x = 10 // here x is also equal to 10;


// const
var x  = 10;
const x = 10; // Constants are similar to let variables, except that the value cannot be changed.



// Arrow functions
// ES5
var x = Function(x, y){
return x * y;
}

// ES6
const x = (x, y) => {
return x * y;
}



// Array.find()
var numbers = [1, 5, 35, 78, 54, 67];
var age = numbers.find(function(ages){
    return ages > 18;
});

console.log(age); // will find the first item in the array that is over 28, which is 35.


