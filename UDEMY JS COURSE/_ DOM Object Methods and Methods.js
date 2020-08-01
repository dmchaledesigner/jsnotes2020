// DOM Object Methods and Methods
//....  are simply actions that are performed on html elements


// id
<p id='test'></p>
var sample1 = document.getElementByid('test');
console.log(sample1);  // this will show all the methods that can be used via the console


// tag name
<p id='test'></p>
var sample2 = document.getElementByTagname('p');
console.log(sample2);  


// class name
<p id='test' class='sampleClass'></p>
var sample3 = document.getElementByClassName('sampleClass')[0]; // classes are usually multiple so its an array, hense the [0]
console.log(sample3);  


// css selectors / querySelector
<p id='test' class='sampleClass'></p>
var sample4 = document.querySelectorAll('p.sampleClass'); // p with a class of 'sampleClass'
console.log(sample4);  




//Add a ClassName to an element
//-----------------------------
var el = document.getElementById('myElement');
el.className = myclassname; // will assign a class of 'myclassname' to the element with an id of 'myElement'







// Create an element with Content
//------------------------------

// Consider the following html...
//  <div id="div1">The text above has been created dynamically.</div>


function addElement(){

	// vars
	var currentDiv =  document.getElementById('div1'); 
	var newDiv = document.createElement('div2');
	var newContent = document.createTextNode("<strong>This is some new content added to the new Div</dtrong>");

	//add the NewContent to the NewDiv
	newDiv.appendChild(newContent);

	// add the newDiv and its content to the DOM
	document.body.insertAfter(newDiv, currentDiv);
}

addElement(); //call the function






// Add an attribute and an ID 
//------------------------------

(function(){

	var el = document.getElementByid('div1');
	var newElement = document.createElement('div2');
	var content = createTextNode('This is some dynamically added content');

	// add the content to the newElement
	newElement.appendChild(content);

	// add an ID to the newElement
	newElement.id('bar'); // we can also do this with .setAttribute()

	// add an attribute to the newElement
	newElement.setAttribute('href', 'http://google.com');

	// add the newElement to the DOM
	document.body.insertAfter(newElement, el);



}());


































// html object collections

	// simple form with a button outside. When the info is entered, the data is passed to the formContent p container

<form id="form1" action=""> 

	<input type="text" name="fname" placeholder="First Name" value="firstName">
	<input type="text" name="lname" placeholder="last Name" value="lastName">
	<input type="submit" value="submit">

</form>


<br />

<button onclick="formData()"></button>

<br />

<p id="formContent"> </p>


var myFunction = function formData(){

	var x  = document.forms['form1'];
	var text = '';
	var i;

	for(i = 0; i < x.length; i++){
		text += x.elements[i].value + "<br />"; // forms returns a collection (an HTMLCollection) of the <form> 'elements' within the current document. So form array, then elements keywork then the iterator [i]
	}

	document.getElementByid('formContent').innerHTML = text;


}









