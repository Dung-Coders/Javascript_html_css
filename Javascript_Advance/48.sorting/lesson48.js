// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ['apple','coconut','orange','strawberry','pineaple'];
let numbers = [1,4,5,7,9,10];

fruits.sort();
// numbers.sort((a,b) => a - b);//up to
numbers.sort((a,b) => b - a);//down to

console.log(fruits);
console.log(numbers);

const people = [{name: 'Peter',age: 30, gpa: 3.0},
                {name: 'Marry',age: 20, gpa: 5.0},
                {name: 'Smith',age: 25, gpa: 6.0},
                {name: 'Kathy',age: 23, gpa: 4.0}];

// people.sort((a,b) => a.age - b.age);//up to
// people.sort((a,b) => b.age - a.age);//down to
people.sort((a,b) => a.name.localeCompare(b.name));//A-z
// people.sort((a,b) => b.name.localeCompare(a.name));//z-A
console.log(people);