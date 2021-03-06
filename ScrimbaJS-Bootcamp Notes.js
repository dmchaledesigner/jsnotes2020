

// Scrimba JS Bootcamp Notes









/*  let and const  */


// let we can declare it without adding a value, then assigning a value, therefore it can change 
let name;
name = 'david';
name = 'kevin';



/* const we CANNOT just declare it, we need to give it a value AND it connot be changed */
// 1) must be initialized with value
// 2) can't be reassigned after declaration








/* Shadowing

Is where a two variables are declared of the same name. One in the window object and the other inside a block / function or statement block.
The variable is 'shadowed' by another variable. Both are valid because its given another value inside a block

*/


var price = 20; // global scope
var isSale = true; // gloabal scope

if (isSale) {
	// discount
	const price = 20 - 2; // function scope
	console.log('sale price', price); // this result will come from the price variable inside so, 20 - 2 = 18
}

console.log('price', price); // this result will come from the window because it will pick up the global value since its OUTSIDE the if block





/* Function Scope 

	If a variable inside a function does not exist, then it moves up a level to try and find it, however if the same var is declared inside then we get that value
*/

const hair = 'blonde'

function go() {
	const eyes = 'blue';
	console.log(eyes);
	console.log(hair); // the function picks the variable from the global scope because it cannot find it inside
}

go(); // result blue, blonde





/* Block Scope

Is where any var that is created outside cannot be taken inside and then pushed outside
for example...
*/


if (1 === 1) {
	const apple = 'apple'; // note we cannot use 'return' in a block. only a function so we cannot pass the variable up
}
console.log(apple); // also we cannot take a variable from inside a block and use it outside


// SOLUTION - declare the variable outside, update it inside and then we can use it outside again
let apple;

if (1 === 1) {
	apple = 'apple';
}

console.log(apple);





// Hoisting - where function and variable declarations are moved to the top before they are created. This is not the case for function expressions where a function is assigned to a varaiable
// The JS compiler when run, MOVES the functions up the callstack before the functions is called, even though we have written it opposite in our file



add(4, 6); // function call


// function declaration
function add(a, b) {
	return a + b;
}





person(); // second function is called 


// first function is created
function firstName(first, last) {
	return `${first} ${last}`;
}


// then passed to a second function
function person() {
	console.log(firstName('David', 'Mchale'));
}

// result is 'david mchale'






totalAge(); // function call

const totalAge = (person1, person2, person3) => { // function expression
	return person1 + person2 + person3;
}

// this will break and will NOT work because function is passed to a variable for a total value to use elsewhere, therefore not a regular function




// variable hoisting


let age;
console.log(age);  // result 'undefined. JS recognises that a variable was created but no value was given, hense undefined

age = 45;
console.log(age) // result 45. age was now given a value


console.log(address) // result: 'address is not defined'








/* Template Literals */

// adding strings together with ES6
// Previously we used '+' to concatinate strings but now we use dildas' with dollar sign and curly braces

let username = "Jane Doe";
let message = "Hi " + username + ", how are you?";
// now we concatinate by saying
let message = `Hi ${username}, how are you?`
console.log(message);

//we can also do calculations inside the interpolation
const weight = 150;
const moonWeight = `you weigh ${weight * 0.165} on the moon`;
console.log(moonWeight);










/* Conditionals */


// basic if statement

const prefersDarkMode = true;

if (prefersDarkMode) { // if the const = true
	document.body.style.background = 'black'; // change the body color to black
	console.log('dark mode set!');

}

// using not (!!)
const prefersDarkMode = true;

if (!prefersDarkMode) { // if the const is not true (is equal to false)
	document.body.style.background = 'black'; // change the body color to black
	console.log('dark mode set!');

} else {
	document.body.style.background = 'ghostwhite';
}





/*  Primitive Types and conversion - truthy / falsy */



// string
// number
// boolean
// undefined
// null
// symbol

// use typeof to find out the type of a variable
var message = 'this is a string';
console.log(typeof message);




// Truthy / Falsy

// Anything in the list below is marked as false. Anything else is true
// MUST REMEMBER

// false
// 0
// ''
// null
// undefined
// NaN



const username = null;

if (!username) {
	console.log('no user');
}



// if we have two falsey values in a comparison, they should come up true, right?
//... but they dont.


if (NaN === NaN) {
	console.log('this statement is true')
} else {
	console.log('this statement is false')
}

// result 'this statement is false'
//.. but we know this is true because Nan is equal to NaN


// here is how we correct this, using 'real Boolean values'
if (Boolean(value) === Boolean(value)) {
	console.log('this statement is true')
}


// so for the Nan issue we simply write

if (Boolean(NaN) === Boolean(NaN)) {
	console.log('this condition is true')
} else {
	console.log('this condition is false')
}

// result 'this condition is true'














// Ternary operator - converting from an IF statement to IF logic

const age = 20;

let greeting;

if (age < 10) {
	greeting = "Hey there";
} else {
	greeting = "That's an interesting age!";
}
console.log(greeting);


// var x = (condition) ? true : false

let greeting = (age < 10) ? 'hey there' : 'thats an interesting age';
//can write without () condition
let greeting = age < 10 ? 'hey there' : 'thats an interesting age';
//hpwever () is better used for a comparison and legibility
let greeting = (age < 20 && /* something */) ? 'hey there' : 'thats an interesting age';

console.log(greeting);




// what if we had an if statement with multple conditions?

const age = 12;

let greeting;

if (age < 10) {
	greeting = "Hey there";
} else if (age > 18) {
	greeting = "Greetings";
} else if (age > 10) {
	greeting = "What's up?";
} else {
	greeting = "That's an interesting age!";
}
console.log(greeting);


// we can chain all of this inside a ternary operator,
// though its not recommended because of its legibility


//single if condition
let greeting = age < 10 ? "Hey there" : "Greetings";


// multiple condition
// if this condition is true, say this, if that condition is true, say that, if nothing else... : then say something else.
let greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up?" : "That's an interesting age!";


console.log(greeting);


//however its best to write and if else statement instead of a ternary with multiple outputs has can be hard to read sometimes. Next level of conditions would be a switch statement.





//ternary and switch together

const x = 11; //value
const color = x > 10 ? 'Red' : 'Blue'; // if color is great than 10, we have Red, if not then its Blue

switch (color) { // if case value is based on the same value of the color ternary result, console.log() the message, if neither then set default message
	case 'red':
		console.log('The color is red');
		break;
	case 'blue':
		console.log('The color is blue');
		break;
	default:
		console.log('No color found');
		break;
}


// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart.
// Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, 

// and an empty string if the user isn't authenticated

const isAuthenticated = true;
let shoppingCart;

shoppingCart = isAuthenticated ? "iPad" : "";

console.log("shoppingCart: ", shoppingCart);




// Challenge 2: Check if user is old enough.
// Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not

const age = 20;
let allowedAccess;

allowedAccess = age >= 18 ? 'Allowed Access' : 'Not allowed entry';
console.log("allowedAccess: ", allowedAccess);














/* Functions */

// https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
// https://www.youtube.com/watch?v=G4lZSWssoqA

// using arguments

/* when we create a function, we use placeholders called 'params'
  when we evoke or call a function we are giving it a value or 'arguments'
*/

function functionName(param1, param2) {
	return param1 + param2; // when using curly brackets to declare a function, we need to 'return' a value to the function
}


functionName(argument1, argument2);  // evoke the function


// using arguments
// if we give a function more arguments that params we can see this via dev tool and call them inside our function as an argument even though not declared as parameters
// note the function has 2 paramters, but we have 4 arguments. 
// simply write console.dir(arguments) to get all values of the evoked function call

function names(person1, person2) {

	console.dir(arguments) // look in dev tools and see the toral arguments list
	console.log(`The eldest is ${person1} and the next is ${person2}`)
	console.log(arguments[2]) // will get index value of 2 the arguments which is shaun
}

names('david', 'gary', 'shaun', 'steven'); // result: The eldest is david and the next is gary
// the conole returns : Arguments(4)

// now we can use these arguments inside the function if we need to
//Also note, these arguments is not an array, look at the prototype and see its actually an onject of the js object, but we call these args like an array











// arrow function

function add(a, b = 5) { // note we give b a default value of 5
	const total = a + b;
	return total;
}

add(15, undefined); // use undefined to call the default value of b, otherwise we can add in a different value in its place
//result: 20 15 x 5


// convert the above to an arrow function

const add = (a, b = 5) => {
	const total = a + b;
	return total;
}

add(15, undefined);


// without the return  keyword, IMPLICID return
// remove the return keyword then replace the curly brackets with normal brackerts. WE can even remove the brackets altogether
const add = (a, b = 5) => (total = a + b);
add(15, undefined); // result 20

const add = (a, b = 5) => total = a + b;
add(15, 20); // result 35



// Another example

// regular function
el.addEventListener('click', function (event) {
	console.log(event.target); //this will give us the <body> tag
});

// arrow function
el.addEventListener('click', (event) => {
	console.log(event.target);
});


