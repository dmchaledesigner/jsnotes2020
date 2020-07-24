
const para = document.createElement('p');
para.textContent = 'i am a paragraph';
para.classList.add('special');
// console.log(para);


const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/id/237/200/300';
myImage.alt = 'myimage';
// console.log(myImage);



const myDiv = document.createElement('div');
myDiv.classList.add('myDiv');
// console.log(myDiv);


const body = document.body;


// append function
function append(parent, child) {
    return parent.appendChild(child);
}


const h2 = document.createElement('h2');
h2.textContent = 'i am a heading';
myDiv.insertAdjacentElement('beforebegin', h2);



// append elements to the body
append(myDiv, para);
append(myDiv, myImage);
append(body, myDiv);


console.log(myDiv);



//insertAdjacent Element
const list = document.createElement('ul');
const li = document.createElement('li');


li.textContent = 'three';
list.appendChild(li); // place li inside the ul

const li5 = document.createElement('li'); // create list element

const li1 = li5.cloneNode(true); // clone the li5 const and use 'true' to carry over the text orherwise it will just clone the li element
li1.textContent = 'one'; // change the li1 text

list.insertAdjacentElement('afterbegin', li1); // add the li1 to the list
body.appendChild(list);