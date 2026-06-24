function faktorial(n){
    let result = 1;


    for(let i = 1; i <= n; i++){
         result *= i;
    }
    return result;
}
console.log(faktorial(5));