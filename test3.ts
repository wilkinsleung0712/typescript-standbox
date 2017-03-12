// Spread
//
// The spread operator is the opposite of destructuring. It allows you to spread an array into another array, or an object into another object. For example:

let first:Array<number> = [1, 2];
let second:Array<number> = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

console.log(bothPlus);

let defaults = {food:'spicy',price:'$$$',ambiance:'noisy'};
let search = {...defaults, food:'rich'};

class C {
  p = 12;
  m() {
  }
}

let c = new C();
let clone = { ...c };
clone.p; // ok
// clone.m(); // error!
