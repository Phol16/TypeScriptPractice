//Index signature 
//Are useful when creating an object but dont know the names of the key.
//dynamically access obj

interface TransactionObj {
  [index: string]:number //index signature
  Pizza: number
  Books: number
  Job:number
}

// interface TransactionObj {
//   [index: string]:number
// }

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  names: 10,
}

console.log(todaysTransaction.Pizza);
//dynamically access without a loop
let prop:string = 'Pizza'
console.log(todaysTransaction['Pizza']);

////////////////////////////////////////////////////////
//some issue may encounter when using index signature
interface Student{
  // [index:string]:number|string|undefined |number[]
  name:string,
  GPA:number,
  classes?:number[]
}

const student:Student={
  name:'Phol',
  GPA:5,
  classes:[100,200]
}

// console.log(student.test); //didn't give an error because of index signature

// iterating wihtout index signature
//by using keyof assertion
for(const key in student){
  console.log(`${key}: ${student[key as keyof Student]}`);
}

//keyof creates a union type of the specific string literalas of the key
//Object.keys() makes it to array of keys
console.log(Object.keys(student));

Object.keys(student).map((e)=>{
  console.log(student[e as keyof typeof student]);
})

const logStudentKey = (student:Student, key: keyof Student):void=>{
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'GPA')
