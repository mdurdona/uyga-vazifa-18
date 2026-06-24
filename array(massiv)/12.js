function musbatManfiy(arr){
    let musMan = {
        musbat : [],
        manfiy : []
    };
    for(let i of arr){
        if(i< 0){
            musMan.manfiy.push(i);
        }else if (i>0){
            musMan.musbat.push(i);
        }
    }  
    return musMan;
}

console.log(musbatManfiy([-1,2,-3,4]))