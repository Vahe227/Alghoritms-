/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    for(let item of nums) {
        map.set(item, (map.get(item) || 0) + 1);
    };
    let maxCount = 0;
    let theElement = null;

    for(let [key, value] of map) {
        if(value > maxCount) {
            maxCount = value;
            theElement = key;
        };
    };
    return theElement;
};