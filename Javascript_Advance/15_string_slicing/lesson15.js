// string slicing = creating a substring fro a portion
//                  of another string
//                  string.slice(start, end)

const fullName = 'Pro Code';

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(`Your first name: ${firstName}`);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

const email = 'Pro@gmail.com';
let username = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@'));

console.log(username);
console.log(extension);