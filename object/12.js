const original = {
    ism: "Eshmat",
    yosh: 21
};

const copy = {...original};
copy.yosh = 25;

console.log(original);
console.log(copy)