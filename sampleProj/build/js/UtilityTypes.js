"use strict";
//Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'comsci123',
    title: 'final',
    grade: 0,
};
const assignGrade = updateAssignment(assign1, { grade: 90 });
console.log(assignGrade);
//Required and Readonly
//must have all of the property even if that property is optional 
const recordAssignment = (assign) => {
    return assign;
};
//con not be modified
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true })); //required type
//Record
//anglebracket <key, values>
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrade = {
    Kelly: 'A',
    Grace: 'B'
};
const gradeData = {
    Kelly: { assign1: 90, assign2: 90 },
    Grace: { assign1: 80, assign2: 90 }
};
const score = {
    studentId: 'hello213',
    grade: 50
};
const score2 = {
    studentId: 'hello2340',
    grade: 50
};
const preview = {
    studentId: 'helaef324',
    title: '213as',
    // grade:50 //will give error because we omit it 
};
//Exclude and Extract
//Nonnullable
//ReturnType
