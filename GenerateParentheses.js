// Problem

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

// How I Solve This Problem

// To solve this problem, I used a recursive backtracking approach. The core idea is that on each function call, we check whether a complete and valid combination has already 
// been constructed. If so, we add it to the result array and return, allowing the algorithm to continue exploring the remaining combinations. While building the combinations, 
// we keep track of how many opening and closing parentheses have been used. We can add an opening parenthesis as long as its count is less than the given n. A closing 
// parenthesis can only be added if its count is less than the number of opening parentheses already used, ensuring that the combination remains valid at every step. This 
// guarantees that only well-formed parenthesis strings are generated.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let pairs = [];
    const addPairSymbol = (o, c, s) => {
        if(s.length === 2 * n) {
            pairs.push(s);
            return;
        };
        if(o < n) addPairSymbol(o + 1, c, s + '(');
        if(c < o) addPairSymbol(o, c + 1, s + ')')
    };
    addPairSymbol(0, 0, '');
    return pairs
};