//Utility Types

//Partial

interface Assignment {
  studentId: string
  title: string
  grade: number
  verified?:boolean
}

const updateAssignment = (assign:Assignment, propsToUpdate:Partial<Assignment>):Assignment=>{
  return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
  studentId: 'comsci123',
  title: 'final',
  grade:0,
}
const assignGrade: Assignment = updateAssignment(assign1, {grade:90})
console.log(assignGrade);

//Required and Readonly
//must have all of the property even if that property is optional 
const recordAssignment = (assign:Required<Assignment>):Assignment=>{
  return assign
}

//con not be modified
const assignVerified: Readonly<Assignment> = {
  ...assignGrade, verified:true
}

recordAssignment({...assignGrade,verified:true}) //required type

//Record
//anglebracket <key, values>
const hexColorMap: Record<string, string>={
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
}

type Students = 'Kelly'| 'Grace'
type LetterGrade = 'A'|'B'|'C'|'D'|'E'|'F'

const finalGrade:Record<Students, LetterGrade> = {
 Kelly:'A',
 Grace:'B'
}

interface Grades {
  assign1:number,
  assign2:number
}

const gradeData: Record<Students, Grades> = {
  Kelly:{assign1: 90, assign2:90},
  Grace:{assign1:80, assign2:90}
}

//Pick and Omit
type AssignResult = Pick<Assignment, 'studentId'| 'grade'>

const score: AssignResult = {
  studentId:'hello213',
  grade:50
}
const score2:Pick<Assignment, 'studentId' | 'grade'>={
  studentId:'hello2340',
  grade: 50
}

//Omit
type AssignPreview = Omit<Assignment, 'grade'|'verified'>

const preview:AssignPreview = {
  studentId:'helaef324',
  title:'213as',
  // grade:50 //will give error because we omit it 
}

//Exclude and Extract

//Nonnullable

//ReturnType

