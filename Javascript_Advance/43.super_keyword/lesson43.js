// super = keyword is used in classes to call the constructor or
//          access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent
//1.way
// class Animal{
//     constructor(){

//     }
// }
// class Rabbit extends Animal{

//     constructor(name,age,runspeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.runspeed = runspeed;
//     }
// }
// class Fish extends Animal{

//     constructor(name,age,swimspeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.swimspeed = swimspeed;
//     }
// }
// class Hawk extends Animal{

//     constructor(name,age,flyspeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.flyspeed = flyspeed;
//     }
// }
//2.way
class Animal{
    constructor(name,age){

        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} is moving ${speed} km`);
    }
}
class Rabbit extends Animal{

    constructor(name,age,runspeed){
        super(name,age);
        
        this.runspeed = runspeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspeed);
    }
}
class Fish extends Animal{

    constructor(name,age,swimspeed){
        super(name,age);
        
        this.swimspeed = swimspeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimspeed);
    }
}
class Hawk extends Animal{

    constructor(name,age,flyspeed){
        super(name,age);
        
        this.flyspeed = flyspeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flyspeed);
    }
}
const rabbit = new Rabbit('rabbit', 1, 25);
const hawk = new Hawk('rabbit', 1, 25);
const fish = new Fish('rabbit', 1, 25);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);

rabbit.run();