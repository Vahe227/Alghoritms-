// Problem

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

// How I Solve This Problem 

// To solve this problem, we first create a variable word, which starts as an empty string.
// Then we create a variable words, which holds the concatenation of word1 and word2.
// We then enter a loop and do the following:
// If the index i is less than the length of word1, we append word1[i] to word.
// We perform the same check for word2 and append the corresponding character to word.
// As a result, we get the solution: a merged (interleaved) version of the two words.
// The time complexity is O(N + M), because we iterate over all characters in both word1 and word2.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word = '';
    let words = word1 + word2;
    for(let i = 0;i < words.length; i++) {
        if(i < word1.length) {
            word += word1[i];
        };
        if(i < word2.length) {
            word += word2[i];
        };
    };
    return word;
};