
const names = ['david', 'gary', 'shaun', 'steven'];
// using console.log(typeof names) will return and object
//using Array.isArray(names) will return true, which IS an array

names.length // will return a total count of the array
names[0] // returns first item
names.length - 1 // will return the last item in the array


const AddMiddleName = [
    ...names.slice(0, 2), //spread in the first two names
    'patrica', // add in the new item
    ...names.slice(2) // then spread in the rest of the array
]; // this will add an item to the middle of an array



// lists of methods
// ==================

// open up dev tools and console.log the array. Then open up the prototype and see all the methods we can use.
// This is the process we can do for almost anything in JS, including objects etc




// Mutable and Immutable Methods
//=============================

/* Mutable methods perform the action on the original array. To stop this from happening we need to create a copy of the array using the spread operator */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumbers = numbers.reverse();

// reversedNumbers result: [9, 8, 7, 6, 5, 4, 3, 2, 1]
// But also numbers result: [9, 8, 7, 6, 5, 4, 3, 2, 1] - therefore the orginal was changed as reversedNumbers is referencing numbers array only

// So we need to copy the array (best practice)

const reverse = [...numbers].reverse()
// reversed result: [9, 8, 7, 6, 5, 4, 3, 2, 1]
// numbers result: [1, 2, 3, 4, 5, 6, 7, 8, 9]



//slice() and splice() are another example
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// slice will take part of the array but not remove it directly from the original -IMMUTABLE
const partNumber = nums.slice(1, 5); // (1, 5) is from the first item all the way to the fifth item. rememer index so [1] equals to '2'
console.log(partNumber); // result: [2, 3, 4, 5]


// splice will take part of the array but WILL ALSO remove these items from the original array - MUTABLE
// Again if we do not want the original array to be changed, we copy the array and perform splice() on the copy unless we want to remove items from the original array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const otherNumbers = [...numbers];
otherNumbers.splice(3, 6); // result: [4, 5, 6, 7, 8, 9]
// note how if we console.log(numbers), the array has not changed as we copied it first [1, 2, 3, 4, 5, 6, 7, 8, 9]





// findIndex() - acts as a loop to which we can find items inside an array and choose to do something with it
//=============

// take the following array, find the index of 'shaun' and remove it
const names = ['david', 'gary', 'shaun', 'steven'];

const shaunIndex = names.findIndex((name) => {
    if (name === 'shaun') {
        return true
    } else {
        return false
    }
});

console.log(shaunIndex); // result is 2 which shows 'shaun' is at the names[2] in the array which is we can now call names[shaunIndex]

// to simplify the above code we can say something like this
const shaunIndex = names.findIndex((name) => {
    return name === 'shaun'

});



// adding  / removing items 
//============================

// dont forget to copy the array!

const orginalNames = ['gary', 'shaun'];
const updatedNames = [...orginalNames];
updatedNames.push('steven') // will add the item to the end of the array
updatedNames.unshift('david') // will add the item to the beginning of the array

