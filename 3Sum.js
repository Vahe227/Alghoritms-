// The solution to this problem is under development because this solution is not effective in all cases.

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            for(let k = 0;k < j;k++) {
                if(nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i],nums[j],nums[k]]);
                } else {
                    continue;
                };
            };
        };
    };
    return result;
};


// var threeSum = function(nums) {
//     let arr = [];
//     for(let i = 0; i < nums.length; i++) {
//         if(arr.length === 3) {
//            if(arr[0] + arr[1] + arr[2] === 0) {
//                 return [[arr[0],arr[1],arr[2]]];
//            };
//         };
//         arr.push(nums[i]);
//     };
// };

// var threeSum = function(nums) {
//     let result = [];
//     if(nums.length === 0) return []; 
//     for(let i = 0; i < nums.length; i++) {
//         let j = 1
//         while(result.length !== 0) {
//             if(nums[i] + nums[j] + nums[i + j] == 0) {
//                 result.push([nums[i],nums[j],nums[i + j]]);
//             } else {
//                 j++
//                 continue;
//             };
//         };
//     };
//     return result;
// };