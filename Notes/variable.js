"use strict";
exports.__esModule = true;
// best practice in creating variables with typescript 
var id = 12345; //it automatically knows the type depending on the value .
var hero; // when declaring a value you identify the type because it will default into any.
// any is not a good practice in typescript.
//creating variable in typescript
var greetings = 'Hello Phol';
greetings = 6; //error because it only accepts string values
greetings.toLowercase(); // give error because the built-in method is case-sensitive
console.log(greetings);
//number
var userId = 12345;
//boolean
var isLoggedIn = false;
