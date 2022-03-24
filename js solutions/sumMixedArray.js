function sumMix(x){
    let sum = 0;
    for (let n of x) { // let number of (x) 
      sum += parseInt(n); //turns strings into numbers 
    }
    return sum;
  }