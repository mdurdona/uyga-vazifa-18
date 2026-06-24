function guruhlash(arr){
    let result = {};

    for (let i of arr){
        let firstLetter = i[0];

        if(!result[firstLetter]){
            result[firstLetter] = [];
        }

        result[firstLetter].push(i);
    }

    return result;

}
console.log(guruhlash(["anor","olma","behi"]));