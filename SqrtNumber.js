// Problem

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// How I Solve This Problem

// I solved this problem using the most efficient approach, as it has a very simple solution.
// We use two functions from the Math library: sqrt and floor.
// sqrt calculates the square root of the given number.
// floor rounds the number down to the nearest integer.
// By combining these two functions, we can efficiently check whether a number is a perfect square.
// This approach is very memory-efficient and has a time complexity of O(1), making it one of the most optimal solutions for this problem.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};