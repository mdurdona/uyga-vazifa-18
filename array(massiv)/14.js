function kup(arr){
    let kup = 1;
    for(let i = 0; i< arr.length;i++){
        kup *= arr[i];
    }
    return kup
}
console.log(kup([2,3,4]));