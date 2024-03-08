// spread operator = ... allows an iterable such as an array
//                      or string to be expanded into seperate elements
//                      (unpacks the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let username = 'Code Pro';
let letters = [...username].join('');

console.log(letters);

let fruits = ['apple','orange','banana'];
let vegetables = ['carrots','potatos','onions']

let foods = [...fruits, ...vegetables, 'eggs', 'milk'].join(' ');//string
// let foods = [...fruits, ...vegetables, 'eggs', 'milk'];//objects
let newFruits = [...fruits].join(' ');

console.log(newFruits);
console.log(foods, typeof foods);