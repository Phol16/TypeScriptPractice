class Code {
  name: string;
  age: number;
  language: string;
  constructor(name: string, age: number, language: string) {
    this.name = name;
    this.age = age;
    this.language = language;
  }
}

//with visibility modifier
class TheCode {
  // secondLang !: string //propety that will not instanciate right away by using '!'(assertion)

  //private vs protected //both can't be access outside of the class but.
  // (private can only be access by that specific class)
  // (protected other class can access it as long as its extended from the source class)
  constructor(
    public name: string, 
    public language: string,
    private age: number, 
    protected programmingLang: string = 'javascript'
    ) {}
  public getAge() {
    return `hello ${this.age}`;
  }
}

const Phol = new TheCode('phol', 'tagalog', 12, 'typescript');

console.log(Phol.getAge());
// console.log( Phol.age); // gives error cause its private
// console.log( Phol.programmingLang); // gives error cause its protected

class WebDev extends TheCode {
  constructor(
    public computer: string, 
     name: string,
     language:string,
     age:number,
    ) {
      super( name, language, age)
    }
    //gives error casue age is private
    // public getAge(){
    //   return `I am ${this.age}`
    // }

    //didn't get an error cause programmingLang is protected and can be access
    public getProgrammingLang(){
      return `I wrtie ${this.programmingLang}` //has a defaultvalue
    }
}
const Bert = new WebDev('laptop','phol','tagalog',45)

console.log(Bert.computer);
console.log(Bert.name);
console.log(Bert.getProgrammingLang());
// console.log(Bert.age); // gives error cause its private


interface Musician {
  name:string,
  instrument: string,
  play(action:string):string,
}

class Guitarist implements Musician {
  name: string
  instrument:string
  constructor(name:string, instrument:string){
    this.name = name
    this.instrument = instrument
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Pholi = new Guitarist('phol', 'guitar')

console.log(Pholi.play('practice'));

/////////////////////////////////////////////////////////////////
//static implies directly on the class (??)
class Peeps {
  static count:number = 0;

  static getCount():number{
    return Peeps.count
  }

  public id:number;

  constructor(public name:string){
   this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Amy = new Peeps('Amy')
const David = new Peeps('David')
const Joe = new Peeps('Joe')

console.log(Peeps.getCount());
console.log(John.id);
console.log(David.id);

//getters and setter

class Bands {
  private dataState:string[]

  constructor(){
    this.dataState = []
  }

  // readonly it gets data (getter)
  public get data():string[]{
    return this.dataState
  } 

  //writes data (setter)
  public set data(value:string[]){
    //.every() checks every string if it satisfy it will return true else will return false
    if(Array.isArray(value) && value.every((el)=>typeof el === 'string')){
      this.dataState = value
      return
    } else{ throw new Error('not an array of string')}
  }

}

const myBand = new Bands()

myBand.data = ['Neil Yound', 'Led'] //setter
console.log(myBand.data); //getter
myBand.data = [...myBand.data, 'hello']
console.log(myBand.data);
// myBand.data = [452,2342]; // gives error because setters of data accepts an array of string
// console.log(myBand.data);


