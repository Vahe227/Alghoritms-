// Problem

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

// How I Solve This Problem

// To solve this problem, we first declare a variable result to store all the values after applying the function fn. We then iterate over each element in the array 
// arr and push the result of calling fn with the current element and its index into result. This way, we process every element in arr with fn and store the results 
// in result. Finally, we return the result array.The time complexity is O(N), since the function processes each element of the input array once.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    
    for(let i = 0 ;i < arr.length; i++) {
        result.push(fn(arr[i], i));
    };
    return result;
};