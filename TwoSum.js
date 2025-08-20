// Problem

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// How I Solve This Problem

// I solved this problem using nested loops.
// There are two loops: the outer loop iterates over nums[i], and the inner loop iterates over nums[j].
// Inside the loops, we check if the sum of nums[i] + nums[j] is equal to the target.
// If it is, we return the indices [i, j] where the numbers sum up to the target.
// The time complexity of this solution is O(N²), because for each element, we potentially check every other element in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i;j++) {
            if(nums[j] + nums[i] == target) {
                return [j,i];
            } else {
                continue;
            };
        };
    };
};