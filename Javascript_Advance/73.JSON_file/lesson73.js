//JSON = Javascript object notation ,data-interchange format
//      used for exchanging data between a server and a web application
//      JSON files {key: value} or [value1, value2, value3] 
//      or array of objects [{},{},{},{}]

//      JSON.stringify() = convert a JS onject to JSON string
//      JSON.parse() = convert a JSON string to a JS object

// const names = ['Peter','Smith','Kathy','Marry','Lina'];
// const person = {
//     'name': 'Marry',
//     'age': 30,
//     'isEmployed': true,
//     'hobbies': ['Fish', 'Karate', 'Cooking']
// };
// const people = [
//     {
//         'name': 'Peter',
//         'age': 40,
//         'isEmployed': true,
//     },
//     {
//         'name': 'Smith',
//         'age': 50,
//         'isEmployed': false,
//     },
//     {
//         'name': 'Kathy',
//         'age': 60,
//         'isEmployed': true,
//     },
//     {
//         'name': 'Jack',
//         'age': 70,
//         'isEmployed': false,
//     }
// ];
//#person.json
// const jsonString = JSON.stringify(names);
// console.log(jsonString);
//#people.json
// const jsonString = JSON.stringify(people);//people or person
// console.log(jsonString);

const jsonNames = `["Peter","Kathy","Bob"]`;
const jsonPerson = `{
    "name": "marry",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Fish", "Karate", "Cooking"]
}`;
const jsonPeople = `[{"name": "Peter", "age": 40},
                    {"name": "Marry","":30},
                    {"hobbies": ["singing","fishing","karate"]}]`;
const parsedData = JSON.parse(jsonPeople);
console.log(parsedData);

//how about fetch()
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));


