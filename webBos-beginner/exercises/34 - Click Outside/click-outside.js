// vars
const cardButtons = document.querySelectorAll('.card > button');
const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');



// button event listener
cardButtons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
})


function handleButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const description = card.dataset.description;
    const imgSrc = card.querySelector('img').src;
    const name = card.querySelector('h2').textContent;

    innerModal.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
        "200",
        "600"
    )}" alt="${name}"/>
      <p>${description}</p>
    `

    //show the modal by adding the class to the outer modal
    outerModal.classList.add('open');

}


// outer Modal Close 
outerModal.addEventListener('click', handleModalClose);


//close modal function
function close(element) {
    element.classList.remove('open');
}


function handleModalClose(event) {

    // console.log(event.target);
    const isOutside = event.target.closest('.modal-inner');
    if (!isOutside) { // if NOT the inner modal
        close(outerModal);

        // or we could do
        // outermodal.classList.remove('open') but have create a function for this
    }

}