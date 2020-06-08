//DEVED JS COURSE NOTES

// EXTRA NOTES ON THE BASICS


// let and const
// can use let to declare and/ or assign a value
// can only use const where we do not want to change its value/ const also cannot be declared without a value assigned to it

// both let and const inside functions can only  be used from inside those functions
// to get values from outside a function, both variables must be outside (global scope);

let firstName; // declaring a variable
firstName = 'david', // reassigning the variable
    firstName = 'kevin' // reassigning the variable again


const lastName = 'mchale';
/* cannot do this

const lastName;
   lastName = 'mchale'; // will get an error
 
*/






// CONDITIONALS
//===========================================

// Never use double equals on comparisons, always use triple
if (5 === 6) {
    // do something
} else {

}

if (/*condition*/) {
    /* do something */
} else if (/*condition*/) {
    /* do something else*/
} else {
    /* do something finally */
}

//ternary if statement
let age = 17;
const allowedIn =
    age >= 18
        ? `You are ${age} and allowed inside`
        : `Sorry, you are ${age} and too young`;



// Truthy False Values 
/*
    false values: '', 0, false, null, undefined, NaN
    true values: are anthing that are not of the above
*/










// FUNCTIONS
//===========================================


function greet() {
    const name = prompt('Hey there, what is your name?'); // create a prompt
    const greeting = `Hi ${name}, welcome to my website`; // create the string with the value of name
    alert(greeting); // alert the user of the message
    console.log(greeting); // log the result to the console


}

greet(); // call / evoke the function



// passing one function to another (use the params!!!)

// pretend we have a sign up thing happnening.
// first we want to to get give the user a message, then get the persons name - this will be the first function
// then maybe we log the users name inside the message to the console.

// so in order, 
// create a function to store the sentence in the memory
// then after the user has input the name etc in another function, THEN go back and console.log the sentence
// we we are using a function, then goin back and pulling in the second function INTO the the first function


// function 1
function greet(text) { // note the agrument is the name of the variable we want to pass
    console.log("Welcome to our website" + text);
}

// function 2  ... create the second function and pass in function 1 and use its params as 
function signUp() {
    const name = prompt('Welcome, what is your name');
    greet('david'); //this is the text param taken from the parent. here we give it the value we want to execute 

}

console.log(signUp());


// another example
// passing 2 argument (just for show)

function greet(text, age) {
    console.log("welcome to my website" + text + "you age is: " + age);
}

function signUp() {
    const name = prompt('what is your name');
    const age = prompt('what is your age');
    greet('david', 42);
}

console.log(signUp());


// functions using return


function max(nr1, nr2) {
    if (nr1 > nr2) {
        // use return to send the result back up the function name, same if we placed it into a variable
        return nr1 * 2;
    } else {
        return nr2 * 2;
    }
}

console.log(max(2, 4)); // result 8









// arrays
//===========================================


const listUsers = ['David', 'Gary', 'Shaun', 'Stephen'];

listUsers.pop() // The pop() method removes the last element of an array
listUsers.push() // inside the params we can add an item or another to the array
listUsers.shift() //removes the first element of an array
listUsers.unshift() // adds new items to the beginning of an array
listUsers.indexOf() // returns an index number of the element we are targetting
listUsers.find() // returns the value of the first element in an array that pass a test, (and does not check the remaining values)
const myArray = [...listUsers, 'new item']; // spread operator. copies the array into a new var and adds a new item

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




// looping over arrays -another way

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}



// a forEach() is better to understand
numbers.forEach(number => {
    console.log(number);
});




// or another example
let food = ['mango', 'rice', 'pepper', 'pear'];
food.forEach(function (foodItem) {
    console.log('I want to eat ' + foodItem);
});


// loop and push into a new array
var otherArray = [];
var fruits = ["strawberry", "orange", "pear", "lemon"];
fruits.forEach(function (item) {
    otherArray.push(item);
});
console.log(otherArray);







// switch statement (instead of usin multple if() statements)
//===========================================


const fruit = 'banana';
let count = 0;


