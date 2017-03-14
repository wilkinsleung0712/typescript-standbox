//泛型
function identity(arg:any):any {
  return arg;
}

identity('1234');
identity(1234);
identity(true);

//虽然使用any类型后这个函数已经能接收任何类型的arg参数，但是却丢失了一些信息
//传入的类型与返回的类型应该是相同的。 如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
function identityViaType<T>(arg:T):T{
  return arg;
}
identityViaType(1234);
identityViaType<boolean>(true);


interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identityViaGeneric<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identityViaGeneric;
//泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

//在泛型约束中使用类型参数
function copyFields< T extends U, U>(target: T, source: U): T {
    for (let id in source) {
         source[id] = target[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 }); // okay
// copyFields(x, { Q: 90 });  // error: property 'Q' isn't declared in 'x'.

//在泛型里使用类类型
//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。
function create<T>(c:{new ():T;}):T{
  return new c();
}
var testFac:String;
testFac = create<String>(String);
console.log(testFac);

//一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
  hashMask:boolean;
}

class ZooKeeper {
  nametag:string;
}

class AnimalT {
  numLegs:number;
}

class Bee extends AnimalT {
  keeper:BeeKeeper;
}

class Lion extends AnimalT{
  keeper:ZooKeeper;
}

function findKeeper<A extends AnimalT,K>(a:{new ():A;prototype:{keeper:K}}):K{
  return a.prototype.keeper;
}
let l : ZooKeeper;
l = findKeeper<Lion,ZooKeeper>(Lion);  // typechecks!
 console.log(l);
