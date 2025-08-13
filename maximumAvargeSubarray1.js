/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
    let total = 0;
    for(let i = 0; i < k; i++) {
        total += nums[i];
    };
    let maxTotal = total;
    for(let i = k;i < nums.length;i++) {
        total += nums[i] - nums[i - k];
        maxTotal = Math.max(maxTotal,total);
    };
    return maxTotal / k;
}; 
 