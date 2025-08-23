// Problem

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

// How I Solve This Problem

// To solve this problem, we iterate through all the elements in the functions array, assigning each to the variable fn. For every iteration, we call the function stored in fn, passing the current value of x as its argument. 
// The result of that call replaces the value of x, ensuring that each subsequent function operates on the most recent result. Finally, after all functions have been applied, we return x.
// One important detail here is the order of execution: the loop runs from right to left, not left to right. This distinction is crucial, because if the functions were applied from left to right, the output would differ 
// and would not satisfy the problem’s requirements.
// The time complexity of this solution is O(N), since it depends linearly on the number of input functions.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        for(let i = functions.length - 1; i > -1; i--) {
            const fn = functions[i];
            x = fn(x);
        };
        return x;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */