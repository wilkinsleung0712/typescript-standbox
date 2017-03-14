function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person1 = (function () {
    function Person1(name) {
        this.name = name;
    }
    ;
    return Person1;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
    };
    return ConsoleLogger;
}());
var jim = extend(new Person1("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
function padLeft(value, padding) {
}
function getSmallPet() {
}
var pet = getSmallPet();
pet.layEggs();
