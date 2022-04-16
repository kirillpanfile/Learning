var isPP = function (n) {
  for (k = 2; k < n; k++) {
    if (Math.pow(Math.round(Math.pow(n, 1 / k)), k) == n) {
      return [Math.round(Math.pow(n, 1 / k)), k];
    }
  }
  return null;
};
