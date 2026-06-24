function sum(...n){
    let total = 0;
    for(let i of n){
        total += i;
    }
    return total;
}

console.log(sum(1,2,3,4))