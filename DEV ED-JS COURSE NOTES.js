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

// array methods here: https://morioh.com/p/d05e069353a9?f=5c224490c513a556c9042463


const listUsers = ['David', 'Gary', 'Shaun', 'Stephen'];

listUsers.pop() // The pop() method removes the last element of an array
listUsers.push() // inside the params we can add an item or another to the array
listUsers.shift() //removes the first element of an array
listUsers.unshift() // adds new items to the beginning of an array
listUsers.indexOf('Gary') // returns 1 - the index number of the element we are targetting
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
// winner is the first then spread operator in this case is called 'rest' to iadd the 'rest' of the array



// looping over arrays - another way

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
let otherArray = [];
let fruits = ["strawberry", "orange", "pear", "lemon"];

fruits.forEach(function (item) {
    otherArray.push(item);
});
console.log(otherArray);


// filter out duplicates and reorder using Set();
const numbers = [1, 2, 3, 4, 5, 7, 3, 2, 2, 5];
const updated = [...new Set(numbers)]; // result [1, 2, 3, 4, 5, 7]



// Truncating an array
let fruits = ['apple', 'mango', 'rocket', 'moon', 'tiger'];
let updatedArray = [...fruits]; // create a copy of the array and use length property to cut it down
updatedArray.length = 3;
console.log(updatedArray);

// we can also use splice() or slice()
// splice() will change the original array, where slice does not
// splice can take 3 params (index value, number of values, replacement value)
// slice() can only take one value and that is where we want to cut the array based on index value


let fruits = ['apple', 'mango', 'rocket', 'moon', 'tiger'];
let items = [...fruits]; // DO NOT CHAIN AS WE GET DIFFERENT RESULTS
items.splice(0, 1, 'granny');
console.log(items); // ["granny", "mango", "rocket", "moon", "tiger"]


let fruits = ['apple', 'mango', 'rocket', 'moon', 'tiger'];
const slicedItems = [...fruits].slice(2); // use a variable to hold the sliced items
console.log(slicedItems); //  ["rocket", "moon", "tiger"]





// get last item
let fruits = ['apple', 'mango', 'rocket', 'moon', 'tiger'];
let fruitsCopy = [...fruits];
let lastItem = fruitsCopy[fruits.length - 1]; // index value of the array is 4 using .length - 1
console.log(lastItem); // result: Tiger


// get first item - we could use destructuring for this
let fruits = ['apple', 'mango', 'rocket', 'moon', 'tiger'];
let fruitsCopy = [...fruits];

const [first, ...theRest] = fruitsCopy;
console.log(first);

// or 
let fruits = ['apple', 'mango', 'rocket', 'moon', 'tiger'];
let fruitsCopy = [...fruits];
const first = fruitsCopy.splice(0, 1);
console.log(first); // [apple]






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
    // correct value of fruit variable fruit. code will run then stop when executed by 'break'
    case 'banana':
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



// switch using key events and css3 variables
// ========================


// create an image with html =   <img src="./turtle.png" alt="turtle" class="turtle">


// create listener on the window that looks for the keydown event
window.addEventListener('keydown', handleKeyDown);

// create the function and console.log(event.key)
// then click in the window and then, press any keyboard
function handleClickDown(event) {
    // console.log(event.key); // will show any key pressed in the console
    // assign to a var
    let keyEvent = event.key;

    // now create an 'if', where if any keyPress down not have 'Arrow' hide this value
    // so if does NOT include (! use bang operator to get revise of true) then 'return' the value (hide)
    if (keyEvent.includes('Arrow')) {
        return;
    }

    // now use a switch statement to say if button press is up, down, left and right

    switch (keydown) {
        case 'ArrowUp':
            y -= 1;
            rotate = -90;
            break;
        case 'ArrowDown':
            y += 1;
            rotate = 90;
            break;
        case 'ArrowLeft':
            x -= 1;
            rotate = 0;
            flipped = true;
            break;
        case 'ArrowRight':
            x += 1;
            rotate = 0;
            flipped = false;
            break;
        default:
            console.log('That is not a valid move');
            break;
    }


    // now lets create a variable of speed and add a value
    // we declare this in our keyboard variable
    // then we can include this in our turtle Atributes

    turtle.setAttribute('style',
        `--x: ${x * speed}px;
         --y: ${y * speed}px;
        `
    )

} // close function





// Intervals and timers
// ========================


//setTimeOut() method takes in a anonymous function or a function itself. It is an event that excutes code inside when a time value is specified.

