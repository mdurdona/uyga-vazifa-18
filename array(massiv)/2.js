function sumMassiv(arr){
   let sum  = arr.reduce((acc,item) => acc+item);
   return sum;
}
console.log(sumMassiv([3,9,1,7]));