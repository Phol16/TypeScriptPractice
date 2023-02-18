// best practice in creating variables with typescript 
let id = 12345; //it automatically knows the type depending on the value .
let hero:string; // when declaring a value you identify the type because it will default into any.
                 // any is not a good practice in typescript.

//creating variable in typescript
let greetings: string = 'Hello Phol';

greetings = 6; //error because it only accepts string values
greetings.toLowercase(); // give error because the built-in method is case-sensitive
console.log(greetings);

//number
let userId: number = 12345;
//boolean
let isLoggedIn: boolean = false;

export {};
