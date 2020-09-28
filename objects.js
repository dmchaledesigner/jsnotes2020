// basic object literal
// =========================

const book1 = {
    title: 'Book 1',
    name: 'john doe',
    year: 2010,
    getSummary: function () {
        return `${this.title} was written by ${this.name} in the year ${this.year}`
    }
}

console.log(book1); // {title: 'Book 1', name: 'john doe', year: 2010, getSummary: [Function: getSummary]}
console.log(book1.title); // 'Book 1'
console.log(book1.getSummary()); // Book 1 was written by john doe in the year 2010
console.log(Object.values(book1)); // [ 'Book 1', 'john doe', 2010, [Function: getSummary] ]
console.log(Object.keys(book1)); // [ 'title', 'name', 'year', 'getSummary' ]
console.log(Object.entries(book1)); // [ [ 'title', 'Book 1' ], [ 'name', 'john doe' ], [ 'year', 2010 ], [ 'getSummary', [Function: getSummary] ] ]





// If we copy and object then we can change its value etc without having the orinal object beinbg altered
// there is copying and cloning
// an object copy only copies over its initial key values
// an object deep clone copies over its initial key values AND its nested objects



// A deep copying means that value of the new variable is disconnected from the original variable,
// while a shallow copy means that some values are still connected to the original variable.

// Consider the following example:


let person = {
    firstName: 'John', // primative / top level key values
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let personCopy = Object.assign({}, person); //takes two params - a new blank object to copy, and the name of the original object we want to copy
console.log(person); // now we have a 'shallow copy' of our original person object

personCopy.firstName = 'Kevin';
personCopy.address.street = '8 Lachlan Street';
console.log(personCopy);



/*
result:

{firstName: "Kevin", lastName: "Doe", address: {…}}
address:
city: "San Jose"
country: "USA"
state: "CA"
street: "8 Lachlan Street"
__proto__: Object
firstName: "Kevin"
lastName: "Doe"
__proto__: Object


NOTE firstname and street has changed sinse we updated them however,
if we console.log the person object we can see the street value has changed so the original is being altered


{firstName: "John", lastName: "Doe", address: {…}}
address: {street: "8 Lachlan Street", city: "San Jose", state: "CA", country: "USA"}
firstName: "John"
lastName: "Doe"
__proto__: Object


*/



// to delete a key from an object
delete personCopy.firstName;





// A deep clone can will eliminate all aspects of unwanted changes on the original object
// here is how we do it


const copiedPerson = JSON.parse(JSON.stringify(person));
// this will give us a complete copy of the original person object



// To create more than one book its, better to create a constructor, and instance of an object to create other other objects



// Constructor Function

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year,
        this.getSummary = function () {
            return `${this.title} was written by ${this.name} in the year ${this.year}`
        }
}



//instantiate an object = create a copy
const book1 = new Book('Book 1', 'John Doe', '2019');
console.log(book1.getSummary());


// However, if we console.log(book1) we can see we get the properties but we also get the function which even if we dont need, it is there
// A better way to add this, is to place it inside the prototype so its hidden from the main constructor but accessible via the prototype
// Sometimes we need to create new info for new objects based from the original constructor but not always the added info from the added function
// Remove the function from the main constructor and use it as a prototype

//create constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year
}


// create function prototype 
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`
}

// create function to make a calculation on years old
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Manipulate the existing data - change the year
Book.prototype.reviseYear = function (newYear) {
    this.year = newYear;
    this.revised = true;
}


//instantiate a new object and console.log the new object with prototype function
const book1 = new Book('Book1', 'John Doe', '2010');
console.log(book1); // {title: "Book1", author: "John Doe", year: "2010"} - in dev tools, open it up and see the protype holds the new function

console.log(book1.getSummary()); // call the getSummary Function - 'Book1 was written by John Doe in the year 2010
console.log(book1.getAge());

book1.reviseYear('2018'); // date update and note, from the function we are also adding revised: true to indicate the year has been revised
console.log(book1); // {title: "Book1", author: "John Doe", year: "2018", revised: true}



// Prototype Inheritance - passing one object keyvalue pairs to another object

//Parent Function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year
}
// Book 1 added function using prototype
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`
}



//Child function
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year); // migrate the params from the Book function over
    this.month = month // create new pair for the month paramater
}

// inherit prototype from book
Magazine.prototype = Object.create(Book.prototype);


//however if we look into the result using dev tools, we see in the constructor, the prototype is using the book constructor
// we need to change this to the Magazine constructor. here is how we do it

Magazine.prototype.constructor = Magazine;

// make the change and THEN call the new instance of the Magazine object. console.log to check

const mag1 = new Magazine('magazine1', 'Jane Doe', '2013', 'january');
console.log(mag1); // {title: "magazine1", author: "Jane Doe", year: "2013", month: "january"}







//Constructors using ES6 classes

class Book {

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // function is OUTSIDE of the constructor but inside the class still.
    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }

}

class Magazine extends Book {

    constructor(title, author, year, month) { // here we carry over and add another param
        super(title, author, year) // params are also carried over here
        this.month = month;
    }
}


const latestMag = new Magazine('Magazine1', 'John Doe', '2020', 'April');
console.log(latestMag); // {title: "Magazine1", author: "John Doe", year: "2020", month: "April"}
console.log(latestMag.getSummary()); // 'Magazine1 was written by John Doe in the year 2020'
