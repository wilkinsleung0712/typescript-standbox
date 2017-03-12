console.debug("Test1");
var input = [-1, -2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
console.debug("Test2");
var _a = { a: "123", b: "456" }, aName = _a.a, bName = _a.b;
console.log(aName);
console.log(bName);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    return wholeObject;
}
function f(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
}
f();
f({ a: "no", b: 123 });
function f1(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
}
f1({ a: "yes" });
f1();
f1({ a: "oh yes", b: 123 });