// if the function has one parameter we can remove the additional brackers
btn.addEventListener('click', event => console.log(event.target.value);

// implicid returning - removing the need for the return keyword

// this is normal arrow function
const myFunction = (a, b) => {
	return a - b; // return the result to the function without using a variable
}

myFunction(14, 4); // result is 10;



// implicit return is having to NOT use the return keyword and replacing the {} with ()
const myFunction = (a, b) => total = a - b;

myFunction(14, 4); // result is 10;





// function with an object
function makeAbaby(firstName, lastName) {
	const baby = {
		name: `${firstName} ${lastName}`,
		age: 1
	}
	return baby;
}

makeAbaby('kevin', 'james'); // result {name: "kevin james", age: 1} is the object with the object data
makeAbaby().age // result 1 ... remember the const baby is returned to the function so we just need to evoke the function and use dot notation to call the value of age



// converted to an arrow
// remove instances to the const, wrap object in parenthesis as so the {} are not recognised as a function block
const makeAbaby = (firstName, lastName) => ({ name: `${firstName} ${lastName}`, age: 1 });
console.log(makeAbaby('kevin', 'james'));  // result: {name: "kevin james", age: 1} - we get our object





// IIFE - immediately evoked functions - functions thst are called immediately (rare)
// if we hace a function without a name is its an anonymous function like so
function() {
	console.log('this is an IIFE');
}
// but this will not run


// to make it run we wrap parenthesis around it
(function () {
	console.log('this is an IIFE');
})();

// now to pass it a value
(function (age) {
	return `My age is ${age}`
})(10); // we place the valaue inside the second set of parenthesis
//result: "My age is 10"





// chat app function

const user1 = "Reed";
const user2 = "Doug";

// const message = `User (user) says: (text)`;

function sendUserMessage(user, text) {
	console.log(`User ${user} says: ${text}`); // using template notation to output data to the console
}

sendUserMessage(user1, 'Hey there'); // first param is the user1var and a the second param is a  
sendUserMessage(user2, "What's up?");

// User Reed says: Hey there
// User Doug says: What's up?



// if a function does not have a param (placeholder) it will go outside the function and look for same named variable,
// otherwise, if the variable is declared inside the function it will take that value.

let greeting = 'hello there' // global variable - outside the function

function note() {
	greeting = 'welcome to the show' // scoped variable - inside the function
	console.log(`${greeting}`);
}

note(); // result is 'welcome to the show'; - because the function is called with the variable being inside the function
console.log(`${greeting}`); // result is 'hello there' - a console. log from OUTSIDE the function so it recives the variable valued 'hello there'


// note that vars created inside a function are scoped to inside the function only
// if we try to call a var that is inside the function to outside, this will become 'undefined'.





// function methods
// a function method is a function that lives inside of an object



const david = {
	age: 42,
	hair: 'brown',
	subjects: function () {
		console.log(this.age);
		const hobbies = ['moto', 'bikes', 'sports'];
		return hobbies;
	}
}

console.log(david); // result: {age: 42, hair: "brown", subjects: ƒ}
console.log(david.subjects()); // result ["moto", "bikes", "sports"]














//callback functions
// ======================
// a function that is passed into another function to run, once the first function is completed

btn.addEventListener('click', doSomething); // hey, when you click me, then run the function called doSomething

doSomething(){
	alert('you clicked me!!');
}


// another example

const username = 'john';

// capitalise the first letter of name (the first param of when the function is called
function capitalize(name) { // this is the function to capitalize the first letter
	return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}


// now the callback function as a second parameter
// it take in the capitalize function
function greetUser(name, callback) { //this is the greeting function that returns the capitalize function from outside
	return callback(capitalize(name));
}

// greetUser function is assigned to a variable
const result = greetUser(username, (name) => { // greeting function is assigned to a variable
	return `Hi there, ${name}!`;
});

// that variable is now called to the console
console.log(result); // Hi there John;




// callbacks explained easier: 
//===============================

/* When we are using functions like map(), find(), filter(), reduce() etc .. these are callback functions 
	we can say something like...

*/
const numbers = numbersArray.map((num) => {
	return num * 2
})

// however these are all callback functions which are just normal functions that can be passed to each other


// ...like this

function multiply(item) {
	return item * 2
}

const numbers = numbersArray.map(multiply);
console.log(numbers)




// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 



function splitBill(amount, numPeople) {
	return `Each person needs to pay ${amount / numPeople}`; // using template literal for a string with JS inside
}


console.log(splitBill(10, 2))  // 5
console.log(splitBill(16, 4)) // 4
console.log(splitBill(350, 9)) // 38.8

// using arrow

const splitBill = (amount, person) => {
	return `Amount per person will pay is ${amount / person}`;
}

console.log(splitBill(500, 20)); // result: Amount per person will pay is 25




// when using callbacks in an aray of objects such as the below we can create a return function

// Find comments with the word 'burg' inside


const feedback = [
	{ comment: 'Love the burgs', rating: 4 },
	{ comment: 'Horrible Service', rating: 2 },
	{ comment: 'Smoothies are great, liked the burger too', rating: 5 },
	{ comment: 'Ambiance needs work', rating: 3 },
	{ comment: 'I DONT LIKE BURGERS', rating: 1 },
];


const burgWord = feedback.find((item) => {
	return item.comment.includes('burg');
})

console.log(burgWord)


// but what if we wanted to find other words? Best to create a function and pass that into the find() as it is a callback function
// create a function and use the word as the param
//inside create another return function that will hold the 'item' or the iterator for the find() callback
// then pass that function into the find method

// one function for the work and then another inside to hold the iterator 'item'

function findWord(word) {
	return function (item) {
		return item.comment.includes(word);
	}
}

const burgWord = feedback.find(findWord('Smoothies')); // {comment: "Smoothies are great, liked the burger too", rating: 5}




// filter rating that is not equal to 1
const rating = feedback.filter((item) => {
	return item.rating !== 1;
})



// using a callback
function rating(number) {
	return function (item) {
		return item.rating !== number;
	}
}

const rating = feedback.filter(rating(1));





/* callback functions ES6 */

// In JavaScript, the callback function is that. Which is called after some block of code is executed.

let numbers = [1, 2, 3, 5, 8, 9, 10, 12]; // find all the even numbers in the array


//normal function that does the calculation
evenNumbers = (value) => {
	return value % 2 == 0;
}

const even = numbers.filter(evenNumber); // where we are passing the first function as a 'callback' function put into a variable
console.log(even); // result: [2, 8, 10, 12]



// using arrow function
let numbers = [1, 2, 3, 5, 8, 9, 10, 12];


const even = numbers.filter((item) => item % 2 == 0);
console.log(even);





//another instance of a callback is when we use eventListeners
// we create a function and pass that into the eventListener method

let btn = document.querySelector('#my-btn');

function btnClicked() {
	// do something here
}

btn.addEventListener('click', btnClicked);




















/* closures in Functions  

closures help us to keep track of certain values.
	A closure is just a function inside another function that:
	1) the inner function can access the parent function scope params
	2) is exposed to the outside world.

*/

// A simple example is

function outerFunc() {
	let outerVar = 'I am outside!';

	return function innerFunc() {
		console.log(outerVar); // => logs "I am outside!"
	}
}

const myInnerFunc = outerFunc();
myInnerFunc();

// or 



function outerFunction(outerVariable) {

	return function innerFunction(innerVariable) {
		console.log(`This is the ${outerVariable}`);
		console.log(`This is the ${innerVariable}`);

	}
}


const outer = outerFunction('outer'); // call the param value of the outer function
outer('inner'); // now evoke the outer and THEN set a value for the inner param
// This is the outer
// This is the Inner




/* 
Now innerFunc() is executed outside of its lexical scope. And what’s important:
innerFunc() still has access to outerVar from its lexical scope, even being executed outside of its lexical scope.
In other words, innerFunc() closes over (a.k.a. captures, remembers) the variable outerVar from its lexical scope.



	 */



// Take a look at the next example code below;

function handleLikePost() {
	let likeCount = 0;
	likeCount += 1;
	console.log('like count:', likeCount);
}

handleLikePost(); // 1
handleLikePost(); // 1
handleLikePost(); // 1

/* Its assumed the LikeCount var is iterated over on the function and called three times from zero.
This is not the case as result is 1, 1, 1.
Why is it not 1,2, 3??

...because
1. the function runs
2. changes the likeCount var from 0 to 1 and then the function quits.
3. the function runs again and goes from 0 to 1.

Everytime a function runs, it starts, processes, quits, and resets again before it runs once more

What we need to do is keep the likeCount var alive and not reset itself so we can use a function inside the original function
*/


function handleLikePost() { // outer function
	let likeCount = 0;

	return function addLike() { // inner function
		likeCount += 1;
		return likeCount;
	}

	addLike(); //evoke the inner function so its run when the outer function is called
	console.log('like count:', likeCount);
}

const like = handleLikePost(2); // assign the outer function to a variable with the value of 2 in the param

console.log(like()); // call the function, result:  1
console.log(like()); // call the function, result:  2
console.log(like()); // call the function, result:  3



// another example would be to great a game and a score

function createGame(gameName) {
	let score = 0;

	return function () {
		score++;
		return `My favourite game is ${gameName}, and my score is ${score}`;
	}
}

const hockeyGame = createGame('hockey');
hockeyGame(); // result:  "My favourite game is hockey, and my score is 1"





// Challenge: Write a countdown function with a hard-coded starting number inside closure

function countdown() {
	let countFromNum = 11;

	return function decrease() { // function returned to the outer function
		countFromNum -= 1;
		return countFromNum;
	}
}

const countingDown = countdown();

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());





// now use the above countdown closure with parameters


function countdown(startingNumber, step) {
	let countFromNum = startingNumber + step; // countdown from the starting number, not the next number

	return function decrease() {
		countFromNum -= step;
		return countFromNum;
	}
}

const countingDown = countdown(20, 5);

console.log(countingDown()); //20
console.log(countingDown()); //15
console.log(countingDown()); //10









// Single Responsibility Closure Functions - another instance of using closure functions with fetch 

// take a simple closure function for example

function getData(baseUrl) { // the outer function will hold the main url
	return function (route) { // the inner function will be the path such as /posts, or /comments
		fetch(`${baseUrl}${route}`) // the 2 params put together to form the url and the path type
			.then(response => response.json())
			.then(data => console.log(data));
	}
}
// evoke outer function to a variable with param value
const getSocialMediaData = getData('https://jsonplaceholder.typicode.com'); // outer function param
// evoke inner function with inner param
getSocialMediaData('/comments'); // inner function param
getSocialMediaData('/posts');



// now to get say the title from the data, we need to run .map() over the data like so,


function createElement(element) {
	return document.createElement(element);
}

function append(parent, child) {
	return parent.appendChild(child);
}

function getData(url) {

	return function (route) {

		fetch(`${url}${route}`)
			.then((response) => response.json())
			.then((data) => {
				data.map((item) => {
					// console.log(item.title);
					let title = item.title;
					let div = createElement('div');
					let heading = createElement('h2')
					heading.textContent(title);
					append(div, heading);
					append(document.body, div);

				})
			})
	}


}


const posts = getData('https://jsonplaceholder.typicode.com');
posts('/posts');







// better functions with parameters -convert farenheit to celsius function

function convertToCelcius(celsius) {

	const farenheit = celsius * 1.8 + 32;
	return farenheit;

}

console.log(convertToCelcius(21)) // result 69.80000000001

// the issue is it outputs multple decimal places
// however we can get around that using .toFixed() and specify the amount of decimal places when calling the function



function convertToCelcius(celsius, decimalPlaces) {

	const farenheit = celsius * 1.8 + 32;
	return farenheit.toFixed(decimalPlaces);

}

console.log(convertToCelcius(21, 2)) // the 2 is the value of the decimalPlaces param in the second argument
// now we are putting values on for celcius AND decimal place numbers we want, so 2 is the second param


// however toFixed() converts numbers to a string by default so we need to use another method
// if we use parseInt() we will only get a whole number
// So we wrap the const in a Number() method



function convertToCelcius(celsius, decimalPlaces = 1) {

	const farenheit = celsius * 1.8 + 32;
	return Number(farenheit.toFixed(decimalPlaces));

}

console.log(convertToCelcius(21, 2))

// Note: if we use 0 for decmimal places, this is a null value so the function will fail. 
// By giving it a value of 1 we are saying that the condition is true.



// make a decimal to 2 places
let number = 45.567843
let twoDecimals = number.toFixed(2)
console.log(twoDecimals) // result 45.56

// make a string a number
let string = "568";
let number = parseInt(string);
console.log(number);


// make a decimal string to a decimal number
let string = "56.75334";
let number = parseFloat(string);
console.log(number); // 56.75334

let newNumber = number.toFixed(2);
console.log(newNumber);








// converting a function to an arrow function


const username = 'david';

// first function
function capitalize(name) {
	return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
	// The charAt() method returns the character at the specified index in a string.
}
console.log(capitalize(username)); // or you could pass a string, not just one inside a var.




