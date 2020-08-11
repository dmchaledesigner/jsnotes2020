// reverse a string

/* 

NOTE:
CONVERT A STRING TO AN ARRAY BY USING SPLIT()
CONVERT AN ARRAY BACK TO A STRING BY USING JOIN()
.. IN BOTH CASES('') USING NO SPACES IS FOR CHARACTERS
 USING A SINGLE SPACE (' ') IS FOR SPLITTING WORDS



*/

let string = 'hello';

let stringToArray = string.split('') // ["d", "a", "v", "i", "d"]
stringToArray.reverse(); // reverses the array
let backtoString = stringToArray.join('');
console.log(backtoString);


function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');


    //or with for loop not using 'reverse'

    let revserseString = ''; //empty string

    for (let i = str.length - 1; i >= 0; i--) {
        revserseString = revserseString + str[i];
    }
    return revserseString;


    // or with for(of) loop

    let revserseString = ''; //empty string
    for (let character of str) {
        revserseString = character + str[i];
    }
    return revserseString;

    // or with foreach
    let revserseString = ''; //empty string must be turned into array remember to use split()
    str.split.forEach(item => {
        revserseString = item + revserseString
    })

    return revserseString;

}


console.log(reverse('hello'));








// capitalise a first letter of each word


function capitalise(str) {

    //convert str value to lowercase and convert to an array
    const stringArray = str.toLowerCase().split(' '); // when using split() .split(' ') - will split each word, while split('') - no space will split each character

    for (let i = 0; i < stringArray.length; i++) {
        //iterate over each word and get each string, take the first and make it uppercase then add on, the remaining substring using (1) which is second in the index
        stringArray[i] = stringArray[i].substring(0, 1).toUpperCase() + stringArray[i].substring(1);
    }

    return stringArray.join(' '); // converts stringArray from an array to a string




    //or use map()
    return str.toLowerCase().split(' ').map(item => { // take str and convert to lowercase then turn into an array with split() then loop over it
        item[0].toUppercase() + item.substring(1); // get the first letter and make uppercase and add on substring at 2nd index value of each iteration
    })


} // close function


capitalise('i love javascript');