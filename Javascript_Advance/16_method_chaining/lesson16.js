// Method chaining = calling one method after another
//                  in one continuos line of code.


let username = window.prompt("Enter your username: ");
// NO METHOD CHAINING

username =  username.trimEnd();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

// METHOD CHAINING
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);