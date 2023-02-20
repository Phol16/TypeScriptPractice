let myName:string = 'Phol' // explicitly declare the type
let name = 'Phol' //infering /implicitly declare the type (ts will automatically know what data type of the variable)

let theName:string; //string type
let theAge:number; // number type
let active:boolean; // boolean type
let album: string | number; //union type (either one is allowed)
let re: RegExp; // regular expression type

theName = 'phol';
theAge = 24;
active =  false;
album = 25;
re =/\w+/g

//functions

//a parameter of a and b with number types and will return a type number
const sum = (a:number, b:number):number => {
  return a + b;
}


export{}


