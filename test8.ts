//TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性。比如：
//类型兼容性
interface Named{
  name:string;
}

class Person {
  name:string;
}

let p:Named;
// OK, because of structural typing
p = new Person();

let x1: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x1 = y;

function greet(n: Named) {
    alert('Hello, ' + n.name);
}
greet(y); // OK
// 注意，y有个额外的location属性，但这不会引发错误。 只有目标类型（这里是 Named）的成员会被一一检查是否兼容。


// 比较两个函数
let x2 = (a:number)=> 0;
let y2 = (b:number,c:string)=> 0 ;

y2 = x2; // OK
// x = y; // Error

// 要查看x是否能赋值给y，首先看它们的参数列表。 x的每个参数必须能在y里找到对应类型的参数。
// 注意的是参数的名字相同与否无所谓，只看它们的类型。 这里， x的每个参数在y中都能找到对应的参数，所以允许赋值。

//第二个赋值错误，因为y有个必需的第二个参数，但是x并没有，所以不允许赋值。
let items = [1,2,3];
// Don't force these extra arguments
items.forEach((item,index,array)=>console.log(item));

//should be ok
items.forEach((item)=>console.log(item));

// 下面来看看如何处理返回值类型，创建两个仅是返回值类型不同的函数：
let x3 = ()=>({name:'alice'});
let y3 = ()=>({name:'alice',location:'shiqiao'});

x3 = y3;
// y3 = x3; //error x3() lacks a location property


// 类
//
// 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。
// 比较两个类类型的对象时，只有实例的成员会被比较。
//  静态成员和构造函数不在比较的范围内。
// 私有成员会影响兼容性判断。
// 当类的实例用来检查兼容时，如果它包含一个私有成员，那么目标类型必须包含来自同一个类的这个私有成员。
//  这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。
class Animal1 {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size1 {
    feet: number;
    constructor(numFeet: number) { }
}

let a1: Animal1;
let s1: Size1;

a1 = s1;  //OK
s1 = a1;  //OK


// 泛型
// 因为TypeScript是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型。
interface Empty<T> {

}

let x4:Empty<number>;
let y4:Empty<string>;
x4 = y4;  // okay, y matches structure of x
// 上面代码里，x和y是兼容的，因为它们的结构使用类型参数时并没有什么不同。


interface NotEmpty<T>{
  data:T;
}
let x5:NotEmpty<number>;
let y5:NotEmpty<string>;
// x5 = y5;  // error, x and y are not compatible
// 在这里，泛型类型在使用时就好比不是一个泛型类型
// 对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。 然后用结果类型进行比较，就像上面第一个例子。
// let identity = function<T>(x: T): T {
//     // ...
// }
//
// let reverse = function<U>(y: U): U {
//     // ...
// }
//
// identity = reverse;  // Okay because (x: any)=>any matches (y: any)=>any

// 目前为止，我们使用了兼容性，它在语言规范里没有定义。 在TypeScript里，有两种类型的兼容性：
// 子类型与赋值。 它们的不同点在于，赋值扩展了子类型兼容，允许给 any赋值或从any取值和允许数字赋值给枚举类型或枚举类型赋值给数字。
// 语言里的不同地方分别使用了它们之中的机制。 实际上，类型兼容性是由赋值兼容性来控制的甚至在 implements和extends语句里。
