function expensive(obj){
    let max = 0;
    let nameMax = "";
       for(let key in obj ){
        if(obj[key] > max){
            max = obj[key];
            nameMax = key;
        }
    }
    return nameMax;
}

const products = {
    olma: 12,
    gilos:18,
    klubnika: 27
};
console.log(expensive(products));