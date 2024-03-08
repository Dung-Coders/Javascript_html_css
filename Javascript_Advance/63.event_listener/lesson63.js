// eventListener = listen for specific events to create interactive web pages
//              events: click, mouseover, mouseout
//              .addEventListener(event, callback)

const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');

// function changeColor(event){
//     event.target.style.backgroundColor = 'tomato';
//     event.target.textContent = 'OUCH! 🤣';
// }
// myBox.addEventListener('click', changeColor);


// myBox.addEventListener('click', event => {
//     event.target.style.backgroundColor = 'tomato';
//     event.target.textContent = 'OUCH! 🤣';
// });

// myBox.addEventListener('mouseover', event => {
//     event.target.style.backgroundColor = 'yellow';
//     event.target.textContent = "Don't do it! 😜";
// });

// myBox.addEventListener('mouseout', event => {
//     event.target.style.backgroundColor = 'lightgreen';
//     event.target.textContent = 'Get me! 🎁';
// });

myButton.addEventListener('click', event => {
    myBox.style.backgroundColor = 'tomato';
    myBox.textContent = 'OUCH! 🤣';
});

myButton.addEventListener('mouseover', event => {
    myBox.style.backgroundColor = 'yellow';
    myBox.textContent = "Don't do it! 😜";
});

myButton.addEventListener('mouseout', event => {
    myBox.style.backgroundColor = 'lightgreen';
    myBox.textContent = 'Get me! 🎁';
});