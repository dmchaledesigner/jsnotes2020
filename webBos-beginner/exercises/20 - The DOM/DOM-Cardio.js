// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper')

// put it into the body
document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two three" in them
// put that list into the above wrapper

const unorderList = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`

div.innerHTML = unorderList;


// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://place-hold.it/300x500/666';

// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute')
// add an alt of Cute Puppy
image.alt = 'Cute Puppy'
// Append that image to the wrapper
div.appendChild(image);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <div>
`;

// put this div before the unordered list from above
const ulElement = document.querySelector('ul');
ulElement.insertAdjacentHTML("beforebegin", myHTML);
// add a class to the second paragraph called warning

const myDiv = document.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    const card = `
        <div class="playerCard">
       <h2>${name} — ${age}</h2>
       <p>They are ${height}cm and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
       <button class="delete" type="button">&times; Delete</button>
       </div>
        `;
    return card;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
let myCards = generatePlayerCard('david', 42, 160);
myCards += generatePlayerCard('gary', 38, 160);
myCards += generatePlayerCard('shaun', 36, 160);
myCards += generatePlayerCard('stephen', 32, 160);

// append those cards to the div
cards.innerHTML = myCards;

// put the div into the DOM just before the wrapper element
const wrapper = document.querySelector('.wrapper');
wrapper.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const btns = document.querySelectorAll('.delete');


// make out delete function
function deleted(e) {
    const clickedBtn = e.currentTarget;
    clickedBtn.closest('.playerCard').remove();
}

// loop over them and attach a listener
btns.forEach((btn) => {
    btn.addEventListener('click', deleted);
})



