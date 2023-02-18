let score: number | string = 33; //combining type with | (pipe sign)

score = 'hello';
score = 45;
score = false;

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let phol: User | Admin = { name: 'phol', id: 324 };

phol = { username: 'Pusername', id: 2134 }; //admin type

//union narrowing by doing a conditional statement
function getDbId(id: number | string) {
  if(typeof id === 'string'){
  id.toLowerCase();
  }
}

export {};
