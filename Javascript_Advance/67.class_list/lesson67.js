// classList = element property in Javascript used to interact
//              with an element's list of classes (CSS classes)
//              allows you to make reusable classes for many elements
//              across your webpage.

// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()
// const myH1 = document.getElementById('myH1');
// const myButton = document.getElementById('myButton');

// myH1.classList.add('enable');
// myButton.classList.add('enable');
// myButton.classList.remove('enable');

// myButton.addEventListener('mouseover', event => {
//     event.target.classList.add('hover');
// })
// myButton.addEventListener('mouseout', event => {
//     event.target.classList.remove('hover');
// })
// myButton.addEventListener('mouseover', event => {
//     event.target.classList.toggle('hover');
// })
// myButton.addEventListener('mouseout', event => {
//     event.target.classList.toggle('hover');
// })

//how to replace
// myButton.addEventListener('click', event => {
//     event.target.classList.replace('enable', 'disable');
// })

//how to use contains
// myH1.addEventListener('click', event => {

//     if(event.target.classList.contains('disable')){
//         event.target.textContent += '🏄🏼‍♀️';
//         //you need to click more
//     }
//     else{
//         event.target.classList.replace('enable', 'disable');
//     }
// })
// myButton.addEventListener('click', event => {

//     if(event.target.classList.contains('disable')){
//         event.target.textContent += '🏄🏼‍♀️';
//         //you need to click more
//     }
//     else{
//         event.target.classList.replace('enable', 'disable');
//     }
// })

//EXERCISE 2
let buttons = document.querySelectorAll('.myButton');

buttons.forEach(button => {
    button.classList.add('enable');
});
// buttons.forEach(button => {
//     button.classList.remove('enable');
// });

buttons.forEach(button => {
    button.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover');
    })
})
buttons.forEach(button => {
    button.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover');
    })
})
buttons.forEach(button => {
    button.addEventListener('click', event => {

        if(event.target.classList.contains('disable')){
            event.target.textContent += '🎇';
        }
        else{

            event.target.classList.replace('enable', 'disable');
        }
    })
})