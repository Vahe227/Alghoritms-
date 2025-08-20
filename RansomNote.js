// Problem 

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// How I Solve This Problem

// To solve this problem, we iterate through the characters of magazine and compare them with the characters in ransomNote. Whenever a character in magazine matches the first character of ransomNote, 
// we remove that character from ransomNote (essentially making progress toward building it).
// After the loop, we check if ransomNote has become an empty string. If it is empty, that means all the characters needed for the ransom note were successfully found in magazine, so we return true. Otherwise, we return false.
// The time complexity of this solution is O(N) since it processes the input strings linearly, which makes it one of the most efficient approaches for this problem.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
    };
    if(!ransomNote) return true;
    else return false;
};