// I have two solutions for this problem, the first solution is in this file and the second is in this file RemoveDuplicatesFromSortedArray1.js

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let result = nums.filter((evt, index) => {
        return nums.indexOf(evt) === index;
    });
    return result;
};