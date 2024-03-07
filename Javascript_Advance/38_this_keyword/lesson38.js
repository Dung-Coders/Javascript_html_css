// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//          person.name = this.name

const person1 = {
    name: "Marry",
    favFood: "hamburger",
    hello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
    //this doesn't work with arrow function
}


person1.hello();
person1.eat();
