"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myName = 'Phol'; // explicitly declare the type
let name = 'Phol'; //infering /implicitly declare the type (ts will automatically know what data type of the variable)
let theName; //string type
let theAge; // number type
let active; // boolean type
let album; //union type (either one is allowed)
let re; // regular expression type
theName = 'phol';
theAge = 24;
active = false;
album = 25;
re = /\w+/g;
//functions
//a parameter of a and b with number types and will return a type number
const sum = (a, b) => {
    return a + b;
};
