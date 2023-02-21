type One = string;
type Two = string | number;
type three = 'hello';

//convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific because its either string or number
let c = a as three; // more specific because its exactly the same 'hello'

//anglebracket
//anglebrackets can not be used in tsx files

let d = <One>'world';
let e = <string | number>'world';

//more practical example for assertion

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') {
    return a + b;
  }
  return ''+a+b
};

let myVal:string = addOrConcat(2,2,'concat') as string

//careful when using assertion because it wont give error even though this function can returns strings
let nextVal:number = addOrConcat(2,2,'concat') as number

//the DOM

// to explicitly tell it exist and not a null
// though ts automatically know it is but by default it will be a union type with null
const img = document.querySelector('img') as HTMLImageElement 

//you can use anglebrackets notation
const myImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src
