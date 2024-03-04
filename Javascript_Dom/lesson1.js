// EXAMINE THE DOCUMENT OBJECT
// alert();
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.title);
// document.title = 'Dom Crash cours';
// console.log(document.head);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[9].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.image);
// GET ELEMENT BY ID
// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'Hello';  //changing content
// headerTitle.innerText = 'Goodbye';    //changing content
// headerTitle.innerHTML = 'Goodluck'; //changing content
// headerTitle.innerHTML = '<h3>Cool...</h3>'; //add Tag
// headerTitle.style.borderBottom = '3px solid black';
// headerTitle.style.color = 'red';


//GET ELEMENT BY TAG CLASS NAME //
// var items = document.getElementsByClassName('list-group-item');
// items[1].textContent = 'Item 3';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i=0;i < items.length;i++){
//     items[i].style.backgroundColor = 'gray';
// }

//GET ELEMENT BY TAG NAME //
// var li = document.getElementsByTagName('li');
// li[1].textContent = 'Item 3';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0;i < li.length;i++){
//     li[i].style.backgroundColor = 'gray';
// }

//QUERY SELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = '3px solid red';

var input = document.querySelector('input');
// input.value = 'Hello world';
// input.type = 'radio';
// input.type = 'checkbox';
// input.type = 'date';

input.type = 'color';
input.style.width = '100px';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'green';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'purple';

//QUERY SELECTOR ALL //
var titles = document.querySelectorAll('.title');
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i < odd.length;i++){
    odd[i].style.backgroundColor='blue';
    odd[i].style.color='white';
    odd[i].textContent='odd';
}

var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i < even.length;i++){
    even[i].style.backgroundColor='yellow';
    even[i].style.color='red';
    even[i].textContent='even';
}

