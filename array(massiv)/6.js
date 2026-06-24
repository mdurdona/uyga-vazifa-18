function uzunligi(arr){
    let count = 0;
    for(let i of arr){
        count++;
    }
    return count;
};
console.log(uzunligi([1,2,3,5,6]))