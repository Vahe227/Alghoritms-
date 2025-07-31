// The solution to this problem is under development because this solution is not effective in all cases.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            for(let k = 0;k < j;k++) {
                if(nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i],nums[j],nums[k]]);
                } else {
                    continue;
                };
            };
        };
    };
    return result;
};


// var threeSum = function(nums) {
//     let arr = [];
//     for(let i = 0; i < nums.length; i++) {
//         if(arr.length === 3) {
//            if(arr[0] + arr[1] + arr[2] === 0) {
//                 return [[arr[0],arr[1],arr[2]]];
//            };
//         };
//         arr.push(nums[i]);
//     };
// };

// var threeSum = function(nums) {
//     let result = [];
//     if(nums.length === 0) return []; 
//     for(let i = 0; i < nums.length; i++) {
//         let j = 1
//         while(result.length !== 0) {
//             if(nums[i] + nums[j] + nums[i + j] == 0) {
//                 result.push([nums[i],nums[j],nums[i + j]]);
//             } else {
//                 j++
//                 continue;
//             };
//         };
//     };
//     return result;
// };