switch (fruit) {
    case 'orange': // fruit value
        count += 1;
        console.log(`The fruit number is ${count}`);
        break;

    case 'apple':
        count += 2;
        console.log(`The fruit number is ${count}`);
        break;

    case 'banana': // correct value of fruit variable. code will run then stop when executed by 'break'
        count += 3;
        console.log(`The fruit number is ${count}`);
        break;

    default:
        console.log('Nothing to see here'); // the default code that will run if condition is NOT met in any case.
        break;
}

// result The fruit number is 3




// Make a game where the person answers a question and the result will give an answer
// what is your favourite motorbike? ... tell the user what you think
// can can also use switch to do anything in terms of choice. similar to if statement but with more options
let userAnswer = prompt('What is your favourite bike?'); // create the prompt that asks the question
let str = userAnswer.toLowerCase(); // create a new var that converts the answer from anycase used to lowercase which will meet the case value
// note: is best ptractice not to chain in this respect ie let userAnswer = prompt('What is your favourite bike?').toLowerCase();


switch (str) { // input the value of the answer the user enters
    case 'bmw':
        console.log(str); // send the answer to the console
        alert('good choice, me too!!'); // alert the user with a message when their value meets the condition
        break;

    case 'honda':
        console.log(str);
        alert('terrible, what are you doing!!');
        break;

    case 'kawasaski':
        console.log(str);
        alert('you need your head examined mate!!');
        break;

    default:
        alert('your bike doesn\'t exist, try again!!');
        break;
}


// if user inputs BMW (converted down using .toLowerCase) or bmw, the result will be 'good choice, me too!!' etc










// for loops 


// using continue
for (let i = 0; i <= 30; i++) { // this tells loops to run 'i = 0, and less than 30, then increment * 1'

    //when the loop runs it will stop at 19 and then console.log() the message at 20;
    if (i == 20) {
        console.log('this is the number 20');
        continue;
    }

    console.log(i); // then the rest of the loop will run ie up to 100. note we use <= to run till 100, otherwise it will hit at 99 ans stop


}


// using break
for (let i = 0; i <= 30; i++) { // this tells loops to run 'i = 0, and less than 30, then increment * 1'

    if (i == 20) {
        console.log('this is the number 20');
        break;  // will stop the loop at 20 and not return the rest of the loop
    }



}



// loop with array (length() )

const myArray = ["david", "gary", "shaun", "stephen"];

//loop over the array and print out its contents
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//result: "david", "gary", "shaun", "stephen"


// we can also so this on a string value but will return index number

const name = "david"; //string NOT an array!

//loop over the array and print out its contents
for (let i = 0; i < name.length; i++) {
    console.log([i]);
}

//result: 1, 2, 3, 4, 5




//for 'of' loop
const myArray = ["david", "gary", "shaun", "stephen"];

for (let name of myArray) { // name can be any word, its just to assign each element to something
    console.log(name)
}


// .forEach()
const myArray = ["david", "gary", "shaun", "stephen"];

myArray.forEach(function (name) { //callback function
    console.log(name);
})

//result: "david", "gary", "shaun", "stephen"

//or we can do it using arrow function
const myArray = ["david", "gary", "shaun", "stephen"];
myArray.forEach(item => console.log(item));


// generally for(name as names) kinda loop is best because we can break out etc. NOT so with forEach()
const myArray = ["david", "gary", "shaun", "stephen"];

for (let name of myArray) { // name can be any word, its just to assign each element to something
    if (name === 'Garry') {
        // do something
    }
}



// looping over objects

const obj = {
    one: 1,
    two: 2
};

for (const key in obj) { // key always needs to be declared in a variable
    console.log(`the key name is: ${key}`); // here we are accessing the key name only
}





// array into select box


// A select option box from an array

var mySelectBox = function mySelectBox() {

    var list = ['item1', 'item2', 'item3', 'item4'];
    var box = "";

    box += "<select id=\"mySelect\">";

    for (var i = 0; i < list.length; i++) {
        box += "<option>" + list[i] + "</option>";
    }

    box += "</select>";

};


