/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let litlleNumber = 0;
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] > litlleNumber) {
            litlleNumber = candies[i];
        } else {
            continue;
        };
    };
    for(let i = 0;i < candies.length;i++) {
        candies[i] += extraCandies;
    };
    for(let i = 0; i < candies.length;i++) {
        if(candies[i] >= litlleNumber) {
            result.push(true);
        } else {
            result.push(false);
        };
    };
    return result;
};