// variable = a container that stores a value
//            Behaves as if it were the values it contains.

// 1. declaration  let x;
// 2. assignment x = 100;

let x;
x = 100;

// let age = 25;
let price = 10.99;
let gpa = 2.1;

// console.log(typeof age);
console.log(x);
// console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your gpa is: ${gpa}`);

let firstName = 'Pro';
let favoriteFood = 'Banana';
let email = 'pro@gmail.com';

console.log(typeof firstName);
console.log(`Your name is: ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is: ${email}`);

// let online = false;
let online = true;
let forSale = true;
let isStudent = true;

console.log(`Pro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

let fullName = 'Pro Code';
let age = 35;
let student = false;

document.getElementById('p1').textContent = `Your full name: ${fullName}`;
document.getElementById('p2').textContent = age;
document.getElementById('p3').textContent = student;