function print(message) {
    var storeMe = document.getElementById('container');
    storeMe.innerHTML = message;
}


// print the output
print(mySelectBox);







// scope
//===========================================


// global scope - can pass them into function scope or block scope
let food = 'apple';
let fruits = 5;
let x = 2;

// function scope - vars only available in function scope
function() {
    let food = 'banana';
    let fruits = 10;
    let x = 5;
}
            }

// block scope - vars only available in block scope
if (true) {
    let food = 'orange';
    let fruits = 7;
    let x = 15;

    console.log(`$food, ${fruits}, ${x}`);
}


// we can access global scope from outside a function and import it.
// but each block contains its own scope if we use the variables
// we cannot access variable declared inside a function, to use outside as its part of their own block

let food = 'apple';
let fruits = 5;
let x = 2;


function items() {
    console.log(food);
}

console.log(items());



// passing variables inside scope
// we can pass a variable between function and block  scope if we need to 


//function scope
function items() {
    let food = 'apple'

    if (true) { // block scope which takes in the food variable
        console.log(food);
    }
}

console.log(items()); // evoke the items function - result: apple



// when considering scope of any kind DO NOT use var, only use const or let






// events

/*  
    <h2 class="header">Website header</h2>
    <ul>


    <ul >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>


    <button></button>
 
*/


let list = document.querySelector('.list'); // get the list - parent
let items = list.children; // get the list items
let content = items.createTextNode('this is some text'); // create text
items.appendChild(content); // add the content all the items
console.log(list); // log out the new list


var button = document.getElementsByTagName('button');
var header = document.getElementsByClassName('header');
button.addEventListener('click', function () {
    console.log(header); // open this in dev tools and view all properties
    header.style.color = 'red';
});




// other event notes
// accessing types of events and specifics by using eventListener function

element.addEventListener('click', function (event) {
    console.log(event); //access event properties propertis in the console
});


// using eventListener with arrow function

element.addEventListener('click', (event) => {
    event.preventDefault();
    // code here

});







// arrays
//===========================================



// map function to loop over arrays - outputs a new array
const movies = ['fight club', 'the joker', 'batman', 'the dark knight'];

// map usage 1 (using anonymous function)
const newVideos = movies.map(function (video) { // using regular function and the return keyword as its a closed function '{}'
    return video.toUpperCase();
});

// map usage 2 (using arrow ES6 function)
const newVideos = movies.map(video => video.toLocaleUpperCase()); // using arrow function without '{}' so no need for return
console.log(newVideos);


/* NOTE: using a foreach loop on an array will loop over the array but we need to tell it to do something with the output
    ie, it doesnt do anything unless we assign the items to do something, but, with .map() we are assigning the items from a loop to a variable already so there is no need to have it returned.


    const movies = ['fight club', 'the joker', 'batman', 'the dark knight'];


    movies.forEach(function(item){
       // do something
       // console.log(items);
    })


    const myMovies = movies.map(item => item.toLowerCase());
    myMovies.toString();
    console.log(myMovies);
    */





// .includes(), .find(), some(), every(), filter(), 


const movies = ['fight club', 'the joker', 'the batman', 'the dark knight'];


//find(); and .includes(); 
// when using find, it iterates over the array and STOPS when the condition is met.
const favMovie = movies.find(movie => movie.includes('club')); // find the movie that includes club
console.log(favMovie); // result 'fight club' 

// or we can do something like this...

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr.find(el => el > 5);

console.log(found);




//filter(); - outputs a new array
const codes = ['css', 'javascript', 'html', 'php', 'jQuery'];
const shortLanguages = codes.filter(code => code.length >= 4); // get the items with chars greater or equal to 4
console.log(shortLanguages); // result: ["javascript", "html", "jQuery"] is a new array





const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
];

// we can use .filter() to get the name of all restaraunts beginning with 'C'

// here we create a var and use .filter and .startsWith to get the name beginning with C
const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
console.log(results);

// what it we want to get places that start with C and are within a 2mile radius?
// we can use ternary for this inside the above filter method

