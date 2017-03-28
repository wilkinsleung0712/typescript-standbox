var Greeting = (function () {
    function Greeting(greeting) {
        this.greeting = greeting;
    }
    Greeting.prototype.greet = function () {
        console.log("Here is my greeting -> " + this.greeting);
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeting;
}());
var greeters = new Greeting("Helow World");
document.body.innerHTML = greeters.greet();
var ints = [1, 2, 3, 4];
ints.forEach(function (item, index, array) { return console.log(item); });
for (var _i = 0, ints_1 = ints; _i < ints_1.length; _i++) {
    var i = ints_1[_i];
    console.log(i);
}
for (var i in ints) {
    console.log(i);
}
