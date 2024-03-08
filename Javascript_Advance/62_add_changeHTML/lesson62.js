//step1  Create the element
const new_h1 = document.createElement('h1');

//step2  Add attribute or properties
new_h1.textContent = 'I love cats.';
new_h1.id = 'my-id';//set id
new_h1.className = 'my-class';//set class name
new_h1.style.color = 'tomato';//set color
new_h1.style.backgroundColor = 'gray';//set background

//step3  Append element to DOM
// document.body.append(new_h1);
// document.body.prepend(new_h1);

// document.getElementById('box1').prepend(new_h1);
// document.getElementById('box1').append(new_h1);

// const box2 = document.getElementById('box2');
// document.body.insertBefore(new_h1, box2);

const boxes = document.querySelectorAll('.box');
document.body.insertBefore(new_h1, boxes[3]);

//Remove HTML elements
// document.body.removeChild(new_h1);

// 
// document.getElementById('box1').removeChild(new_h1);

const new_li = document.createElement('li');
new_li.textContent = 'coconut';
new_li.className = 'new-li';
new_li.style.fontWeight = 'bold';
new_li.style.backgroundColor = 'green';
// document.body.append(new_li);//last element of the body
// document.body.prepend(new_li);//first element of the body
// document.getElementById('fruits').append(new_li);//last element of 'fruits' id
// document.getElementById('fruits').prepend(new_li);//first element of 'fruits' id

// const orange = document.getElementById('apple');
// document.getElementById("fruits").insertBefore(new_li, orange);

//if we don't have id attribute
const listItems = document.querySelectorAll("#fruits li");
document.getElementById('fruits').insertBefore(new_li, listItems[2]);
// document.getElementById('fruits').removeChild(new_li);