const results = restaurants.filter(
    restaurant => restaurant.name.startsWith('C') && restaurant.milesAway < 2)

console.log(results);


const results = restaurants.find(
    restaurant => restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2)


console.log(results);







// .some() and .every() - used to test and verify - true or false

const games = [
    {
        title: 'Mass Effect',
        rating: 9.5
    },
    {
        title: 'League of Legends',
        rating: 5
    },
    {
        title: 'Last of Us',
        rating: 10
    },
    {
        title: 'God of War',
        rating: 10
    },
    {
        title: 'WEE2k20',
        rating: 4
    }
]; // close array



// lets check the rating of a game using .some()
// some() will pass over each item until it returns a true value and then stop. if none are true then it will return false, otherwise one value of true will give return of true.

const oneRating = games.some(game => game.rating >= 10);
console.log(oneRating);



// .every();
// .every() will pass over each item until all is completed and make sure the conition is true. if one condition is false, then it returns false.

const allRating = games.every(game => game.rating >= 10);
console.log(allRating);





// 14 MUST KNOW ARRAY METHODS
//===========================================


// associate array
let stocks = [
    {
        name: 'apple',
        price: 321.85
    },
    {
        name: 'Tesla',
        price: 2471.04
    },
    {
        name: 'Disney',
        price: 118.77
    },
    {
        name: 'Google',
        price: 1434.87
    },
    {
        name: 'Netflix',
        Price: 4245.92
    }
];


// filter() - return the stock when its less than 1000
stocks.filter(stock => stock.price < 1000); // return all sot


const results = stocks.filter(stock => stock.name.startsWith('G'))
console.log(results);

// what it we want to get places that start with C and are within a 2mile radius?
// we can use ternary for this inside the above filter method

const results = stocks.filter(stock => stock.name.startsWith('C') && stock.price > 2000)
console.log(results);



// map() - return an array of arrays where each object is a separate array
stocks.map(stock => [stock.name, stock.price]);



// find() - return an array where the stock name is equal to Tesla
stocks.find(stock = stock.name === 'tesla')


// find() with includes()
const results = stocks.find(stock => stockt.name.toLowerCase().includes('net') && stock.price > 1000)
console.log(results);





// .some() and .every() will give TRUE or FALSE values
stocks.some(stock => stock.price < 1000); // result: true - 'some' stocks are less than 1000

stocks.every(stock => stock.price < 1000); // result: false - not 'every' stock is less than 1000


//foreach() - normal function
stocks.forEach(function (stock) {
    console.log(stock);
}); // will loop


//foreach() - arrow function
stocks.forEach(stock => console.log(stock));


// or we can put each loop into an array
stocks.forEach(stock => console.log([stock]));



// reduce()
stocks.reduce((accumulator, stock) => {  // reduce needs accumulator (storage) and second argument ( the item iteration)
    console.log(`Accum: ${accumulator}, Price: ${stock.price}`); // console.log both accumulator and stock.price
    return accumulator + stock.price; //return the total to the function as we are using '{}' as a function
}, 0); // the 0 is used as a based from which the accumulator needs to start


//same reduce method but using arrrow function
stocks.reduce((accumulator, stock) => accumulator + stock.price, 0); // no return needed as we are using arrow function without '{}'



// using reduce() to get items from an Associate array and turn into its own array. take the item name for example


const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
];

let names = menuItems.reduce((allNames, name) => [...allNames, name.item], []);
/* explanation...
    assign menuItems.reduce() to a var called names
    Instead of using accumulator, we use allNames as storage and name as the iterator.
    great a new array using the accumulator( now name allName) and copy the array as a current list of allNames using spread operator.
    The next paramter is the name.item (item name) and finally we use an empty array as a starting or base point
*/

console.log(names);  //result ["Blue Cheese Salad", "Spicy Chicken Rigatoni", "Ponzu Glazed Salmon", "Philly Cheese Steak", "Baked Italian Chicken Sub", "Pan Seared Ribeye"]



//includes(), indexOf(), lastIndexOf(), sort(), join(), toString();
//===========================================