setTimeout(function () { //callback function which waits and then it is 'called back'
    console.log('buuuzzzzzzzz');
}, 3000); // result is a console.log after a delay of 3 seconds


// function inside a setTImeout
function buzzMe() {  // create a function
    console.log('Buuuuzzzzed')
}

setTimeout(buzzMe, 3000); // then add the function




// callbacks

//This is a classic example of async js using a callback as setTimout and setInterval is
function buzzMe() {
    console.log('Buuuuzzzzed')
}

console.log('starting!'); //this runs first
setTimeout(buzzMe, 3000); // this is waited and held because of the time delay of 300 'its called back'
console.log('finishing!') // then is one runs as JS continues the code, THEN the buzzMe function is called

// result - 'starting!' 'finishing!'  'Buuuuzzzzed'





// setTimeout arrow function
function buzzMe() {
    console.log('Buuuuzzzzed');
}

setTimeout(() => {
    return buzzMe();
}, 300);


// with promise function
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
});

promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

console.log(promise);




// setInterval()

// Works same as setTimeout. Takes anonymous function or function itself and 'continues to execute' at a specific time value
setInternv
















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




// objects
// ========================

/* 
Consists if key value pairs/
Once an object is created, its name cannot be overwritten though its contents can
*/

const obj = {
    one: 1,
    two: 2, // always use a trailing comma unlike JS was before. Modern JS has changed to this.
};


// nested object
const obj = {
    name: 'david',
    age: 42,
    address: {
        line1: 'unit 314',
        line2: '8 lachlan street',
        line3: 'waterloo'
    }

};

// then to acess the nested object
console.log(obj.address.line2) // result: 8 lachlan street

//adding a new key value 
obj.three = 3;
obj.four = 4;


// adding a varable to an object
var three = 3;

const obj = {
    one: 1,
    two: 2,
    three: three,
};

//however if the var is same name as the key we can do this

const obj = {
    one: 1,
    two: 2,
    three,
};


// freezing and object
/* the best thing to do here is make a clone of the object and freeze the original so there is a default key value structure */


const originalObject = {
    one: 1,
    two: 2,
    three: 3,
};


const clonedObject = Object.freeze(originalObject);
// now we can see the contents of our cloned object
console.log(clonedObject); // {one: 1, two: 2, three: 3}


// better to use spread operator (same as array) to copy and edit an object
const originalObject = {
    one: 1,
    two: 2,
    three: 3,
};

const clone = { ...originalObject, four: 4, five: 5 };
console.log(clone); // result







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

    box += `<select id="mySelect">`;

    for (var i = 0; i < list.length; i++) {
        box += `<option> ${list[i]} </option>`;
    }

    box += `</select>`;

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
// ========================

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

/* The following illustrates the syntax of the js filter() method: */
arrayObject.filter(callback, contextObject);
//also written as
const results = array.filter(item => item.key.toLowerCase());



const codes = ['css', 'javascript', 'html', 'php', 'jQuery'];
const shortLanguages = codes.filter(item => item.length >= 4); // get the items with chars greater or equal to 4
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




// more .filter() examples 


let language = [
    { name: 'php', student: 100 },
    { name: 'java', student: 500 },
    { name: 'c', student: 50 },
    { name: 'python', student: 200 },
    { name: 'javascript', student: 1000 }
];

const popularLanguages = language.filter(item => item.student > 400);
console.log(popularLanguages);




// Suppose, you have a numeric array in javascript and you want to find even numbers in it using the array filter().

let num = [1, 2, 3, 4, 5, 6, 10, 12, 16, 20, 22];
let result = num.filter(item => {
    return item % 2 === 0;
});
console.log(result);

// or without the remove the curly braces and return keyword
let num = [1, 2, 3, 4, 5, 6, 10, 12, 16, 20, 22];
let result = num.filter(item => item % 2 === 0);

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
const results = stocks.find(stock => stock.name.toLowerCase().includes('net') && stock.price > 1000)
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




// add three strings to an array

const string1 = ' this is the first element';
const string2 = 'this is the second element';
const string3 = 'this is the third element';

let myArray = []; // create empty array

myArray.push(string1, string2, string3); // use push() method to add all three strings
console.log(myArray); //result: ["this is the first", "this is the second", "this is the final string"]





// slice() - takes two values, a beginning and an end value based on indexing, so .slice(0, 3) means start at the first item and stop and the 3rd(4th) item
//===========================================


const fruit = ['Banana', 'Orange', 'Apple', 'Mango']
const myFruits = [...fruit].slice(0, 2);
console.log(myFruits); // result ["Banana", "Orange"] 



