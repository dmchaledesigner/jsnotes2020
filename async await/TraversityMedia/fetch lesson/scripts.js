
// variables
const textBtn = document.getElementById('getText')
const outPutBlock = document.getElementById('outPut');
const usersBtn = document.getElementById('getUsers')
const postsBtn = document.getElementById('getPosts')

const form = document.getElementById('addPost')




// get Text using sample text file
textBtn.addEventListener('click', getText);


function getText() {
    fetch('sampleText.txt')
        .then((response) => response.text())
        .then((data) => {
            outPutBlock.innerHTML = data;
        }).catch((error) => console.log(error));
}





// get json data from a file
usersBtn.addEventListener('click', getUsers);

function getUsers() {
    fetch('users.json')
        .then((response) => response.json())
        .then((data) => {

            let outPut = `<h2>Users</h2>`;
            data.forEach((item) => {
                outPut += `
                        <ul class="list-group">
                        <li class="list-group-item">ID: ${item.id}</li>
                        <li class="list-group-item">Name: ${item.name}</li>
                        <li class="list-group-item">Email: ${item.email}</li>
                        </ul>
                    `
            });

            outPutBlock.innerHTML = outPut;

        })
}



// get posts API DATA
postsBtn.addEventListener('click', getPosts);

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {

            let outPut = `<h2>Users</h2>`;
            data.forEach((post) => {
                outPut += `
                        <div class="card card-body m-3">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                        </div>
                    `
            });

            outPutBlock.innerHTML = outPut;

        })
}




//add post form
addPost.addEventListener('submit', addPosts);

function addPosts(e) {
    e.preventDefault(); // stop browser refresh

    let title = document.getElementById('title').value; // get value of title input field
    let body = document.getElementById('body').value; // get value of the body

    // get the api
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body })
    }).then((response) => response.json())
        .then((data) => console.log(data))

    title.value = '';
    body.value = '';

}


