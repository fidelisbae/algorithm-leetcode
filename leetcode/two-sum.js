/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 var twoSum = function(nums, target) {
    for (i=0;i<nums.length;i++) {
        for (j=0;j<nums.length;j++) {
            if (nums[i]+nums[j]===target && i!==j) {
                return [i,j]
            }
        }
    }
};

console.log( twoSum( [1,3,546,23,4,32,4,35,1,3,4,5,6,2,3,6,],9) )