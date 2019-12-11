 class Dice {

    constructor (sides, probabilities){ 
            this.sides = sides;
            this.value = 0;
            this.sidesArr(sides);
            if(arguments.length = 2){
                this.probabilities = probabilities
        }
            this.setProbabilities(this.probabilities);          
    }

// setting probabilities:

    setProbabilities(probabilities){
        this.probabilities = probabilities;
        const digit = new RegExp(/\d+/);
            for (let i = 0; i < probabilities.length; i++){
                var sum = 0
                    sum += probabilities[i];
                while (probabilities.length !== this.allSideValues.length){
                    throw new Error ("Probabilities are not equal to the sides!");

    }   if (probabilities[i] == 0) {
                    throw new Error ("A probability can not be equal to zero!");   
            }      
        if (probabilities[i] < 0) {
                    throw new Error ("A probability can not be a negative value!");
            }   
        if (sum < 1) {
                    throw new Error ("probability sum must be greater than 0");
            }
        if (!typeof probabilities[i] === "number") {
            throw new Error ("only integer values allowed");
        }

        } 
    } 

// a method to create an array of sides 
    
    sidesArr(sides) {   
        var sides = this.sides
            this.allSideValues = []
            Number.prototype.to = function* (end) {
                const start = this;
                const step = end > start ? 1 : -1
                const fn = function* (n) {
                    let next = start + step * n
                    yield next
                    if (next === end) return
                    yield* fn(n + 1)
                }
            yield start
            yield* fn(1)   
            }
        const arrB = [...(0).to(sides)];
            for(let i = 1; i < arrB.length; i++){
                this.allSideValues.push(arrB[i])      
            }         return this.allSideValues
    }            

// the rolling method

    roll(){

        this.weighedSides = [];

        for (let i = 0; i < this.probabilities.length; i++){
                var multiplies = this.probabilities[i];

                for (let j = 0; j < multiplies; j++){ 
                    this.weighedSides.push(this.allSideValues[i]);
                }

            let value = [];
            var value2 = [];

                value = this.weighedSides[Math.floor(Math.random() * this.weighedSides.length)];
                value2 = this.allSideValues[Math.floor(Math.random() * this.allSideValues.length)];

                this.randomValueOfWeighedSides = [];  
                this.randomValueOfWeighedSides.push(value);          
        } 
            return this.value += value2;
    }
}   

// instantiating the dice object(s)

let die6 =  new Dice(6, [1,1,1,1,1,3]);
let die10 = new Dice(10, [1,1,1,1,1,1,1,1,1,6])

// the DiceFactory 

class DiceFactory {
    constructor (dieSides, probabilities){
        this.dieSides = dieSides;
        this.probabilities = probabilities;
    }

 // the makeDie method  

    makeDie(){
        return new DiceFactory(this.dieSides, this.probabilities)
    }
}

// instantiating the diceFcatory object(s)

let factory6 = new DiceFactory(6, [1,1,1,1,1,1]); 
let dice6 = new DiceFactory(6, [1,1,1,1,1,1]).makeDie()



         /*********************************[END]********************************/

module.exports = 
                Dice,
                DiceFactory; 
            
die6.roll();
console.log("----------------------------------------")
console.log(die6.value)
console.log("----------------------------------------")
console.log(die6)
console.log("----------------------------------------")


console.log(factory6);
console.log(dice6);


