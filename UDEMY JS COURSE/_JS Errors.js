//JS Errors / Debugger


// try{
// 	some code
// }catch(err){
// 	code to handle error
// }



try{
alert('hi there'); // code to pass to see if errors exist
}catch(err){ // condition to catch errors
document.getElementById('demo').innerHTML = err.message; // print the error into a div using the err.message method
}



// Debugger
// Alows you to go over parts of the JS in developer tools when active, and play each section of code to find where the issue is

//eg

var x, y, z;

x = 15;
y = 5;
z = 20;

debugger; // actives the debugger function. Go into developer tools and snoop around !!

document.getElementById('demo').innerHTML = z;