// function assigned to a variable
const firstLetterUpper = function capitalize(name) {
	return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

console.log(capitalize(username));

// or


const username = 'david';

function capitalize(name) {
	// take the first letter and change to uppercase, then remove the first letter and attach the rest
	// So D + avid
	const capital = name.charAt(0).toUpperCase() + name.slice(1);
	return capital; // return the const to the function

}
console.log(capitalize(username)); // result David




// converted to an arrow function
const firstLetterUpper = (name) => {
	return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

console.log(capitalize(username));


// also written as 


const user = 'david';


function upper(name) {
	const first = name.charAt(0).toUpperCase();
	const rest = name.slice(1);

	return `${first}${rest}`;
}



console.log(upper(user));























/* Objects */

// explanation: if variables are storage devices, then objects are file cabinets
// vars hold one instance of data, where objects hold multiple data elements
// https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript






// basic creation of an object
const objectLiteral = {};




// Initialize the standard object
const Gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "axe",
	greet: function () {
		return `Hi, my name is ${this.name}!`;
	},
};

const item = Gimli






/*// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console
*/


const bar = "Bar Boca";
const cafe = "Aku Aku";
const restaurant = "Colonel Mustard";

const favouritePlaces = {
	bar: bar,
	cafe: cafe,
	restaurant: restaurant,
	greeting() {
		console.log("Hello there!");
	}
}

console.log(favouritePlaces)

// https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript








// understanding Primative vs Object Types

/*
  undefined, null, boolean, number, string, symbol
*/
// primitive - passed by value

// const num = 'hello world';
// const anotherNum = 'hello world';
// console.log(num === anotherNum);





// object - passed by reference
const obj = {};
const anotherObj = obj;
anotherObj = 1;

console.log('obj', obj);
console.log('another obj', anotherObj);





// Dynamic Objects with ES6
const yellow = '#ff0';
const blue = '#00f';
const orange = '#f60';

const myColors = {
	red: '#FF0000',
	yellow: yellow,
	blue: blue,
	orange: orange
}


//with ES6, if the key is the same name as the value we can do this...
const myColors = {
	red: '#FF0000',
	yellow,
	blue,
	orange
}


// translated to one line we get
const myColors = { red: '#FF0000', yellow, blue, orange }
console.log(myColors.yellow);





// Get and modify object data


// create an object
const colors = {
	blue: "#f00",
	orange: "#f60"
};

// create a function that can get the value of the key based on color
function getColor(key) {
	return colors.key;
}

console.log(getColor('blue')); // result: null!! 


// how can we fix this


const color = 'black';
const hexCode = '#000';

const colors = {
	'yellow Color': '#ff0',
	blue: "#f00",
	orange: "#f60",
	[color]: hexCode
};

colors[color] = hexCode;
console.log(colors);

function getColor(key) {
	return colors[key];
}

delete colors['yellow Color']

// console.log(getColor('orange'));



// Object to an Array 
const peopleObj = {
	jim: {
		name: "jim",
		age: 20
	},
	tim: {
		name: "tim",
		age: 22
	}
}


const peopleArray = Object.values(peopleObj)

//or using map()
const peopleArray = Object.keys(peopleObj).map(item => peopleObj[item])

/*
Remember!!!:
Object Values - will get the value from the pair
Object Keys - will get the key from the pair
Object Entries - will get all entries

*/






// object destructuring

const user = {
	name: "Reed",
	username: "Reedbarger",
	email: "reed@gmail.com",
	details: {
		title: "Programmer"
	}
};


// name is user.name
// email is user.email
// username is user.username

// the common term is user, right?

// with destructering we can do this...
// create a const and add in the keys. make them equal to 'user'.
const { name, email, username } = user;

//for nested elements we simply break it down further with ':{}'

const { name, email, username, details: { title } } = user;



function displayUserBio() {

	// always use template literals
	console.log(`${name} is a programmer. His is email is ${email}`);

	//so how do we get to the title value as its nested?

	//we add the parent to the const above, and then use ':{}' inside', then add it here
	// this is how we get to nested keys
	console.log(`${name} is a ${title}. His is email is ${email}`)
}







// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
	pancakes: 'Nowhere Man',
	riceBowls: 'Pompoko',
	beer: 'The Craft Beer Co.',
	coffee: 'Coffee Roasters',
	small_plates: 'Venetian Plates',
	music: {
		traditional: 'Fiddler\'s Elbow',
		jazz: 'The Paris House'
	}
}

const { beer, coffee } = recommendations;

const { music: { traditional, jazz } } = recommendations;

console.log(jazz)

function displayMusicPlaces({ music: { traditional, jazz } }) {
	console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)
}

displayMusicPlaces(recommendations);







// object merging


// how can we merge both objects together with keeping the data from the keys with values?

const user = {
	name: "",
	username: "",
	phoneNumber: "",
	email: "",
	password: ""
};

const newUser = {
	username: "ReedBarger",
	email: "reed@gmail.com",
	password: "mypassword"
};



// we use the object.assign()
console.log(Object.assign(user, newUser));

// however there is a problem, this way mutates the user object
// if we console.log(user) we see that its the user object that will now hold all the data
// but we want these objects to remain as they are

//we could however add an '{}' in front of the user objec to assign to a blank object like this
console.log(Object.assign({}, user, newUser));
// but the user object is still modified





// solution - the spread operator '...' (3 dots)
// - create a new object and use the spread oerator on the objects we want to include

const myNewObject = { ...user, ...newUser };
console.log(myNewObject);
// Result
// {name: "", username: "ReedBarger", phoneNumber: "", email: "reed@gmail.com", password: "mypassword"}


//if we have a new object with one key: value pair we can add that into the new object without
// creating a new object, like so
const myNewObject = { ...user, ...newUser, verified: true };

console.log(myNewObject);
// email: "reed@gmail.com"
// name: ""
// password: "mypassword"
// phoneNumber: ""
// username: "ReedBarger"
// verified: true

//or we could still use the Object.assign() like this

const obj1 = {
	x: 1,
	x: 2
}

const obj2 = {
	y: 3,
	z: 4
}


const myObj = Object.assign(obj1, obj2);
console.log(myObj);




// to copy a complete object including nested object data

const copiedObject = JSON.parse(JSON.stringify(originalObject));
// this will give us a complete copy of the original person object

// the 'this' keyword

//'this' refers to the object in which a function sits in.
// for example
const userData = {
	username: 'Reed',
	title: 'JS Developer',
	getBio() {
		console.log(`User (username) is a (title)`);
	}
}


// to access the username and title values we need to refer to the object in which the function
// is inside. so in theory we should use, userData.title or userData.username
// this is where 'this' comes to the fold.
// we are using 'this' to refer to the object in which the fuctions sits
// instead of using userData.title, we change this to this.username or this.title


const userData = {
	username: "Reed",
	title: "JavaScript Programmer",
	getBio() {
		console.log(`User ${this.username} is a ${this.title}`);
	}
}

const showResult = userData.getBio();
console.log(showResult);






// turning objects into flexible arrays

// usually when we loop over an object we can do something like this

const obj = {
	one: 1,
	two: 2
};

for (const key in obj) { // key always needs to be declared in a variable
	console.log(`the key name is: ${key}`); // here we are accessing the key name only
}

//result is: the key name is one, the key name is two

//==============================

// to get the value of the key, we do this

const obj = {
	one: 1,
	two: 2
};

for (const key in obj) {
	console.log('value', obj[key]); //we get the object and then the key which returns a value
}





// we can use these new methods instead... 

// Object.keys(), Object.values(), Object.entries()



// Object.keys()

// before we had no way of accessing key names
// now we can get the key names and put them into a new array (as a string)

const user = {
	name: 'John',
	age: 29
};

Object.keys(user);
console.log(Object.keys(user)); // ["name", "age"] - in a new array!

// what if we want to check if a key name exists, such as age, for instance

const ageExists = Object.keys(user).includes('age');
console.log(ageExists); // result: true



// what about getting the values into an array using keys
// we can Object.keys with map() to interate over the array and output the values

const values = Object.keys(user).map(item => user.[item]);
console.log(values); // result: ["John", 29] in a new array called values


// but there is an easier way to get the values...



// Object.values()

const user = {
	name: 'John',
	age: 29
};

Object.values(user);
console.log(Object.values(user)); // result: ["John", 29]


// what else can we do with Object.values() ?

const monthlyExpenses = {
	food: 400,
	rent: 1700,
	insurance: 550,
	internet: 49,
	phone: 95
};


// we could use Object.values() with reduce!
// so we iterate over the values and add them using reduce to the accumulator

/* Note: reduce() allows us to return a single value,
or single result from an array
	
eg of reduce()

const numbers  = [2, 4, 5, 6, 7, 8];

const total = numbers.reduce(function(accumulator, x){
		return accumulator + x
})

console.log(total);

accumulator is the storage and x (which can be named anything)
represents each item in the array.



 */
const monthlyTotal = Object.values(monthlyExpenses).reduce((accumulator, cost) => {
	return accumulator + cost; // remember we are using return because of the {} notation
}, 0);


// note the zero after the end of the function.
// this indicates the base number (where we want to start from)

console.log(monthlyTotal); // result: 2794 - which is the total of all object key values 



// we can also use reduce() to iterate over an array and give back max or min values inside the array
// REMEMBER we can also pass a function as a callback inside the reduce() method

const values = [45, 67, 34, 456, 65, 3, 67, 2];

function findMaxValue(acc, item) {

	if (item > acc) {
		acc = item;
	}

	return acc;
}


let biggestNumber = values.reduce(findMaxValue);
console.log(biggestNumber);



const users = [
	{
		id: 2345234,
		name: "John",
		age: 29
	},
	{
		id: 8798129,
		name: "Jane",
		age: 42
	},
	{
		id: 1092384,
		name: "Jane",
		age: 17
	}
];


//iterate over the nested object and get a each person object in the array
// we could use .map() and .filter()

// but if we need to chain then its best to use .reduce()



const usersOver20 = Object.entries(users).reduce((accumulator, [id, user]) => {

	if (user.age > 20) {
		accumulator.push({ ...user, id }); // spread in the user and add the id
	}

	return accumulator;
}, []); // the callback array is used as we want to start from an empty array


console.log(usersOver20);
// result: [{name: "John", age: 29, id: "2345234"}, {name: "Jane", age: 42, id: "8798129"}]



// using map and filter on an object
// task: filter over an object depending on a condition and map over it to output the results;
//REMEMEBER using filter returns a true or false value


const toDos = [

	{
		id: 1,
		text: 'take out the trash',
		completed: true,
	},
	{
		id: 2,
		text: 'Meeting with boss',
		completed: false,
	},
	{
		id: 3,
		text: 'Do laundry',
		completed: true,
	},
];


const completedTodos = toDos.filter((toDo) => {
	return toDo.completed === true;
}).map((item) => {
	return item.text;
});


console.log(completedTodos);
// result: ["take out the trash", "Do laundry"]
















// Object.entries() // we returns an array of arrays - one array per key value pair
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries


// Basic Example

const obj = {
	foo: 'bar',
	baz: 42
};

console.log(Object.entries(obj));
// Reuslt: [Array(2), Array(2)]  =>  ["foo", "bar"] ["baz", 42]













// Object Constructors

/* Object Constructors are used as a BLUEPRINT for an object literal.
For exmaple, we have an object called 'student' that holds the data of a student such as 'name', 'age' 'subjects' etc

Now what if we had 50 students in a class that we need to get the information from.
Do we need to create 50 objects? NO! We can create an Object Contructor function to create many objects of the base object type */

/* To create an Object Contructor we need to use the constructor function first,
	Create an object as a function and always name it with 'capital' letter to indicate its an obect

*/

function Person() {
	// code goes here
}

/* Then its best practice to look at you base object to see its values and use instances of them as parameter in the constructor.
For instance we have this object...


NOTE: when we are using a basic object we separate key value pairs using ':'
	  but when we are using 


	const Identification = {
		firstName: 'david',
		lastName: 'mchale',
		nationality: 'irish',
		age: 42
	}

	we can create a constructor with the following paramters

 */

