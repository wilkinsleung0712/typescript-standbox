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
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myobj = { size: 10, label: 'Size 10 object' };
printLabel(myobj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 123 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log('[TEST4]Test1 -> ' + mySquare.color + ' ' + mySquare.area);
var p1 = { x: 10, y: 20 };
var a = [1, 2, 3, 4];
var ro = a;
a = ro;
function calculateTotal(total) {
    var sum = total.x + total.y;
    return sum;
}
var myTotal = calculateTotal({ x: 3, y: 2 });
var myTotal1 = calculateTotal({ x: 3 });
var mytotal3 = calculateTotal({ x: 3, z: 4 });
var myTotal4 = calculateTotal({ x: 3, z: '4' });
var mySearch;
mySearch = function (src, subString) {
    var result = src.search(subString);
    return result > -1;
};
console.log(mySearch);
var mySearch1;
mySearch1 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ['bob', 'fred'];
var mystr = myArray[0];
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var params = {};
params['a'] = 'HP';
var foo = params['a'];
var myRArray = ["Alice", "Bob"];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
