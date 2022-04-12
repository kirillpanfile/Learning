// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
// 2017 ==> 2071
// 1234 ==> 1243
// 5679 ==> 5689

function nextBigger(n) {
  const sortedDigits = (n) => ("" + n).split("").sort((a, b) => b - a);
  const max = +sortedDigits(n).join("");
  for (let i = n + 1; i <= max; i++) {
    if (max === +sortedDigits(i).join("")) return i;
  }
  return -1;
}
