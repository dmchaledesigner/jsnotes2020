// OBJECTS
// ============


// A LITERAL OBJECT
//*******************
// * Can only hold one object
// * Cannot make other objects from a single literal object

(function () {


	var person = {
		firstName: "John",
		lastName: "Doe",
		age: 50,
		eyeColor: "blue"
	};

	console.log(person.firstName + " is " + person.age + " years old.");

	// John is 50 years old

}());





// OBJECT METHOD
//*******************
// * An Object Method are the actions / functions that are performed on objects

//Eg1

(function () {


	functio Car = {

		model: "M3",
		year: 2002,
		color: "blue",
		driver: function (name) {
			var infront = "The person driving is " + name;
			return infront;
		}

	};


	console.log("This BMW is a " + car.year + " " + car.model + ". " + car.driver('Dave'));

	// This BMW is a 2002 M3. The person driving is Dave


}());



//Eg2


(function () {


	var thingsToDo = {

		'motogp': function (name) {
			alert('Lets go to see ' + name);
		},

		'formula1': function () {
			alert('Lets go to see ' + name);
		},

		'liverpool': function () {
			alert('Lets go to see ' + name);
		},
	};


	thingsToDo['motogp']("Rossi");


}());




// A CONTRUCTOR OBJECT
//**********************

// base object
function bmw(model, body, speed, series) {

	this.model = model;
	this.body = body;
	this.speed = speed;
	this.speed = series;


};


//objects created based on the base object
var car1 = new bmw("E92", "Coupe", 220, 3);
var car2 = new bmw("E60", "Saloon", 280, 5);


//result from object car1
console.log("The model is " + car1.model + " has a top speed of " + car1.speed + " and is a " + car1.body);

//result from object car2
console.log("The model is " + car2.model + " has a top speed of " + car2.speed + " and is a " + car2.body);







// A CONTRUCTOR OBJECT = The preffered Version (inside a variable)
//***************************************************************

var BmwCar = function car(model, body) {	// Note. When declaring an object inside a variable, the first letter of the var name must be in capitals.

	this.model = model;
	this.body = body;
	this.speed = function (distance, time) {
		var total = (distance * time);
		return total;
	}

};


var m3 = new BmwCar("M3", "Saloon");

console.log("The model is " + m3.model + " " + " The average speed was " + m3.speed(30, 5));





// add new properties to a contructor object
//===========================================

// the constructor prototype
function Person(first, last, eyeColor, age) {

	this.firstName = first;
	this.lastName = last;
	this.eyes = eyeColor;
	this.years = age;

}

// new objects
var myFather = new Person("David", "Mchale", "Blue", 37); //values from the function params
var myMother = new Person("Patricia", "Mchale", "Blue", 63); //values from the function params

//print the objects
console.log("His name is " + myFather.firstName + " " + myFather.lastName + ". Aged: " + myFather.years + " with " + myFather.eyes + " eyes.");
console.log("His name is " + myMother.firstName + " " + myMother.lastName + ". Aged: " + myMother.years + " with " + myMother.eyes + " eyes.");


// new properties
myMother.nationality = "Irish";
console.log(myMother.nationality); // result irish









































