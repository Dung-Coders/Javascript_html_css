// Error = an object that is created to represent a problem that occurs
//          Occur often with user input or establishing a connection

// try{} = encloses code that might potentially cause an error
// catch(){} = Catch and handle any thron Errors from try{}
// finally{} = (optional) Always executes. Used mostly for clean up
//              ex. close files, close connections, release resources

//ERROR
// console.log(x);
// //NETWORK ERRORS
// //PROMISES REJECTION
// //SECURITY ERRORS
// console.log('You have reached the end');

//how to handle
// try{
//     console.log(x);
//     //NETWORK ERRORS
//     //PROMISES REJECTION
//     //SECURITY ERRORS
// }
// catch(error){
//     // console.log(error);
//     console.error(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log('This alway executes');
// }
// console.log('You have reached the end');

//1.ex;
try{
    const divided = Number(window.prompt('Enter a divided'));
    const divisor = Number(window.prompt('Enter a divisor'));

    if(divisor == 0){
        throw new Error('You can not divide by zero!');
    }
    if(isNaN(divided) || isNaN(divisor)){
        throw new Error("Values must be a number!");
    }
    const result = divided / divisor;
    console.error(result);
}
catch(error){
    console.error(error)
}
console.log('You can reach the end!');