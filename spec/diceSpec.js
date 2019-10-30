
describe("A dice that can have as many sides and also have the option of taking probabilities", function(){
    it ("should pop out a random side out of six sides with different probabailities", function() {
         var test = dice6.roll();
        if(test > 0 && test < 8){ test = true};
        expect(test).toBe(true);

    });
});