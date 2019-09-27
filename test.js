var rand = function(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }


var weighedSides = function(sides, probability) {
    var weighed_sides = [];
     
// Loop over weights
    for (var i = 0; i < probability.length; i++) {
        var multiples = probability[i];
         
// Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            weighed_sides.push(sides[i]);
        }
    }

    return weighed_sides;
};
 
var sides = [1,2,3,4,5,6];
// for (let i = 0; i < sides.length; i++){
    
//     return sides[i];
// }
var probability = [1,1,1,1,1,5];
//  for (let i = 0; i < probability.length; i++){
    
//      return probability[i];
//  }
var weighed_sides = weighedSides(sides, probability);
 
var random_num = rand(1, weighed_sides.length);
console.log(random_num);
console.log(weighed_sides);

