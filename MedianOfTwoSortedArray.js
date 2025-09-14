// Problem

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// How I Solve This Problem

// To solve this problem, we first need to merge the two arrays and then sort the combined array in ascending order.
// If the total length of the merged array is even, we take the middle two elements and compute their average. This can be done using the formula:

// (allArray[(allArray.length / 2) - 1] + allArray[allArray.length / 2]) / 2

// If the total length is odd, we simply take the middle element of the array, using the formula:

// allArray[Math.floor(allArray.length / 2)]

// The time complexity of this approach is O(N log N), due to the sorting step.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let allArray = nums1.concat(nums2);
    console.log(allArray.sort((a, b) => a - b));
    if(allArray.length % 2 === 0) {
        let resultOfCouple = (allArray[(allArray.length / 2) - 1] + allArray[allArray.length / 2]) / 2;
        return resultOfCouple;
    } else {
        let resultOfOdd = allArray[Math.floor(allArray.length / 2)];
        return resultOfOdd;
    }; 
};