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

let ints = [1,2,3,4];
ints.forEach((item,index,array)=>console.log(item));
// for..of vs. for..in 语句
//
// for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值。
for(let i of ints){
  console.log(i);// "0", "1", "2",
}

for(let i in ints){
  console.log(i);//  "1", "2", "3","4"
}

// 另一个区别是for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是 for..of关注于迭代对象的值。内置对象Map和Set已经实现了Symbol.iterator方法，让我们可以访问它们保存的值。
