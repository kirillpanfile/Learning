String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el[0].toUpperCase() +el.slice(1)).join(' ');
};

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());