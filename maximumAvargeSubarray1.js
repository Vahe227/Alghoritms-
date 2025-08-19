// Problem

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// How I Solve This Problem

// To solve this problem, we first create a variable called total, which will hold the sum of the first k elements of the array. This sum will be used to calculate the initial average.
// We then iterate over the array using a loop that accounts for the size k. In each iteration, we adjust total by subtracting nums[i - k] and adding nums[i], effectively creating a sliding window over the array.
// We also define a variable called maxTotal, initially set equal to total. During each iteration, we update maxTotal by using the Math.max function to compare the current maxTotal with the new total, ensuring
// we always keep track of the largest sum found.
// Finally, we return the average by dividing maxTotal by k.
// The time complexity of this solution is O(N), since the algorithm makes a single pass over the array while updating the sliding window in constant time per iteration. This linear complexity 
// makes it an efficient solution for the problem.
// The problem is still under development, as further validation may be needed for edge cases (e.g., when k equals the length of the array).

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
    let total = 0;
    for(let i = 0; i < k; i++) {
        total += nums[i];
    };
    let maxTotal = total;
    for(let i = k;i < nums.length;i++) {
        total += nums[i] - nums[i - k];
        maxTotal = Math.max(maxTotal,total);
    };
    return maxTotal / k;
}; 
 