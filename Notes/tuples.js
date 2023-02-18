"use strict";
//only on typescript and not in javascript
//a kind of specialize array given by typescript with some restriction
exports.__esModule = true;
//tuples is making the order of array is in order
var user;
user = ['phol', 45, true];
user = [45, true, 'phol']; //give error cause it didnt follow the tuple order
var newUser = [34, 'phol'];
newUser = ['phol', 34]; // gives error
newUser[1] = 'e';
newUser.push(34); //badcase for tuples cause it accepts another element
newUser.push(true);
