// callback = a function that is passed as an argument
//              to another function.

//          used to handle asynchronous operators;
//          1. reading a file
//          2. network requests
//          3. interacting width databases
//          "hey, when you call done, call this next."

hello(leave);
//parent is declared
function hello(callback){
    console.log('Hello');
    callback();
}
//children is callback
function wait(){
    console.log('Wait');
}
function leave(){
    console.log('Leave');
}
function goodbye(){
    console.log('Good Bye');
}


sum(displayPage, 1, 3);
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
// function displayConsole(result){
//     console.log(result);
// }
function displayPage(result){
    document.getElementById('myH1').textContent = result;
}