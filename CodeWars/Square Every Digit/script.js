function squareDigits(num){
    return Number(String(num).split("").map(num => Math.floor(Math.pow(Number(num), 2))).join(''));
}