//given a set of numbers, return the additive inverse of each. 
//Each positive becomes negatives, and negatives become positives. 

//you can assume that all values are integers. Do not mutate the input array/list. 

function invert(array) {
    return array.map(num => num * -1) ;
 }

 /* 
step one: go through each number in the array using the map method
step two: multiply each number by -1
step three: return new array
*/

//additive inverse is basicall any number n + its opposite value will equal to 0.
// For example 10 + (-10), 5 + (-5), etc. 

const invert = array => array.map(num => -num); // alternative solution 