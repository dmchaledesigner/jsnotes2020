//===============
// string methods
//===============


    

    // lowercase
    console.log(str.toLowerCase());

    // uppercase
    console.log(newStr.toUpperCase());
    



//concatination
var x = 'Hello';
var y = 'World';
var z = x.concat(" ", y);
var z1 = x + " " + y;
console.log(z, z1); // 'Hello World





// string index
var text = "In this lecture, me will be the teacher";
var me = text.indexOf("me");
console.log(me); // 17 = the index number of the position of the tet 'me'






//indexOf with last instance of word count
var text = "In this lecture, me will be the teacher, me this and me that";
var me = text.lastIndexOf("me");
console.log(me); // 53







// Slicing, substring & substr
// Note: the first two are based on positioning in the index, while substr() is a position and a number length


		// Slice - slice(start, finish)
		var fruits = "apple, banana, kiwi"; // single string
		var item = fruits.slice(7, 13); //start and finish position
		console.log(item); //print the item


		// if we only put one numeric param into the slice(), js continue to print the rest of the string
		var fruits = "apple, banana, kiwi"; 
		var item = fruits.slice(7); 
		console.log(item); //banana, kiwi



		// subString - exactly the same as the slice() but it doesnt accept a negative parameter
		var fruits = "apple, banana, kiwi"; // single string
		var item = fruits.substring(7, 13); //start and finish position
		console.log(item); // banana



		//substr
		var fruits = "apple, banana, kiwi"; // single string
		var item = fruits.substr(7, 6); // meaning go to position 7 in the index and count 6
		console.log(item); // banana


		// indexOf w/ subStr
		var obj = "This is a string object";

		var index = obj.indexOf('st'); // find 'st' in the string obj
		var partObj = obj.substr(index, 6) // uses the index var to find 'st' then count up 6 chars from 'st' so the result is 'string'


		// string replace
	  var str = 'This is the way we do things';
      var newStr = str.replace('we', 'they');
	  console.log(newStr);
	  console.log(newStr.toUpperCase());


	    // what if we had a string with the same word multiple times
    	var str = 'This is the way we do things, because we do this and we do that';
    	// we can use regualr expression with a '/' a word and another '/' this is will search for all words in the string, then we use a 'g' inside it for 'global'
    	var newStr = str.replace(/we/g, 'them');
    	console.log(newStr); // This is the way them do things, because them do this and them do that
   


    	// we can also extract string characters by using charAt();
    	var x = "hello";
    	var letter = x.charAt(0);
    	console.log(letter); // 'h'



		// string to an array split();
		 var myString = "Ferrari, BMW, Mercedes, Audi";
		 var myArray = myString.split(", ");
		 console.log(myArray);



















