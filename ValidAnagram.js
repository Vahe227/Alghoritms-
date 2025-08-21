// Problem

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// How I Solve This Problem

// To solve this problem, I chose one of the most straightforward approaches. For every character in t, we check if it exists in s. If it does, we remove it from s. 
// By the end of the process, if all characters of t are found within s, the length of s becomes zero, which means t is indeed an anagram of s. On the other hand, 
// if any characters remain in s, then t cannot be considered an anagram of s.
// This method effectively solves the problem. The time complexity is O(N), as the algorithm runs proportionally to the number of input characters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    for (let i = 0; i < t.length; i++) {
        let index = s.indexOf(t[i]);
        if (index === -1) {
            return false;
        };
        s = s.slice(0, index) + s.slice(index + 1);
    };
    return s.length === 0;
};