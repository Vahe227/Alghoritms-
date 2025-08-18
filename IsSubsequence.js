// The solution to this problem is under development because this solution is not effective in all cases.

// Problem

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not). 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// How I Solve This Problem

// To solve this problem, I used nested loops. In each iteration, I check whether s[i] is equal to t[i]. If they match, the state is set to true, and the loop continues checking the remaining characters. 
// However, if at any point a character from s is not found in t, the loop is terminated, the state is updated to false, and that value is returned.The time complexity of this approach is O(N²), since for 
// each character in one string we may need to check against multiple characters in the other. This quadratic complexity is not optimal for this problem.The problem is still under development, 
// as the current solution fails on certain edge cases.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    for(let i = 0; i < s.length;i++) {
        for(let j = 0;j < t.length;j++) {
            if(s[i] === t[i]) {
                state = true;
                break;
            } else {
                state = false;
                continue;
            };
        };
        if(state === false) {
            return false;
        };
    };
    return state;
};