/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length;
    for(let i = 0;i < len;i++) {
        let num = nums[i];
        if(num == target || target < num) return i;
    };
    return len;
};