// destructuring = extract values from arrays and objects,
//                  then assign them to variables in a convenient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring

//1.ex; swap the value of two variables
let a = 1;
let b = 2;

[a,b] = [b,a]
console.log(a);
console.log(b);

//2.ex; swap 2 values in an array
const colors = ['red','green','blue','black','white'];

// [colors[0],colors[4]] = [colors[4],colors[0]]
// console.log(colors);

//3.ex; assign array elements to values
const [firstColor,secondColor,thirdColor, ...extraColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(...extraColor);

//4.ex; extract values from objects
// const person1 = {
//     firstName: 'Peter',
//     lastName: 'Smith',
//     age: 30,
//     job: 'Fry Cook'
// }

// const person2 = {
//     firstName: 'Marry',
//     lastName: 'Boston',
//     age: 20,
// }

// const {firstName,lastName,age,job='Expert'} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//5.ex; Destructring in function parameters
function displayPerson({firstName,lastName,age,job='Engineer'}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 30,
    job: 'Fry Cook'
}

const person2 = {
    firstName: 'Marry',
    lastName: 'Boston',
    age: 20,
}

displayPerson(person1);