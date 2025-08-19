// Problem 

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// How I Solve This Problem 

// To solve this problem, I first created a variable called len to keep track of the length of the last word in the sentence. Then, starting from the end of the sentence, I used a loop 
// to count the length of the last word.If the current character is not a space (" "), we increment len by 1.Otherwise, if the character is a space and len is already greater than 0, 
// we break the loop since we have reached the end of the last word.Finally, we return the value of len as the result.The time complexity of this approach is O(N), since we may need to 
// scan through the entire input string in the worst case. This linear complexity is one of the best possible scenarios for solving this problem efficiently.The problem is still under development, 
// as some edge cases may require further refinement (e.g., when the input string is empty or contains only spaces).

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();

    let len = 0;
    for(let i = s.length - 1; i >= 0;i--) {
        if(s[i] !== ' ') {
            len++;
        } else if(len > 0) {
            break;
        };
    };
    return len;
};