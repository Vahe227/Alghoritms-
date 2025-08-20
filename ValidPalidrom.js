// Problem

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// How I Solve This Problem

// To solve this problem, I used RegExp, which is very useful for working with strings.
// First, we remove all unwanted characters and symbols from s, leaving only letters and numbers.
// Then, we convert all characters to lowercase to standardize the comparison.
// We declare a variable called reversedWord to store the reversed string.
// Using a loop, we iterate through all characters of s in reverse order and append each character to reversedWord.
// Finally, we compare s === reversedWord, which will return true if the string is a palindrome and false otherwise.
// The time complexity of this solution is O(N) because the algorithm processes each character of the input string once.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
    let reversedWord = '';
    for(let i = s.length - 1; i >= 0;i--) {
        reversedWord += s[i];
    };

    return s === reversedWord;
};