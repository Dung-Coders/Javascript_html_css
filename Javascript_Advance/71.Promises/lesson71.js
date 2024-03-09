// promises = an object that manages asynchronous operations.
//              Wrap a Promise object around {asynchronous code}
//              "I promise to return a value"
//              Pending -> reselved or rejected
//              new Promise((resolve, reject) => {asynchronous code})

//do these chores in order

//1. walk the dog
//2. clean the kitchen
//3. take out the trash

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const walkedDog = true;
            if(walkedDog){
                resolve('You walk the dog');
            }
            else{
                reject('You did not walk the dog out.')
            }
        }, 1000);
    })
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if(cleanedKitchen){
                resolve('You clean the kitchen');
            }
            else{
                reject('You did not clean the kitchen')
            }
        }, 2000);
    })
}
function takeOutTrash(){

    return new Promise((resolve, reject) => {

        const takenOutTrash = true;
        if(takenOutTrash){
            resolve('You take out the trash');
        }
        else{
            reject('You have not finished yet.')
        }
        setTimeout(() => {
        }, 3000);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log('You finished all the chores!')})
        .catch(error => console.error(error));
