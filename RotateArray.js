// Problem

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// How I Solve This Problem

// To solve this problem, the approach is fairly straightforward.
// First, we declare a variable to store the length of nums and calculate k % length to handle cases where k is larger than the array size. This gives us the number of elements to rotate from the end.
// Next, we create a variable rotate and use slice(-k) to extract the last k elements from the array.
// Then, we concatenate this with the remaining elements from the start of the array using concat, which produces a rotated version of the array.
// However, the problem requires that we modify nums in-place without using another variable for the final result. To achieve this, we loop through all elements and overwrite each element in nums 
// with the corresponding element from the rotated array.
// Finally, we return the modified nums.
// The time complexity of this solution is O(N), since each element of the array is processed once.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n;

    let rotated = nums.slice(-k).concat(nums.slice(0, n - k));
    for(let i = 0; i < n;i++) {
        nums[i] = rotated[i]; 
    };
    return nums;
};