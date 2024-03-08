// setTimeout() = function in Javascript that allows you to schedule
//                  the execution of a function after an amount of time (miliseconds)
//                  Times are approximate (varies based on the workload of the Javascript runtime env.)

//                  setTimeout(callback, delay);

//1.ex;
// function hello(){
//     window.alert('Hello');
// }

// setTimeout(hello, 3000);

//2.ex;
// setTimeout(function(){window.alert('Hello')}, 3000);

//3.ex;
// setTimeout(() => window.alert('Hello'), 3000);


// clearTimeout(timeoutId) = can cancel a timeout before it trigger
// const timeoutId = setTimeout(() => window.alert('Hello'), 3000);

// clearTimeout(timeoutId);


//4.ex;
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert('Hello'), 3000);
    console.log('STARTED');
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log('CLEARED');
}
