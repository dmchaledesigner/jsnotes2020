const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');



// function obCallback(payload) {
//     if (payload[0].intersectionRatio === 1) {
//         button.disabled = false;
//         // stop observing the button
//         ob.unobserve(terms.lastElementChild);
//     }
// }
// const ob = new IntersectionObserver(obCallback, {
//     root: terms,
//     threshold: 1,
// });

// ob.observe(terms.lastElementChild);



let options = {
    rootMargin: '0px',
    threshold: 0.5,
}

function reveal(entries) {
    entries.forEach((item) => {
        // console.log(item.isIntersecting);
        // console.log(item.intersectionRatio); - shows number 0 or 1

        if (item.intersectionRatio === 1) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }


    })
}

const observer = new IntersectionObserver(reveal, options);

observer.observe(terms.lastElementChild);