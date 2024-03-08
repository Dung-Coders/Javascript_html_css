// arrow functions = a concise way to write function expression
//                  good for simple functions that you use only once
//                  (parameters) => some code
//1.ex;
const hello = (name,age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)};

hello('Pro', 35);
//2.ex;
setTimeout(hizoki, 3000);

function hizoki(){
    console.log('Arrow function setTimeout.')
}

// setTimeout(function(){
//     console.log('Hello')
// }, 3000);

// setTimeout(() => {
//     console.log('Hello')
// }, 3000);

//3.ex;
const numbers = [1,2,3,4,5];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNum = numbers.filter((element) => element % 2 === 0);
const oddNum = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulate, element) => accumulate + element);

console.log(squares);
console.log(cubes);
console.log(evenNum);
console.log(oddNum);
console.log(oddNum[2]);
console.log(total);

const myH1 = document.getElementById('myH1');
const names = ['Peter',' Smith',' Kathy',' Lina',' Marry'];
const printOut = names.reduce((first, values) => first + values);
console.log(printOut);

myH1.textContent = names[2];
// myH1.textContent = names.join('');
// myH1.textContent = printOut;