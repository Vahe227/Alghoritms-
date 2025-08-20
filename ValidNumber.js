// Problem

// Given a string s, return whether s is a valid number.

// For example, all the following are valid numbers: "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".

// Formally, a valid number is defined using one of the following definitions:

// An integer number followed by an optional exponent.
// A decimal number followed by an optional exponent.
// An integer number is defined with an optional sign '-' or '+' followed by digits.

// A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:

// Digits followed by a dot '.'.
// Digits followed by a dot '.' followed by digits.
// A dot '.' followed by digits.
// An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.

// The digits are defined as one or more digits.

// Example 1:

// Input: s = "0"

// Output: true

// Example 2:

// Input: s = "e"

// Output: false

// Example 3:

// Input: s = "."

// Output: false

// How I Solve This Problem

// To solve this problem, I used a try-catch structure.
// As we know, the code inside the try block executes normally unless an error occurs. If an error is thrown, the catch block handles it.
// Here, we use the Number function to attempt converting the string s into a numeric value.
// If the conversion is successful, Number(s) returns a number.
// If the conversion fails, it throws an error, which is caught in the catch block, and we return false because s cannot be interpreted as a valid number.
// Additionally, we check if the result is NaN and return false in that case.
// We also check for Infinity, -Infinity, and +Infinity, since Number would consider them valid, but for this problem, they are not acceptable, so we return false in these cases.
// The time complexity of this solution is O(1) because it involves a fixed number of operations regardless of input size.

/**
 * @param {string} s
 * @return {boolean}
 */

var isNumber = function(s) {
    try {
        let result = Number(s);
        if(s === "Infinity" || s === "-Infinity" || s === "+Infinity") return false;
        if(isNaN(result)) {
            return false;
        };
        return true;
    } catch(error) {
        return false;
    };
};
