"use strict";
//Index signature 
//Are useful when creating an object but dont know the names of the key.
//dynamically access obj
// interface TransactionObj {
//   [index: string]:number
// }
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    names: 10,
};
console.log(todaysTransaction.Pizza);
//dynamically access without a loop
let prop = 'Pizza';
console.log(todaysTransaction['Pizza']);
const student = {
    name: 'Phol',
    GPA: 5,
    classes: [100, 200]
};
// console.log(student.test); //didn't give an error because of index signature
// iterating wihtout index signature
//by using keyof assertion
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//keyof creates a union type of the specific string literalas of the key
//Object.keys() makes it to array of keys
console.log(Object.keys(student));
Object.keys(student).map((e) => {
    console.log(student[e]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
