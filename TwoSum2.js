// Problem

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 
/// How I Solve This Problem

// This problem is solved using a brute-force approach with nested loops, with a slight optimization for smaller arrays.
// We first check if the array length is less than or equal to 10. If so, we iterate with two nested loops over all pairs (i, j).
// For each pair, we check if numbers[i] + numbers[j] === target and i !== j to avoid using the same element twice.
// If a valid pair is found, we return [i + 1, j + 1], using 1-based indexing.
// For arrays larger than 10 elements, we still use nested loops but skip the i !== j check, assuming no duplicates at the same index are required.
// The loops ensure every possible pair is checked until a solution is found.
// The time complexity of this approach is O(N²) because in the worst case we check all pairs of numbers in the array.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if(numbers.length <= 10) {
        for(let i = 0; i < numbers.length;i++) {
            for(let j = 1;j < numbers.length;j++) {
                if(numbers[i] + numbers[j] === target && i !== j) {
                    return [i + 1,j + 1];
                };
            };
        };
    } else {
        for(let i = 0; i < numbers.length;i++) {
            for(let j = 1;j < numbers.length;j++) {
                if(numbers[i] + numbers[j] === target) {
                    return [i + 1,j + 1];
                };
            };
        };  
    }; 
};