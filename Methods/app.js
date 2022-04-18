// Metodele unui array sunt:
// - push()
// metoda push adauga un element la sfarsitul array-ului
// Exemplu:
console.log([1, 2, 3].push(4)); // [1, 2, 3, 4]]);
// - pop()
// metoda pop elimina ultimul element din array
// Exemplu:
console.log([1, 2, 3].pop()); // [1, 2]
// - shift()
// metoda shift elimina primul element din array
// Exemplu:
console.log([1, 2, 3].shift()); // [2, 3]
// - unshift()
// metoda unshift adauga un element la inceputul array-ului
// Exemplu:
let arr = [1, 2, 3];
let tmp = arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
// - splice()
// metoda splice elimina un element din array
// Exemplu:
let arr1 = [1, 2, 3];
let tmp1 = arr1.splice(1, 2);
console.log(tmp1); // [1, 3]
// - slice()
// metoda slice extrage un fragment din array
// - join()
// metoda join returneaza un string format din elementele array-ului
// - reverse()
// metoda reverse inversa elementele unui array
// - sort()
// metoda sort sorteaza elementele unui array
// Exemplu:
let arr4 = ["e", "a", "d", "c", "b"];
let tmp4 = arr4.sort();
console.log(tmp4); // [1, 2, 3]
// - map()
// metoda map returneaza un array format din rezultatele unei functii
// - filter()
// Exemplu:
let arr2 = [1, 2, 3];
let tmp2 = arr2.filter(function (x) {
  return x > 1;
});
// metoda filter returneaza un array format din elementele care trec un test
// - reduce()
// metoda reduce returneaza rezultatul unei functii
// Exemplu:
let arr3 = [1, 2, 3];
let tmp3 = arr3.reduce(function (x, y) {
  return x + y;
});
console.log(tmp3); // 6
// - every()
// metoda every returneaza true daca toate elementele unui array trec un test
// - some()
// metoda some returneaza true daca unele elemente unui array trec un test
// - forEach()
// metoda forEach returneaza un array format din rezultatele unei functii
// - find()
// metoda find returneaza primul element care trece un test
// - includes()
// metoda includes returneaza true daca un element se afla in array
