function palindrom(t1,t2){
    if(t1.split("").reverse().join("") === t2){
        return true;
    }
    return false;
}
console.log(palindrom("kiyik", "kiyik"));