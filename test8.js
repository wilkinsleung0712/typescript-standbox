var Person = (function () {
    function Person() {
    }
    return Person;
}());
var p;
p = new Person();
var x1;
var y = { name: 'Alice', location: 'Seattle' };
x1 = y;
function greet(n) {
    alert('Hello, ' + n.name);
}
greet(y);
var x2 = function (a) { return 0; };
var y2 = function (b, c) { return 0; };
y2 = x2;
var items = [1, 2, 3];
items.forEach(function (item, index, array) { return console.log(item); });
items.forEach(function (item) { return console.log(item); });
var x3 = function () { return ({ name: 'alice' }); };
var y3 = function () { return ({ name: 'alice', location: 'shiqiao' }); };
x3 = y3;
var Animal1 = (function () {
    function Animal1(name, numFeet) {
    }
    return Animal1;
}());
var Size1 = (function () {
    function Size1(numFeet) {
    }
    return Size1;
}());
var a1;
var s1;
a1 = s1;
s1 = a1;
var x4;
var y4;
x4 = y4;
var x5;
var y5;
