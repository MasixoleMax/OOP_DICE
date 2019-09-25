class Dice {

    constructor (sides){
        this.sides = sides;
    }
 

    roll() {
      let value = Math.floor((Math.random() * this.sides) + 1); 
        console.log(value);

    }
}

let dice20 = new Dice(20);
let dice6 = new Dice(6);

dice6.roll();
dice20.roll();



