function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
var myAdd1 = function (x, y) { return x + y; };
var myAdd2 = function (x, y) {
    return x + y;
};
var myTestFunc = function (whatever2, whatever1) {
    return whatever1 + whatever2;
};
console.debug(myTestFunc('wilkins', 'liang'));
var myNameFunc = function callMyName(name) {
    return name;
};
var myNameFunc1 = function (name) { return name; };
function callMyName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Wilkins'; }
    if (!lastName) {
        return firstName;
    }
    return firstName + lastName;
}
console.log(callMyName('James', 'Leborn'));
console.log(callMyName('James1'));
console.log(callMyName());
function callMyName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = callMyName2('qiang', 'wei', 'liang');
console.log(employeeName);
