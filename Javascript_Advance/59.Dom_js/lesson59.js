//Dom = Document object model
//      object{} that represents the page you see in the web browser
//      and provides you with an API to interact with it
//      Web browser constructs the DOM when it loads an HTML document,
//      and structures all the elements in a tree-like representation.
//      Javascript can access the DOM to dynamically
//      change the content, structure, and style of a web page.

//change title
document.title = 'My website';
//change background color
document.body.style.backgroundColor = 'gray';
//change html contents
const username = ' Code Pro';
const welcomeMsg = document.getElementById('myH1');
welcomeMsg.textContent += username === "" ? `Guest` : username;
