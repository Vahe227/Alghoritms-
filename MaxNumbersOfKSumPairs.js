// Problem

// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

// How I Solve This Problem

// To solve this problem, we use a Map data structure. First, we create a variable called count. Then, using a for...of loop, we iterate over all the numbers.
// Inside the loop, we create a variable named complexity and check:
// If the value retrieved from the map for the current number is greater than 0, we increment count by 1. Then, we update the map by setting complexity to the map’s current value minus 1.
// Otherwise, we set the map entry for the current number (num) with a value equal to the map’s retrieved value plus 1.
// At the end, we return count.
// The time complexity of this algorithm is O(N), which is one of the best possible cases for this problem.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    const freqMap = new Map();

    for(const num of nums) {
        const complexity = k - num;
        if(freqMap.get(complexity) > 0) {
            count++;
            freqMap.set(complexity, freqMap.get(complexity) - 1);
        } else {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        };
    };
    return count;
};