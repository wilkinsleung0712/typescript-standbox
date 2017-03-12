var Student = (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.age = age;
    }
    return Student;
}());
var user = { firstName: "wilkins", lastName: "leung", age: 20 };
var student = new Student("vicky", "zhang", 28);
function greet(user) {
    return "Hello, " + user.firstName + " " + user.lastName;
}
document.body.innerText = 'This is a test one \n';
document.body.innerText += greet(user);
document.body.appendChild(document.createElement('br'));
document.body.innerText += 'test two \n';
document.body.innerText += greet(student);
document.body.appendChild(document.createElement('br'));
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
