
// Promises using ASYNC / AWAIT

/* Using async and await are ways to simplify promises.
Basically we are using our promise inside a function. This is the ONLY way async will work.
We cannot use await until we are inside a function that is declared using the await keyword

Async functions are promises by default and is a cleaner way of creating promises

*/




// lets look at randomuser.me
// when we make a fetch api call console.log() to see results

// here we are running synchronise code and fetch needs time to complete the task
const findName = () => {
    let response = fetch('https://randomuser.me/api/')
    console.log(response);
}

findName();

// result: Promise


// to use async / await we do this, however still only get a promise back

const findName = async () => {
    let response = await fetch('https://randomuser.me/api/')
    console.log(response);
}

findName();
// result: Response {type: "cors", url: "https://randomuser.me/api/", redirected: false, status: 200, ok: true, …}



// now we convert our response to json and await that
const findName = async () => {
    let response = await fetch('https://randomuser.me/api/')
    response = await response.json();
    console.log(response);
}

findName();
// now get get our 'results' array: {results: Array(1), info: {…}}





/*

SYNCHRONOUS CODE RUNS EACH LINE OF CODE ONE AFTER THE OTHER AND RETURNS THE OUTOUT
IE - RUNS THE FUNCION, THEN GETS THE RESPONSE, THE CONVERTS TO JSON THEN OUTPUTS THE RESULT

BUT WITH ASYNCHRONOUS CODE
WE RUN THE FUNCTION (WHICH NOW IS ASYNC),
THEN (AWAIT) FOR THE PROMISE (CALLED AWAIT) TO RETURN A PROMISE TO BE RESOLVED / REJECTED, THEN
WHEN THAT FETCH CALLED IS PASSED, ITS AWAITED TO BE RETURNED INTO JSON DATA, ALSO RESOLVED, THEN
THE DATA IS RECIEVED

ASYC IS TO TELL THE FUNCTION CODE THAT IT USES PROMISES AND TO STOP (AWAIT) UNTIL THE NEXT LINE OF CODE IS EXECUTED WHERE AWAIT IS USED
AWAIT IS REALLY AN OCCURANCE WHERE IF USED, WAITS FOR A RESOLVE BEFORE IT MOVES ONTO THE NEXT TASK

*/




// Promises with resolve, reject


const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('working'))
    }, 3000);

})

console.log(wait);







// lets change wait to a function and use a placeholder param for the seconds in the setTimeOut

// function 1 - to be passed to function 2
const wait = (ms) => new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve(console.log('working')), ms);

})




// function 2 - here we use async and await our promise from the first function to be fulfilled
const waitingTester = async () => {
    let waited = await wait(3000);
    console.log(waited);
}

waitingTester();





//  Note a typical try /catch block setUp

const functionName = async () => {

    try {

        // all code goes inside this code block


    } catch (error) {
        console.log(error);
    }
}

functionName();







// get 3 names into an array
// NOTE  This method returns an array of data, where previously we returned object data


const names = async (urlArray) => {

    try {

        let response = await Promise.all(urlArray.map((item) => fetch(item))); // console.log(response);
        let jsonResponse = await Promise.all(response.map((response) => response.json())); // console.log(jsonResponse);

        // with let results down, we are just chaining from the proprties in the developer console
        let resultsbyName = await Promise.all(jsonResponse.map((item) => item.results[0].name.first));

        console.log(resultsbyName); // this returns 3 array with data from each person

        //or output a string
        // results.forEach(element => {
        //     console.log(element);
        // });

        // or use map
        // results.map((item) => console.log(item));



    } catch (err) {
        console.log(err);
    }
}

// when we call the names function we pass the fetch url here x 3 times to get three names for our array
// remember the urls inside the function must be wrapped INSIDE an array
names(['https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/']);


/*

what the code above does....

1. create our function and assign use async to tell the function we are using async code inside and will be awaiting promises
2. the placeholder in the function is there, to evoke in 3 urls, called urlArray - we can evoke same value as many times, but here is 3 as we want to get 3 persons. to get 4 just add another url to the function call
3. the urlArray is passed inside the fetch call and turned into a variable with await to resolve that promise
4. That same variable is then mapped over and converted to json data
5. A new variable called results is created and given the value of the json data with properties from the chained dev tool data shown - use console log all the time to see how each variable works
6. finally console the results
6. Our catch function will always be part of the function block;

*/




// To return Object data we can do similar to the above

const url = 'https://jsonplaceholder.typicode.com/posts/'

const getPostData = async () => { // using async arrow function

    try {

        const post = await fetch(url); // await - a promise - continiues when all data is resolved
        const data = await post.json(); // await - a ppromise - continiues when all data is resolved
        // console.log(data) // this will show the array of objects from the url


        // now we can do anything with the const data so lets get the titles of the first 6 objects in the array
        for (let i = 0; i <= 6; i++) { // great a loop at is less or equal to 6
            console.log(data[i].title); // get the data[i] being the index to 6 and then the title
        }

        //or use map() or forEach over the data


    } catch (error) {
        console.log(error);
    }
}

//evoke the function
getPostData(); // result is the post data from post 1













// Higher Order functions  - a partial application function using params in both parent and child function to get url and relative path combined - using async and await
const getData = (url) => {
    return async (route) => { // inner function
        try {

            await fetch(`${url}${route}`)
                .then((response) => response.json())
                .then((data) => {
                    const allData = data;
                    allData.map((item) => {
                        console.log([item.title, item.body]);
                    })
                })


        } catch (error) {
            console.log(error)
        }

    }
};


const myPosts = getData('https://jsonplaceholder.typicode.com'); // evoke the first function and url param

myPosts('/posts'); // use myposts as a function and use the relative path as the url. then function is evoked and the result is all the posts from the complete url