// lets expand on this...

const replaceItem = fruit.indexOf(item => item === 'Mango'); // get the item we want to to replace in the original array
const newArray = [...fruit.slice(0, replaceItem), 'Cherry']; // create a new array, pass in the original array and use slice(from, to), using third param of the new item
console.log(newArray); //result: ["Banana", "Orange", "Apple", "Cherry"]















// IF statement and rules of 'if' logic
//===========================================

if (condition) {
    // do something
} else if (condition) {
    // do something
} else {
    // default value if the condition is not evaluated if any other condition is not met
}

// REMEMBER that if a single condition is true, the code is executed and stops. It doesnt run anything else. The rest of the IF statement is skipped.

// IF statement to NOT need to have an else statement
if (condition) {
    // do something
}


// typical statement

const age = 40;
if (age > 24) {
    console.log(`${age} is the age I am`);
} else if (another condition) {
    console.log(something);
} else if (another condition) {
    console.log(something);
}else {

}



&& // and operator
|| // 'or' operator

// types of logid
if (something || something else) {
    // do something
}

if ((condition1) && (condition2)) { // note we use brackets to execute 2 conditions here
    // do something
}





// if statement with functions



// create a function to turn a sentence into a slug (used for wordpress ID names etc)
function slugify(sentence, lowercase) {
    let slug = sentence.replace(/\s/g, '-');
    // rejex code = starts and ends with /. g means global and the \s means a space between. So replace means replace space with a '-';
    if (lowercase) {
        return slug.toLowerCase();
    }
    return slug;
}

slugify('I have said something To Please you');
// result "I-have-said-something-To-Please-you"

slugify('I have said something To Please you', true);
// result "i-have-said-something-to-please-you"


// using variables with if statement
const hasAwesomeName = 'transportation'.includes('transport'); // returns value of true or false

if (hasAwesomeName) { // which returns true becuse the value of the includes() is true
    console.log('Super Cool Name!');
}



//Coersion - the ability to turn a number or string into a truty or falsy value
const name = 'david';

if (name) { // now check if it exists -returns true
    // do something
}

if (!name) { // checks if it DOESNT exists - returns false
    // do something
}

if (!!name) { //flips from false to true
    // do something
}




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





// if statement and functions

// we can also use a function here
function hasAwesomeName(word, phrase) {
    if (word.includes(phrase)) {
        console.log('It works!')
    }
}
hasAwesomeName('transportation', 'transport')





// ternary using function

function showAdminBar() {
    const el = el.classList.add('show-admin-bar');
}

const isAdmin = true
isAdmin ? isloggedIn() : null // this means if loggedin is true , then log in. if not then do nothing




// function inside an if statement
const isAdmin = true
if (isAdmin) {
    showAdminBar();
}













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





// binding  - bind() call() apply() - three methods that really do the same thing, but lets stick with bind()
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

// first we need to create a variable and BIND an instance of the function using the bind() method
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
    Note the result: {name: "David", age: 42, sendName: ƒ} - apart values in the params, it is also displaying the function we are NOT using as its to be called seperately however, if we are get rid of the function call when we call a constructor we can use prototype
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

// removing the empty the functions from the constructor when evoked

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
// ========================
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
// ==============================================================================

//first we create an object based on a dragon character
function Dragon(life, name, level, color, spell) { //we take in the params from the other object and add extra ones if we need (ie color and spell)

    Enemy.call(this, life, name, level); // here we call the Enemy object by using call. 'this' refers to the drafon object - params are copied from the Enemy params
    // now add the extra params as per normal object
    this.color = color;
    this.spell = spell;

}

// We to us the Object.create() to carry over a new Enemy Object and 
Dragon.prototype = Object.create(Enemy.prototype);


// create a new dragon
const petDragon = new Dragon("70%", "Kevin", "level 5", "Green", "Fire");
console.log(petDragon); // result is life: "70%", name: "Kevin", level: "level 5", color: "Green", spell: "Fire"
// now we have create a new object which inherits the values from the enemy function and has more key:value pairs



// lets add a prototype function to the dragon...

Dragon.prototype.magicSpell = function () {
    console.log(`${this.name} has a spell of ${this.spell} and its swesome!!`);
}

// lets call this magicSpell function on the new dragon we created
console.log(petDragon.magicSpell()); // Result:' Kevin has a spell of Fire and its swesome!!'



// but what about the prototype functions we create in the Enemy Object?
// this is how we carry them over.... we use,  Object.create();


// review and see final code