let stocks = [
    {
        name: 'Apple',
        price: 321.85
    },
    {
        name: 'Tesla',
        price: 2471.04
    },
    {
        name: 'Disney',
        price: 118.77
    },
    {
        name: 'Google',
        price: 1434.87
    },
    {
        name: 'Netflix',
        Price: 4245.92
    }
];

const names = stocks.reduce((allNames, names) => [...allNames, names.name], []);
// console.log(names); result = ["apple", "Tesla", "Disney", "Google", "Netflix"]





names = ["Apple", "Tesla", "Disney", "Google", "Netflix"]



//includes
names.includes('Apple'); // Result: true
names.includes('Amazon'); // result: false






//indexOf()
names.indexOf('Tesla'); // Result: 1 (being the 1 in the 0 based index of the array)

// to get the item in the array we can wrap the indexOf in straight brackets
names[names.indexOf('Tesla')]; //Result: 'Tesla'


// spreading operator and lastIndexOf();
const anotherArray = [...names, 'Tesla']; //takes a copy of the original array and adds the new item to the end called 'Tesla'
console.log(anotherArray)
// result: ["Apple", "Tesla", "Disney", "Google", "Netflix", "Tesla"]

const anotherArray = ["Apple", "Tesla", "Disney", "Google", "Netflix", "Tesla"] // note we now have Teslsa twice
// if we use
anotherArray.indexOf("Tesla") // we get the first index of 2
anotherArray.lastIndexOf('Tesla') // we now get the last index number of the last Tesla which is 5
//to print out the item itself we do as we did previously, use array brackets
anotherArray[anotherArray.lastIndexOf('Tesla')]; // Result: 'Tesla'



// .indexOf();
const arr = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex = arr.indexOf('Frank');

console.log(foundIndex); //reuslt 1



// desctructuring arrays
const anotherArray = ["Apple", "Tesla", "Disney", "Google", "Netflix", "Tesla"]

const myArray = [first, second, third, forth, fifth, sixth] = anotherArray; // each of the items is used as per index value and equaled to the anotherArray
console.log(first); // we get apple
console.log(sixth); // we get Tesla


const newSection = [item1, ...theRest] = anotherArray; //  here we separate the first element from the rest, so first item, then ...therest
console.log(item1); // we get 'Apple'
console.log(theRest); // we get  "Tesla", "Disney", "Google", "Netflix", "Tesla"


// multiple additions
const allnewArray = [
    ...anotherArray,
    'This is a new item',
    ...myArray
]
// by using the spread operator  we are duplicating these two arrays and adding in a new item manually






// sort() - orderng arrays by numberic or alphabetical order
//===========================================


const items = ['Banana', 'Orange', 'Apple', 'Mango']
items.sort(); // result "Apple", "Banana", "Mango", "Orange"

//however when we use numbers, we have an issue - they do not sort from lowest to highest. Why? .. because arrays are treated as strings!
// to work around this we use a function

const ratings = [92, 56, 5, 79, 56, 35, 21, 6, 41, 9];

// this is how we get to order numbers correctly
const ordered = ratings.sort(function (a, b) { //params represent 2 x numbers, the first and the second
    return a - b;  // when b is taken from a, then if we have a positive number that will sit either on front or behind the next number
});
console.log(ordered);


// using an arrow function
const ordered = ratings.sort((a, b) => a.rating - b.rating);
console.log(ordered);



// to convert from an array to a string and back to an array again, here is how we do it.
const ratings = [92, 56, 5, 79, 56, 35, 21, 6, 41, 9]; // this is the array
ratings.toString(); // will give us... "92,56,5,79,56,35,21,6,41,9"
//convert string to a new array we do this
const newRatings = Array.from(ratings);
console.log(newRatings); // result is now [92, 56, 5, 79, 56, 35, 21, 6, 41, 9]
// then we can sort or whatever we want to do....bingo!!!




// slice() - takes two values, a beginning and an end value based on indexing, so .slice(0, 3) means start at the first item and stop and the 3rd(4th) item
//===========================================


