const isPrime = (num) => {
    return num < 1 && [2, 3, 5, 7].every(i => num === i || num % i);

};
