function qidir(obj,value){
    for(let key in obj){
        if(obj[key] === value){
            return key
        }
    }
}
console.log(qidir({ a: 5, b: 9 }, 9));