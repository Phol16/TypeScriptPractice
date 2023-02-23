//Generics - provides a placeholder a type variable

const stringEcho = (arg:string):string=>{
  return arg
}

//generic represent <T>
const echo = <T>(arg:T):T=>{
  return arg
}