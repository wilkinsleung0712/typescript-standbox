// 函数
// 和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，
//不论是定义一系列API函数还是只使用一次的函数。

//我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
function add(x: number, y: number): number {
    return x + y;
}
let myAdd = function(x: number, y: number): number { return x + y; };

//现在我们已经为函数指定了类型，下面让我们写出函数的完整类型
let myAdd1: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

//函数类型包含两部分：参数类型和返回值类型。
//这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。
//这个名字只是为了增加可读性。 我们也可以这么写：
let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}

// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
// 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。
//  如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
// 函数的类型只是由参数类型和返回值组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数的隐藏状态并不是组成API的一部分。
let myTestFunc: (firstname: string, lastname: string) => string
    = function(whatever2: string, whatever1: string) {
        return whatever1 + whatever2;
    }

console.debug(myTestFunc('wilkins','liang'));

//
var myNameFunc = function callMyName(name:string):string {
  return name;
}

var myNameFunc1 = (name:string)=> {return name};
// function getName (name:string)=> {return name}; //error

//可选参数和默认参数
function callMyName(firstName:string = 'Wilkins',lastName?:string){
  if (!lastName) {
    return firstName;
  }
  return firstName + lastName;
}

console.log(callMyName('James','Leborn'));
console.log(callMyName('James1'));
console.log(callMyName());

//剩余参数
// 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。
//在JavaScript里，你可以使用 arguments来访问所有传入的参数。
// 在TypeScript里，你可以把所有参数收集到一个变量里：
function callMyName2(firstName:string, ...restOfName:string[]):string{
   return firstName + " " + restOfName.join(" ");
}
// let employeeName = callMyName2('qiang','wei','liang',24); //24 is not a string type
let employeeName = callMyName2('qiang','wei','liang');
console.log(employeeName);


// this keyword
// 可以看到createCardPicker是个函数，并且它又返回了一个函数。 如果我们尝试运行这个程序，会发现它并没有弹出对话框而是报错了。
// 因为 createCardPicker返回的函数里的this被设置成了window而不是deck对象。
// 因为我们只是独立的调用了 cardPicker()。 顶级的非方法式调用会将 this视为window。
// （注意：在严格模式下， this为undefined而不是window）
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker:
      function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
          // return function() {
          return ()=>{
              let pickedCard = Math.floor(Math.random() * 52);
              let pickedSuit = Math.floor(pickedCard / 13);

              return {suit: this.suits[pickedSuit], card: pickedCard % 13};
          }
      }

}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

//#重写deck
interface Card{
  suit:string;
  card:number;
}

interface Deck{
  suits:string[];
  cards:number[];
  // createCardPicker期望在某个Deck对象上调用。 也就是说 this是Deck类型的，而非any，
  // 因此--noImplicitThis不会报错了。
  createCardPicker(this: Deck): () => Card;
}

let deck1 :Deck =  {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPickerOne = deck1.createCardPicker();
let pickedCardOne = cardPickerOne();

alert("card: " + pickedCardOne.card + " of " + pickedCardOne.suit);


//this参数在回调函数里
// 你可以也看到过在回调函数里的this报错，当你将一个函数传递到某个库函数里稍后会被调用时。
// 因为当回调被调用的时候，它们会被当成一个普通函数调用， this将为undefined。

 
