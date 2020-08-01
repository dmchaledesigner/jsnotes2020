// object methods / functions
//============================


// simply add a function to a key like so
// methodName : function(){

// }

// to access we write objectName.methodName();




// A LITERAL OBJECT
//*******************
// * Can only hold one object
// * Cannot make other objects from a single literal object




var person = {

	firstName: "john",
	lastName: "Doe",
	age: 35,
	nationality: "Swedish",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
};

console.log(person.fullName());



//or we can add a variable to a function and return that if we like BUT it must have a param added to pass through the function or we have to use 'this' keyword

var car = {

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






var person = {

	firstName: 'David',
	lastName: 'Mchale',
	getName: function () {
		return this.firstName + " " + lastName;
	}
	address: {
		street: '123 My Street Name',
		zip: 2017
	}
}

document.write(person.getName());
document.write(person.address.street);



// OBJECT METHOD
//*******************
// * An Object Method are the actions / functions that are performed on objects

//Eg1

(function () {


	var car = {

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

		'formula1': function (name) {
			alert('Lets go to see ' + name);
		},

		'liverpool': function (name) {
			alert('Lets go to see ' + name);
		},
	};


	thingsToDo['motogp']("Rossi");


}());







// Looping over an object


var person = {

	firstName: "Dave",
	lastName: "Mchale",
	middleName: "Kevin"
}


// keyword here is 'in'. Standard key value is prop although can be anything name
for (prop in person) {
	console.log(prop + " = " + person[prop]);
}

// firstName = Dave
// lastName = Mchale
// middleName = Kevin











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



// new object using the 'new' keyword
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






