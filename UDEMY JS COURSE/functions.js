// functions


// basic function

function myFunction(p1, p2) {
    return p1 * p2;
}

myFunction(3, 5); // result is 15





// store a message answer in a var using a function
var userName = function userName(){

			var name = prompt("What is your name");
			
			if(name === "david")
					return name.toLowerCase;
					// alert("Please choose another name");
					// name = prompt("What is your name");
					// return name;
					
			

};

var result = userName();
document.write(result);







// store a message answer in a var using a function
var userName = function userName(){

			var name = prompt("What is your name");
			
			if([name].value === "")
					return name.toLowerCase;
					// alert("Please choose another name");
					// name = prompt("What is your name");
					// return name;
					
			

};

var result = userName();
document.contentText(result);








// GETTING MULTPLE VALUES FROM A FUNCTION

function getSize(width, height, dept){
	var area = width * height;
	var volume = width * height * dept;
	var size = [area * volume]; //we use var are and volume,
	return size; // then return the size variable
}

getSize(3, 2, 3)[0]; // first in the sizes array
getSize(2,5, 6)[1]; // second in the sizes array




