class Dice {

    constructor (sides, probabilities){
            this.numberOfSides = sides;
            this.sidesArr(sides);
            this.setProbabilities(probabilities);
            this.weighedSides = [];
            this.rollRandomSide = [];
  
}

    setProbabilities(probabilities){
        this.probabilities = probabilities;
            for (let i = 0; i < probabilities.length; i++){
                while (probabilities.length != this.allSideValues.length){
                    throw new Error ("Probabilities are not equal to the sides!");

       }    if (probabilities[i] == 0) {
                    throw new Error ("A probability can not equal zero!");    
       }      
            if (probabilities[i] < 0) {
                    throw new Error ("A probability can not be a negative value!");
        }

             if (probabilities[i] > this.numberOfSides) {
                    throw new Error ("No probability for this dice can be greater than " + this.numberOfSides + " !");
}
       
    } 
} 
    
    sidesArr(sides) {   
        var sides = this.numberOfSides
            this.allSideValues = [];
            Number.prototype.to = function* (end) {
                const start = this;
                const step = end > start ? 1 : -1;
                const fn = function* (n) {
                    let next = start + step * n;
                    yield next;
                    if (next === end) return;
                    yield* fn(n + 1);
                }
            yield start;
            yield* fn(1);   
            }
        const arrB = [...(0).to(sides)];
            for(let i = 1; i < arrB.length; i++){
                this.allSideValues.push(arrB[i]);        
            }          return this.allSideValues;
    }            


    roll(){
        // this.rollRandomSide = [];
    
        for (let i = 0; i < this.probabilities.length; i++){
                var multiplies = this.probabilities[i]
            for (let j = 0; j < multiplies; j++){
                this.weighedSides.push(this.allSideValues[i])
            }
            var value =  Math.floor((Math.random()* this.allSideValues[i]) + 1);
            this.rollRandomSide.push(value)
            
               //return this.weighedSides;
        } 
    }   
}


            /************************************[END]*******************************************/



    let dice6 = new Dice(6, [1,1,1,1,1,5]);
    dice6.roll();
    console.log(dice6);
  
    

