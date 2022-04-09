function arrayDiff(a, b) {
  if (a == []) return [];
  return a.filter((el) => !b.includes(el));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
