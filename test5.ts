//CLASS OVERRIDE
class Animal {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }

    public move(distanceInMeter: number = 0) {
        console.log(`${this.name} moved ${distanceInMeter}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeter = 5) {//default distanceInMeter to 5
        console.log("Slithering...");
        super.move(distanceInMeter);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);
// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    static getStatus(): boolean {
        return true;
    }
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == 'secret passcode') {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }

    }
}

let employee = new Employee();
employee.fullName = 'bob smith';
if (employee.fullName) {
    alert(employee.fullName + 'status:' + Employee.getStatus());
}


//抽象类
//抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
// 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
abstract class AnimalOne {
    //abstract ,method to be implement by child class
    abstract makeSound: void;
    move(): void {
        console.log('roaming the earch...');
    }
}

// example of abstract class
abstract class Department {
    constructor(public name: string) {

    }
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMessage(): void;
}
class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // constructors in derived classes must call super()
    }
    public printMessage(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
       console.log('Generating accounting reports...');
   }
}

let department:Department;
// department = new Department();// error: cannot create an instance of an abstract class
department = new AccountingDepartment();// ok to create and assign a non-abstract subclass
department.printName();
department.printMessage();
// department.generateReports(); // error: method doesn't exist on declared abstract type



// advanced skills.
//高级技巧
//当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。
class GreeterOne {
  static standardGreeting = 'Hello, there';
  greeting:string;
  greet(){
    if(this.greeting){
      return 'Hello, ' + this.greeting;
    } else {
      return GreeterOne.standardGreeting;
    }
  }
}
let greeter1: GreeterOne; //  我们实例化 Greeter类，并使用这个对象
greeter1 = new GreeterOne();
console.log(greeter1.greet());

let greeterMaker: typeof GreeterOne = GreeterOne;
// 我们创建了一个叫做 greeterMaker的变量。 这个变量保存了这个类或者说保存了类构造函数。
// 然后我们使用 typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。
greeterMaker.standardGreeting = "Hey there!";
//我们在 greeterMaker上使用new，创建Greeter的实例
let greeter2: GreeterOne = new greeterMaker();
console.log(greeter2.greet());


//把类当做接口使用
//如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
class PointOne {
    x: number;
    y: number;
}

interface Point3d extends PointOne {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
