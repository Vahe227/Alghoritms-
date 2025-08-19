// Problem

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// How I Solve This Problem 

// For this problem, we first check if the array of strings is empty. If the length of the array is 0, we immediately return an empty string ("").
// If the array is not empty, we create a variable called prefix, which is initially set to the first string in the array. Then, within a for loop that iterates over the remaining strings, 
// we use a while loop to adjust the value of prefix. Specifically, we shorten prefix until indexOf(prefix) returns 0, meaning the current string starts with the given prefix.
// Once this condition is met for all strings, the final value of prefix is returned as the longest common prefix.
// The time complexity of this approach is O(N²), since for each string we may repeatedly adjust and compare substrings. This quadratic complexity is not the most efficient solution for the problem, 
// and more optimized approaches exist.
// The problem is still under development, as the current solution may not handle certain edge cases optimally.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";

    let prefix = strs[0];
    for(let i = 0;i < strs.length;i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0,prefix.length - 1);
        };
    };
    return prefix;
}; 