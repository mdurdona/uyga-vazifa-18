function kup(n){
    return function(x){
        return x*n;
    };
}

const ikkiBaravar = kup(2);
console.log(ikkiBaravar(5));