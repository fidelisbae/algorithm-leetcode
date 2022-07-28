// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 반복문
// var search = function (nums, target) {
//   let low = 0;
//   let high = nums.length - 1;
//   let mid;
//   while (low <= high) {
//     mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (target > nums[mid]) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// };

// 재귀함수

var search = function (nums, target) {
  function binary(nums, target, low, high) {
    if (low > high) {
      return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      return binary(nums, target, mid + 1, high);
    } else {
      return binary(nums, target, low, mid - 1);
    }
  }
  return binary(nums, target, 0, nums.length - 1);
};
