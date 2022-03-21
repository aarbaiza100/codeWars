function betterThanAverage(classPoints, yourPoints) {
    const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;
  
    return average > yourPoints ? false : true
}


// .reduce can return the sum of all elements in array 

// code wars solution 
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
  