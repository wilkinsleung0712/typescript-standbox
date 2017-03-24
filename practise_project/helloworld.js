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