function Person(first, last, nationality, year) {

	// then we populate it using the 'this' keyword
	// note the parameter values and the keys 
	this.firstName = first,
		this.lastName = last,
		this.country = nationality,
		this.birthday = year
}


// now that we have our contructor function (blue print object), we can now create individial instances,
// Note its best to create our instances based on the relation to the blueprint
// for example, if we have blueprint of iceCream, instance should be type of cake. Same for car, could be BMW!

// const someone = new( values go here as per params in the constructor )
// alway use the 'new' keywork to create a new instance 

const mam = new Person('Patricia', 'Mchale', 'Irish', 21);
console.log(mam);

// result: Person {firstName: "Patricia", lastName: "Mchale", country: "Irish", birthday: 21}





// functions inside constructors
/* with this process we DO NOT need to add the functon to the prameter of the constructor,
	 as as call on this method after we created the new obect */


function Person(first, last, age) {
	this.firstName = first,
		this.lastName = last,
		this.yearsOld = age,
		this.eyeColor = function (color) {
			const personColor = "his eye color is " + color;
			return personColor;
		}

}

const brother = new Person('gary', 'mchale', 38);

console.log(brother, brother.eyeColor('blue'));








// NOTE: You CAN NOT add a new property using 
// Person.nationality = "English"; 

// The JavaScript prototype property also allows you to add new methods to objects constructors:

function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}

Person.prototype.nationality = 'English';


const myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather.nationality) // result English

// Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects




// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes = []) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.themes = themes;
}

Book.prototype.addTheme = function (newTheme) {
	this.themes = [...this.themes, newTheme]; // here we are adding newTheme param onto a copy of the themes array
}

const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");

book1.addTheme("Fantasy"); // here we are adding the 'fantasy' string to our themes array via the addTheme prototype function
book2.addTheme("Corruption");

console.log(book1.themes); // here we are calling the 'themes' parameter in the Book constructor to show all the themes we have passed into the array  
console.log(book2.themes);





// Classes
//=============
// Classes are a cleaner way to work with constructor objects and prototyping
// classes === constructor functions
// classes - create objects with shared methods

// function Student() {}
class Student {
	constructor(param1, param2, param3) {
		this.param1 = param1;
		this.param2 = param2;
		this.param3 = param3;
	}

	// additional functions can be placed here, outside the consstructor but inside the function

	myFunction() {
		//this.param1 + this.param2 ......whatever
	}

}; // same as a regular constructor function without the '()' 


// using classes with constructor function
/* when using classes we need to add the constructor(){} and place our data inside it.
Inside the params we can add whatever data we need to create instances as before
for example...
*/

class Student {
	constructor(id, name, subjects = []) { // here we are using subjects empty array to declare it
		this.id = id,
			this.name = name,
			this.subjects = subjects
	}
}

// declare new student
const student1 = new Student(1, 'Reed');
console.log(student1);


// if we added a  function to the class we use it outside of the constructor(){}

class Student {
	constructor(id, name, subjects = []) { // here we are using subjects empty array to declare it
		this.id = id,
			this.name = name,
			this.subjects = subjects
	}

	addSubject(subject) {
		this.subjects = [...this.subjects, subject];
	}
}

// declare new student
const student1 = new Student(1, 'Reed');


// using protype on a function would look like
console.log(student1.prototype.addSubject) // result on the console is 'function'

// to access a value
console.log(student1.name); // result is Reed
student1.addSubject('english'); // would output whats in the function
console.log(student1.subjects); // english



// 1. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear and genres[].

// 2. Create two methods on the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using data from your your favourite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

// Beginning:

class Film {
	constructor(id, title, director, releaseYear, genres = []) {
		this.id = id;
		this.title = title;
		this.director = director;
		this.releaseYear = releaseYear;
		this.genres = genres;
	}

	addGenre(genre) {  //  create the function
		// use spread to add original array and chain 'genre' from the function param 
		// to the genres data key
		this.genres = [...this.genres, genre];
	}

	getFilmTitle() {
		return `Film: ${this.title}` // simply return the title to the function getFilm Title
	}
}

const myFavouriteFilm = new Film(1, "Rear Window", "Afred Hitchcock", "1954");
/* result: 
		{id: 1, 
		title: "Rear Window",
		director: "Afred Hitchcock",
		releaseYear: "1954",
		genres: Array(0)}
*/

console.log(myFavouriteFilm.director);
//result: Afred Hitchcock

// take the const AddFavouriteFilm and chain on the function 'addGenre'
// then in the params, we add the new genre we want, called Thriller
myFavouriteFilm.addGenre("Thriller");

// now we console.log the genres addition to check if 'thriller' has been added
console.log(myFavouriteFilm.genres)

// here we chain on the 2nd function but add in the params because its a returned function
console.log(myFavouriteFilm.getFilmTitle());








// using extends - creating a child class constructor from a parent constructor
// -react.js uses similarities when creating class components

// lets say we have an object hat holds a product and a price
// we create a a parent class to hold the main elements,
// then we use extends to pass the parent data to the child but with added functionality


// with the child class we are going to pass in the price and make it discountable if its eligible

// this is our parent class contstructor object
class Product {
	constructor(name, price, discountable) {
		this.name = name;
		this.price = price;
		this.discountable = discountable;
	}

	isDiscountable() {
		return this.discountable;
	}
}


// we create a new class and 'extend' it by using the parent name (Product)
class SaleProduct extends Product {
	constructor(name, price, discountable, percentOff) { // as in parent params plus added items we need. for this instance, its percentOff
		super(name, price, discountable); // always use super() on a child class
		this.percentOff = percentOff;
	}

	getSalePrice() {
		if (super.isDiscountable()) {
			return this.price * ((100 - this.percentOff) / 100);
		} else {
			return `${this.name} is not eligible for a discount`;
		}
	}
}

const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20); // new instance
console.log(saleProduct1.getSalePrice()); // console log the percentage amount






// another example of extends

/*
	Use the "extends" keyword to inherit all methods from another class.
	Use the "super" method to call the parent's constructor function.
	I have a Ford, it is a Mustang
*/


// this is the parent class
class Car {
	constructor(brand) {
		this.carname = brand;
		//one param is used here 'brand' and used as'this.carname
	}
	// a function is declared and the key is returned to the function
	present() {
		return 'I have a ' + this.carname;
	}
}

// this is the child 'extends' class object
class Model extends Car {
	constructor(brand, mod) { // brand param is passed down from parent and another param added, just for the child only
		super(brand); // all child extensions HAVE to use super(with parent params)
		this.model = mod; // a new key is added to the child
	}
	// another function is created and return with new child data
	show() {
		return this.present() + ', it is a ' + this.model;
	}
}

let mycar = new Model("Ford", "Mustang"); // new child class instance is declared with values from 2 x params in the child class object

mycar.show() // the new instance PLUS the child function using chainging 
console.log(mycar.show());











// Arrays

// array methods here: https://morioh.com/p/d05e069353a9?f=5c224490c513a556c9042463

// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs = []; // empty array

favouriteSongs.push("Like a rolling stone");
favouriteSongs.push("Blowing in the wind");
favouriteSongs.push("Mr Tambourine man");
favouriteSongs.push("It aint me");

console.log(favouriteSongs);

console.log(favouriteSongs[favouriteSongs.length - 1]) // logs out last item in the array. Remember 0 based index.

favouriteSongs.pop(); // removes last item in the array

/* example 

const myArray = ['first', 'second', 'third', 'forth'];
myArray.pop();
console.log(myarray) Result:  ["first", "second", "third"]

*/

console.log(favouriteSongs[favouriteSongs.length - 1]) // again 0 based index





// array to string and back again using .split()
// =================================

const myArray = ['this is one block', 'and another block', 'i am the last block'];

const string = myArray.toString(); // converts to a string with
const newArray = string.split(',');
console.log(newArray);



const newArray = string.split(',', 1); // limits to 1 array element




// slice() and splice()
// =================================
// The splice() method changes the original array
// and slice() method doesn’t change the original array.


// The splice() method can take n number of arguments:
// (index, number of items to be removed-If set to 0(zero), no items will be removed.)
let tomSmith = ["Tom Smith", "123 Main", "Australia", 120.50]; // main array

let david = [...tomSmith]; // copy of main array as to not mutate the original

david.splice(2, 1, 'ireland');
console.log(david); // ["Tom Smith", "123 Main", "ireland", 120.5]


// slice() - takes in one value and returns anything left AFTER that value
let array = [1, 2, 3, 4, 5];
let myArray = array.slice(2); // take everything after the index value of 2

console.log(array); // [1, 2, 3, 4, 5] 
console.log(myArray); // [3, 4, 5]





const temperatures = [69, 82, 73, 64];



// array - accessing elements in an array .includes()
/* The includes() method determines whether a string contains the characters of a specified string.
This method returns 'true' if the string contains the characters, and 'false' if not.

*/




let condition = string.includes('the');
console.log(condition); // result is true

//=====================================
const temperatures = [69, 82, 73, 64];
console.log(temperatures.includes(82)); // result: true




//indexOf() only works for single numbers and strings and gives an index as a result
console.log(temperatures.indexOf(69)); // the result would be 0 - being the first index number, 73 would give an index result of 2 etc.
console.log(temperatures.indexOf(50)); // result would be -1, which indicated it is not in the array


// what if we wanted a true or false value.
// eg if '50' is or is not in the array, give a true or false result
// use .includes();
console.log(temperatures.includes(50)); // result is false


// array with an object
const temperatures = [
	{
		degrees: 69,
		isRecordTemp: false
	},
	{
		degrees: 82,
		isRecordTemp: true
	},
	{
		degrees: 73,
		isRecordTemp: false
	},
	{
		degrees: 64,
		isRecordTemp: false
	}
];



// note, we cannot use includes as it only works with primative values such as strings and numbers


// includes(), some() and every() - used to test if a condition is true or false usually

// we use .some(), which iterates over an object inside an array and returns the first instance
// we use an arrow function inside the paramter to get what we need
// which in this case, 'if the value of the key isRecordTemp is true' then give true or false

// check for at least one element that has a value of true ( once it finds it, the condition will stop)
const result = temperatures.some((temperature) => temperature.isRecordTemp === true);

// but what if we want to return ALL elements that meet the condition
const result = temperatures.every((temperature) => temperature.isRecordTemp === true);


/* RE-NOTE
 if 'some' of your array values correspond to what you’re looking for, .some() will return true. If not, it’ll return false.
 As soon as one true is returned, .some() will itself return true. If none of the values, when processed in your condition,
 return true (if they all return false), then .some() will return false.

 you can also check if every value of the array matches your condition by using .every() .
 It works exactly like .some(), but will return true only if 'every occurence matches'.

 .find() will return the first match. If more values match your condition, it won’t matter.
 Only the first match will be returned. If you need a list of all matches,
 then you should use .filter() instead of .find()


*/




// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
	{ song: "Shape of You", timesStreamed: 2.384, wonGrammy: true },
	{ song: "One Dance", timesStreamed: 1.791, wonGrammy: false },
	{ song: "Rockstar", timesStreamed: 1.781, wonGrammy: false },
	{ song: "Closer", timesStreamed: 1.688, wonGrammy: false },
	{ song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true }
]

const hasWonGrammy = songs.some(song => song.wonGrammy === true);
console.log(hasWonGrammy);

