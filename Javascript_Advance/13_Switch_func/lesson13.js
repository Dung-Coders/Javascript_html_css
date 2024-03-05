// switch = can be an efficient replacement to many else if statements.

let day = 5;//changin here to see results.

switch(day){
    case 1:
        console.log('It is Monday');
        break;
    case 2:
        console.log('It is Tuesday');
        break;
    case 3:
        console.log('It is Wednesday');
        break;
    case 4:
        console.log('It is Thursday');
        break;
    case 5:
        console.log('It is Friday');
        break;
    case 6:
        console.log('It is Saturday');
        break;
    case 7:
        console.log('It is Sunday');
        break;
    default:
        console.log(`${day} is NOT a day!`);
        break;
}

let scores = "banana";//changing here to see results. 
let grades;

switch(true){
    case scores >= 90:
        grades = 'A';
        break;
    case scores >= 80:
        grades = 'B';
        break;
    case scores >= 70:
        grades = 'C';
        break;
    case scores >= 60:
        grades = 'D';
        break;
    case scores >= 50:
        grades = 'F';
        break;
    case scores < 50:
        grades = 'You failed!';
        break;
    default:
        console.log('It is Not scores.');
        break;
}