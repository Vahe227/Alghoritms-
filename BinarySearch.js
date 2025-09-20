// Problem

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// How I Solve This Problem

// Here, I have implemented the Binary Search algorithm.
// We begin by declaring two variables, left and right, which represent the left and right boundaries of the nums array. We then iterate in a loop, and if at any point left exceeds 
// right, the loop terminates.
// Inside the loop, we calculate the midpoint using the formula:
// mid = Math.floor((left + right) / 2);
// This gives us the index of the middle element in the array.
// If the middle element matches the target value, we return the index where it was found.
// If the middle element is smaller than the target, we move our search to the right half of the array.
// Otherwise, we continue searching in the left half.
// As a result, we either find the index of the target element or return -1 if it does not exist in the array.
// It is important to note that Binary Search only works on sorted arrays. The key principle is repeatedly dividing the search interval in half—narrowing down the range until the 
// target is found or confirmed absent.
// The time complexity of Binary Search is O(log N), making it much more efficient than a linear search for large datasets.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            return mid;
        };
        if(target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };
    return -1;
};