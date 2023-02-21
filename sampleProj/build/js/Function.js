"use strict";
//functions
//function that return number type
const add = (a, b) => {
    return a + b;
};
//void type is for function that do not return anything / no return
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
// interface multiplyFunction{
//   (a:number, b:number):number
// }
const multiply = (a, b) => {
    return a + b;
};
//optional parameters
const addAll = (a, b, c) => {
    //narrowing
    if (c) {
        return a + b + c;
    }
    return a + b;
};
//default value parameter
const subAll = (a = 10, b, c = 2) => {
    return a - b - c;
};
subAll(1, 3, 1); //5
subAll(2, 3); //7
subAll(undefined, 3); //15
//rest parameters /should be at the end
const total = (a, ...num) => {
    return num.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 4, 5));
//never type
// it wont return unless you throw error / endless loop is example of never type
// never type is useful if you want to throw errors
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const isString = (value) => {
    return typeof value === 'string' ? true : false;
};
//use of never type
const numberOrString = (value) => {
    if (isString(value)) {
        return 'string';
    }
    if (isNumber(value)) {
        return 'number';
    }
    return createError('the error message');
};