const allMegaHits = songs.every(song => song.timesStreamed > 1.5);
console.log(allMegaHits);



// more some(); - note we can also use Object.entries(), values and keys here

const meats = {
	beyond: 10,
	beef: 5,
	pork: 7
};



// check if there is at one of at least 5 type of meat
// Looping over an Object requires using Object.values, Object.keys and Object.entries
// loop over the values and if there is meets over 5, then say true . NOte: some() returns a boolean
const someMeats = Object.values(meats).some((item) => {
	return item >= 5;
})
console.log(someMeats); // true



// check if all has meets over 5
const allmeats = Object.values(meats).every((item) => {
	return item >= 5;
})
console.log(allmeats); // true




// sort() prices inside an object but also include the name, not just the price itself
const prices = {
	hotDog: 453,
	burger: 765,
	sausage: 634,
	corn: 234,
};


// testing for array positioning of a and b
const allPricesSorted = Object.entries(prices).sort(function (a, b) {
	debugger;
})
console.log(allPricesSorted); // look at adev tools and see 


const allPricesSorted = Object.entries(prices).sort(function (a, b) {
	const priceA = a[1]
	const priceB = b[1];
	return priceA - priceB;
})

console.table(allPricesSorted);





// map()
const temperatures = [
	{ degrees: 69, isRecordTemp: false },
	{ degrees: 82, isRecordTemp: true },
	{ degrees: 73, isRecordTemp: false },
	{ degrees: 64, isRecordTemp: false }
];


// what if we wanted to set all 'isRecordTemp' to true and that every day was a record temperature
// we use map() which will reset the existing array and give us back a NEW array

const newTemp = temperatures.map(function (temperature) {
	// set IsRecordTemp to true
	temperature.IsRecordTemp = true;
	// return the result to the function
	return temperature;
});

// call the function with the new array
console.log(newTemps); // all IsRecordTemps is set now to 'true'


// using arrow function
const newTemps = temperatures.map(temperature => {
	temperature.isRecordTemp = true;
	return temperature;
});
console.log(newTemps);



// if we wanted to add another key: value we can do the same as above but set a new key

const newTemps = temperatures.map(temperature => {
	temperature.isHigh = true;
	return temperature;
});

// now the console will print...
// [{degrees: 69, isRecordTemp: false, isHigh: true},
// {degrees: 82, isRecordTemp: true, isHigh: true},
// {degrees: 73, isRecordTemp: false, isHigh: true},
// {degrees: 64, isRecordTemp: false, isHigh: true}]



// now what if we wanted to show another key based on a value
// for example if degrees was greater than 70, add into the object isHigh: true
// think same as above using ternary operator

const newTemps = temperatures.map(temperature => {
	// if condition equals true ? then do something : or do something else
	// so if degrees is greater than 70 ? add to the temperature array isHigh and if not use just the temperature array
	temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
});

console.log(newTemps);







//spread operator is also good with arrays instead of using the concat() operator;
// it clones the original array and and does not mutate
let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ] 


// we can also do .push()


let arr = [1, 2, 3];
let newArray = [];

arr.forEach(item => {
	newArray.push(item);
});

console.log(newArray);





// or we can use Array.from()

let arr = [1, 2, 3];
let newArray = Array.from(arr);
console.log(newArray);



let arr = [1, 2, 3];
for (const item in arr) {
	console.log(item)
}



// molding arrays with .findIndex(), spread and slice()

//what we are trying to achive here is to merge arrays, find an item and replace it

const breakfastMenuIdeas = ["Buckwheat Pancakes"]; // array 1
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"]; // array 2

// combine arrays using spread operator and individual items
const allMenuIdeas = [
	...breakfastMenuIdeas, // spread merge
	"Harvest Salad",  // item merge
	"Southern Fried Chicken", // item merge
	...dinnerMenuIdeas // final spread merge
];

console.log(allMenuIdeas); // show the new completed array in the console

// now we use findIndex() to look for the Harvest Salad
const saladIndex = allMenuIdeas.findIndex(item => item === 'Harvest Salad');

// create a new array and using slice() start from the index which is 0,
// and go to the variable called saladIndex which holds the item "Harvest Salad"

/* Note on slices

 array.slice(from, until);

From: Slice the array starting from an element index
Until: Slice the array until another element index */

// add the allMenuIdeas array using spread operator, then slice it, then replace with new term
const undatedItem = [...allMenuIdeas.slice(0, saladIndex),
	"Garden Salad",
]


// also remember the previous way we can do this

//however now we can use the findIndex() operator on the array

const items = [23, 3452, 334, 31];
const myItem = items.findIndex(item => item === 23);
items[myItem] = 400;

console.log(items); // result: [400, 3452, 334, 31]





// array destructuring

/* using the same desctructuring for objects, we can do with arrays.
Remember index values for this! */

const finalMenuItems = [
	"American Cheeseburger",
	"Southern Fried Chicken",
	"Glazed Salmon"
];

// what if we wanted to take the values of this array and put them into variables?

// well we could do something like this
const first = finalMenuItems[0];
const second = finalMenuItems[1];
const third = finalMenuItems[2];

// but this is repeditive and we dont want to do this
// Best to use destructuring!!! ... like we did with objects

const [first, second, third] = finalMenuItems;
// note index in the array being 0, 1, 2 = same as its position in the finalMenuItems array
// also instead of using {} for object destructuring, we are using [] for arrays!
// destructuring does NOT mutate the original array either.

console.log(first) // result: American Cheeseburger
console.log(second) // result: Southern Fried Chicken 
console.log(third) // result: Glazed Salmon  
// also note if we console.log(typeof first, typeof second, typeof third); // we get a string value


// what if we wanted to separate the array
// say we have the first item in one array and the rest in another array

const finalMenuItems = [
	"American Cheeseburger",
	"Southern Fried Chicken",
	"Glazed Salmon"
];

const [winner, ...losers] = finalMenuItems;
// note index and spread which in this case is called 'rest'
// so at index 0 we have American Cheese Burger
// and the rest, indeicated by '...' is in a other array

console.log(winner) // result: American Cheeseburger
console.log(losers) // result: Southern Fried Chicken and Glazed Salmon

// Finally what if we wanted to make this variables into key: value pairs
// we could do something like this...
console.log({ winners });
console.log({ losers });






// Challenge: destructuring
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes


const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// array with first item / index 0, and the rest from fishDishes
let [chefsFishDishes, ...regularFishDishes] = fishDishes;

// array with first item / index 0, and the rest from meatDishes
let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;

// console.log(chefsFishDishes);
// console.log(regularFishDishes);
// console.log(regularMeatDishes);
// console.log(chefsMeatDishes);

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsMeatDishes, chefsFishDishes]
let regularDishes = [...regularFishDishes, regularMeatDishes];
console.log(chefsDishes);
console.log(regularDishes);








// looping over arrays -another way

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}


// a forEach() is better to understand
numbers.forEach(number => {
	console.log(number);
});


// we can also do a forEach as a callback function and add it to the forEach paramaters

// remember: function can be used as function(item, index, wholeArray)

function loop(item, index, array) {
	console.log(item, index, array);
}

numbers.forEach(loop);


// or we can use for 'of' loop
const names = ["david", "gary", "shaun", "stephen"];

for (let name of names) { // name can be any word, like with using a forEach() loop
	console.log(name)
}




// array methods - map() filter() reduce() spread operator '...' 


// ...spread operator

// avoiding mutations or updating instances of an original array.
// say we have an array as so...

const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

// we want to add to this array inside a new array. 
// what seems to correct to do is this we assign it

const allMenuIdea = lunchMenuIdeas;
allMenuIdea.push('club sandwich');

console.log(allMenuIdea) // ['Harvest Salad', 'Southern Fried Chicken', 'club sandwich'];
//now if we console.log the lunchMenuIdes, we also get
console.log(allMenuIdea) // ['Harvest Salad', 'Southern Fried Chicken', 'club sandwich'];

// so in fact what we have done here is reference the lunchMenuIdeas with the new array and updated both
// what we need to do is, create a 'copy' and make sure the original array is left alone.
// we can do this using the spread operator '...'

const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];
// assign a copy of the lunchMenuIdea array to a new var and without using push(), just add the new item
const allMenuIdea = [...lunchMenuIdeas, 'club sandwich'];
console..log(allMenuIdea);

// this approach is better as we do not need to use .shift() or .unshift() as we can simply add arrays together using spread
// for example..

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8];

const completeArray = [...array1, ...array2, 9, 10, 11, 12];
console.log(completeArray); // result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(array1); // result: [1, 2, 3, 4, 5]
console.log(array2); // result: [6, 7, 8]








// find an item and replace it using .findIndex()

// previously we could use .indexOf() to find an element
// indexOF takes the actual value from an array and returns the index value
const items = [23, 3452, 334, 31];

var i = items.indexOf(3452);
items[i] = 20200;
console.log(items); // [23,20200,334,31];




//however now we can use the findIndex() operator on the array

const items = [23, 3452, 334, 31];
const myItem = items.findIndex(item => item === 23);
items[myItem] = 400;

console.log(items); // result: [400, 3452, 334, 31]

// for 
const index = items.findIndex(x =>
	x.jerseyNumber === 9 && x.school === 'Ohio State'
)

items[index].lastName = 'Utah'
items[index].firstName = 'Johnny'










// subsets of data - a slice of an array (used for search values)
// the .filter() method - returns a number of items if condition is met
// take this array of object data we are using for a 'search restaraunt app'

const restaurants = [
	{ name: 'Cap City Diner', milesAway: 2.2 },
	{ name: 'Chop Shop', milesAway: 4.1 },
	{ name: 'Northstar Cafe', milesAway: 0.9 },
	{ name: 'City Tavern', milesAway: 0.5 },
	{ name: 'Shake Shack', milesAway: 5.3 }
]

// we can use .filter() to get the name of all restaraunts beginning with 'C'

// here we create a var and use .filter and .startsWith to get the name beginning with C
const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'));
console.log(results);

// what it we want to get places that start with C and are within a 2mile radius?
// we can use ternary for this inside the above filter method

const results = restaurants.filter(
	restaurant => restaurant.name.startsWith('C') && restaurant.milesAway < 2)

console.log(results);


// we want to return one item we can use .find()
// unlike .filter() which returns many items that meet a condition, 
// .find() will return one value that meets a condition
// in other words when it iterates over an array, its stops and returns the first item that is validated

// find a restaraunt that begins with 'north' and is less than 2miles away
const restaurants = [
	{ name: 'Cap City Diner', milesAway: 2.2 },
	{ name: 'Chop Shop', milesAway: 4.1 },
	{ name: 'Northstar Cafe', milesAway: 0.9 },
	{ name: 'City Tavern', milesAway: 0.5 },
	{ name: 'Shake Shack', milesAway: 5.3 }
]


const results = restaurants.find(
	restaurant => restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2)


console.log(results);


// or we can do something like this

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr.find(el => el > 5);

console.log(found);




// .indexOf();
const arr = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex = arr.indexOf('Frank');

console.log(foundIndex); //result 1








// reduce - probably the most important method for arrays
// read up on reduce() here:  https://alligator.io/js/finally-understand-reduce/



// previously if we want to add all values from an array we did this..
let values = [3, 5, 6, 8, 6, 7, 8, 67]; // the array
let total = 0; // base number set to zero

for (let value of values) {
	total += value;
}

console.log(total); // result 110



