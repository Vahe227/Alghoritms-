// Problem

// I have two solutions for this problem, the first solution is in this file and the second is in this file RemoveDuplicatesFromSortedArray1.js

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

// To solve this problem, we first create a variable called result. This variable will store the filtered values from the array nums.
// We use the filter() method on nums, which iterates over every element in the array. Inside the filter callback, we check whether the current element is equal to the target value we are searching for. 
// If the condition evaluates to true, that element is included in the result array.
// Finally, we return the result array, which contains all the occurrences of the target element from nums.
// The time complexity of this solution is O(N²) in the worst case. This is because for each element in the nums array, we might internally check again using operations that can lead to 
// nested iterations depending on how the target matching is implemented or if there are multiple targets to check against.
// This is not the most optimal solution for large input sizes, and it can be further improved using alternative methods such as Set, Map, or more efficient search algorithms, depending on the exact requirements.

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let result = nums.filter((evt, index) => {
        return nums.indexOf(evt) === index;
    });
    return result;
};