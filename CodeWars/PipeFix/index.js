function pipeFix(n) {
  return [...Array(n[n.length - 1] - n[0] + 1).keys()].map((x) => x + n[0]);
}
console.log(pipeFix([1, 2, 3, 4, 5, 6, 9]));
console.log(pipeFix([1, 4]));
console.log(pipeFix([-12, 9]));