// convert the above using the reduce() method 
let values = [3, 5, 6, 8, 6, 7, 8, 67];

const totalAmount = values.reduce((accumulator, initialValue) => {
	return accumulator + initialValue;
}, 0);

console.log(totalAmount);


// or we can do this with a function and just add it to the reduce()


function getTotal(acc, value) {
	return acc + value;
}

const amount = values.reduce(getTotal);
console.log(amount) // result 110





/*
 reduce takes a callback funtion. Inside the callback, it takes two parameters. Accumulator and initialValue (could be named anything)
 Accumulator => holds the total
 InitialValue => holds each individual item as it loops over the array because the value represents each item
 So... as the loop it iterated, each VALUE is added to the ACCUMULATOR
 FINALLY, we set an intial value after the callback which is in this case is 0, could be an array or an object!
*/





//. reduce() with array of objects
// take the following array of objects, we want to iterate over the array and add the price values together

const menuItems = [
	{ item: "Blue Cheese Salad", price: 8 },
	{ item: "Spicy Chicken Rigatoni", price: 18 },
	{ item: "Ponzu Glazed Salmon", price: 23 },
	{ item: "Philly Cheese Steak", price: 13 },
	{ item: "Baked Italian Chicken Sub", price: 12 },
	{ item: "Pan Seared Ribeye", price: 31 }
];

// reduce looks like this:  menuItems.reduce()

// what we need to know is here is agin ...

// reduce iterates over all elements of the array
// reduce uses a callback function: array.reduce( () => {} );
// reduce takes 2 parameters, the function and initial value of the operation we are doing

//  so as we have price, we want to set the value to 0 as we are counting up to a total
//  array.reduce( () => {}, 0 );

// reduce uses whats called 'accumulator' which is basically a storage device that is returned to the function.

// accumulator must be run
// accumulator must be returned 


// with the accumulator there needs to be a second argument, named like using map or filter
// that is a target name for the iteration

array.reduce((accumulator, value) => {
	return accumulator + menuItem[prop];
}, 0);


// so how do we get the value of all the price amounts in total?
// we need to iterate over each item and add the price to the accumulator as it loops over each item

// look at the array.
// iterate over each item starting from the value 0 (the 2nd paramater we set already)
// then add each price (menuItems.price) to the accumulator
// return the accumulator to the reduce() function

const menuItems = [
	{ item: "Blue Cheese Salad", price: 8 },
	{ item: "Spicy Chicken Rigatoni", price: 18 },
	{ item: "Ponzu Glazed Salmon", price: 23 },
	{ item: "Philly Cheese Steak", price: 13 },
	{ item: "Baked Italian Chicken Sub", price: 12 },
	{ item: "Pan Seared Ribeye", price: 31 }
];


menuItems.reduce((accumulator, menuItem) => {
	//console.log(`accumulator: ${accumulator}, price: ${menuItem.price}`); // lets run accumulator and menuItem.price through the console to test
	return accumulator + menuItem.price; //  add price value to the accumulator
}, 0); // start the value of the menuItem at 0 and then add menuItem.price as per iteration


//assign the above to a var

const total = menuItems.reduce((accumulator, menuItem) => {
	return accumulator + menuItem.price;
}, 0);

console.log(total); // result: 105






// another example reduce() with an array of objects

const users = [
	{
		id: 2345234,
		name: "John",
		age: 29
	},
	{
		id: 8798129,
		name: "Jane",
		age: 42
	},
	{
		id: 1092384,
		name: "Jane",
		age: 17
	}
];


//iterate over the nested object and get a each person object ito an array
// we could use .map() and .filter()

// but if we need to chain then its best to use .reduce()



const usersOver20 = Object.entries(users).reduce((accumulator, [id, user]) => {
	if (user.age > 20) {
		accumulator.push({ ...user, id }); // spread in the user and add the id
	}
	return accumulator;
}, []); // the callback array is used as we want to start from an empty array


console.log(usersOver20);
// result: [{name: "John", age: 29, id: "2345234"}, {name: "Jane", age: 42, id: "8798129"}]















// FINAL REVISION FOR ARRAYS - take note

/* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()
- Object.keys(), Object.values(), Object.entries()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/












/* The DOM */

/*
	What is the DOM - (DOM - Document Object Model)
	Getting single and multiple HTML elements
	Create and modify HTML elements
	Dynamically add CSS styles
	Work with and understand events



	DIFFERENCE BETWEEN HTML COLLECTION AND NODELIST 

	nodelists are obtained by using document.querySelector - a nodeList is which is like an arrray but not an array - returns static nodes or childNodes
	We can use a forEach loop over the elements

	htmlCollection is a collection  of elements by using document.getElementsByClassName - returns a live HTMLCollection - does not include text nodes

	Use console.log() and console.dir() over html collections or nodelists and check dev tools to see what functions can be run dependinbg on the output.

*/

const wes = document.querySelector('.wes');

// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p); // add to an element can also use .insertAdjacentElement('beforeBegin', p) or insertAdjacentHTML() etc

p.remove(); // removes an element

console.log(p);

document.body.appendChild(p);

// looping over elements

/*
<header>
  <a href="/" id="home">Home</a>
  <a href="/login">Login</a>
  <a href="/signup">Signup</a>
</header>*/

// get all elements 
const links = document.querySelectorAll('a'); // returns a node list (not an array but a list of NODES)
// NodeLIsts do NOT have the same methods as an array as it must be converted in order to use map(), reduce(), filter() etc


// create the loop in a forEach which is used with working with the DOM on a NODELIST
// then if one of the links has a href of '/login' - check to see if it meets the condition
//remember we wrap a in [] as we are looking for an attribute of href='/login'
// then assign it to a var and print it to the console
links.forEach((link) => {
	if (link.matches(a[href = "/login"])) {
		const loginLink = link;
		console.log(loginLink);
	}
})



// if we use getElementsbyTagName() - we cannot iterate over the NODELIST, we need to convert it to an an array
const divs = document.getElementsByTagName('div')
console.log(divs); // result: html collection which doesnt have a node list 
// if we use divs.forEach(div => {console.log(div)}) result: foreach is not a function
// we must convert the divs variable to an array so we can use array methods

// here is now we do it...

// using ES6 spead operator

const spanList = [...document.querySelectorAll("span")];

//or we can use Array.from() with a forEach()
const myElements = document.querySelectorAll('.viewcount');
let myArray = Array.from(elList).forEach(function (el) {
	el.classList.replace('el', 'm-new-class');
});




// console.dir() 

const heading = document.querySelector('h2');
console.dir(heading); // will return object properties of the h2 considering an element is an object
//from here we can do all sorts of things like see its classList and see its parentElement etc - REALLY USEFUL
const newText = heading.textContent = 'this is cool';
console.log(newText);








// adding elements and manipulation
// ==============================

const p = document.createElement('p'); // create an element
p.innerText = 'Hello world'; // add text to the element
document.body.append(p); // add the the element to the document body at the end of the document

document.body.style.background = 'palegoldenrod'; // assign background color to the document body
p.style.color = '#05f'; // assign style to the p element

p.addEventListener('click', () => console.log('clicked')); // add a click event using arrow function to the p element 


// insertAdjacentext - will add text to the end of an adjacent string


// <p>This is some text</p>
const p = document.querySelector('p');
p.insertAdjacentText('beforeend', 'this is added text'); // look up 'MDN elements'
console.log(p); // <p>This is some text this is added text</p>



//insertAdjacent Element
const list = document.createElement('ul');
const li = document.createElement('li');


li.textContent = 'three';
list.appendChild(li); // place li inside the ul

const li5 = document.createElement('li'); // create list element

const li1 = li5.cloneNode(true); // clone the li5 const and use 'true' to carry over the text orherwise it will just clone the li element
li1.textContent = 'one'; // change the li1 text

list.insertAdjacentElement('afterbegin', li1); // add the li1 to the list







// .prepend () and .append()

const newPost = document.createElement('div'); // create a new div
newPost.className = 'top-post'; // give it a class name
newPost.innerHTML = "<strong>This is a new post</strong>" // add some content to the div.top-post
document.body.prepend(newPost); // append to the end 
document.body.prepend(newPost);  // and prepend to the start

// to get the name of the class
console.log(newPost.className);



// classList

// take an element and run console.log(classList) to view all the properties that we can do
console.log(element.classList);

// this will show us that we can add, remove, replace etc. its like console.dir() on an element which will show all properties we can work with

element.classList.add("some-class"); // result <div id="my-element" class="some-class"></div>

// adding 2 classes
element.classList.add("class1", "class2"); // result <div id="my-element" class="class1 class2"></div>


//removing a class
element.classList.remove('active');

// removing multiple classes
element.classList.remove("class1", "class2");

// replacing a class
element.classList.replace("old-class", "new-class")

// get attribute value
// get element with an id of 'myBtn and then get the value of the attribute 'onClick'
var x = document.getElementById("myBtn").getAttribute("onClick");




// example of using Toggle with a css class
const p = document.querySelector('p');

function toggleRound() {
	p.classList.toggle('round');
}

p.addEventListener('click', toggleRound);

// the css .round{border-radius: 50%, box-shadow: 0 0 10px black; rotate(1turn)};






// DOM CSS


//when using css in js make sure we always start with 'style',
// then camelcase the property, finally passing a string as the value

const post = document.querySelector(".post");
post.style.margin = '30px';
post.style.backgroundColor = '#555';
//when using css in js make sure we always start with 'style',
// then camelcase the proporty






// DOM attributes / datasets


{/* <img src='somepath/somepicname.jpg' alt="some alt name" /> */ }

const img = document.querySelector('img');
console.dir(img); // to see the properties of the img object. thern select something like the alt
img.alt = 'this is the new alt text';
console.log(img);




// getting datatypes
{/* <img src='somepath/somepicname.jpg' data-name="david/> */ }
const img = document.querySelector('img');
console.dir(img); // look at the properties
console.log(img.dataset); // will show is the object of the data- instances
// then we can get the name by saying
img.dataset.name// returns david


img.addEventListener('click', () => {
	alert(img.dataset.name);
})



// Template Literals in the DOM

const image = `https://picsum.photos/id/1/200/300`; // use back ticks instead of quote string as will only have qoutes inside quotes in the literal
const width = 500;
const alt = `this is alt image text`;


const myHTML = `
		<div class="wrapper">
		<h2>This is a heading</h2>
		<img src="${image}" alt="${alt}" width="${width}" /> 
		</div>`


const div = document.getElementById('myDiv');
div.innerHTML = myHTML; // this will put the myHTML into the div already on the page and replace whatever is currently there

/* Note on adding HTML literals in the DOM

	Remember: we cannot get the class or target this specific code until it has been added to the DOM
	console.log it using the typeof operator and you will see that it is just a string console.log(typeof myHTML)
	first we have to add it to the DOM, THEN we can add and remove classes or whatever we need to do

	a way to void this issue is to convert it from a string to actual elements using .createRange.createContextualFragment();
	Create a fragment and add the myHTML template literal to it
	Then insert that inside the DOM

	Note: fragment is just another way to say 'html'
*/

const fragment = createRange().createContextualFragment(myHTML);
console.log(fragment)// now we can see we have html element
// so now we can look inside this 'fragment' and get an image if we want to
const fragImg = fragment.querySelector('img');
console.log(fragment);

