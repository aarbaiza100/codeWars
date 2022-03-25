// you are given two sorted arrays that both only contain integers 
//Task is to find a way to merge them into a single one
// sorted in asc order 
// Complete the function mergeArrays(arr1,arr2) 
// arr1 and arr2 are the OG arrays 

//if both arr1 and arr2 are empty, just return an ampty array 
// NOTE arr1 and arr2 may have same integers. Remove duplicateed in the returned result




//Task is to find a way to sort them into a single one 
const merged = [...arr1, ...arr2];


//sort in asc order 

sort(function(a, b){return a-b});

//complete the function mergeArrays(arr1,arr)

function mergeArrays(arr1, arr2) {
  //if both arr1 and arr2 are empty, just return an ampty array 
  return Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b);

}



