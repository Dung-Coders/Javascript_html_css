// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUsername(){
        console.log(`There are ${User.userCount} users online`)
    }
    hello(){
        console.log(`Hello! My name is ${this.username}`);
    }
}

const user1 = new User('Marry');
const user2 = new User('Peter');
const user3 = new User('Kathy');

console.log(user1.username);
console.log(user2.username);

console.log(User.userCount);

user1.hello();
user2.hello();
user3.hello();
User.getUsername();