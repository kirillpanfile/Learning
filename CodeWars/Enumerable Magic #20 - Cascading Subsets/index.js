function eachCons(array, n) {
  return array
    .join(" ")
    .match(new RegExp(".{" + n + "}", "g"))
    .join("")
    .split(" ")
    .map((el, idx) => {
      console.log(el);
    });
  // .map((el) => [el]).filter(el=> el!=',');
}

const lst = [3, 5, 8, 13];
console.log(eachCons(lst, 1));
