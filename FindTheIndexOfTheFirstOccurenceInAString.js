// The solution to this problem is under development because this solution is not effective in all cases.

// Problem

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// How I Solve This Problem

// In this problem, we initialize two variables: i, which serves as the index for the while loop, and annotherStuck, initially set to 0. Inside the loop, we 
// check whether the needle exists within the haystack. If a match is found, we immediately return 0, indicating that the needle has been located in the haystack. 
// Otherwise, the loop continues, updating annotherStuck to -1. If no match is found by the end of the loop, we return -1, which signals that the needle does not 
// exist in the haystack.The time complexity of this approach is O(N), as the algorithm iterates over the input size linearly. While efficient in terms of runtime, 
// the solution is still under development, as it produces incorrect results for certain edge cases.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    let i = 0;
    let annotherStuck = 0;
    while(i < haystack.length) {
        if(haystack.substring(i,needle.length) == needle) {
            annotherStuck = 0;
            break;
        } else {
            i++;
            annotherStuck = -1;
            continue;
        };
    };
    return annotherStuck;
};
