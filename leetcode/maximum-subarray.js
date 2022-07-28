// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// var maxSubArray = function (nums) {
//   let max;
//   let sum;
//   let maxArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) continue;
//     sum = 0;
//     max = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       sum = sum + nums[j];
//       if (sum > 0) {
//         max = sum + max;
//         sum = 0;
//       }
//     }
//     maxArr.push(max);
//   }
//   if (maxArr.length === 0) return Math.max(...nums);
//   return Math.max(...maxArr);
// };

var maxSubArray = function (nums) {
  let sum = 0;
  let = result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && sum < 0) {
      sum = 0;
    }
    sum = sum + nums[i];
    result.push(sum);
  }
  if (Math.max(...result) < 0) {
    return Math.max(...nums);
  }
  return Math.max(...result);
};
