// Problem 

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

// How I Solve This Problem 

// To solve this problem, we simply need to return an object containing two methods: toBe and notToBe.
// The toBe method accepts one argument and compares it with the value passed to expect. If both values are equal, it returns true; otherwise, it throws an Error 
// with the message "Not Equal", meaning the two values are not the same.
// The notToBe method also accepts one argument and compares it with the value from expect. If the values are different, it returns true; otherwise, it 
// throws an Error with the message "Equal", indicating that the two values are the same.
// The time complexity of both methods is O(1) since each comparison is performed in constant time.

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (valToBe) => {
            if(val === valToBe) {
                return true;
            } else {
                throw Error('Not Equal');
            };
        },
        notToBe: (valNotToBe) => {
            if(val !== valNotToBe) {
                return true;
            } else {
                throw Error('Equal');
            };
        }
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */