// -1.声明对象直接量:JSON
var obj = {
    name: 'jack',
    eat: 'bread'
}

console.log(typeof obj);
// -2.使用构造函数生成一个新的对象
var Foo = function(name) {
    this.name = name; //私有属性
}
console.log(Foo.prototype);
//原型方法和属性,被继承时候才会调用
Foo.prototype.run = function() {
    alert("I'm running so fast that can't stop at all!");
}

var kick = new Foo('kick');
console.log(typeof kick);
console.log(kick.name);
kick.run();

//下面这段代码就是真正的原型继承了
var Point = {
    x: 0,
    y: 0,
    print: function() {
        console.log(this.x, this.y);
    }
}
var p = Object.create(Point); //new一个对象
p.x = 10;
p.y = 20;
p.print(); // 10 20

// sample 2
// 首先是声明了一个构造函数,构造函数和普通函数有什么区别?构造函数可以使用new调用,生成一个新的对象.
// 如果想要在对象上添加方法,可以将方法写在对象的原型上.
// 子类继承父类,只需要把父对象复制给自对象的原型上即可.
function Plant(name, year) {
    this.name = name;
    this.year = year;
}
var tree = new Plant('tree');
tree.prototype = new Plant('tree');
tree.prototype.grow = function() {
    this.year++;
}

tree.prototype.old = function() {
    console.log(this.year);
}
console.debug(tree.prototype);
//如果想所有的object都能share属性和方法需要在构造函数上加入prototype设置
Plant.prototype.workout = function() {
    // this.name 是reference to the caller method or object
    console.log('Workout() ->' + this.name);
}

var flower = new Plant('rose');
flower.workout();

//为了和主流的类继承扯上那么一点儿关系,JavaScrip引入了'new'关键字,引入了构造函数
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    city: 'Beijing',
    hate: function() {
        alert("I really hate the PM2.5 and the foggy wether!");
    }
}

var lee = new Person('lee', 18);
console.log(lee.name);
lee.hate();

// 声明 Animal 对象构造器
function Animal(name) {
    this.name = name;
}

//将 Animal 的 prototype 属性指向一个对象，
Animal.prototype = {
    weight: 0,
    eat: function() {
        alert("Animal is eating!");
    }
}
//声明 Mammal 对象构造器
function Mammal() {
    this.name = 'mammal';
}
// 指定 Mammal 对象的原型为一个 Animal 对象。
// 实际上此处便是在创建 Mammal 对象和 Animal 对象之间的原型链
Mammal.prototype = new Animal('animal');
// 声明 Horse 对象构造器
function Horse(height, weight) {
    this.height = height;
    this.weight = weight;
    this.name = 'hourse';
}
// 将 Horse 对象的原型指定为一个 Mamal 对象，继续构建 Horse 与 Mammal 之间的原型链
Horse.prototype = new Mammal();
// 重新指定 eat 方法 , 此方法将覆盖从 Animal 原型继承过来的 eat 方法
Horse.prototype.eat = function() {
    alert("Horse is eating grass!");
}

// 验证并理解原型链
var horse = new Horse(100, 300);
console.log(horse.__proto__ === Horse.prototype);
console.log(Horse.prototype.__proto__ === Mammal.prototype);
console.log(Mammal.prototype.__proto__ === Animal.prototype);
//原型链
// Horse-- > Mammal的实例
// Mammal-- > Animal的实例
// Animal-- > Object.prototype
