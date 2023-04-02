/**
 * @param {number[]} nums
 * @return {number[][]}
 */

  



class ThreeSum {
    constructor (nums) {
        this.nums = nums
    }

    nums
    answer = []
    stack = []

    twoSum(nums, target) {
        const map = new Map()
        const stack2 = []
        for(let i=0; i<nums.length; i++) {
            if(map.get(nums[i])) {
                if(!stack2.includes(nums[map.get(nums[i])])) {
                    this.answer.push([0-target, nums[map.get(nums[i])], nums[i]])
                }
            } else {
                map.set(target - nums[i], i)
            }
        }
        return
    }

    threeSum(   )

}


var threeSum = function(nums) {
    var twoSum = function(nums, target) {
        const map = new Map()
        const stack2 = []
        for (let i=0;i<nums.length;i++){
            
            if  (map.get(nums[i])!==undefined){
                    if(!stack2.includes(nums[map.get(nums[i])])){
                    answers.push([0-target,nums[map.get(nums[i])],nums[i]])
                    }
                    stack2.push(nums[map.get(nums[i])])
                } else{
                map.set(target - nums[i],i)
                }
        }
        return
    };
    const answers = []
    const stack = []
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(!stack.includes(nums[i])){
            twoSum(nums.slice(i+1),0-nums[i])
        }
        stack.push(nums[i])
    }
    return answers
};