// window Object

// alert
// confirm
// location
// prompt


// alert
// simply put its an alert box
alert();


// confirm
// gives users a choice of ok or cancel

(function()(){


	if(confirm('Do you want to go out tonight')){
			alert('Lets get ready');
	}else{
			alert('Lets do next weekend instead so');
	}

}());



// location - a property of the window object
// enable us to pass the path of the url into a var



(function()(){ 

	if(confirm('Do you want to go to Google.com?')){

			location = 'http://google.com';
	}else{
			alert('Lets stay here');
	}

}());



// prompt - expects a users input value

(function()(){ 

	var person = prompt("Please enter your name");

	if(person === null || person === ""){
		alert("The user has cancelled the prompt");
	}else{
		alert('Hello ' + person + ". How are you today?");
	}

}());






