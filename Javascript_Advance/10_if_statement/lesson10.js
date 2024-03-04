// if statement = if a condition is true, execute some code
//                  if not, do something else.

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    if(age >= 100){
        resultElement.textContent = `You are too old.`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter.`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough.`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't below zero.`
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site.`
    }
}

let student = false;

if(student){
    console.log('You can enroll.')
}
else{
    console.log('You can not enroll.')
}

