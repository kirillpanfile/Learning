let trap = function (height) {
  let max = (left = leftMax = rightMax = 0),
    right = height.length - 1;
  while (left < right) {
    height[left] < height[right]
      ? (height[left] >= leftMax
          ? (leftMax = height[left])
          : (max += leftMax - height[left]),
        left++)
      : (height[right] >= rightMax
          ? (rightMax = height[right])
          : (max += rightMax - height[right]),
        right--);
  }
  return max;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
D