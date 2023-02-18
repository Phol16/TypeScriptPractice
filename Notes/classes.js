"use strict";
// instead of using this you can use in line 12
// class User {
//   public email:string
//    private name:string
//   readonly city:string ='zamboanga'
//   constructor(email:string , name:string){
//     this.email = email;
//     this.name = name;
//   }
// }
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'zamboanga';
    }
    return User;
}());
var phol = new User('p@gmail.com', 'phol');
phol.city = 'philippines';
