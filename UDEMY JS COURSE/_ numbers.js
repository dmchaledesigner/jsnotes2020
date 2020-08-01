

// Number Methods
//=================


    // .toString()
    var x = 123;
    console.log(x.toString()); // Result "123"
	
    // to exponential
    // Exponential format  = 123e5 (which equals 12300000 - 123 with 5 zeros)
	

	// parseInt();
	var x = "10";
	var y = parseInt(x);
	console.log(y); // Result 10
	//converts a string to a number.
	// check in the console by typing 'typeof y' - result is number


	//eg...

	var luckyNumber = prompt('What is your lucky number?');
	luckyNumber = parseInt(luckyNumber);

	if(luckyNumber === 7){
		document.write('Thats my number too');
	}else if(isNaN(luckyNumber)){ // is not a number
			alert('Enter a number');
		}else{
			alert('Thats a good number');
	}


	

	// toString()
	var x = 10;
	var z = x.toString();
	console.log(z); // Result 10
	//converts a string to a number.
	// check in the console by typing 'typeof z' - result is string





	// parseFloat();
	var z = 10.234;
	var z1 = parseFloat(z);
	console.log(z1); // result 10.234
	//converts a string to an number same as partInt();




	// Math.floor();
	Math.floor(45.95); //  45
	Math.floor(45.05); //  45
	Math.floor(4); //   4




	// Math.random();
	var x = Math.random();
	console.log(x);


				// one value
				function getRandom() {
					  return Math.floor(Math.random()) + 1;
					}

				getRandom();


				// between two numbers
				function getRandomArbitrary(min, max) {
					  return Math.random() * (max - min) + min;
					}

				getRandomArbitrary(4, 6);




	//math.Ceil();



