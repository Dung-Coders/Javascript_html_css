// while loop = repeat some code while some condition is true

// let username = '';
//it break when it false
// if(username === '' || username === null){
//     username = window.prompt('Enter your name:');
// }

// console.log(`Hello ${username}`);

//do_while meaning Do something first and then set conditions
// let username;
// do{
//     username = window.prompt('Enter your name:');
// }while(username === '' || username === null)

// console.log(`Hello ${username}`);

let login = false;
let username;
let password;

while(!login){
    username = window.prompt('Enter your name: ');
    password = window.prompt('Enter your password: ');

    if(username === 'onename' && password === 'onepassword'){
        login = true;
        console.log('You are logged in!');
    }
    else{
        console.log('Invalid credentials!');
    }
}
// You need enter the right Name and password (onename & onepassword)


