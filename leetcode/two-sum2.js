// Given an array of integers nums and an integer target, 

// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    const map = new Map()
    let a = 0
    for (let i=0;i<nums.length;i++){
        let point = target - nums[i]
        if  (map.get(point) !== undefined && point !== i){
                return [map.get(point) , i]
            }
        }
        map.set(nums[i],i)
    }


twoSum([2,7,11,15],9)