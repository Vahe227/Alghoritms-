/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeros = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeros.push(nums[i]);
            nums.splice(i,1);
            i--;
        } else {
            continue;
        };
    };
    for(let i = 0; i < zeros.length;i++) {
        nums.push(zeros[i]);
    };
    return nums;
};