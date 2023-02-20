//----------------------------------------------------------------------------------------
//arrays
let strArray = ['a', 'b', 'c']; // ts inferred this array as an array of string
let intArray = [1, 2, 3]; // ts inferred this array as an array of number
let mixedArray = ['a', 'b', 3, true]; // ts infered this as (string | number | boolean) union type in array

mixedArray[0] = 5;
mixedArray.push(false);

// strArray = mixedArray // gives error because of the type of data of the arrays
mixedArray = intArray;

let test = []; //by default this is in any type
let bands: string[] = [];
bands.push('paramore');

//to make more strict on the lenght of array and a type of array in each element
// use Tuple
let myTuple: [string, number, boolean] = ['phol', 12, false];

let mixed = ['phol', 23, true]; //this is a union type

//---------------------------------------------------------------------------------------
//objects

let obj: object;
obj = []; // array is also consoder as object in JS

console.log(typeof obj); // return object
obj = bands; //bands was assign as an array of string on line 14
obj = {}; //object

const exampleObj = {
  prop1: 'phol',
  prop2: 2,
};
//ts will inferred prop1 and prop2 with type depending on the value

// exampleObj.prop1 = 2 //gives error cause prop1 will accept string values
exampleObj.prop1 = 'hello';

// type Gutarist = {
//   name: string;
//   active: boolean;
//   albums: (string | number)[];
//   members?: number;
// };

//interface will works the same way with type
interface Gutarist {
  name: string;
  active: boolean;
  albums: (string | number)[];
  members?: number;
}

let exampleBand: Gutarist = {
  name: 'phol',
  active: false,
  albums: ['bands', 2, 'yeah'],
};
let exampleBand1: Gutarist = {
  name: 'hello',
  active: true,
  albums: [2, 'yeah'],
  members: 4,
};

exampleBand1 = exampleBand;

const greetGutarist = (gutarist: Gutarist) => {
  return `hello ${gutarist.name} with members ${gutarist.members?.toExponential}`;
  // if one type is optional methods must be in optional also by using ? or by using narrowing
};
// const greetGutarist=( gutarist:Gutarist)=>{
//   // narrowing example
//   if(gutarist.members){ // checks if it exist
//   return `hello ${gutarist.name} with members ${gutarist.members.toExponential}` }
// return 'hello'
// }
console.log(greetGutarist(exampleBand));

//Enum
// unlike most typescript features,
// enums are not a type-level addition to JS but something added to the language and runtime

//enum will advance the next depending on the value
const enum Grade {
  F = 5,
  E,
  D,
  C,
  B,
  A = 90,
}
console.log(Grade.A);
console.log(Grade.B);
