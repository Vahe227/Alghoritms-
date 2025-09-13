// Problem

// Alice and Bob are playing a game on a string.

// You are given a string s, Alice and Bob will take turns playing the following game where Alice starts first:

// On Alice's turn, she has to remove any non-empty substring from s that contains an odd number of vowels.
// On Bob's turn, he has to remove any non-empty substring from s that contains an even number of vowels.
// The first player who cannot make a move on their turn loses the game. We assume that both Alice and Bob play optimally.

// Return true if Alice wins the game, and false otherwise.

// The English vowels are: a, e, i, o, and u.

// Example 1:

// Input: s = "leetcoder"

// Output: true

// Explanation:
// Alice can win the game as follows:

// Alice plays first, she can delete the underlined substring in s = "leetcoder" which contains 3 vowels. The resulting string is s = "der".
// Bob plays second, he can delete the underlined substring in s = "der" which contains 0 vowels. The resulting string is s = "er".
// Alice plays third, she can delete the whole string s = "er" which contains 1 vowel.
// Bob plays fourth, since the string is empty, there is no valid play for Bob. So Alice wins the game.
// Example 2:

// Input: s = "bbcd"

// Output: false

// Explanation:
// There is no valid play for Alice in her first turn, so Alice loses the game.

// Constraints:

// 1 <= s.length <= 105
// s consists only of lowercase English letters.

// How I Solve This Problem

// To solve this problem, I used a map to store all the English vowels and declared a variable to keep track of whose turn it is — Alice’s or Bob’s. Inside the loop, we iterate 
// through all the elements of s.
// If it’s Alice’s turn, we check whether the next character of s is a vowel. If so, the turn switches to Bob.
// If it’s Bob’s turn, we check not only whether the next character is a vowel, but also whether the following character is a vowel as well. If both conditions are satisfied, the 
// turn switches back to Alice.
// The loop continues until one of the conditions fails.
// If no single vowel is found for Alice until the end of the loop, we return false, meaning Bob wins.
// If no pair of consecutive vowels is found for Bob until the end of the loop, we return true, meaning Alice wins.
// The time complexity of this approach is O(N).

/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const map = new Map();
    let isAlicePlaying = true;
    map.set('a', 'a');
    map.set('e', 'e');
    map.set('i', 'i');
    map.set('o', 'o');
    map.set('u', 'u');
    let i = 0;
    while(i < s.length) {
        if(isAlicePlaying === true) {
            if(map.has(s[i])) {
                isAlicePlaying = false;
                if(i === s.length - 1) return true;
                i++;
            } else {
                i++;
                if(i > s.length - 1) {
                    if(isAlicePlaying === true) return false;
                    return true;
                };
            };
        } else {
            if(map.has(s[i]) && map.has(s[i + 1])) {
                isAlicePlaying = true;
                i++;
            } else {
                i++;
                if(i > s.length - 1) {
                    if(isAlicePlaying === true) return false;
                    return true;
                };
            };
        };
    };
};