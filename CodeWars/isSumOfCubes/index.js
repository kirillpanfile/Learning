function isSumOfCubes(s) {
    let cubics = s.match(/\d{1,3}/g);
    let result = cubics.filter(el => el.match(/\d/g).reduce((acc, el) => acc + el ** 3, 0) == el)
    let str = "Unlucky";
    if (result.length != 0) {
        str = `${result.map(Number).join(" ")} ${result.map(Number).reduce((acc, val) => acc + val)} Lucky`
    }
    return str;
}