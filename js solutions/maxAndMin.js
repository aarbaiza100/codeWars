//make two functions max and min 
// receive a list of integers as input
// return respectively, the largest and lowest number in that list. 

let min = function(list){
    
    return Math.min(...list);
}

let max = function(list){
    
    return Math.max(...list); // ... == dot notation 
}
