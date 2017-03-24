interface Vechcle {
  readonly vinNo:number;//有时候我们希望对象中的一些字段只能在创建的时候被赋值
  brand:string;
  model:string;
  bodyType:string;
  typers?:number;
  color?:string;
  [propName: string]: any; //有时候我们希望一个接口允许有任意的属性
}

abstract class CarFactory implements Vechcle {
  readonly vinNo:number;//有时候我们希望对象中的一些字段只能在创建的时候被赋值
  brand:string;
  model:string;
  bodyType:string;
  typers?:number = 4;
  color?:string;
  [propName: string]: any; //有时候我们希望一个接口允许有任意的属性

  abstract horn():void;

}

class Car implements CarFactory {

  constructor(public vinNo:number,public brand:string, public model:string,public bodyType:string,public typers?:number){

  }

  public horn():void {
    console.log("Car->"+ this.brand + "Beep..Beep.." + this.model);
  }
}


class Toyota extends Car {
  public brand:string;
  public typers:number;
  constructor(public vinNo:number, public model:string,public bodyType:string){
    super(vinNo,'Toyota',model,bodyType,4);
    // this.brand = 'super.brand';
    // this.typers = 4;
  }

  public horn():void {
    console.log("Toyota ->"+ "["+ this.brand +"]"+ "Beep..Beep.." + this.model);
  }
}


 let cammery = new Toyota(1,'cammery','seadan');

 cammery.horn();

let jeep:Vechcle = {
  vinNo:1234,
  brand:'Jeep',
  model:'Navigator',
  bodyType:'SUV',
  Typers:4,
  abs:'true'
}
// jeep.vinNo = 123; //cannot change as its readonly
