"use strict";
exports.__esModule = true;
// creating proper function in typescript
// parameters types must be identified to make it more typesafety
// the return type must be identified also to make it more typesaftey
//best practice is to explicit the return type (void, never) also
function addtwo(num) {
    return num + 2;
}
addtwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('hello');
function consoleError(err) {
    console.log(err);
}
function handleError(err) {
    throw new Error(err);
}
//arrow function
var getHello = function (s) {
    return s;
};
getHello('hello');
//built-in methods with callbacks
var heros = ['spiderman', 'thor', 'ironman'];
heros.map(function (e) {
    return "hero: ".concat(e);
});
//functions with different data types in the parameter
function signUp(email, password, isPaid) { }
signUp('email', 'password', true);
//arrow function
//isPaid parameter has default value of false
var logIn = function (email, passowrd, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
logIn('email', 'password');
