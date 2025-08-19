// Problem 

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

// How I Solve This Problem

// To solve this problem, we first create an array called vowels, which contains all the English vowel characters. We then initialize a variable count with the value 0.
// Next, we check if k is greater than count. If so, we run a loop that processes the string. Inside this loop, if count is greater than or equal to k, we return count.
// We then create a variable called word, which sequentially stores each value from the vowels array. Using a nested loop, we check whether word matches the current character in the string s.
// If they match, we increment count by 1 and break the inner loop.
// Otherwise, we continue the process.
// Finally, if no further matches are found, we return count.
// The time complexity of this solution is O(N²), since for each character in the string we potentially compare against all vowels in the array. This quadratic complexity is not the most efficient approach 
// for solving this problem.
// The problem is still under development, as certain cases are not yet handled optimally.

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