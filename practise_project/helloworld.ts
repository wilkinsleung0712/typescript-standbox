class Greeting {
  constructor(public greeting:string) {

  }

  greet():string {
    console.log("Here is my greeting -> "+this.greeting);
    return "<h1>"+this.greeting +"</h1>";
  }
}


let greeters:Greeting = new Greeting("Helow World");
document.body.innerHTML = greeters.greet();
