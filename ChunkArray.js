// Problem

// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Please solve it without using lodash's _.chunk function.

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.
// Example 2:

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
// Example 3:

// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.
// Example 4:

// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.
 
// Constraints:

// arr is a string representing the array.
// 2 <= arr.length <= 105
// 1 <= size <= arr.length + 1

// How I Solve This Problem

// To solve this problem, I used a nested loop approach. I iterate over the array in steps of the given size and collect elements into a temporary array (anotherResult). 
// After each iteration, I push this temporary array into the final result and reset it to an empty array.
// However, there is an important detail: when iterating in chunks of size, it is possible to exceed the bounds of the array. In such cases, attempting to access an element 
// would result in undefined. To handle this, I check whether the index is still within the array’s range before pushing the element into anotherResult.
// The overall time complexity of this solution is O(N²).

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    let anotherResult = [];
    for(let i = 0; i < arr.length; i += size) {
        for(let j = i; j < size + i; j++) {
            if(arr[j] !== undefined) {
                anotherResult.push(arr[j]);
            };
        };
        result.push(anotherResult);
        anotherResult = [];
    };
    return result;
};
