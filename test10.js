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
var CarFactory = (function () {
    function CarFactory() {
        this.typers = 4;
    }
    return CarFactory;
}());
var Car = (function () {
    function Car(vinNo, brand, model, bodyType, typers) {
        this.vinNo = vinNo;
        this.brand = brand;
        this.model = model;
        this.bodyType = bodyType;
        this.typers = typers;
    }
    Car.prototype.horn = function () {
        console.log("Car->" + this.brand + "Beep..Beep.." + this.model);
    };
    return Car;
}());
var Toyota = (function (_super) {
    __extends(Toyota, _super);
    function Toyota(vinNo, model, bodyType) {
        var _this = _super.call(this, vinNo, 'Toyota', model, bodyType, 4) || this;
        _this.vinNo = vinNo;
        _this.model = model;
        _this.bodyType = bodyType;
        return _this;
    }
    Toyota.prototype.horn = function () {
        console.log("Toyota ->" + "[" + this.brand + "]" + "Beep..Beep.." + this.model);
    };
    return Toyota;
}(Car));
var cammery = new Toyota(1, 'cammery', 'seadan');
cammery.horn();
var jeep = {
    vinNo: 1234,
    brand: 'Jeep',
    model: 'Navigator',
    bodyType: 'SUV',
    Typers: 4,
    abs: 'true'
};
