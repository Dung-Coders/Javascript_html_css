// nested objects = objects inside of other objects.
//                  Allows you to represent more complex data structures
//                  Child object is enclosed by a Parent object

//                  Person{Address{}, ContactInfo{}}
//                  Shopping{Keyboard{}, Mouse{}, Monitor{}}

//1.ex;
// const person = {
//     fullName: 'Peter Smith',
//     age: 40,
//     isStudent: true,
//     hobbies: ['karate','jellyfishing','cooking'],
//     address: {
//         street: '124 Oak St.',
//         city: 'Boston',
//         country: 'USA'
//     }
// }
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// // console.log(person.address.street);
// for(const property in person.address){
//     console.log(person.address[property]);
// }

//2.ex;
class Person{

    constructor(name,age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{

    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person('Marry', 30, '123 Oak St.', 'Bikini Boston', 'USA');
const person2 = new Person('Peter', 20, '123 Oak St.', 'New York', 'USA');
const person3 = new Person('Kathy', 50, '123 Oak St.', 'Las vegas', 'USA');

// console.log(person1.address.street);
// console.log(person1.address.city);
// console.log(person1.address.country);
// console.log(person1.address.country);

for(const property in person1.address){
    console.log(person1.address[property]);
}