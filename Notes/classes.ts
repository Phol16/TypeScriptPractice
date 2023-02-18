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

class User {
  readonly city: string = 'zamboanga';
  constructor(
    public email: string, 
    public name: string,
    ) {}
}

const phol = new User('p@gmail.com', 'phol');
phol.city = 'philippines';

export {};
