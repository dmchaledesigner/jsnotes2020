

const buttons = document.querySelectorAll('.buy');






buttons.forEach((btn) => {
    btn.addEventListener('click', handleClick);
})





function handleClick(event) {
    console.log(event.target.classList.value);
    // console.log(event.target.dataset.price);
}



const coolBtn = document.querySelector('.cool');

coolBtn.addEventListener('click', () => {
    console.log(this);
})