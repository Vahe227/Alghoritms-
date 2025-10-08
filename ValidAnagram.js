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

// To solve this problem, we use well-known JS methods. We obtain the sorted versions of the two texts and compare whether they are the same; if so, we return true. However, 
// other methods are also necessary. For example, toLowerCase ensures that there are no uppercase letters in either text, replace with a RegExp is used to remove spaces and 
// other unwanted characters from the text and replace them with empty strings, and split is used to divide all the characters of the text into separate elements for sorting. 
// The time complexity is O(n log n).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    let sSort = s.toLowerCase().replace('/\s/g', "").split("").sort().join("");
    let tSort = t.toLowerCase().replace('/\s/g', "").split("").sort().join("");
    return sSort === tSort;
};
