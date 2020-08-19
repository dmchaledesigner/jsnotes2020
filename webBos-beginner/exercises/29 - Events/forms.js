
// // when working with forms, always use symantic html ie proper attributes
// const signUpForm = document.querySelector('[name="signup"]');
// const formDataContainer = document.querySelector('.form-data');


// signUpForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // console.log(event); // dev tools to see all properties
//     // console.log(event.target); // will get each html element
//     // console.dir(event.currentTarget);
//     // console.log(event.target.name) // again open dev tools and see properties
//     // console.log(event.target.name.value) // gets the value of the name element
//     // console.log(event.target.email) // will rreturn the email html element
//     let formData = {};
//     const name = event.currentTarget.name.value; // value from the name
//     const email = event.currentTarget.email.value; // value fom the email
//     const terms = event.currentTarget.agree.checked; // returns true of false


//     let allData = Object.assign(formData, name`${name}`, email`${email}`);
//     allData = JSON.stringify(allData);
//     formDataContainer.insertAdjacentHTML('beforebegin', allData);
//     // console.log(Object.entries(allData)); // returns an  array
// })




// get the form

const form = document.querySelector('[name="signup"]');
const formData = document.querySelector('.form-data');



form.addEventListener('submit', handleClick);

function handleClick(event) {
    event.preventDefault();
    // console.log(event);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const check = event.target.agree.checked;

    formData.innerHTML = `<p>${name}</p>`;
    formData.innerHTML += `<p>${email}</p>`;
    formData.innerHTML += `<p>${check}</p>`;
}