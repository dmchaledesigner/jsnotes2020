

const buttons = document.querySelectorAll('.buy');


function handleClick(event) {

    const btn = event.target;
    console.log(btn.dataset); // gets the data attribute of an element
    console.log(btn.dataset.price); // gets the value of the object key called price
}


buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
})