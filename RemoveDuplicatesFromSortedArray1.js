// Problem

// I have two solutions for this problem, the first solution is in this file and the second is in this file RemoveDuplicatesFromSortedArray2.js

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// How I Solve This Problem

// To solve this problem, we start by declaring a variable insertPos and set it to 1. This variable keeps track of the position where the next unique element should be placed.
// We then loop through the array nums. For each iteration, we check if the current element nums[i] is different from the previous element nums[i - 1]. If they are different, it means we have found a 
// new unique element. In that case, we assign nums[insertPos] = nums[i] and then increase insertPos by 1.
// At the end of the loop, we return insertPos, which represents the number of unique elements in the array.
// The time complexity of this solution is O(N) since it operates based on the number of input elements. This makes it one of the most efficient approaches for this problem.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insertPos = 1;
    for(let i = 1;i < nums.length;i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[insertPos] = nums[i];
            insertPos++;
        };
    };
    return insertPos;
};