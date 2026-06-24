function secondMax(arr){
    let max = 0;
    let second = 0;
    for (let i = 0; i < arr.length;i++){
        if(arr[i] > max){
            second = max;
            max = arr[i];
        } else if (arr[i] > second && arr[i] < max){
            second =arr[i]
        }
    }
    return second;
}

console.log(secondMax([10, 5, 8, 10]))