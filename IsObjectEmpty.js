// Problem

// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
 

// Constraints:

// obj is a valid JSON object or array
// 2 <= JSON.stringify(obj).length <= 105

// How I Solve This Problem

// To solve this problem, I used the Object.keys method. By passing the object as an argument, it returns all the keys of that object. Then, I check the length of the keys: 
// if it is 0, I return false; otherwise, I return true. This way, the problem is resolved efficiently. The time complexity is O(1).

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let keys = Object.keys(obj);
    console.log(keys.length);
    return keys.length === 0;
};