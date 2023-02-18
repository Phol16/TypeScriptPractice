const superHeros: string[] = []; // an array of string
const integer: number[] = []; // an array of numbers
const heroPower: Array<number> = []; // alternative / an array of number
const theName: Array<string> = []; //alternative / an array of string

superHeros.push('spiderman');
heroPower.push(2);

const theAge: readonly number[] = [2, 3, 4]; //can not be modified
theAge.push(2);

type User = {
  name: string;
  age: number;
};

const createUser: User[] = [];
createUser.push({ name: 'phol', age: 24 });

const MLModel: number[][] = [
  [2, 4, 4],
  [2, 5, 2],
];

//union

const data: number[] = [2, 3, 5, '4'];
const data1: string[] = [2, '3', '5', '4'];
// not good practice because it indicates its either an array of string or an array of number
const data2: string[] | number[] = ['3', '3', '5', '4']; 
const data3: (string | number| boolean)[] = [2, '3', '5', '4',true]; //this is a great practice to use union in array

export{}