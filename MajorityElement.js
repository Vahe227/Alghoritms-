// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

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