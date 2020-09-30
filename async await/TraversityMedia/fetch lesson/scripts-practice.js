const textBtn = document.getElementById('getText')
const outPutBlock = document.getElementById('outPut');
const usersBtn = document.getElementById('getUsers')
const postsBtn = document.getElementById('getPosts')

const form = document.getElementById('addPost')
/*  

Task: when the text button is clicked, get the data from the text file, then print to the page
    1. Create an Event Listener
    2. Create a function inside the listener
    2-1. Inside the function fetch the data from the text file, using a promise such as fetch
    2-2. Then assign the result to the outPut Block declared in the variable above
*/


textBtn.addEventListener('click', getText);


// use async  before the function declaration to use 'await' inside the function
async function getText() {
    try {

        const response = await fetch('sampleText.txt');
        const dataText = await response.text();
        let data = dataText;

        setTimeout(() => {
            console.log(data)
        }, 3000);


        // add the content of a div and add to the output block
        let myDiv = document.createElement('div');
        myDiv.classList.add('content');
        myDiv.textContent = data;
        outPutBlock.insertAdjacentElement('beforebegin', myDiv);


    } catch (error) {
        console.log(error);
    }
}






// Lets do the same for the json data file

usersBtn.addEventListener('click', getJsonData);

function createElement(element) {
    return document.createElement(element);
}


function appendElement(parent, child) {
    return parent.appendChild(child);
}


async function getJsonData() {



    try {

        const response = await fetch('users.json');
        const jsonData = await response.json();
        let data = jsonData;
        // console.log(data);

        for (const item of data) {
            // console.log(item.id, item.email, item.name);
            const id = item.id;
            const name = item.name;
            const email = item.email;

            let outPut = `
            <ul class="list-group">
            <li class="list-group-item">ID: ${item.id}</li>
            <li class="list-group-item">Name: ${item.name}</li>
            <li class="list-group-item">Email: ${item.email}</li>`;
            // console.log(outPut);
            outPutBlock.insertAdjacentHTML('beforebegin', outPut);
        }


    } catch (error) {
        console.log(error);
    }

}






// API DATA CALL
postsBtn.addEventListener('click', getApiData);


async function getApiData() {

    try {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then()

    } catch (error) {
        console.log(error)
    }

}