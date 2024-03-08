// Dom navigation = the process of navigating through the structure
//                  of an html document using Javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//===========firstElementChild====
// const element = document.getElementById('desserts');
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = 'yellow';

// const ulelement = document.querySelectorAll('ul');
// ulelement.forEach(ulelement => {
//     const firstChild = ulelement.firstElementChild;
//     firstChild.style.backgroundColor = 'yellow';
// })

// const element = document.getElementById('fruits');
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = 'green';

//==============lastElementChild========
// const ulElement = document.querySelectorAll('ul');


// ulElement.forEach((ulElement) => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = 'gray';
// } )

//==============nextElementSibling====
// const element = document.querySelector('li');
// const nexSibling = element.nextElementSibling;
// nexSibling.style.backgroundColor = 'yellow';

//============previousElementSibling====
const prelement = document.querySelector('#desserts');
const prevSibling = prelement.previousElementSibling;
prevSibling.style.backgroundColor = 'blue';


//========== .parentElement =====
const element = document.getElementById('apple');
const parent = element.parentElement;
parent.style.backgroundColor = 'yellow';

//========== .children =====
const element2 = document.getElementById('desserts');
const girls = element2.children;
girls[0].style.backgroundColor = 'green';
girls[1].style.backgroundColor = 'red';
girls[2].style.backgroundColor = 'purple';

// Array.from(girls).forEach(girl => {
//     girl.style.backgroundColor = 'blue';
//     //selecting all
// })