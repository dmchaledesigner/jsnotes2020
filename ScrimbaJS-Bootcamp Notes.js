

// Scrimba JS Bootcamp Notes









/*  let and const  */


// let we can declare it without adding a value, then assigning a value, therefore it can change 
let name;
name = 'david';
name = 'kevin';



/* const we CANNOT just declare it, we need to give it a value AND it connot be changed */
// 1) must be initialized with value
// 2) can't be reassigned after declaration








/* Scoping / Shadowing */

var price = 20;
var isSale = true;

// variable shadowing
// let & const - block-scoped
if (isSale) {
	// discount price of product
	const price = 20 - 2;
	// do something 
	console.log('sale price', price);
}

console.log('price', price);


// const and let use block scoping which means that if they are within a block (if statement or function) then they
// cannot be accessed from outside that block unlike the var keyword. Change the price inside the if statement to var and log
// to the console to see the difference in results.




// Hoisting - where using a variable etc is made before the variable is declared - this of course gives an error
console.log(firstName);
let firstName = 'david'; // will get an error of undefined because the console is first to execute













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


// arrow function


// regular function
el.addEventListener('click', (event) => {
	console.log(event.target); //this will give us the <body> tag
});

// arrow function
el.addEventListener('click', (event) => {
	console.log(event.target);
});


// if the function has one parameter we can remove the additional brackers
el.addEventListener('click', event => {
	console.log(event.target);
});

// implicid returning - removing the need for the return keyword

// this is normal arrow function
const myFunction = (a, b) => {
	return a - b;
}
myFunction(14, 4); // result is 10;


// implicit return is having to NOT use the return keyword and replacing the {} with ()
const myFunction = (a, b) => (a - b);

myFunction(14, 4); // result is 10;








// eg, chat app

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



let greeting = 'hello there'

function note() {
	greeting = 'welcome to the show'
	console.log(`${greeting}`);
}

note(); // result is 'welcome to the show';
console.log(`${greeting}`); // result is 'hello there';


// note that vars created inside a function are scoped to inside the function only
// if we try to call a var that is inside the function to outside, this will become 'undefined'.




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






/* closures in Functions  */

//closures help us to keep track of certain values.
// Take a look at the code below;

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

const like = handleLikePost(); // assign the outer function to a variable

console.log(like()); // call the function, result:  1
console.log(like()); // call the function, result:  2
console.log(like()); // call the function, result:  3




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








// callback functions
// are simply a function thats called after another function is called

const username = 'john';

// capitalise the first letter of name (the first param of when the function is called)
function capitalize(name) {
	return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}


// now the callback function as a second parameter
// it take in the capitalize function
function greetUser(name, callback) {
	return callback(capitalize(name));
}

// greetUser function is assigned to a variable
const result = greetUser(username, (name) => {
	return `Hi there, ${name}!`;
});

// that variable is now called to the console
console.log(result); // Hi there John;














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







// obect destructering

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


// we could shorten it down by removing the '{}' and 'return'
// this is know an 'an impliced return'
const monthlyTotal = Object.values(monthlyExpenses).reduce((accumulator, expense) =>
	accumulator + expense, 0
);

console.log(monthlyTotal); // result: 2794 - which is the total of all object key values 




const


// Object.entries()

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

//iterate over the nested object and get an each person obect ito an array
// we could use .map() and .filter()
// but if we need to chain then its best to use .reduce()

const usersOver20 = Object.entries(users).reduce((accumulator, [id, user]) => {

	if (user.age > 20) {
		accumulator.push({ ...user, id }); // spread in the user and add the id
	}

	return acc;
}, []); // the callback array is used as we want to start from an empty array


console.log(usersOver20);
// result: [{name: "John", age: 29, id: "2345234"}, {name: "Jane", age: 42, id: "8798129"}]







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

	// additional functions can be placed here

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

	addSubject() {
		this.subjects = [...this.subjects, subjects];
	}
}

// declare new student
const student1 = new Student(1, 'Reed');


// using protype on a function would look like
console.log(student1.prototype.addSubject) // result on the console is 'function'

// to access a value
console.log(student1.name); // result is Reed
console.log(student1.addSubject()); // would output whats in the function




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




// array - accessing elements in an array .includes()
//=====================================
const temperatures = [69, 82, 73, 64];


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
const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
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

console.log(foundIndex); //reuslt 1








// reduce - probably the most important method for arrays
// read up on reduce() here:  https://alligator.io/js/finally-understand-reduce/

// take the following array, we want to iterate over the array and add the price values together

const menuItems = [
	{ item: "Blue Cheese Salad", price: 8 },
	{ item: "Spicy Chicken Rigatoni", price: 18 },
	{ item: "Ponzu Glazed Salmon", price: 23 },
	{ item: "Philly Cheese Steak", price: 13 },
	{ item: "Baked Italian Chicken Sub", price: 12 },
	{ item: "Pan Seared Ribeye", price: 31 }
];

