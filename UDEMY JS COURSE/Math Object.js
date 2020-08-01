// Generate a random number


Math.random(); // will generate a random number from 0 - 1 including decimals

//eg
var x = Math.random();
console.log(x);



// bring a decimal to its lowest integer
Math.floor();

var x = Math.floor();
console.log(x);



// we can also set a number to its highest
Math.ceil();

var x = Math.ceil(Math.random());
console.log(x);




var x = Math.random();


// 0 - 9
console.log(Math.floor(x * 10));


// 0 - 100
console.log(Math.floor(x * 100));


// 1 - 10
console.log(Math.floor(x * 10) + 1);


// random number function

	function randomNumber(max, min){
		return Math.floor(Math.random() * (max - min)) + min;
	}

	randomNumber( 5, 6);




// Number Methods
//=================


    // to string()
    var x = 123;
    console.log(x.toString()); // Result "123"
	
    // to exponential
    // Exponential format  = 123e5 (which equals 12300000 - 123 with 5 zeros)
	

	// parseInt();
	var x = "10";
	console.log(parseInt(x)); // Result 10
	//converts a string to a number

	// parseFloat();
	var z = 10.234;
	console.log(parseFloat(z)); // result 10.234
	//converts a decimal to an integer


	// math.Floor();


	// Math.random();


	//math.Ceil();



