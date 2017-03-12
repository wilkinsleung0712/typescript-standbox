// Interface testing

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myobj = { size: 10, label: 'Size 10 object' };
printLabel(myobj);


//Interface Simple example via optional property
interface squareConfig {
    color?: string;//config property as an optional
    width?: number;
}

function createSquare(config: squareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 123 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
// calling method
let mySquare = createSquare({ color: 'black' });
console.log('[TEST4]Test1 -> ' + mySquare.color + ' ' + mySquare.area);

//readonly properties on interface
interface Point {
  readonly x: number;
readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0]= 12; //Error!
// ro.push(5);//error!
// ro.length = 100; //error!
// a = ro; // error!
a = ro as number[]; // assigning the entire ReadonlyArray back to a normal array. You can still override it with a type assertion

//Interface type check
interface Total {
    x?: number;
    y?: number;
    //we’re saying a SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter.
    [propName: string]: any;
}

function calculateTotal(total: Total): number {
    let sum: number = total.x + total.y;
    return sum;
}

let myTotal = calculateTotal({ x: 3, y: 2 });
let myTotal1 = calculateTotal({ x: 3 });
// let myTotal2 = calculateTotal({x:3,z:4});//error z property not exist
let mytotal3 = calculateTotal({ x: 3, z: 4 } as Total);
//lets add an optional property in our Total interfacae.
let myTotal4 = calculateTotal({ x: 3, z: '4' });


//interface via function
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src: string, subString: string) {
    let result = src.search(subString);
    return result > -1;
}
console.log(mySearch);

let mySearch1:SearchFunc;
mySearch1 = function(src,sub){
  let result = src.search(sub);
  return result > -1;
}

//Indexable Types
interface StringArray{
  [index:number]:string;
}
let myArray:StringArray;
myArray = ['bob','fred'];
let mystr = myArray[0]; //bob



// Error: indexing with a 'string' will sometimes get you a Dog!
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
//
interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
  //  name: string;      // error, the type of 'name' is not a subtype of the indexer
    //This is because a string index declares that obj.property is also available as obj["property"]. In the following example, name’s type does not match the string index’s type, and the type-checker gives an error:
    //As you change value by simple using object['name'] = 'test'
}

//Using the indexer limits what can be put or fetched for the object using the index syntax. E.g. foo is inferred to be of type string:
interface IDictionary {
  [index:string]:string;
  name:string;
}
var params = {} as IDictionary;
params['a'] = 'HP';
var foo = params['a'];
// var bar:number = params['heart']; // ERROR
// params['heart'] = 234; // ERROR

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myRArray: ReadonlyStringArray = ["Alice", "Bob"];
// myRArray[2] = "Mallory"; // error!

//interface example
interface ClockConstructor {
  new (hour:number,minute:number) : ClockInterface;
}

interface ClockInterface {
  tick();
}

function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface {
  return new ctor(hour,minute);
}
// class Clock implements ClockConstructor{
//   currentTime: Date;
//   //This is because when a class implements an interface, only the instance side of the class is checked.
//   // Since the constructor sits in the static side, it is not included in this check.
//   constructor(h:number,m:number){};
// }
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
