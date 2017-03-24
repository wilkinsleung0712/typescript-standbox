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
var Animals = (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animals;
}());
var Snakes = (function (_super) {
    __extends(Snakes, _super);
    function Snakes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snakes.prototype.move = function () {
        console.log("Slithering...");
        _super.prototype.move.call(this, 5);
    };
    return Snakes;
}(Animals));
var Horses = (function (_super) {
    __extends(Horses, _super);
    function Horses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Horses.prototype.move = function () {
        console.log("Galloping...");
        _super.prototype.move.call(this, 45);
    };
    return Horses;
}(Animals));
var sammy = new Snakes("Sammy the Python");
var tommy = new Horses("Tommy the Palomino");
sammy.move();
tommy.move(34);