// Enemy Constructor
function Enemy(life, name, level) {

    this.life = life;
    this.name = name;
    this.level = level;

}


// Dragon Constructor that inherits values buy adding params inside the .call() method
function Dragon(life, name, level, color, spell) {

    Enemy.call(this, life, name, level); // note the call() method. 'this' refers to the dragon constructor
    this.color = color;
    this.spell = spell;

}

// inherit the prototypes that were created for the Enemy object as below
/*
        Enemy.prototype.getInfo = function () { // this function, called getInfo, will get the life, name and level of this constructor using .prototype
        console.log(this.life, this.name, this.level);
};

        Enemy.prototype.isBlocked = function () {
            console.log(`${this.name} is now blocked!`);
        };

        Enemy.prototype.attacked = function () {
            console.log(`${this.name} has been attacked!!`);
        };
*/


// using the object.create() method by inheritance - now we have all functions wwe built for the Enemy Constructor
Dragon.prototype = Object.create(Enemy.prototype);


// magicSpell function prototype - the newly created function for the dragon Object only
Dragon.prototype.magicSpell = function () {
    console.log(`${this.name} has a spell of ${this.spell} and its swesome!!`);
}




// create a new dragon constructor object
const petDragon = new Dragon("70%", "Kevin", "level 5", "Green", "Fire");
console.log(petDragon); // result is life: "70%", name: "Kevin", level: "level 5", color: "Green", spell: "Fire"
/*now we have created a new object which inherits the values from the enemy function and has more key:value pairs

See the printout to the console....look at prototypes and see the functions have been added

Dragon {life: "70%", name: "Kevin", level: "level 5", color: "Green", spell: "Fire"}
color: "Green"
level: "level 5"
life: "70%"
name: "Kevin"
spell: "Fire"
__proto__: Enemy
__proto__:
attacked: ƒ () - here
getInfo: ƒ () - here
isBlocked: ƒ () - and here!!!
constructor: ƒ Enemy(life, name, level)

*/



// and now lets test the ptototypes we carried over 
console.log(petDragon.getInfo()); // result: '70% Kevin level 5


/*

Recap:

1. create a constructor function
2. To add funtions to the constructor, use the prototype method to add these functions
    obj.prototype.functionName = function(){
            console.log(this.key);
    }
3. create new instance of the constructor with the new keyword
    const myObj = new Obj("value", "value", "value");
    then console.log(myObj) .. only values will be assigned to the new object, go into developer tools to see the fucntions inside the prototype
    To access the function created by using the prototype method, we do this
    console.log(myObj.functionName()); // this is inside the prototype via dev tools


4. Passing from one constructor to another
    1. create a new constructor

    2. pass in the same params and add new ones as needed, into the object params

    3. Inside the second object use the .call() to inherit the params
            obj1.call(this, life, name, level); // this refers to the second object

    4. Then with the additional params we added,
            Use this.paramName = paramName

    5. Next we need to inherit the prototype functions from object one to object two (we do this OUTSIDE the second constructor, just below it)
            For this we use the Object.create() method
            object2.prototype = Object.create(object1.prototype);
            Now we have carried over the functions from the first object to the second

    6. Finally, we create the new instance of the second object
            const anotherObject = new object2("value", "value", "value");
            console.log(anotherObject); // will log the anotherObject info
            console.log(anotherObject.functionName()); // will log the anotherObject function we passed from object 1, to object 2
*/




function Enemy(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;

}

Enemy.prototype.getLife = function () {
    console.log(this.life);
}

const char1 = new Enemy("50%", "David", "Level 4");
console.log(char1); // {life: "50%", name: "David", level: "Level 4"}


const char2 = new Enemy("20%", "Kevin", 3);

Enemy { life: "20%", name: "Kevin", level: 3 }

function Dragon(life, name, level, magic, spell) {

    Enemy.call(this, life, name, level);
    this.magic = magic;
    this.spell = spell;

}


Dragon.prototype = Object.create(Enemy.prototype);

const dragon1 = new Dragon("90%", "Devil", "Level 10", true, "fire");

console.log(dragon1);
// {life: "90%", name: "Devil", level: "Level 10", magic: true, spell: "fire"}level: "Level 10"life: "90%"magic: truename: "Devil"spell: "fire"__proto__: Enemy__proto__: getLife: ƒ ()arguments: nullcaller: nulllength: 0name: ""prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM1527:8[[Scopes]]: Scopes[2]constructor: ƒ Enemy(life, name, level)__proto__: Object


console.log(dragon1.getLife());


