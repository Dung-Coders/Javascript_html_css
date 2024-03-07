const fruits = [{name: 'apple', color: 'red', calories: 95},
                {name: 'orange', color: 'green', calories: 45},
                {name: 'banana', color: 'yellow', calories: 105},
                {name: 'coconut', color: 'white', calories: 159},
                {name: 'pineaple', color: 'yellow', calories: 37}];

// fruits.push({name: 'strawberry', color: 'red', calories: 100}); //add at the end              
// fruits.pop();       //remove at the end
// fruits.splice(1,2); //cut
// console.log(fruits);

//============forEach===========
fruits.forEach(fruits => console.log(fruits.name));

//============map()=============
const fruitName = fruits.map(fruit => fruit.name);
console.log(fruitName);

//============filter()=============
const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow');
const lowCalories = fruits.filter(fruit => fruit.calories < 100);
console.log(yellowFruits);
console.log(lowCalories);

//===========reduce()===========
const maxFruit = fruits.reduce((max, fruit) => 
                            fruit.calories > max.calories ?
                            fruit : max);
const minFruit = fruits.reduce((min, fruit) => 
                            fruit.calories < min.calories ?
                            fruit : min);
console.log(maxFruit);
console.log(minFruit);