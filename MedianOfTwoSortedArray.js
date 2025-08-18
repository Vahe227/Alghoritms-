// The solution to this problem is under development because this solution is not effective in all cases.

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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let num1Length = nums1.length;
    let num2Length = nums2.length;
    let result;
    if ((num1Length - 1) % 2 == 0) {
        for (let i = 0; i < num2Length; i++) {
            console.log('Code Working');
            nums1.splice(num2Length, 0, nums2[i]);
        };
        result = (nums1[num2Length - 1] + nums1[num2Length]) / 2;
        return result;
    } else if ((num1Length - 1) % 2 !== 0) {
        for (let i = 0; i < num2Length; i++) {
            console.log('Code Working');
            nums1.splice(num2Length, 0, nums2[i]);
        };
    };
    return nums1[num2Length];
};