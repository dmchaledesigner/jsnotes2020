// reverse a string

let string = 'hello';

let stringToArray = string.split('') // ["d", "a", "v", "i", "d"]
stringToArray.reverse(); // reverses the array
let backtoString = stringToArray.join('');
console.log(backtoString);


function reverse(str) {
    return str.split().reverse.join('')
}

console.log(reverse('hello'));