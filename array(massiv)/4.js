function reversed(arr){
    let reversed = [];
    for (let i = arr.length-1; i >=0; i--){
        reversed.push(arr[i]);
    }
    return reversed
}
console.log(reversed([1,4,6,7,8]));