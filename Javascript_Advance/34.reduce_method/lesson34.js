// .reduce() = reduce the elements of an array
//              to a single value.

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`${total.toFixed(3)} $`);
//two params(previous element, next element)
function sum(accumulator,element){
    return accumulator + element;
}

const grades = [75, 50, 90, 65, 70, 93];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(old, next){
    return Math.max(old, next);
}
function getMin(old, next){
    return Math.min(old, next);
}