// The solution to this problem is under development because this solution is not effective in all cases.

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