/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let width;
  let max = 0;
  let check = false;
  while (left < right) {
    width = (right - left) * Math.min(height[left], height[right]);
    if (width > max) {
      max = width;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