// reduce looks like this:  menuItems.reduce()

// what we need to know is...

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

array.reduce((accumulator, menuItem) => {
	return accumulator + menuItem;
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
	// lets run accumulator and menuItem.price through the console to test
	console.log(`accumulator: ${accumulator}, price: ${menuItem.price}`);
	return accumulator + menuItem.price; //  add price value to the accumulator
}, 0); // start the value of the menuItem at 0 and then add menuItem.price as per iteration


//assign the above to a var

const total = menuItems.reduce((accumulator, menuItem) => {
	return accumulator + menuItem.price;
}, 0);

console.log(total); // result: 105






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












// The DOM

/*
	What is the DOM - (DOM - Document Object Model)
	Getting single and multiple HTML elements
	Create and modify HTML elements
	Dynamically add CSS styles
	Work with and understand events
*/






// adding elements and manipulation

const p = document.createElement('p'); // create an element
p.innerText = 'Hello world'; // add text to the element
document.body.append(p); // add the the element to the document body

document.body.style.background = 'palegoldenrod'; // assign background color to the document body
p.style.color = '#05f'; // assign style to the p element

p.addEventListener('click', () => console.log('clicked')); // add a click event using arrow function to the p element 




// looping over elements

/*
<header>
  <a href="/" id="home">Home</a>
  <a href="/login">Login</a>
  <a href="/signup">Signup</a>
</header>*/

// get the a tags
const links = document.querySelectorAll('a');

// create the loop in a forEach which is used with working with the DOM
// then if one of the links has a href of '/login' - check to see if it meets the condition
//remember we wrap a in [] as we are looking for an attribute of href='/login'
// then assign it to a var and print it to the console
links.forEach((link) => {
	if (link.match(a[href = "/login"])) {
		const loginLink = link;
		console.log(loginLink);
	}
})

// if we use getElementsbyTagName() - we cannot iterate over them
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






// .prepend () and .append()

const newPost = document.createElement('div'); // create a new div
newPost.className = 'top-post'; // give it a class name
newPost.innerHTML = "<strong>This is a new post</strong>" // add some content to the div.top-post
document.body.prepend(newPost); // append to the end 
document.body.prepend(newPost);  // and prepend to the start

// to get the name of the class
console.log(newPost.className);



// classList


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



// DOM CSS


//when using css in js make sure we always start with 'style',
// then camelcase the property, finally passing a string as the value

const post = document.querySelector(".post");
post.style.margin = '30px';
post.style.backgroundColor = '#555';
//when using css in js make sure we always start with 'style',
// then camelcase the proporty





// events

// regular function
el.addEventListener('click', (event) => {
	// console.log(event.target); this will give us the <body> tag
});

// arrow function
el.addEventListener('click', (event) => {
	// console.log(event.target); this will give us the <body> tag
});


// if the function has one parameter we can remove the additional brackers
el.addEventListener('click', event => {
	// console.log(event.target); this will give us the <body> tag
});



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

// To access text value of the event.target, use 
event.target.value
// or
event.target.textContent

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them

const title = document.querySelector('h1');
title.addEventListener('click', event => {
	console.log(event.target.textContent);
});

document.body.addEventListener('mouseover', event => {
	console.log(event.target.textContent);

});










// Promises



// Promises ASYNC Code and working with API's
/* A promise is like a life promise, when someone says they 'promise' to do something
it is either completed or rejected */




// callbacks -> promises

// States of a promise:
// pending - when a promise is used the action is always pending until it decides to be fulfilled or rejected
// fulfilled - when a promised is successfully executed
// rejected - when the code fails to execute


// creating a promise - uses a callback arrow function and takes 2 x params, resolve and reject
new Promise((resolve, reject) => {

	// resolve()
	// reject()

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


const recordedVideo2 = new Promise((resolve) => {
	resolve('This is the second Video');
})


const recordedVideo3 = new Promise((resolve) => {
	resolve('This is the third Video');
})

Promise.all([recordedVideo1, recordedVideo2, recordedVideo3]).then(item => {
	const myString = item.toString(); // converts array to multple string
	console.log(myString);

	const myArray = myString.split(','); // converts string to 3 string array
	console.log(myArray);

});













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
	body: JSON.stringify(blogPost) // convert the post to json data
})
	.then(response => response.json())
	.then(data => console.log(data))





// better ways of understanding API and fetch
// ============================================== 


// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// the api: https://randomuser.me/


// simple code to remember

fetch(url) // Call the fetch function passing the url of the API as a parameter
	.then(response => response.json()) // converts the response to json data
	.then(data => {
		const title = data.title;
		const imageUrl = data.img;
		console.log(title, imageUrl);
	})
	.catch(error => {
		console.log(Error('Data did not load'));
	});




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
		let authors = data.results; // get all data. .results comes from the api. see url above

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





