// function declaration = define a reusable block of code
//                      that performs a specific task
// function hello(){
//     console.log('Hello');
// }
// hello();

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(square)

// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }

// function expressions = a way to define functions as
//                        values or variables
// const hello = function(){
//     console.log('Hello');
// }
// hello();

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})
console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);

const welcome = document.getElementById('myH1');
// const trigger = document.getElementById('submit');
//1.way
// trigger.onclick = function(){
//     setTimeout(function(){
//         welcome.textContent = 'Welcome to >>> Function expression LESSON.'
//     }, 3000);
// }
//2.way
// trigger.addEventListener('click',()=> {
//     setTimeout(function(){
//         welcome.textContent = 'Welcome to >>> Function expression LESSON.'
//     }, 3000);
// })
//3.way This don't need line 43 code and have to add clickMe() in HTML sheet
function clickMe(){
    setTimeout(function(){
        welcome.textContent = 'Welcome to >>> Function expression LESSON.'
    }, 3000);
}