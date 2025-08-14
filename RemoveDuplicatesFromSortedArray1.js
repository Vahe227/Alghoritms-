// I have two solutions for this problem, the first solution is in this file and the second is in this file RemoveDuplicatesFromSortedArray2.js

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insertPos = 1;
    for(let i = 1;i < nums.length;i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[insertPos] = nums[i];
            insertPos++;
        };
    };
    return insertPos;
};