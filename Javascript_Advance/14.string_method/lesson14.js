// string methods = allow you to manipulate and work with text (strings)

let userName = 'Pro Code';

console.log(userName.charAt(0));
console.log(userName.indexOf('o'));
console.log(userName.lastIndexOf('o'));
console.log(userName.length);
console.log(userName.trim());//trim spaces around
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.repeat(3));
console.log(userName.startsWith(' '));
console.log(userName.endsWith(''));
console.log(userName.includes(' '));

let phoneNunber = '123-456-789';
phoneNunber = phoneNunber.replace('-', ' ');
// phoneNunber = phoneNunber.replaceAll('-', ' ');

// phoneNunber = phoneNunber.padStart(15, '0');
phoneNunber = phoneNunber.padEnd(15, '0');
console.log(phoneNunber);