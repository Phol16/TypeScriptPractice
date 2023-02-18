"use strict";
exports.__esModule = true;
var User = {
    name: 'phol',
    email: 'phol@g.com',
    isActive: true
};
//bad behavior when doing typescript with objects
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'newPhol', isPaid: false, email: 'phol@gm.com' };
createUser(newUser); // passing arguments with morethan what the parameter has
//function must return an object
function createSomething() {
    return { name: 'phol', price: 4 };
}
function createTheUser(user) {
    return user;
}
createTheUser({ name: 'phol', email: 'email@g.com', isActive: false });