// if we want to add the 'fragment' to the body we just need to append it to the DOM
myDiv.appendChild(fragment);
// or use 
myDiv.insertAdjacentElement("afterbegin", fragment);







// events

// regular function
el.addEventListener('click', function () {
	console.log('clicked');
}


// or we can just include a function like so
function someFunction() {
		console.log('just a function passed into an event');
	}


el.addEventListener('click', someFunction);


// arrow function
el.addEventListener('click', (event) => {
	// console.log(event.target); this will give us the <body> tag
});


// if the function has one parameter we can remove the additional brackers
el.addEventListener('click', event => {
	// console.log(event.target); this will give us the <body> tag
});

// removing listeners
// to remove a listener we need to have passed a function directly. using anonymous functions will not work
// // to use removeEventListener must have reference to the original function

function someFunction() {
	console.log('just a function passed into an event');
}


el.addEventListener('click', someFunction);
el.removeEventListener('click', someFunction); // this works because a function was passed a a second param to the listener even


el.addEventListener('click', function () {
	console.log('click');
})

el.removeEventListener('click', function () {
	console.log('click');
})


/*

  Event Targets


  <button data-price="1" class="buy">buy-item 1</button>
  <button data-price="2" class="buy">buy-item 2</button>
  <button data-price="3" class="buy">buy-item 3</button>
  <button data-price="4" class="buy">buy-item 4</button>
  <button data-price="5" class="buy">buy-item 5</button>
  <button data-price="6" class="buy">buy-item 6</button>
  <button data-price="7" class="buy">buy-item 7</button>
  <button data-price="8" class="buy">buy-item 8</button>
  <button data-price="9" class="buy">buy-item 9</button>
  <button data-price="10" class="buy">buy-item 10</button>
  
  */

const buttons = document.querySelectorAll('.buy');


function handleClick(event) {
	// console.log(event) - show all methods for the event object
	// console.log(event.target);
	// console.log(event.currentTarget);
	console.log(parseFloat(event.target.dataset.price)); // dataset will get the data attribute and price is what the dataset-item is. parseFloat will turn a string into a number
}


buttons.forEach((button) => {
	button.addEventListener('click', handleClick);
})



// refactoring the above code

const buttons = document.querySelectorAll('.buy');



function handleClick() {
	console.log('buyItem');
}


function handleClickItem(btn) {
	btn.addEventListener('click', handleClick); // contains the function the console.log to print buy Item

}

buttons.forEach(handleClickItem); //foreach contains the handleClick function which runs the event listener and the param for the foreach loop




// EVENT OBJECT
// event. target and event.current target

event.target // refers to the item being clicked - returns a nodelist
event.currentTarget // refers to the item that fired the event = returns html DOM element

// in other words currentTarget is always the object listening for the event, target is the actual target that received the event

// lets say we have this code



const buttons = document.querySelectorAll('.buy');


buttons.forEach((btn) => {
	btn.addEventListener('click', handleClick);
})



function handleClick(event) {
	console.log(event.target); // will show the item that was clicked
	console.log(event.currentTarget); // will show the event that fired the listener
	console.log(event.target.dataset.price); // this will show the dataset from the atttribute
	event.stopPropagation(); // this will stop the click event clashing with other event Listeners further up the DOM;
}

// using the 'this' keyword with function and listeners
// when ever we use 'this', we refer it to what is on the left of the function or event/
// for example
allmyButtons.addEventListener('click', function () {
	console.log(this); // this will refer to 'allmyButtons
})

// however , when we use an arrow function, this refers to the next available returned function, NOT the function containing 'this'
allmyButtons.addEventListener('click', () => {
	console.log(this); // this will NOT refer to the listener, but the window object
})




// click inside the document that has the class of post and console.log the message

// lets say we have a html document which has muliple <div class="post">some content</div>
document.body.addEventListener('mouseover', event => {
	if (!event.target.closest('.post')) return;

	console.log('Do you want to edit this post?')
})





// Challenge: 
// 1. Select h1 and add a click event listener. 

/*	<h1>Coding challenge: Events</h1>
	<h2>I can create HTML elements!</h2>
	<h3>But can I use event listners?</h3>
 */

// Log the text from the element to the console.

// To access text value of the target we set the event on, use 
event.target.value
// or
event.target.textContent

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them

const title = document.querySelector('h1');
title.addEventListener('click', (event) => {
	console.log(event.target.textContent);
});

document.body.addEventListener('mouseover', (event) => {
	console.log(event.target.textContent);

});







// Events Contd.....scroll


//using the window object to find the height of the browser and alert something when it reaches the end
// https://www.youtube.com/watch?time_continue=384&v=V9CY0F4Wc7M&feature=emb_logo - looks at scrolling on the window object



window.addEventListener('scroll', myFunction);


function myFunction() {

	const scrollAmount = event.currentTarget.scrollY; // this will get the number of the amount scrolled on the window object;
	// console.log(scrollAmount); //result is an increasing number

	// get the total scrollable height of the document: document scroll height - inner window height
	const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
	// console.log(scrollableHeight); // result is a fixed number

	// if both consts are equal then alert
	if (Math.ceil(scrollableHeight) === scrollAmount) {
		alert('This is the end of the document');
	}

	// we use math.ceil() to round off the scrollableHeoight number

}



/* REMEMBER difference between scrollY / X and scrollTop 
	- scrollY and scrollX are methods on the window object
	- scrollTop is for a overflow:scroll style on a DIV where a DOM element has a scroll bar
*/


// Scrolling on elements and using intersectionObserver method

// get a div wrapper as an example
const elWrap = document.querySelector('.wrapper');

elWrap.addEventListener('scroll', scrollFunction);

function scrollFunction(event) {
	const scrollAmount = event.currentTarget.scrollTop;
	console.log(scrollAmount);
}








// Promises

// async code is code that continues to run despite other code being run next in the callstack.
/* Say we have function within a function, the outer function has to run before the inner function runs. But what if there is a problem with the outer or inner function? the whole function errors and then we are left with nothing.
Using asyc with promises helps us to write cleaner code, without the use of functions inside functions that error out */

// https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial
/* A promise is like a life promise, when someone says they 'promise' to do something
it is either completed or rejected */




// callbacks -> promises

// States of a promise:
// pending - when a promise is used the action is always pending until it decides to be fulfilled or rejected
// fulfilled - when a promised is successfully executed
// rejected - when the code fails to execute


// creating a promise - uses a callback arrow function and takes 2 x params, resolve and reject
new Promise((resolve, reject) => {

	// use code to execute such as timeout here where something need to wait
	// let that code resolve using 'resolve' keyword set in the param of the new promise
	// if rejected, the catch() is called
	// resolve = then()
	// reject = catch()


});

// then we chain on then() which is attached to the 'resolve' and catch() which is attached to reject using callback arrow functions
promise.then(() => console.log('success')).catch(() => console.log('failed'));


// example
const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('done'), 1000);
});

promise.then(() => console.log('success')).catch(() => console.log('failure')); //result 'success'

// resolve is attached the .then() - so if the resolve parami is executed, it will go straight to then()
// reject is attached to .catch() - so if the code fails, it goes to the catch() function


const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('done'), 1000);
});

promise.then(value => console.log(value)).catch(() => console.log('failure')); // result: 'done' - from the setTimeout function




// show a rejection
const promise = new Promise((resolve, reject) => {
	setTimeout(() => reject(Error('Promise failed.')), 1000);
});

promise.then(value => console.log(value)).catch(() => console.log('failure'));



// Promise.all()
/* 
this will call two or more promises to execute at the same time.
If one promise is delayed, then the one that isnt will wait, til they run together
	
example....
	
*/

const youTube = new Promise((resolve, reject) => {

	setTimeout(() => {
		console.log('getting stuff from youtube');
		resolve({ videos: [1, 2, 3, 4, 5] })
	}, 2000);
});

const faceBook = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Now facebook feed has loaded');
		resolve({ feed: ['all', 'user1', 'user 2'] });
	}, 5000); // note the diffence in timing from this and above
})


const theConsole = Promise.all([youTube, faceBook]).then((result) => console.log(result));

console.log(theConsole);


/* 
Result: 
	
getting stuff from youtube // our console logs fom the youtube
Now facebook feed has loaded // our console log  from the facebook
	
(2) [{…}, {…}]
0: {videos: Array(5)} then we get the videos array from the resolve
1: {feed: Array(3)} then we get the feed array from facebook
	
*/



const recordedVideo1 = new Promise((resolve, reject) => {
	resolve('This is the first Video');
})


const recordedVideo2 = new Promise((resolve, reject) => {
	resolve('This is the second Video');
})


const recordedVideo3 = new Promise((resolve, reject) => {
	resolve('This is the third Video');
})

Promise.all([recordedVideo1, recordedVideo2, recordedVideo3]).then(item => {
	const myString = item.toString(); // converts array to multple string
	console.log(myString);

	const myArray = myString.split(','); // converts string to 3 string array
	console.log(myArray);

});




// using setTimeout Function to call in 3 promises at the same time 

const video1 = new Promise((resolve, reject) => {

	setTimeout(() => {
		resolve('this is video 1');
	}, 3000)
});


const video2 = new Promise((resolve, reject) => {

	setTimeout(() => {
		resolve('this is video 2');
	}, 1000)
});



const video3 = new Promise((resolve, reject) => {

	setTimeout(() => {
		resolve('this is video 4');
	}, 6000)
});




const allVideos = Promise.all([video1, video2, video3])
allVideos.then((item) => {
	console.log(item);

}).catch(() => {

	console.log('these items did not load');
})


console.log(allVideos);










// fetch() - getting calling from an API


// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

// GET /posts/1 - single blog post
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json()) // converts the response to json data
	.then(data => console.log(data.title)) // here we are logging the title of the first post in the API



// POST REQUEST /posts

// create the post we want to add inside an object
const blogPost = {
	title: "Cool post",
	body: "lkajsdflkjasjlfda",
	userId: 1
}

fetch('https://jsonplaceholder.typicode.com/posts', { // the function to add our post to the API
	method: "POST", // this section must be added as per API documentation
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(blogPost) // convert json data to a string
})
	.then(response => response.json())
	.then(data => console.log(data))




// stringify - what it does?: Converts an object to a Json object for 




// better ways of understanding API and fetch
// ============================================== 


// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// the api: https://randomuser.me/


// simple code to remember
const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url) // Call the fetch function passing the url of the API as a parameter
	.then(response => response.json()) // converts the response to json data
	.then(data => {
		const title = data.title;
		const imageUrl = data.img;
		console.log(title, imageUrl);
	})
	.catch((error) => {
		console.log(Error(error));
	});


// another example


fetch('https://jsonplaceholder.typicode.com/posts/')
	.then(response => response.json())
	.then(data => {

		const allData = data.map(item => ([item.title, item.id]));
		console.log(allData);

	})





/* the html
	
<body>
<h1>Authors</h1>
<ul id="authors"></ul>
</body>
	
*/

// function to create element
function createNode(element) {
	return document.createElement(element);
}

//appending
function append(parent, el) {
	return parent.appendChild(el);
}


// vars
const ulList = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
	.then((resp) => resp.json())
	.then(data => {
		let authors = data.results; // get all data. .results comes from the api. open url above and see 'results' holds all the data

		return authors.map(author => {
			let li = createNode('li'),
				img = createNode('img'),
				span = createNode('span'),
				img.src = author.picture.medium;
			span.innerHTML = `${author.name.first} ${author.name.last}`;

			append(li, img); // apend img to the url
			append(li, span); // append span to the li
			append(ulList, li); // append the li to the ul
		})
	})
	.catch(error => {
		console.log(JSON.stringify(error));
	});


