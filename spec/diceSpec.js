
describe("A dice that can have as many sides and also have the option of taking probabilities", function(){
    it ("should pop out a random side out of six sides with different probabailities", function() {
         var diceTest = dice6.roll();
        if(diceTest > 0 && diceTest < 8){ diceTest = true};
        expect(diceTest).toBe(true);

    });
});