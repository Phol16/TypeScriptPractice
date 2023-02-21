//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Gutarist = {
  name: string
  age: number
  album:stringOrNumberArray
}

type userId = stringOrNumber;

//literal types
let myName: 'phol'
let username: 'amy' | 'dave'

username ='amy'

export{}