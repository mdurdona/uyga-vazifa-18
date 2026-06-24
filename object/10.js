function birlashtir(o1,o2){
    return {...o1,...o2};
}
console.log(birlashtir({a:1},{b:2}));