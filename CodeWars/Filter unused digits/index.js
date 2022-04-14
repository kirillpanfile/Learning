/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
*/

const unusedDigits = (...val) => {
  return [..."0123456789"]
    .filter((el) => val.every((v) => v.toString().includes(el) === false))
    .join("");
};

console.log(unusedDigits(2015, 8, 26));
