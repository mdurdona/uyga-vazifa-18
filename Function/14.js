function reversed(n){
    let result = 0;
    while(n > 0){let lastdigit = n % 10;
        result = result*10+lastdigit;
        n = Math.floor(n/10);
    }
    return result;
}
console.log(reversed(123));
