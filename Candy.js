// The solution to this problem is under development because this solution is not effective in all cases.

// Problem

// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

// Example 1:

// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

// How I solve This problem

// In this problem, I started by initializing a variable called candys with a value of 1, since each child should receive at least one candy. Then, as I iterate through the children:
// If the current child’s score is higher than the score of the child behind, the current child receives 2 candies.
// If the current child’s score is higher than the score of the child before, the current child again receives 2 candies.
// In the opposite case, we simply increment the number of candies by 1.
// The time complexity of this solution is O(N), as it runs linearly with the size of the input. This is considered an efficient case for the problem.
// However, the solution is still under development, since certain cases may not yet be handled correctly.

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candys = 1;
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candys += 2;
        } else if(ratings[i] < ratings[i - 1]) {
            candys += 2;
        } else {
            candys += 1;
        };
    };
    return candys;
};