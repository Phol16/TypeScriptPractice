"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; // less specific because its either string or number
let c = a; // more specific because its exactly the same 'hello'
//anglebracket
//anglebrackets can not be used in tsx files
let d = 'world';
let e = 'world';
//more practical example for assertion
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//careful when using assertion because it wont give error even though this function can returns strings
let nextVal = addOrConcat(2, 2, 'concat');
//the DOM
// to explicitly tell it exist and not a null
// though ts automatically know it is but by default it will be a union type with null
const img = document.querySelector('img');
//you can use anglebrackets notation
const myImg = document.getElementById('#img');
img.src;
myImg.src;
