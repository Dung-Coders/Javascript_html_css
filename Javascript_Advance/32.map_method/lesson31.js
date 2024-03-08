// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);
// console.log(squares);
// console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}

const output = document.getElementById('myH1');
output.textContent = cubes.join(' ');
// output.innerHTML = `<p>${cubes}</p>`;

const students = ['Peter','Marry','Kathy'];
const studentsUpper = students.map(uppercase);
const studentsLower = students.map(lowercase);

const myH2 = document.getElementById('myH2');
const myH3 = document.getElementById('myH3');
myH2.textContent = studentsUpper.join('_');
myH2.textContent = new Date();
myH3.innerHTML = `<p> ${studentsLower.join(' ')}</p>`;

function uppercase(element){
    return element.toUpperCase();
}
function lowercase(element){
    return element.toLowerCase();
}

//how to format Dates
const dates = ['2024-1-10','2025-2-20','2026-3-20'];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element){
    const parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}