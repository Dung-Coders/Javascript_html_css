// const = a variable that can't be chaged

const pi = 3.141559;
let radius;
let circumference;

// PI = 400; error because const cannot change

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log(circumference);

document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('myText').value;
    // radius = Number(radius); //comment this input type=number
    circumference = 2 * pi * radius;
    document.getElementById('myH3').textContent = circumference + 'cm';
}