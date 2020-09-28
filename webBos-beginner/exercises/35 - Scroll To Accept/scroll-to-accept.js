
const terms = document.querySelector('.terms-and-conditions');





terms.addEventListener('scroll', scrollMe);

function scrollMe(event) {
    console.log(event.currentTarget.scrollTop);
}


