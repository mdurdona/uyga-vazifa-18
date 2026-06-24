function reversed(obj){
    let result = {};

    for(let key in obj){
        result[obj[key]] = key;
    }
    return result;
}
console.log(reversed({a:1,b:2}));