let Dice = require('../src/diceSrc');
let die6 = new Dice(6, [1,1,1,1,1,6]);

describe("A dice that can have as many sides and also have the option of taking probabilities", function(){

    it ("should pop out a random side out of six sides with different probabailities", function() {

        var diceTest = die6.roll();

        if(diceTest > 0 && diceTest < 7){ 
            diceTest = true;
        };

        expect(diceTest).toBe(true);
});

    it ("should throw an error when the amount of set probabilities are not equal to the number of sides", function() {

        expect(()=>{die6.setProbabilities([1,1,1,1,6])}).toThrow(new Error("Probabilities are not equal to the sides!"))
    });
});

    it ("should throw an error when one of the probabilities is equal to zero", function() {

        expect(()=>{die6.setProbabilities([1,1,1,0,1,6])}).toThrow(new Error("A probability can not be equal to zero!"))
});

    it ("the sum of the probabilities array should be greater than 1", function() {

        expect(()=>{die6.setProbabilities([0.1,0.2,0.1,0.2,0.1,0.1])}).toThrow(new Error("probability sum must be greater than 0"))
});

    it ("the sum of the probabilities array should be greater than 1", function() {

        expect(()=>{die6.setProbabilities([1,1,1,1,-2,1])}).toThrow(new Error("A probability can not be a negative value!"))
});










