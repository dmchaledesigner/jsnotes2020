// forLoop


// basic explanation
var i;
for(i = 1; i <= 10; i++ ){
	console.log([i]);
}


// or we can declare a var inside the loop and not use a global variable as above

for(var i  = 1; i <= 10; i++){
	console.log([i]);
}



// with an array

var cars = ['bmw', 'merc', 'audi', 'skoda', 'volkswagon'];
var carLen = cars.length;

for(var i = 1; i < carLen; i++){
console.log(cars[i]);
}

// merc
// audi
// skoda
// voltswagon


//another example

var food = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];
var txt="";

	for(var i = 0; i <= food.length - 1; i++){ // we use the '-1' because its zero based index
		
		txt += "I love " + food[i] + "<br />";
	}

	console.log(txt);




// when looping through an array we always start with 0 (0 based array index)






// forloop using a select option and array
var mySelectBox = function mySelectBox(){

		var list = ['item1', 'item2', 'item3', 'item4'];
        var text = "";

		text = "<select>"; //open the select box

		for (var i = 0; i < list.length; i++) {
			text += "<option>" + list[i] + "</option>"; // loop through the list options
		}

		text += "</select>"; // close the select box

};

mySelectBox();






// with an object

var person = {

	firstName : "Dave",
	lastName : "Mchale",
	middleName : "Kevin"
}

// keyword here is 'in'. Standard key value is prop although can be anything name
for(prop in person){
	console.log(prop + " = " + person[prop]);
}

// firstName = Dave
// lastName = Mchale
// middleName = Kevin