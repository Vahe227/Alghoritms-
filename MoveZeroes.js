// Problem 

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// How I Solve This Problem

// To solve this problem, we first create an array called zeros. We then iterate through the nums array with a loop and check each element:
// If the current element is 0, we push it into the zeros array and remove it from nums using splice. After removing, we decrement i by 1. This step is crucial—without decrementing i, 
// the loop could skip elements because the array shifts after a removal.
// Otherwise, we continue the loop without making changes.
// Finally, after processing all elements, we push all the zeros stored in the zeros array back into nums. The resulting nums array has all non-zero elements in their original order, followed by all zeros.
// The time complexity of this solution is O(N), since each element is processed once. This approach is considered one of the most efficient ways to solve this problem.

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