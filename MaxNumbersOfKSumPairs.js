/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    const freqMap = new Map();

    for(const num of nums) {
        const complexity = k - num;
        if(freqMap.get(complexity) > 0) {
            count++;
            freqMap.set(complexity, freqMap.get(complexity) - 1);
        } else {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        };
    };
    return count;
};