// Problem

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// How I Solve This Problem

// To solve this problem, I created a variable named move, which initially stores the length of the nums array. Then, using a loop, we iterate through all the elements of the array, 
// but the index i decreases instead of increasing.Inside the loop, we check if i + nums[i] is greater than or equal to move. If this condition is met, we update move to be equal to i.
// The time complexity of this approach is O(N), as the algorithm iterates through the array once. This makes it an efficient solution and one of the best-case approaches for this 
// problem.The problem is still under development, as certain edge cases may require additional handling.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    let move = nums.length - 1;
    for(let i = nums.length - 1;i >= 0; i--) {
        if(i + nums[i] >= move) {
            move = i;
        };
    };
    return move === 0;
};
