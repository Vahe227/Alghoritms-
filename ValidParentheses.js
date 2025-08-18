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