
// Objects have Properties and Methods. 
// Object => Car
// Properties => car.name, car.model, car.color
// Methods => car.start(); car.drive(); car.brake();

// most things in js are objects
// booleans, numbers, strings, dates, maths, regular expressions, arrays, functions and objects themselves

// NOTE: Associative arrays using key => value pairs are in PHP, not in JS
// with JS with use an object where an asssociative array would suffice.


// Simple Object
var person = {

				firstName: "john",
				lastName: "Doe",
				age: 35,
				nationality: "Swedish"
};

console.log(person.firstName + " " + person.lastName + " is from " + person.nationality);



// Simple Object with an added function
var person = {

				firstName: "john",
				lastName: "Doe",
				age: 35,
				nationality: "Swedish",
				fullName: function(){
							return firstName + " " + lastName;
							}
};

console.log(person.fullName() + " is from " + person.nationality);

// Object with a property function added

function car{

		model: "BMW",
		series: "M3",
		transmission: function trans(option){
								this.transmission = option;
										}
}


console.log("The " + car.series + " comes with a " + car.transmission("Sequential") + " gearbox");





// 3 ways of creating an object
//==============================


	// 1 object literal
	var person = {

					firstName: "john",
					lastName: "Doe",
					age: 35,
					nationality: "Swedish"
	};

	console.log(person.firstName + " " + person.lastName + " is from " + person.nationality);





	// 2 New Keyword
	var personProfile = new object();
	personProfile.firstName = "David";
	personProfile.lastName = "Mchale";






	// 3. Constructor Objects

	function baseObject(model, doors, trans, color){ // this is the skeleton object, refers to the owner function of the object

		this.model = model,
		this.doors = doors,
		this.trans = trans,
		this.color = color
	}

	var m3 = new baseObject('M3', "2 Door", 'Sequential' , 'Artic Grey'); // first object created from the skeleton object
	console.log("The model is an " + m3.model + ", " + m3.doors + "with a " + m3.trans + " gearbox in " + m3.color);







//OBJECT PROPERTIES
//====================


var person = {

					firstName: "john",
					lastName: "Doe",
					age: 35,
					nationality: "Swedish"
	};

var x = 'age';

	// 1 objectName.property
	console.log(person.firstName);

	// 2 object['property']
	console.log(person.['lastName']);

	// 3 object[x]
	console.log(person[x]);








// looping through a n object using the 'in' keyword
//====================================================

/*
	for(variable in object){
	 code to be executed
	}
*/


var person = {

					firstName: "john",
					lastName: "Doe",
					age: 35,
					nationality: "Swedish"
	};



text = ""; // empty string to add store the contents of the loop iterate

for(prop in person){ // prop = property. prop can be anything though. Must have the 'in' keyword

	text += person[prop];
	text += " ";

}

//result: jon doe 35 swedish






// adding to the object - simply create a key and a value to the object
//======================================================================
//object.key = "value";
person.eyeColor = 'blue';
//now run the same loop again or print to the console
console.log(person);



// deleting properties from an object - use the delete keyword with the object and its key
//====================================
// delete object.key
delete.person.age;
console.log(person);














