var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log(this.name + " moved " + distanceInMeter + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeter);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake('Sammy the Python');
var tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Employee.getStatus = function () {
        return true;
    };
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'bob smith';
if (employee.fullName) {
    alert(employee.fullName + 'status:' + Employee.getStatus());
}
var AnimalOne = (function () {
    function AnimalOne() {
    }
    AnimalOne.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return AnimalOne;
}());
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMessage = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department;
department = new AccountingDepartment();
department.printName();
department.printMessage();
var GreeterOne = (function () {
    function GreeterOne() {
    }
    GreeterOne.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return GreeterOne.standardGreeting;
        }
    };
    return GreeterOne;
}());
GreeterOne.standardGreeting = 'Hello, there';
var greeter1;
greeter1 = new GreeterOne();
console.log(greeter1.greet());
var greeterMaker = GreeterOne;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
var PointOne = (function () {
    function PointOne() {
    }
    return PointOne;
}());
var point3d = { x: 1, y: 2, z: 3 };
