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
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPickerOne = deck1.createCardPicker();
var pickedCardOne = cardPickerOne();
alert("card: " + pickedCardOne.card + " of " + pickedCardOne.suit);
