"use strict";
let strArray = ['a', 'b', 'c']; // ts infered this array as an array of string
let intArray = [1, 2, 3]; // ts infered this array as an array of number
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
