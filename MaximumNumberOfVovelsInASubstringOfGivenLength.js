// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vovels = ['a','e','i','o','u'];
    let count = 0;
    if(count < k) {
        for(let i = 0; i < s.length; i++) {
            if(count >= k) {
                return count;
                break;
            };
            let word = vovels[i];
            for(let j = 0;j < s.length;j++) {
                if(word === s[j]) {
                    count++;
                    break; 
                } else {
                    continue;
                };
            };
        }; 
    } else {
        return count;
    };
    return count;
};