"use strict";
//----------------------------------------------------------------------------------------
//arrays
let strArray = ['a', 'b', 'c']; // ts inferred this array as an array of string
let intArray = [1, 2, 3]; // ts inferred this array as an array of number
let mixedArray = ['a', 'b', 3, true]; // ts infered this as (string | number | boolean) union type in array
mixedArray[0] = 5;
mixedArray.push(false);
// strArray = mixedArray // gives error because of the type of data of the arrays
mixedArray = intArray;
let test = []; //by default this is in any type
let bands = [];
bands.push('paramore');
//to make more strict on the lenght of array and a type of array in each element
// use Tuple
let myTuple = ['phol', 12, false];
let mixed = ['phol', 23, true]; //this is a union type
//---------------------------------------------------------------------------------------
//objects
let obj;
obj = []; // array is also consoder as object in JS
console.log(typeof obj); // return object
obj = bands; //bands was assign as an array of string on line 14
obj = {}; //object
const exampleObj = {
    prop1: 'phol',
    prop2: 2,
};
//ts will inferred prop1 and prop2 with type depending on the value
// exampleObj.prop1 = 2 //gives error cause prop1 will accept string values
exampleObj.prop1 = 'hello';
let exampleBand = {
    name: 'phol',
    active: false,
    albums: ['bands', 2, 'yeah'],
};
let exampleBand1 = {
    name: 'hello',
    active: true,
    albums: [2, 'yeah'],
    members: 4,
};
exampleBand1 = exampleBand;
const greetGutarist = (gutarist) => {
    var _a;
    return `hello ${gutarist.name} with members ${(_a = gutarist.members) === null || _a === void 0 ? void 0 : _a.toExponential}`;
    // if one type is optional methods must be in optional also by using ? or by using narrowing
};
// const greetGutarist=( gutarist:Gutarist)=>{
//   // narrowing example
//   if(gutarist.members){ // checks if it exist
//   return `hello ${gutarist.name} with members ${gutarist.members.toExponential}` }
// return 'hello'
// }
console.log(greetGutarist(exampleBand));
console.log(90 /* Grade.A */);
console.log(9 /* Grade.B */);
