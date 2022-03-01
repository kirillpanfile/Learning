String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
};