const fruit = ['Banana', 'Orange', 'Apple', 'Mango']
const myFruits = [...items.slice(0, 2)];
console.log(myFruits); // result ["Banana", "Orange"]



// lets expand on this...
const replaceItem = fruit.indexOf(item => item === 'Mango');
const newArray = [...fruit.slice(0, replaceItem), 'Cherry'];
console.log(newArray); //result: ["Banana", "Orange", "Apple", "Cherry"]




























// ternary operator - shorthand if statement
//===========================================


const games = [
    {
        title: 'Mass Effect',
        rating: 9.5
    },
    {
        title: 'League of Legends',
        rating: 5
    },
    {
        title: 'Last of Us',
        rating: 10
    },
    {
        title: 'God of War',
        rating: 10
    },
    {
        title: 'WEE2k20',
        rating: 4
    }
]; // close array



// when using ternary, as a  if statement, make sure we use curly braces and return the condition
const myGame = games.map(function (game) {
    return game.rating < 8 ? game.title : null;
});

console.log(myGame);












// arrow functions
//===========================================


const games = [
    {
        title: 'Mass Effect',
        rating: 9.5
    },
    {
        title: 'League of Legends',
        rating: 5
    },
    {
        title: 'Last of Us',
        rating: 10
    },
    {
        title: 'God of War',
        rating: 10
    },
    {
        title: 'WEE2k20',
        rating: 4
    }
]; // close array



// previous version of a function
const mygame = games.map(function (video) {
    return video.rating < 6;
});

console.log(mygame);



// arrow function
const mygame = games.map(video => {
    return video.rating < 6;
});


//without returning but for one liners only - note removal of '{}' braces
const mygame = games.map(video => video.toUpperCase());
console.log(mygame);










/* objects and 'this' - 'this' refers to the block of code to which it sits
    if we console.log(this) we get the window object
    if we use something like...
        function sayHi(){
            console.log(this);
        }
        sayHi();

        we are now referring to the function sayHi.


       ===  THIS is a pointer - it refers to the OBJECT itself =====
       It mutates depending on this placement, a function inside and object will have to incude 'this' to refer to refer to the object itself

        sSee object ,function and this used in the example below...
*/



// create an eject and use a function as a key which prints out the user.name (use 'this' to refer to the object)
// cxreate a another function INSIDE the first function that will iterate over the 'likes' array and console out the array items
// then print out the first function 
const user = {
    name: 'david', // key of a string
    likes: ['motorbikes', 'design', 'code', 'gym'], // key of an array
    showProfileName() { // first function - can use a function as a key
        console.log(`His name is ${this.name}`); // using 'this' to acess the name INSIDE the object
        // create a loop over the 'likes' key and console log the results
        this.likes.forEach(item => console.log(`he likes ${item}`)); // arrow function used. normal function will not work. REMEMBER arrow functions have their own 'this' capabilities
        // because we are using a method inside the function we use an arrow function to get around 'this' issues,
        // other way would be to declare a var with the value of 'this' and pass it down as needed
    }

};
//target the user and the key function called showProfileBName()
user.showProfileName();





// binding  - bind() call() apply() - three methods that really do the same thing, but lets stick with reply
//===========================================



// create an object
const person = {
    firstName: 'David',
    lastName: 'Mchale',
    completeName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

console.log(person.completeName()); //call the person object and the function inside together; result will be David Mchale



// now we create a function OUTSIDE the object say to create a user
function user() {
    // console.log(this); here we will see the whole person object because this will now refer to that specific object
    alert(this.firstName); // alerting the name value from the firstName key
}

console.log(user()); // nothing will happen, - we get undefined. The function is not taken from the person object to the new function called user, this is where we need to BIND it to work


// how to bind!!

// first we need to create a variable and BIND an isntance of the function using the bind() method
const registeredUser = user.bind(person); // dont do user().bind as we dont want to evoke it, we only need an instance of it.

// now when we call registeredUser we treat it like a new function
console.log(registeredUser()); // result is the alert message 'David' which is the key value pair from the person object
















// constructor function (with a function)
//===========================================


// constructor starts off with a capital letter
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sendName = function () {
        console.log(this.name);
    }
}

