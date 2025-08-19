// Problem

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// How I Solve This Problem

// To solve this problem, we use a Map data structure. Iterating through the nums array, we insert each element into the map. If the element is not already in the map, we set its value to 1. If it already exists, 
// we increment its value by 1. This allows us to keep track of the frequency of each element.
// Next, we create two variables: maxCount and theElement.
// maxCount stores the highest frequency encountered so far.
// theElement stores the element associated with that highest frequency.
// We then use a for loop to iterate over the map entries. If the current value is greater than maxCount, we update maxCount to that value and set theElement to the corresponding key.
// This way, by the end of the loop, theElement represents the most frequent element in the array.
// The time complexity of this solution is O(N), since we only make a single pass over the input array and then iterate over the map, both of which are linear operations.
// The problem is still under development, as additional testing is required to confirm correctness in all scenarios (e.g., when multiple elements have the same frequency).

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