// element selectors = methods used to target and manipulate html elements
//                      They allow you to select one or multiple html elements
//                      from the DOM (document object model)

//1. document.getElementById();      //element or null
//2. document.getElementsClassName();//html collection
//3. document.getElementsByTagName();//html collection
//4. document.querySelector();       //element or null
//5. document.querySelectorAll();    //nodelist

const myHeading = document.getElementById('my-heading');
myHeading.style.backgroundColor = 'yellow';
myHeading.style.textAlign = 'center';

const fruits = document.getElementsByClassName('fruits');
//how to use forEach() by class name
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = 'green';
})
//how to use for() by class name
for(let fruit of fruits){
    fruit.style.color = 'white';
    fruit.style.textAlign = 'right';
}

const h4Elements = document.getElementsByTagName('h4');
h4Elements[0].style.backgroundColor = 'lightblue';
h4Elements[1].style.backgroundColor = 'blue';
h4Elements[2].style.backgroundColor = 'red';
//how to use for loop
for(let h4Element of h4Elements){
    h4Element.style.color = 'white';//this sets all h4
}

const liEls = document.getElementsByTagName('li');
for(let liEl of liEls){
    liEl.style.backgroundColor = 'lightgreen';
    liEl.style.listStyle = 'none';

}
// Array.from(liEls).forEach(liEl => {
//     liEl.style.color = 'yellow';
//     liEl.style.paddingLeft = '20px';
// })

liEls[0].style.color = 'green';
liEls[1].style.color = 'red';
liEls[2].style.color = 'purple';

liEls[3].style.color = 'yellow';
liEls[4].style.color = 'orange';
liEls[5].style.color = '#fff';

const element = document.querySelector('.fruits');
element.style.backgroundColor = 'yellow';//selecting first element

const materials = document.querySelectorAll('li');
//it likes a list from zero-->
//or array
materials[8].style.backgroundColor = 'yellow';
// document.querySelectorAll(); Can use forEach directly.
// materials.forEach(material => {
//     material.style.color = 'black';
// })