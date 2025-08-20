// Problem

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// How I Solve This Problem

// To solve this problem, we first declare four variables: text, word, currentWord, and array.
// text stores the input string s, but with spaces added at the beginning and the end.
// word is used to temporarily collect characters of each word.
// currentWord will hold the reversed sentence that we build at the end.
// array stores all the words extracted from the sentence.
// After declaring these variables, we loop through all characters of text.
// If the current character is not a space, we append it to word.
// Otherwise, when a space is found, we check if word is not empty. If it’s not empty, it means we’ve completed a word, so we push word into array and reset word to an empty string for the next word.
// After the loop finishes, all words will be stored inside array. Then, we iterate through the array from the end and append each word to currentWord to reverse the order of words.
// Finally, we return currentWord.trim(), which removes any extra spaces at the beginning or end of the string.
// The time complexity is O(N) because the algorithm processes the input string character by character only once, making it efficient for this problem.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let text = ' ' + s + ' ';
    let word = '';
    let currentWord = '';
    let array = [];
    for(let i = 0; i < text.length;i++) {
        if(text[i] !== ' ') {
            word += text[i];
        } else {
            if(word !== '') {
                array.push(word);
                word = '';
            };
        };
    };
    for(let i = array.length - 1; i > -1;i--) {
        currentWord += array[i] + ' ';
    };

    return currentWord.trim();
};