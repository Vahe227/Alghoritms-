// The solution to this problem is under development because this solution is not effective in all cases.

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not). 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

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