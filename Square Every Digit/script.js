function squareDigits(num){
    return Number(String(num).split("").map((num) => {
        return Math.floor(Math.pow(Number(num), 2));
    }).join(''));
}


console.log(squareDigits(3212));