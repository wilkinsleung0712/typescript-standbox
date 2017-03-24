class Animals {
  constructor(public name:string) {

  }

  move(meters):void {
    console.log(this.name + " moved " + meters + "m.");
  }


}


class Snakes extends Animals {
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

class Horses extends Animals {
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}

let sammy = new Snakes("Sammy the Python")
let tommy: Animals = new Horses("Tommy the Palomino")

sammy.move()
tommy.move(34)
