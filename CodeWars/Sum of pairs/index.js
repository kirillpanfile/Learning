function sumPairs(ints, s) {
  if (ints.length < 2) {
    return null;
  }
  return ints.reduce((acc, curr) => {
    if (acc.includes(curr + s)) {
      return [curr + s];
    }
  }, []);
}

// Test.assertSimilar(sumPairs([10, 2, 5, 3], 7), [10, 2]);
console.log("sumPairs([10, 2, 5, 3], 7)", sumPairs([10, 2, 5, 3], 7));
// Test.assertSimilar(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);
console.log(
  "sumPairs([1, 4, 8, 7, 3, 15], 8)",
  sumPairs([1, 4, 8, 7, 3, 15], 8)
);
// Test.assertSimilar(sumPairs([1, -2, 3, 0, -6, 1], 2), [0, -6]);
console.log(
  "sumPairs([1, -2, 3, 0, -6, 1], 2)",
  sumPairs([1, -2, 3, 0, -6, 1], 2)
);
