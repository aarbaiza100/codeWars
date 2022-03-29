// The i-th column contains a_i cubes.
// When bob switches the gravity, it begins to pull all the cubes to a certain side of the box d
// which can be either 'L' or 'R' (left or right)

//given the initial configuration of the cubes in the box, find out how many
//cubes are in each of the 'n' columns after bob switches the gravity 

const flip=(d, a)=>{
    return d === "R" ? a.sort(function(x, y){return x-y}) : a.sort(function(x, y){return y-x})
  }
  