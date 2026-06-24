function sum(obj){
    let sum = 0;
    let all = Object.values(obj);
    
    for (let i of all){
        sum += i;
    }
    return sum
}

console.log(sum({a:10,b:20,c:30}));