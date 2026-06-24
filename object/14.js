function filter(obj){
    let result = {};
    for(let key in obj){    
        if(typeof obj[key] == "number"){
            result[key] = obj[key];
        }
    }
    return result;

}
console.log(filter({ a: 1, b: 'x', c: 3 }));