//exactly similar to Types
//there are plenty of ways to define a function in interface

interface User {
  readonly _id: number;
  email: string;
  googleId?: number;
  userId: number;
  // startTrial:()=>string //a function that must return a string
  startTrial(): string // another way to define a function that returns a string
  //startTrial(couponName:string):number // another way to define function that needs a parameter with string type and return a number
}

//reopening the interface / adding more values in the interface
interface User {
  githubId:number
}

//inheritance 
interface Admin extends User {
  role: 'admin'| 'ta'| 'learner';
}

const phol: User = {
  _id: 123,
  email: 'phol',
  userId: 213,
  startTrial: () => {
    return 'hello';
  },
  githubId:324,
};

const adminPhol: Admin ={
  _id: 123,
  email: 'phol',
  userId: 213,
  startTrial: () => {
    return 'hello';
  },
  githubId:324,
  role: 'admin'
}

