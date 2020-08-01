                     // DOM - EVENTS


// onclick();
// onmousedown();
// onmouseenter();
// onmouseleave();
// onmouseout();
// onkeypress();
// onkeydown();

// See https://www.w3schools.com/jsref/dom_obj_event.asp for a list of events

// HTML events are "things" that happen to HTML elements.
//When JavaScript is used in HTML pages, JavaScript can "react" on these events.

//eg


<button onclick="myFunction()">Click Me</button>

<p id="demo"></p> 


//js
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}




//or




<button onclick="displayDate()">The time is?</button>
<p id="demo"></p>


var myDate = new Date();

function displayDate() {
    document.getElementById("demo").innerHTML = myDate;
}





//eg 2

<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>


//...still using 'this'



<div onmouseover="over(this)" onmouseout="out(this)">Mouse Over Me</div> // 'this' refers to the tag itself ie. the <div>


function over(element){ // use 'element as a param' to attach the new html
	element.innerHTML = "Thank you!";
}


function out(element){
	element.innerHTML = "Mouse over me";
}







// we can remove the onclick event from the element and assign it to the function like so

<button id="myBtn">Try it</button> // the click

 <p id="demo"></p> // the target


function displayDate(){
	document.getElementById('myBtn').innerHTML = new Date();
}

document.querySelector('p#demo').onclick = displayDate; // the display date function call without its params








// onchange();

// The onchange event occurs when the value of an element has been changed.
// For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.




























