//交叉类型（Intersection Types）
//交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
function extend<T,U>(first:T,second:U):T&U {
  let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}
class Person1 {
  constructor(public name:string){};
}

interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}

var jim = extend(new Person1("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

//联合类型
//联合类型与交叉类型很有关联，但是使用上却完全不同。 偶尔你会遇到这种情况，一个代码库希望传入 number或string类型的参数。
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
    // ...
}

// let indentedString = padLeft("Hello world", true); // errors during compilation

// 联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以number | string | boolean表示一个值可以是number，string，或boolean。

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors
