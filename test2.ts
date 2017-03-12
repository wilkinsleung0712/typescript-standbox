console.debug("Test1")
let input = [-1, -2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

// Confusingly, the colon here does not indicate the type. The type, if you specify it, still needs to be written after the entire destructuring:
console.debug("Test2")
let {a:aName,b:bName} = {a:"123",b:"456"};
console.log(aName);
console.log(bName);

// Default values
// Default values let you specify a default value in case a property is undefined:
function keepWholeObject(wholeObject:{a:string,b?:number}){
  let {a,b=1001} = wholeObject;
  return wholeObject;
}
// keepWholeObject now has a variable for wholeObject as well as the properties a and b, even if b is undefined.
function f({a,b}={a:"",b:0}):void{
}
f(); // ok, default to { a: "", b: 0 }
f({a:"no",b:123});
// f({a:"no"});//error

function f1({a,b=0} = {a:""}):void{

}

f1({ a: "yes" }) // ok, default b = 0
f1() // ok, default to { a: "" }, which then defaults b = 0\
f1({a:"oh yes",b:123});
//f1({}) // error, 'a' is required if you supply an argument
