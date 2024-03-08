// rest parameters = (...rest) allow a funtion work with a variable
//                  number of arguments by bundling the into an array

//              spread = expands an array into seperate elements
//              rest = bundles seperate elements into an array

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = 'Pizza';
const food2 = 'Apple';
const food3 = 'Banna';
const food4 = 'Carrot';
const food5 = 'Garlic';

// openFridge(food1, food2, food3, food4, food5);//string

const foods = getFood(food1,food2,food3,food4,food5);//object
console.log(foods);

//how to sum
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,2,3,4,5);
console.log(`Your total: ${total}`);

//how to calculate average score
function getAverage(...scores){
    let grade = 0;
    for(let score of scores){
        grade += score;
    }
    return grade / scores.length;
}
const Total = getAverage(50, 100, 90, 85, 65);
console.log(`Average score: ${Total}`);

//how to combine strings together
function combineStrings(...strings){
    return strings.join(' ');
}

const fullName = combineStrings('Mr.','Pro','is','an Expert.');
console.log(fullName);