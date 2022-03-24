//The first century spans from the year 1 up to and including the year 100
//the second century- from the year 101 up to and including the year 200, etc. 

//Given a year return the century it is in 

// def need to use a for loop 
function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++) {
      if (i % 100 === 0) {
        result++;
      }
    }
    return result;
  }
  
  //alternative 
  function century(year) {
    return Math.ceil(year / 100);
  }
  // Math.ceil round number up to next largest integer 
  