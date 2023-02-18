// creating proper function in typescript
// parameters types must be identified to make it more typesafety
// the return type must be identified also to make it more typesaftey
//best practice is to explicit the return type (void, never) also
function addtwo(num: number):number{
  return num + 2;
}
addtwo(5);

function getUpper(val: string):string {
  return val.toUpperCase();
}
getUpper('hello');

function consoleError(err:string):void{
  console.log(err)
}
function handleError(err:string):never{
  throw new Error(err)
}

//arrow function
const getHello = (s:string):string=>{
  return s
}
getHello('hello')

//built-in methods with callbacks
const heros =['spiderman', 'thor', 'ironman'];

heros.map((e):string=>{
  return `hero: ${e}`
})

//functions with different data types in the parameter
function signUp(email:string, password:string, isPaid:boolean){}
signUp('email','password',true)

//arrow function
//isPaid parameter has default value of false
let logIn = (email:string, passowrd:string, isPaid:boolean = false)=>{} 
logIn('email','password')


export{}