Dragon.prototype.allDragon = function () {
    console.log(`My name is ${this.name}`);
}


dragon1.allDragon(); // My name is Devil









// Using constructor with Classes
// ========================

/* An easier way to create constructors with ES6 is classes.
Similar to creating classes in React!
*/

class Enemy {
    constructor(life, name, level) {
        this.life = life;
        this.name = name;
        this.level = level;
    }

    // now we can place functions here (outside the constructor but inside the object
    getInfo() {
        console.log(this.life, this.name, this.level);
    }
}


const turtle = new Enemy(19, 'Donatello', 10);
console.log(turtle);


/* Result: 

Enemy {life: 19, name: "Donatello", leve: 10}
leve: 10
life: 19
name: "Donatello"
__proto__:
constructor: class Enemy (here is our class name)
getInfo: ƒ getInfo() (here is our function)
__proto__: Object

*/


//now lets call the function getInfo
console.log(turtle.getInfo()); // Result "19 "Donatello" 10"






// inheritance - passing from one constructor to another using classes



// again we have our first constructor
class Enemy {
    constructor(life, name, level) {
        this.life = life;
        this.name = name;
        this.level = level;
    }

    // now we can place functions here (outside the constructor but inside the object
    getInfo() {
        console.log(this.life, this.name, this.level);
    }
}


// then we create our second constructor
class Dragon extends Enemy { // like react, we use 'extends' and we do not use 'call()' for class constructors
    constructor(life, name, level, magic, rating) { //we carry over the params from object 1 and add our own
        super(life, name, level); // like REACT we use super() and pass in the same params again from object one only
        this.magic = magic;
        this.rating = rating;
    }
}


const dragoon = new Dragon("50%", "Dragooon", 5, "Fire", 9.5);
console.log(dragoon); // result {life: "50%", name: "Dragooon", level: 5, magic: "Fire", rating: 9.5} - always check console for function prototype !!!

console.log(dragoon.getInfo());  // result: 10 50% Dragooon 5 , which is life, name and level.









// Async JS
// ========================

/* SYNC CODE is when code runes line by line, from top to bottom
once something is evoked it is removed from the page unless needed later on, is recalled
its a step by step line by line execution

see example below...
*/


function someFunction() {
    console.log('function code 2');
    console.log('function code 3');
}


console.log('function code 1');

someFunction();

console.log('function code 4');

/* Result is (in order)

    function code 1
    function code 2
    function code 3
    function code 4
    
    So as we can , console , then evoked function and finally another console.

    )*/




/* ASYNC CODE is when code runes line by line, but the code is passed to the browser if
something is declared but isnt due for execution, therefore the rest of our JS code continues to run. 

see example below...
*/



console.log('here we have one thing goin on');

setTimeout(() => {
    console.log('Are you sure its not something else')
}, 2000);


console.log('no, we are done');

/* Result is (in order)

here we have one thing goin on
we are done
Are you sure its not something else



What happens is the first console is exectuted, the the setTimeout is run, but held in the browser
as needed for further execution as it has a delay of 2 seconds, however in the meantime the code keeps running
and the last console is run first.

another example is addEventListener... event is held but not triggered but rest of the code keeps running.

*/





// fixing Callback with promises
// ========================


// States of a promise:
// pending - when a promise is used the action is always pending until it decides to be fulfilled or rejected
// fulfilled - when a promised is successfully executed
// rejected - when the code fails to execute


let p = new Promise((resolve, reject) => {

    let a = 1 + 1;
    if (a === 2) {
        resolve('success');
    } else {
        reject('failed');
    }
});

p.then((message) => {
    console.log(`this is the message of ${message}`); // the resolve value
}).catch((message) => {
    console.log(`this is the message of ${message}`); // the reject value
})

// mote how then and catch are chained

console.log(p);



/* REMEMBER:

IF something is resolved, the next call is then()
IF something is rejected, the next call is catch()
both are chained together

myPromise.then( () => ).catch( ()=> )

*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
});

promise.then(() => console.log('success')).catch(() => console.log('failure'));
// result: 'success'





// to get the done from the setTimeout
// we use one param as there is one param in resolve, the string

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
});

promise.then(value => console.log(value)).catch(() => console.log('failure'));


// show a rejection
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(Error('Promise failed.')), 1000);
});

promise.then(value => console.log(value)).catch(() => console.log('failure'));





// Promise.all() - will output an array on result


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




// using setTimout function to make all three promises load at the same time

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


// wait a total of 6 seconds for the longest time
// Result: ["this is video 1", "this is video 2", "this is video 4"] array