interface Person{
  firstName:string;
  lastName:string;
  age:number;
  marray:boolean;
}

function greeter(person:Person){
  return "Hello," + person.firstName + " " + person.lastName;
}

var user = {firstName:'wilkins',lastName:'leung',age:6,marray:false};

document.body.innerHTML= greeter(user);
