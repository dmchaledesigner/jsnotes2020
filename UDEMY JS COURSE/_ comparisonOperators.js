


// logical operators
//===================

var x = 5;

// greater than (>)
console.log('x > 8 = ' + (x < 8)); 

// less than (<)
console.log('x < 8 = ' + (x < 8));

// greater or equal to (>=)
console.log('x < 8 = ' + (x < 8));


// x is NOT equal to 5
console.log('x !== 5 ' + x !== 5);

// other are...
// less than or equal to (<=)
// equal to (=)
// equal to value and type / strict evaluation (===)
// not equal to (!=)
// not equal value or not equal type (!==)








// Logical Operators

 // condition
var age = 18;

if(age < 18){
	console.log('Too young');
}else{
	console.log('Grown up!');
}


//multple condition
// && 'AND'
// || 'OR'
// ! 'NOT'

var gender = 'male';

if(age < 18) && (gender == 'male'){
console.log('Too young bro!');
}else if(age <= 18 && gender == 'female'){
	console.log('Too young sister');
}else if( age > 18 || gender == 'male'{
	console.log('You are a man'){
}else if(age > 18 !){

}

 
// Terninary Operator

// var = condition ? 'statement1' : 'statement2';
var canIVote = (age < 18) ? 'Yes I can vote' : 'No i cant vote';
console.log('can he vote ' + canIVote);