const user1 = new User('David', 42);

console.log(user1); // here we get the new object we mde from the constructor
console.log(user1.sendName()); // here we get the function from the user1 constructor





// Prototyyping in Constructor functions
//===========================================

// Note this code (same as above)

function User(name, age) {
    this.name = name;
    this.age = age;
    this.sendName = function () { // we can use prototying for these type of funtions
        console.log(this.name);
    }
}

const user1 = new User('David', 42);

console.log(user1);
/* The result is: {name: "David", age: 42, sendName: ƒ} 
    See how the console is evoking the entire object  - including the function which has to be called separately in order for it to work
    Note the result: {name: "David", age: 42, sendName: ƒ} - apart values in the params, it is also displaying the function we are NOT using as its not in th
*/


// eg....
// Constructor Function

function Todo(name, completed) {
    this.name = name;
    this.completed = completed;
    this.getTodoName = function () {
        console.log(this.name);
    };
    this.checkCompleted = function () {
        console.log('check');
    };
    this.deleteTodo = function () {
        console.log('deleted');
    };


}

let myTodo = new Todo('david', false);
console.log(myTodo); // result Todo {name: "david", completed: false, getTodoName: ƒ, checkCompleted: ƒ, deleteTodo: ƒ}


// adding a prototype and removing the inner functions
//===========================================

// remove the functions from the constructor

function Todo(name, completed) {
    this.name = name;
    this.completed = completed;
}

// then add a function as a prototype so the 'uncalled' functions are only called when needed
// lets add the getToDo functiond
Todo.prototype.getTodoName = function () {
    console.log(this.name);
}

// now when we call a new instance of the constructor we dont get the function.
let myTodo = new Todo('david', false);
console.log(myTodo); // result: {name: "david", completed: false}
// now if we go into developer tools we can open up the object, see the prototype method. open this and we can see the function we now added via prototyping

// lets evoke the getTodoName function
console.log(myTodo.getTodoName()); // result: 'David' , so it workss!


// if we want to add another key:value pair to the constructor we can also do this by using constructor
Todo.prototype.nationality = 'irish';
console.log(myTodo.nationality); //result: Irish





// Prototypal Inheritence
//============
// The method of creating a second constructor object and
// inheriting (or passing) the key:value pairs and prototypes from the first constructor object




// Primary Constructor Object - create an object based on a human character

function Enemy(life, name, level) {

    this.life = life;
    this.name = name;
    this.level = level;

}


// now add the extra functions we want to include as part of the Enemy constructor

Enemy.prototype.getInfo = function () { // this function, called getInfo, will get the life, name and level of this constructor using .prototype
    console.log(this.life, this.name, this.level);
};

Enemy.prototype.isBlocked = function () {
    console.log(`${this.name} is now blocked!`);
};

Enemy.prototype.attacked = function () {
    console.log(`${this.name} has been attacked!!`);
};

const char1 = new Enemy("50%", "David", "Level 4"); // creating a new object from our constructor called Enemy
console.log(char1); // Result:  Enemy {life: "50%", name: "David", level: "Level 4"} - note we do not have the function problem 

// now test one of the prototypes, lets say, the getInfo function
console.log(char1.getInfo()); // Result is "50% David Level 4" because that is the console log from the function itself so it works fine.



// creating a new constructor and inheriting the keys from the Enemy contructor

//first we create an object based on a dragon character
function Dragon(life, name, level, color, spell) { //we take in the params from the other object and add extra ones if we need (ie color and spell)

    Enemy.call(this, life, name, level); // here we call the Enemy object by using call. 'this' refers to the drafon object - params are copied from the Enemy params
    // now add the extra params as per normal object
    this.color = color;
    this.spell = spell;

}


// create a new dragon
const petDragon = new Dragon("70%", "Kevin", "level 5", "Green", "Fire");
console.log(petDragon); // result is life: "70%", name: "Kevin", level: "level 5", color: "Green", spell: "Fire"



