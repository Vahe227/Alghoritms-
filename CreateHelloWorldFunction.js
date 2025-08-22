// Problem

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

// How I Solve This Problem

// This problem is very straightforward. The solution is to simply return the string "Hello World". Since the operation does not depend on the size of the 
// input and requires only a single constant-time action, the time complexity is O(1).

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return 'Hello World';
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */