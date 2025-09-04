// Problem

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// How I Solve This Problem

// To solve this problem, we use a Map. By iterating through the array, we insert each element of nums into the map: the element itself is stored as the key, while the number of 
// times it appears is stored as the value.
// Once the map is built, we identify the most frequently occurring number, which also helps us determine the least frequent one. However, before performing this logic, we first 
// check whether the array nums contains only a single element — in that case, we simply return it, since removing this check would cause the code to fail for single-element arrays.
// The time complexity of this approach is O(N).

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    if(nums.length === 1) return nums[0];
    for(let item of nums) {
        map.set(item, (map.get(item) || 0) + 1);
    };
    let largestNum = 0;
    for(let [key, value] of map) {
        if(value > largestNum) {
            largestNum = value;
        };
    };
    let littleNumName;
    for(let [key, value] of map) {
        if(largestNum > value) {
            largestNum = value;
            littleNumName = key;
        };
    };
    return littleNumName;
};