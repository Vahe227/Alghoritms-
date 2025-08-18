// The solution to this problem is under development because this solution is not effective in all cases.

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

/**
 * @param {string} s
 * @return {boolean}
 */

var isNumber = function(s) {
    let allNumbers = {
        "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5,
        "6": 6, "7": 7, "8": 8, "9": 9
    };

    let state = false;
    for(let i = 0; i < s.length; i++) {
        if(allNumbers[s[i]] == s[i] || allNumbers[s[i + 1]] == s[i] || allNumbers[s[i + 2]] == s[i] || allNumbers[s[i + 3]] == s[i] || allNumbers[s[i + 4]] == s[i] || allNumbers[s[i + 5]] == s[i] || allNumbers[s[i + 6]] == s[i] || allNumbers[s[i + 7]] == s[i] || allNumbers[s[i + 8]] == s[i] || allNumbers[s[i + 9]] == s[i]) {
            state = true;
        } else {
            return false;
        };
    };
    return state;
};
