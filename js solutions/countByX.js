function countBy(x,n){
    let z = [];
    let i = 1;

    while(z.length < n){
        z.push(x * i);
        i++;
    }
    return z; 
}