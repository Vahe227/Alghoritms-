// Problem

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// How I Solve This Problem

// To solve this problem, we use a stack-based approach to ensure that all parentheses are correctly matched.
// We declare an empty array oppened to act as a stack for storing opening brackets, and a boolean variable sonu initialized to true to track validity.
// We iterate through each character in the input string s.
// If the current character is an opening bracket (, [, or {, we push it onto the oppened stack.
// Otherwise, if it is a closing bracket, we pop the last element from oppened and concatenate it with the current closing bracket to form cal.
// We then check if cal forms one of the valid pairs (), [], or {}.
// If it does not, we set sonu to false and break the loop immediately.
// After the loop, we return sonu && !oppened.length. This ensures that the string is valid only if all brackets were correctly matched and the stack is empty.
// The time complexity of this solution is O(N) because we iterate through the string once, and each push and pop operation on the stack takes constant time.

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let oppened = [], sonu = true;
    for(let i = 0; i < s.length;i++) {
        let value = s[i];

        if(value == '(' | value == '[' || value == '{') {
            oppened.push(value);
        } else {
            let prev = oppened.pop(), cal = prev + value;

            if(!(cal == '()' || cal == '[]' || cal == '{}')) {
                sonu = false;
                break;
            };
        };
    };
    return sonu && !oppened.length;
};