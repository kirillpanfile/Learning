function countPositivesSumNegatives(input) {
  return input != null
    ? input.filter((x) => x > 0).length > 0
      ? [
          input.filter((x) => x > 0).length,
          input.filter((x) => x < 0).reduce((a, b) => a + b, 0),
        ]
      : []
    : [];
}
