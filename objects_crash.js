// when we copy a variable in js we do this

let item = 'tomato';
let anotherItem = item;
console.log(anotherItem); // result is tomato because we just copied over the item instance

// but with obects its different
// lets say we have to vars and we want to check if one is equal to another
let name1 = 'david';
let name2 = 'david';
console.log(name1 === name2); // result is true


// say we have two obects with the same value

const person1 = {
    first: 'david',
    last: 'mchale',
}


const person2 = {
    first: 'david',
    last: 'mchale',
    age: function () {
        return `Full name is ${this.first} ${this.last}`;
    }
}

console.log(person1 === person2); // result is false

// why is the result false?.. same as arrays
// although the values might be the same, the the REFERENCE to the object is not
// so if we have something like
const person3 = person2;
console.log(person3); // we do get the same values but..
// if we change one of the values on person 3
person3.first = 'kevin';
console.log(person3); // result is of course 'kevin
//however
console.log(person2.name)// we dont get 'david' we get 'kevin'
//why because we are only referencing the object we are not copying it



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






// A deep clone can will eliminate all aspects of unwanted changes on the original object
// here is how we do it


const copiedPerson = JSON.parse(JSON.stringify(person));
// this will give us a complete copy of the original person object