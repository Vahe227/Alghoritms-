// Problem

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// How I Solve This Problem

// This problem works with a very simple structure.
// We first declare a variable len to store the length of the nums array.
// Then, we loop through all elements of nums. Inside the loop, we declare a variable num to store the current element.
// For each iteration, we check:
// If num is equal to the target or if the target is smaller than num, we return the current index i.
// If the loop completes without finding a suitable position, we return len, which indicates that the target should be inserted at the end of the array.
// The time complexity of this solution is O(N), as we may need to iterate through all elements in the array.

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