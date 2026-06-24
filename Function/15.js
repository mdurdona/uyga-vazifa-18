function vaqt(seconds){
    let min = Math.floor(seconds /60);
    let sekund = seconds % 60;
    min = String(min).padStart(2, '0');
    sekund = String(sekund).padStart(2,'0');
    return `${min} : ${sekund}`;
}
console.log(vaqt(125));