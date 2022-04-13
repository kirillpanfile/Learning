//Create a function that takes an array of letters, and combines them into words in a sentence.
function arrAdder(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let tmp = [];
    for (let i = 0; i < arr.length; i++)
      if (arr[i] != "") tmp.push(arr[i].pop());
    newArr.push(tmp);
  }

  return newArr
    .map((el) => {
      if (el != "") return el.join("");
    })
    .reverse()
    .join(" ")
    .trim();
}

console.log(
  arrAdder([
    ["T", "M", "i", "t", "p", "o", "t", "c"],
    ["h", "i", "s", "h", "o", "f", "h", "e"],
    ["e", "t", "", "e", "w", "", "e", "l"],
    ["", "o", "", "", "e", "", "", "l"],
    ["", "c", "", "", "r", "", "", ""],
    ["", "h", "", "", "h", "", "", ""],
    ["", "o", "", "", "o", "", "", ""],
    ["", "n", "", "", "u", "", "", ""],
    ["", "d", "", "", "s", "", "", ""],
    ["", "r", "", "", "e", "", "", ""],
    ["", "i", "", "", "", "", "", ""],
    ["", "a", "", "", "", "", "", ""],
  ])
);
