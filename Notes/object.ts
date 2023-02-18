const User = {
  name: 'phol',
  email: 'phol@g.com',
  isActive: true,
};

//bad behavior when doing typescript with objects
function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: 'newPhol', isPaid: false, email: 'phol@gm.com' };
createUser(newUser); // passing arguments with morethan what the parameter has

//function must return an object
function createSomething(): { name: string; price: number } {
  return { name: 'phol', price: 4 };
}

//Type Aliases
// creating own types
// its common to want to use the same type more than once and refer to it by a single name
type UserDetails = {
  readonly _id: string; //can not be modified
  name: string;
  email: string;
  isActive: boolean;
  cardDetails ?: number; // ? makes it optional 
};

function createTheUser(user: UserDetails): UserDetails {
  return user;
}
createTheUser({_id:'weat3ge34', name: 'phol', email: 'email@g.com', isActive: false });

let myUser:UserDetails = {
  _id: '12314',
  name: 'phol',
  email: 'ewag@gm.com',
  isActive:false,
  cardDetails:3,
}

myUser._id = 'agea' // will give error because of the readonly

//combining types / defining new type base on previous type
type cardDate = {
  cardDate: string;
}

// use & to get all the value of that types
type cardInfo = cardDate & {
  cardName: string;
}

export {};
