let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `Lorem ipsum dolor sit amet consectetur Reprehenderit `,
        person: `Reprehenderit `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur Voluptatibus accusantium`,
        person: `Marry `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur Reprehenderit reiciendis quidem totam,`,
        person: `Peter `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Voluptatibus accusantium eveniet sint expedita excepturi officia eligendi`,
        person: `Code `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Voluptatibus accusantium eveniet sint expedita excepturi officia eligendi`,
        person: `Harry `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium 
        eveniet sint expedita excepturi officia eligendi`,
        person: `Smith `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium 
        eveniet sint expedita excepturi officia eligendi`,
        person: `Kathy `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatibus accusantium eveniet sint expedita excepturi officia eligendi`,
        person: `Lora `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium 
        eveniet sint expedita excepturi officia eligendi`,
        person: `Tyson `
    },
    {
        quote: `Lorem ipsum dolor sit amet consectetur 
        Reprehenderit reiciendis quidem totam`,
        person: `Bob `
    },
];

btn.addEventListener('click', () => {
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})