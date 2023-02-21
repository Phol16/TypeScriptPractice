//functions
//function that return number type
const add = (a: number, b: number): number => {
  return a + b;
};

//void type is for function that do not return anything / no return
const logMsg = (message: any): void => {
  console.log(message);
};
logMsg('hello');

//type function for type and interface / preferrable to use type
type multiplyFunction = (a: number, b: number) => number;
// interface multiplyFunction{
//   (a:number, b:number):number
// }

const multiply: multiplyFunction = (a, b) => {
  return a + b;
};

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  //narrowing
  if (c) {
    return a + b + c;
  }
  return a + b;
};

//default value parameter

const subAll = (a: number =10, b: number, c: number =2): number => {
    return a - b - c;
};

subAll(1,3,1) //5
subAll(2,3) //7
subAll(undefined, 3) //15

//rest parameters /should be at the end
const total = (a:number, ...num:number[]):number=>{
  return num.reduce((prev,curr)=> prev+curr)
}

logMsg(total(1,2,4,5))


//never type
// it wont return unless you throw error / endless loop is example of never type
// never type is useful if you want to throw errors
const createError = (errMsg:string):never=>{
  throw new Error(errMsg)
}

//custom type guard
const isNumber = (value: any):boolean =>{
  return typeof value === 'number' ? true : false
}
const isString =(value: any ):boolean =>{
  return typeof value === 'string' ? true : false
}

//use of never type
const numberOrString = (value: string | number):string =>{
  if(isString(value)){
    return 'string'
  }if(isNumber(value)){
    return 'number'
  }
  return createError('the error message')
}