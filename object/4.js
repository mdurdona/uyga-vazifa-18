function uchir(obj,key){
    delete obj[key];
    return obj;
}
console.log(uchir({ a: 1, b: 2}, "b"))