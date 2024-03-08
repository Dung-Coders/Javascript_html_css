// closure = a function defined inside of another function.
//          the inner function has access to the variables
//          and scope of the outer function.
//          allow for private variables and state maintenance
//          used frequently in JS frameworks: React, Vue, Angular

//1.ex;
// function outer(){

//     let message = 'Hello';

//     function inner(){
//         console.log(message);
//     }
//     inner();
// }

// message = 'Goodbye';

// outer();


//2.ex;
// let count = 0;
// function increment(){
//     // let count = 0;
//     count++;
//     console.log(`Count increased to ${count}`);
// }

// increment();
// increment();
// increment();
// increment();
// increment();

//3.ex;
// function createCounter(){

//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);
//     }
//     function getCount(){
//         return count;
//     }
//     return {increment, getCount};
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count: ${counter.getCount()}`);

//4.ex;
function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points} pts`)
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points} pts`)
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The current score: ${game.getScore()} pts`);