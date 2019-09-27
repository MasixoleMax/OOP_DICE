var generateWeighedSides = function(sides, probability) {
    var weighed_sides = [];
     
    // Loop over weights
    for (var i = 0; i < probability.length; i++) {
        var sides = probability[i] * 10;
         
        // Loop over the list of items
        for (var j = 0; j < sides; j++) {
            weighed_sides.push(sides[i]);
        }
    }
     
    return weighed_sides;
};
 
var sides = [1,2,3,4,5,6];
var probability = [1,1,1,1,1,2];
var weighed_list = generateWeighedSides(sides, probability);
 
console.log(weighed_sides.length);