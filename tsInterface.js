function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = { firstName: 'wilkins', lastName: 'leung', age: 6, marray: false };
document.body.innerHTML = greeter(user);
