// object = a collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,function(){  }};

const person1 = {
    firstName: 'Marry',
    lastName: 'Smith',
    age: 30,
    isEmployed: true,
    hello: function(){console.log('Hello! My name is Marry')},
    eat: ()=>{console.log('I like to eat Pizza, strawberry, apple ...etc')},
    skill: () => console.log('I can swimm, sing and fish.')
}
const person2 = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 25,
    isEmployed: false,
}

//how to access
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.hello();
person1.eat();
person1.skill();