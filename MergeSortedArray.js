/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let j = 0;
    let allLength = nums1.length - nums2.length;
    let originalLenght = allLength;
    for(let i = 0; i < m + n;i++) {
        if(nums1[allLength] === 0) {
            nums1[allLength] = nums2[j];
            j++;
            allLength++;
        } else {
            continue;
        };
    };
    nums1.sort((a, b) => a - b);
    return nums1;
};