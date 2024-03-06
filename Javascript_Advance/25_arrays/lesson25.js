// array = a variable like structure that can hold
//          more than 1 value
let fruits = ['apple','orange','banana'];

// fruits[0] = 'coconut';//change
// fruits.push('coconut');//put at the end array
// fruits.pop('coconut');//cut at the end array
// fruits.unshift('mango');//add at the begining array
// fruits.shift();//remove first element of array

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits.length);//count foods
// console.log(fruits.indexOf('coconut'));//find position of elements in array

//how to loop
// for(let i = 0;i < fruits.length;i++){
//     console.log(fruits[i]);
// }
//how to reverse
// for(let i = fruits.length - 1; i >= 0;i--){
//     console.log(fruits[i]);
// }
// for(let i = fruits.length; i >= 0;i--){
//     console.log(fruits[i]);
// }

//how to shortcut display an array
// for(let fruit of fruits){
//     console.log(fruit);
// }

//how to sort(alphal(abcdf...)or index(1234...))
// fruits.sort();
//how to reverse
console.log(fruits.sort().reverse() ,typeof fruits);
