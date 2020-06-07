

/* ========
DOM Scripting =======
============ */



// the document in the console

// go into dev tools and type 'document' to dislay full object of the DOM
// to access a node list for instance the title object
// type document.title to view the title etc
// to change it
document.title = "new site title";

// we can also use the window object
// type 'window' into the console and return the window object





/* <p id='root'></p> */
document.getElementById('root').innerHTML = 'Hello World'; //  changes the content (the innerHTML) of the <p> element with id="demo":



// Finding HTML Elements
document.getElementById('main') //find an element with the id of 'main'
document.getElementsByTagName('x')[0] // gets first element of all tag name called x
//eg

document.getElementsByTagName("P")[0].innerHTML = "Hello World!"; // get first p
document.getElementsByClassName() // finds all elements by css class name - use querySelector and then classList()




// https://blog.learnjavascript.online/posts/javascript-has-class/  - classList items

/* It's great news that you don't need a library anymore to check if an element has a class or not, because you can now simply do it with a call to classList.contains("class-name")*/

/* Here's an example. Say you've got the following HTML:

	<div id="box1" class="active"></div>
	<div id="box2"></div>
*/

const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');

// check if an element has a class or not
box1.classList.contains('active'); // true
box2.classList.contains('active') // false

if (box1.classList.contains('active')) {
	//do something
} else {
	// do something else
}



// Add one or more classespermalink
element.classList.add("some-class"); // result <div id="my-element" class="some-class"></div>

// adding 2 classes
element.classList.add("class1", "class2"); // result <div id="my-element" class="class1 class2"></div>


//removing a class
element.classList.remove('active');

// removing multiple classes
element.classList.remove("class1", "class2");

// replacing a class
element.classList.replace("old-class", "new-class")

// toggle a class
element.classList.toggle('myclass') // if element has named class it will remove or add it

//eg

button.addEventListener('click', function () {
	element.classList.toggle('some-class-name');
});


// get element with an id of 'myBtn and then get the value of the attribute 'onClick'
var x = document.getElementById("myBtn").getAttribute("onClick");


// and find a class and replace it
element.classList.contains('classOne');
element.classList.replace('classTwo');



//This example finds the element with id="main", and then finds all <p> elements inside "main":
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");



// Changing HTML Elements
element.innerHTML = 'new content' // change the inner html of an element
var x = document.getElementsByTagName("H1")[0].getAttribute("class"); // gets the class from an element
element.style.property = 'new style' // change the style of a html element
element.setAttribute('class', 'class-name') // changes the attribute of a html element // Also see classList.replace()
//eg
var b = document.querySelector(".button"); //finds all css with class of button
b.setAttribute('name', 'helloButton') // changes button class attritube of name to helloButton


//setAttributeNode()
var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
var att = document.createAttribute("class");       // Create a "class" attribute
att.value = "democlass";                           // Set the value of the class attribute
h1.setAttributeNode(att);                          // Add the class attribute to <h1>

// or we could just do this..
h1.setAttribute('class', 'class-name');



// get id of image and use .src to add image
// <img id="myImage" src="smiley.gif"> 
document.getElementById("myImage").src = "landscape.jpg"; // <img id="myImage" src="landscape.jpg">  - changes the src image




// Adding and deleting elements

document.createElement() // Create element
document.body.appendChild(); // adding and element to the DOM
document.createTextNode('this is some text'); // creates new string
document.removeChild() // removes a html element
document.appendChild(element) // add an html element
document.replaceChild(new, old) //Replace a html element
document.write(Date()) // write the date into the html output stream



// Finding HTML Objects - try on console on a random page
document.anchors // finds all <a> elements
document.body // returns the body element
document.images // returns all <img> elements
document.links // returns all <a> tags



// Finding elements by CSS selector
var j = document.querySelector('#my-id');
var x = document.querySelectorAll('col-sm-12');
var y = x.setAttribute('class', 'col-sm-3');



//example
var x = document.createElement('div'); // create a DIV element
x.setAttribute('class', 'col-sm-12'); // give it a class attribute
var content = document.createTextNode('this is some text'); // create a text node
var y = x.appendChild(content); // append the text node to the div
document.body.appendChild(x);  // print the content of the div to the DOM


// getting child node elements (includes all nodes include comments etc)
var x = document.getElementById('parent');
var y = x.childNodes;
console.log(y); // will return all node inside the parent


// getting child DOM elements
var x = document.getElementById('parent');
var y = x.children;
console.log(y); // will return all node inside the parent 


// looping over classes

var list = document.querySelectorAll('.list-items'); // get all list items (<li class="list-items">)

for (items of list) { // using the 'for of' loop, iterate over all items and print to console
	console.log(items);
}


// inside a call back
list.forEach(function (items) {
	console.log(items);
})


// arrow function
list.forEach(items => items.classList.replace('.list-items', 'new-items'));
console.log(item);






/*========
 changing HTML Styles
 ======================*/

//.style.color
document.getElementById('root').style.color = 'red';







/*========
JavaScript Events


//  Using Events to change things

// html: <h1 id="id1">My Heading 1</h1>
//        <button type="button" onclick="document.getElementById('id1').style.color = 'red'"> Click Me!</button>     //


// html:  <button onclick="document.getelementsByTagName='button"[0]this.style.display = 'none'">Disappear!</button>








examples of events

When a user clicks the mouse
When a web page has loaded
When an image has been loaded
When the mouse moves over an element
When an input field is changed
When an HTML form is submitted
When a user strokes a key


 ======================*/


// onclick()

function changeText(id) {
	id.innerHTML = 'this text is changed'
}
//html: <h1 onclick="changeText(this)">Click here</h1>




// Event Listeners = fires when a user clicks a button

document.getElementById('btn').addEventListener('click', function () {
	alert('this has been clicked!');
});


//  using a function
function myFunction() {
	alert("this has been clicked");
}

document.getElementById('btn').addEventListener("click", myFunction);



// mulitple event listeners on one element
var x = document.getElementById('btn');


