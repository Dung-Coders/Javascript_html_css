// Nodelist = static collection of html elements by (id, class, element)
//              can be created by using querySelectorAll()
//              similar to an array, but no(map, filter, reduce)
//              nodeList won't update to automically reflect changes

const newBtn1 = document.createElement('button');//create
newBtn1.textContent = 'Button 5';//add contents
newBtn1.classList = 'myButtons';//use keyword to follow
document.body.append(newBtn1);//add position

newBtn1.className = 'myButtons';

let buttons = document.querySelectorAll('.myButtons');

buttons.forEach(button => {
    button.style.backgroundColor = 'green';
    button.textContent += '🤑';

    button.addEventListener('click', event => {
        event.target.style.backgroundColor = 'lightblue';
    })
    button.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'red';
        button.textContent += '😹';
    })
    button.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = 'purple';
        button.textContent += '😭';

    })
})

// const newBtn2 = document.createElement('button');//create
// newBtn2.textContent = 'Button 6';//add contents
// newBtn2.classList = 'myButtons';//use keyword to follow
// document.body.append(newBtn2);//add position

// newBtn2.className = 'myButtons';

//how to remove nodeList
buttons.forEach(button => {
    button.addEventListener('click', event =>{
        event.target.remove();
        buttons = document.querySelectorAll('.myButtons');
    })
})