// The JSON.stringify() method converts a JavaScript object or value to a JSON string,





// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

fetch("https://jsonplaceholder.typicode.com/users/3")
	.then(response => {
		if (!response.ok) {
			throw new Error(response.status);
		}
		return response.json();
	})
	.then(person => {
		console.log(`${person.name} works for ${person.company.name}`);
	})
	.catch(err => console.log(err));








// practicing fetch with API above

fetch('https://jsonplaceholder.typicode.com/posts/')
	.then(response => response.json())
	.then(data => {

		const results = data.map((item) => {
			let id = item.id; // get all the ID's
			if (id <= 6) { // loop over them and if they are less or equal to 6
				console.log(item); //then print the item or use item.title to print 6 titles
			}

		})


	}).catch(error => {
		console.log(JSON.stringify(error));
	});



// another

fetch('https://jsonplaceholder.typicode.com/posts/')
	.then(response => response.json())
	.then(data => {

		const allData = data.map(item => ([item.id, item.tite])); // array with 2 keys from the data object
		console.log(allData);

	})






// Higher order functions (closures)


// First Recap on closures - to be able to call a function and its param from inside another function - child to parent
function counted() {

	let count = 0;

	return function () {

		count++;
		return count;
	}
}

const countMe = counted();

console.log(countMe()); // returns 1
console.log(countMe()); // returns 2
console.log(countMe()); // returns 3






// same as above but with using params
function counted(steps) {

	let count = 0;

	return function () {
		count += steps;
		return count;
	}

}


const countMe = counted(2); // assign the outer function to a variable
console.log(countMe());  // then conssole that variable with function params as countMe is now a function
console.log(countMe()); // returns 4
console.log(countMe()); // returns 6





// Higher Order functions  - a partial application function using params in both parent and child function to get url and relative path combined
function getData(url) {
	return function (route) { // inner function
		fetch(`${url}${route}`)
			.then((response) => response.json())
			.then((data) => {
				const allData = data;
				allData.map((item) => {
					console.log([item.title, item.body]);
				})
			})

	}
};


const myPosts = getData('https://jsonplaceholder.typicode.com'); // evoke the first function and url param

myPosts('/posts'); // use myposts as a function and use the relative path as the url. then function is evoked and the result is all the posts from the complete url




// Partial application function using a callback

function getData(url, route) { // holds two paramaters: one for the url and for the relative path after the url
	fetch(`${url}${route}`) // here both params are joined by template literals to make the total url string
		.then(response => response.json()) // the data is converted to json format
		.then((data) => console.log(data)) // the console logs the data
		.catch(() => console.log('failure'));
}


getData('https://jsonplaceholder.typicode.com', '/posts'); // the outer function is called putting in the two values from the params in the function call. url + path
getData('https://jsonplaceholder.typicode.com', '/comments'); // here the two params are again the url, but the route paramater is now '/comments'



// the issue: we are calling the same url in each function paramater as a value. what if we could move this into another function and just make the call for the route...



function getData(url) {
	return function (route) {
		fetch(`${url}${route}`)
			.then((response) => response.json())
			.then((data) => console.table(data))
	}
}

const allData = getData('https://jsonplaceholder.typicode.com');
allData('/posts') // evoke to get the posts
allData('/comments') // evoke to get the comments



// now lets make it that we can iterate over all our posts since its an array and get the post title. this is where we use our callback function

function getData(url) { //our first function
	return function (route) { // our second function
		return function (callback) { // our third function
			fetch(`${url}${route}`)
				.then((response) => response.json())
				.then((data) => callback(data))
		}
	}
}

// what we have done with adding the callback function is just added another returned function and passed in the fetch block
// then we use the placeholder value of 'callback' into the third function and added it into the .then() instead of using console.log


// as previous, we assign the outer function to a variable which will pass the url as the first function param value
const allData = getData('https://jsonplaceholder.typicode.com');


// then we assign the /posts' value, which will be from the first inner returned function that holds the placeholder 'route'
const postData = allData('/posts'); // returns an array of objects

// and same for the 
const commentsData = allData('/comments'); // returns an array of objects


// for the third function (the inner most function that has the param of callback), we see the data is attached to this function
// So now that we have we can use this function to get what we need from the data invidually

// for the postData we again use it as a function since we need to get the callback as we did to get the url and the route

// get the postData function and pass in a function. then iterate over the array and get the data from the callback, and get the title
postData((posts) => {
	posts.forEach(item => {
		console.log(item.title);
	});

});


//same as this.... but with returned arrow function

postData(function (posts) { // create function inside the function
	posts.forEach(function (item) { // use a foreach over the posts paramater from the postData param and use a foreach to iterate over the array
		console.log(item.title); // console. log the title or by adding it via .innerHTML from a var created or whatever you want to output it
	})

}) // close the postData function







// Higher Order functions  - a partial application function using async and await
const getData = (url) => {
	return async (route) => { // inner function
		try {

			await fetch(`${url}${route}`)
				.then((response) => response.json())
				.then((data) => {
					const allData = data;
					allData.map((item) => {
						console.log([item.title, item.body]);
					})
				})


		} catch (error) {
			console.log(error)
		}

	}
};


const myPosts = getData('https://jsonplaceholder.typicode.com'); // evoke the first function and url param

myPosts('/posts'); // use myposts as a function and use the relative path as the url. then function is evoked and the result is all the posts from the complete url




// using partial application function (with callback and HTML


function getData(url) { // first function takes in the url placeholder
	return function (route) { // second function takes in the route placeholder
		return function (callback) { // third funtion takes in the callback placeholder for the data 
			fetch(`${url}${route}`)
				.then((response) => response.json())
				.then((data) => callback(data))
		}
	}

}

const allData = getData('https://jsonplaceholder.typicode.com'); // assign the url to the first function and put inside a const

const postsData = allData('/posts'); // assign the second function to another const


postsData((posts) => { // this is the final function, the callback where we use the data from the callback and ise a value called posts
	posts.map((item) => { // the 'post' parameter is used to run the map method over it 

		let titles = item.title; //assign the titles to a var
		console.log(

			`<ul><li>${titles}</li></ul>` // using template literals to combine html with the title variable
			// we can also assign this to a const and then add this to a page using inner html or whatever.
		);
	})
})




// Promises using ASYNC / AWAIT

/* Using async and await are ways to simplify promises. 
Basically we are using our promise inside a function. This is the ONLY way async will work.
We cannot use await until we are inside a function that is declared using the await keyword
	
Async functions are promises by default and is a cleaner way of creating promises
	
Take this code for example...
	
*/


/*
AFTER the url is called,
THEN the request is made and converted to a json object
THEN that data is console logged
*/
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then((response) => response.json())
	.then((data) => console.log(data));


// NOW we can use the promise above inside a function using the 'async' keyword
// by using the async keyword prepended to a function, and evoke it, we see the function is now a promise in itself.


async function getPostData() {
	// code here
}


// using an arrow function, it would look like this.
// Notnice how we put the 'async' keywork before the callback paramater
const getPostData = async () => {
	// code here
}


// as said, when we use the async keyword with a function, it will ALWAYS return a promise.
// Lets check that out

async function getPostData() {
	// code goes here
}

//evoke the function and chain on then() like we do for normal promises

getPostData().then(() => console.log('working')); // result is 'working' and we also see our promise is resolved.



// NOTE: as always, if the function runs ok ,then the .then() will execute because there is no error
// notice how we are not calling a value so the param inside then() is empty as we are consoling, not getting a value from the function




// what about resolving and rejecting like normal promises?
async function getPostData() {
	return 'works here too';
}

// well if the code inside a function is executed successfully, then the async keywork automatically passes it to the .then() callback, so if we wanted to get the value of the  function from it being returned we can do this...

async function getPostData() {
	return 'works here too';
}

getPostData().then((value) => console.log(value)); // result: works here too






// lets use a promise inside the function so we can see how this all works

async function getBlogPost() { // create the async function

	const myPromise = new Promise((resolve, reject) => { // create our new promise

		setTimeout(() => (
			resolve('Blog post loaded')), 3000);
	});

	myPromise
		.then((value) => console.log(value))
		.finally(() => console.log('function completed'))

}

//now, evoke getBlogPost
getBlogPost(); // result: Blog post loaded, function completed
// Note how the setTimeout function runs and when its completed, it gives the resolve value, THEN the finally() is fun right after it. This is where async is great, because it waits until one block of code is run before it continues

// The function above can be made easier. If we look at the code, there is three function blocks to run it, which is quite alot of code to run a simple Timeout function, before we used Promise.all() to make sure any amount of new promises run together, but with async code we have our promises INSIDE an ASYNC function to run our promises instead of seperate blocks brought into one.




// using 'await' with async - the final piece of the puzzle!

/* In our last lesson we learned out to create a promise inside an async function
 .. and that asyn only works with promises.
 When async is used and executed we can then chain on then()
 So when there is no error in the function the .then() is later called */

async function blogPost() {

	return 'function has executed';
}

// evoke the function, chain on then and get the value of the execution that is returned to the function
blogPost().then((value) => console.log(value)) //result 'function was executed' => promise


// So how does an async functions help with promises?

// 1. write a promise inside an async function
// 2. write a resolve , reject as per new promise
// 3. add in a setTimeout()
// 4. get the value of the solved promise
// 5. use .finally(), to show the funcion has been executed


async function myData() {

	const allData = new Promise((resolve, reject) => {

		setTimeout(() => {
			resolve('data loaded')
		}, 3000);
	})

	allData
		.then((value) => console.log(value))
		.finally(() => console.log('done'));

}


myData();



// result is 'data loaded'.... then 'done' is executed

// but the above code has three functions.
// what if we could tell the function to 'pause' until the promise is executed, WITHOUT using then() and finallly() ??
// THis is where we use 'await'


// using 'await' pauses our code and runs after the funtion is executed
// when we use 'await' we can do more with our code as we assign it to a variable
// we DO NOT need to chain on then() or catch() or finally() anywhere as 

async function getBlogPost() {

	// create promise
	const myBlogPromise = new Promise((resolve, reject) => {

		setTimeout(() => {
			resolve('this blog data has loaded')
		}, 4000);

	})

	const results = await myBlogPromise;
	console.log(results);
	console.log('the blog is displayed');
}

getBlogPost();
// result is: after a 4 second delay as per out setTimeout()
// we get 'this blog has loaded', then we get 'the blog has beeb displayed'


/* NOTE: this above code does not get rid of promises.
   We are just wrapping promises in a better syntax.
   We cannot use 'await' unless a function is prepended with the 'async' keyword
*/



// Now lets use ASYNC - AWAIT with FETCH



const url = 'https://jsonplaceholder.typicode.com/posts/'

const getPostData = async () => { // using async arrow function

	const post = await fetch(url);
	const data = await post.json();
	console.log(data) // this will show the array of objects from the url
	// now we can do anything with the const data w

	for (let i = 0; i <= 6; i++) { // great a loop at is less or equal to 6
		console.log(data[i].title); // get the data[i] being the index to 6 and then the title
	}

	//or use map() or forEach over the array
}

//evoke the function
getPostData(); // result is the post data from post 1




