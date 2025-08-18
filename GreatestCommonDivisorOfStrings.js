// Problem

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 
// How I Solve This Problem

// String Repetition Problem using the Euclidean AlgorithmTo solve this problem, I applied the Euclidean Algorithm, which is traditionally used for finding the greatest common divisor (GCD) of two integers, 
// but it can also be adapted effectively for working with strings.The Euclidean Algorithm is defined as follows:It repeatedly replaces the larger number with the smaller number, and the smaller number with 
// the remainder of their division, until the remainder becomes 0. The last non-zero remainder is the greatest common divisor of the two numbers.In the context of this problem, I used the algorithm to 
// determine the repeating substring pattern that exists between two given strings. Essentially, the algorithm helps identify the greatest common divisor of the string lengths, and then checks whether 
// that substring, when repeated, can reconstruct both strings.The time complexity of this solution is O(N), where N represents the size of the input. This linear time complexity makes it efficient and 
// well-suited for this type of problem.The problem is still under development, as certain edge cases may not yet be fully handled correctly.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    let a = str1.length,b = str2.length
    while(b > 0) {
        [a, b] = [b, a % b];
    };
    return str1.slice(0,a);
};
