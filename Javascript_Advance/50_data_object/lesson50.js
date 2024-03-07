// Data objects = objects that contain values that represent dates and times
//              These date objects can be changed and formated.
//Date(year, month, day, hour, minute, second, ms)
// const date = new Date();

// date.setFullYear(2026);
// date.setMonth(3);
// date.setDate(6);
// date.setHours(12);
// date.setMinutes(30);
// date.setSeconds(50);
// date.setMilliseconds(34);

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const ms = date.getMilliseconds();
// console.log(date);

const date1 = new Date('2023-12-30');
const date2 = new Date('2024-1-3');

if(date2 > date1){
    console.log('Happy new year!');
}