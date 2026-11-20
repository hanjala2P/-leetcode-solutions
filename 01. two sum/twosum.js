/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const data = new Map();

    for(let i=0; i< nums.length; i++){
        const current = nums[i];
        const needed = target - current;

        if(data.has(needed)){
            return [data.get(needed), i ]
        }
        data.set(current,i)
    }
};