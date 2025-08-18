// The solution to this problem is under development because this solution is not effective in all cases.

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestSubarray = function(nums) {
    let countOnes = 0;
    for(let i = 0; i < nums.length;i++) {
        if(nums[i] === 1) {
            countOnes++;
        } else {
            continue;
        };
    };
    for(let i = 0;i < countOnes;i++) {
        
    }
};

// var longestSubarray = function(nums) {
//     let countOnes = 0;
//     let countZeros = 0;
//     let ones = []
//     for(let i = 0; i < nums.length;i++) {
//         if(nums[i] === 1) {
//             countOnes++;
//         } else {
//             countZeros++;
//         };
//     };
//     console.log(countOnes);
//     console.log(countZeros);
//     if(countZeros === 0) {
//         nums.splice(0,1);
//     } else {
//         nums.splice(countOnes - 1,1);
//     };
//     countOnes = 0;
//     for(let i = 0; i < nums.length;i++) {
//         if(nums[i] === 1) {
//             countOnes++;
//         };
//     };
//     console.log(nums);
//     return countOnes;
// };