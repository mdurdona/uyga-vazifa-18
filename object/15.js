const talaba = {
    ism: "Durdona",
    yosh: 21,
    guruh: "IQTS-123"
};

for(let [key,value] of Object.entries(talaba)){
    console.log(`${key}: ${value}`);
}