//define interface
interface Person{
  firstName:string;
  lastName:string;
  age:number;
}

//define class
class Student {
  // firstName:string;
  // lastName:string;
  fullName:string;
  age:number;
  studentId:string;
  constructor(public firstName, public lastName,age){
    this.fullName = firstName + " " + lastName;
    this.age = age;
  }
}
//define user object
let user = {firstName:"wilkins",lastName:"leung",age:20};
let student = new Student("vicky","zhang",28);
//create function
function greet(user){
  return "Hello, " + user.firstName + " " + user.lastName;
}

//intercept with HTML value
document.body.innerText = 'This is a test one \n';
document.body.innerText += greet(user);
document.body.appendChild(document.createElement('br'));
//intercept with HTML value
document.body.innerText += 'test two \n';
document.body.innerText += greet(student);
document.body.appendChild(document.createElement('br'));

for(let i =0; i<10; i++){
  setTimeout(function(){
    console.log(i);
  },100*i);
}
