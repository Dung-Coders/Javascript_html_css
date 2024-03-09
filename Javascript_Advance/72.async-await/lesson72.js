// Async/await = async = makes a function return a promise
//               await = makes an async function wait for a promise

//              Allows you write asynchronous code in a synchronous manner
//              Async doesn't have resolve or reject parameters
//              Everything after await is placed in an event queue

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


async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log('You did all the chores');
    }
    catch(error){
        // console.log('You have something wrong!');
        window.alert('You had something wrong!');
    }
}
doChores();