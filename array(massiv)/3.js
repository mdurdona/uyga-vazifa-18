function juftNum(arr){
    let result = arr.filter((el) => el %2 ==0);
    return result;
}
console.log(juftNum([1,2,3,4,5,6]));