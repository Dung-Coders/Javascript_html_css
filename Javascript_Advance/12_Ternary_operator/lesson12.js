// ternary operator = a shortcut to if{} and else statements
//                  helps to assign a variable based on a condition
//                  condition ? codeIfTrue : codeIfFalse;

// let age = 17;
// let message = age >= 18 ? "You are an adult" : "You are a minor";

// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon!";

// console.log(greeting);

// let isStudent = false;//true or false
// let sendMessage = isStudent ? "You are a student" : "You are NOT a student.";

// console.log(sendMessage);

let purchase = 100; //changing here to see results.
let discount = purchase >= 100 ? 10 : 0;
console.log(`Your total: $${purchase - discount * (discount/100)}`);



