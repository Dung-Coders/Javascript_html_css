// function = a section of reusable code.
//          declare code once, use it whenever you want
//          call the function to execute that code.

function happyBirthday(name, age){
    console.log(`Happy birthday to ${name}`)
    console.log(`Happy birthday to you`)
    console.log(`Happy birthday to ${name}`)
    console.log(`Happy birthday to you`)
    console.log(`Your are ${age} years old.`)
}

happyBirthday("Peter", 30);
happyBirthday("Marry", 20);
happyBirthday("John", 25);

function add(x,y){
    // let result = x + y;
    // return result;

    //alter
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

console.log(add(2, 5));

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }

    //alter way
    //return number % 2 === 0 ? true : false;
}
console.log(isEven(4));

function isValidEmail(email){
    
    // if(email.includes('@gmail.com')){
    //     alert('You are logged in!');
    // }
    // else{
    //     alert('Invalid email!');
    // }
    return email.includes('@gmail.com') ? true : false;
}

console.log(isValidEmail("code@gmail.com"));